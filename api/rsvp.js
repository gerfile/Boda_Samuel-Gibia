'use strict';
const { createHmac } = require('node:crypto');
const choices = new Set(['Sí asistiré', 'No podré asistir']);
const buckets = new Map();
function validName(value) {
  return typeof value === 'string' && value.length <= 120 &&
    /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]{2,119}$/u.test(value) &&
    value.trim().split(/\s+/).filter(part => /\p{L}/u.test(part)).length >= 2;
}
function createHandler({ env = process.env, fetchImpl = fetch, now = Date.now } = {}) {
  return async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store');
    const reply = (status, body) => res.status(status).json(body);
    if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return reply(405, { error: 'Método no permitido.' }); }
    const origin = env.RSVP_PUBLIC_ORIGIN || 'https://boda-samuel-gibia.vercel.app';
    if (req.headers.origin !== origin) return reply(403, { error: 'Origen no permitido.' });
    if (!/^application\/json(?:;|$)/i.test(req.headers['content-type'] || '')) return reply(415, { error: 'Formato no permitido.' });
    let body;
    try { body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; }
    catch { return reply(400, { error: 'Solicitud inválida.' }); }
    if (!body || JSON.stringify(body).length > 2048) return reply(400, { error: 'Solicitud inválida.' });
    const name = typeof body.name === 'string' ? body.name.trim().replace(/\s+/g, ' ') : '';
    if (!validName(name) || !choices.has(body.attendance) ||
        typeof body.id !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.id) || body.website) {
      return reply(400, { error: 'Revisa tu nombre, apellido y respuesta.' });
    }
    const url = env.RSVP_SCRIPT_URL;
    const secret = env.RSVP_SHARED_SECRET;
    if (!url || !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(url) || !secret || secret.length < 32) {
      return reply(503, { error: 'La confirmación aún no está habilitada. Inténtalo más tarde.' });
    }
    // Protección de ráfagas por instancia; no sustituye una política global del proveedor.
    const key = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0];
    const time = now();
    for (const [ip, entry] of buckets) if (entry.until <= time) buckets.delete(ip);
    const entry = buckets.get(key) || { count: 0, until: time + 60000 };
    if (entry.count >= 8) return reply(429, { error: 'Espera un minuto antes de volver a intentar.' });
    entry.count++; buckets.set(key, entry);
    const payload = JSON.stringify({ id: body.id, name, attendance: body.attendance, timestamp: time });
    const signature = createHmac('sha256', secret).update(payload).digest('hex');
    try {
      const upstream = await fetchImpl(url, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload, signature }), signal: AbortSignal.timeout(20000)
      });
      if (!upstream.ok) throw new Error('upstream');
      const result = await upstream.json();
      if (result.ok !== true || result.saved !== true || result.id !== body.id || result.attendance !== body.attendance) throw new Error('not_saved');
      return reply(200, { ok: true, saved: true, id: body.id, attendance: body.attendance });
    } catch {
      return reply(502, { error: 'No pudimos confirmar el guardado. Reintenta; tu envío no se duplicará.' });
    }
  };
}
module.exports = createHandler();
module.exports.createHandler = createHandler;
module.exports.validName = validName;
