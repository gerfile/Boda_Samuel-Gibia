'use strict';
(() => {
  const dialog = document.getElementById('rsvp-dialog');
  const form = document.getElementById('rsvp-form');
  const open = document.getElementById('rsvp-open');
  const close = document.getElementById('rsvp-close');
  const submit = document.getElementById('rsvp-submit');
  const error = document.getElementById('rsvp-error');
  const progress = document.getElementById('rsvp-progress');
  const success = document.getElementById('rsvp-success');
  const nameInput = document.getElementById('rsvp-name');
  let busy = false;
  let submitted = false;
  let attempt;
  open.addEventListener('click', () => dialog.showModal());
  close.addEventListener('click', () => { if (!busy) dialog.close(); });
  dialog.addEventListener('cancel', event => { if (busy) event.preventDefault(); });
  nameInput.addEventListener('input', () => nameInput.setCustomValidity(''));
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || submitted) return;
    const name = nameInput.value.trim().replace(/\s+/g, ' ');
    const attendance = new FormData(form).get('attendance');
    nameInput.setCustomValidity(
      /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]{2,119}$/u.test(name) && name.split(/\s+/).filter(part => /\p{L}/u.test(part)).length >= 2
        ? '' : 'Escribe tu nombre y apellido, por favor.');
    if (!form.reportValidity() || !['Sí asistiré', 'No podré asistir'].includes(attendance)) return;
    error.textContent = '';
    if (location.protocol === 'file:') {
      error.textContent = 'La confirmación necesita la conexión del sitio web. No se ha guardado ninguna respuesta desde esta vista local.';
      return;
    }
    if (!attempt || attempt.name !== name || attempt.attendance !== attendance) {
      attempt = { id: crypto.randomUUID(), name, attendance };
    }
    busy = true; submit.disabled = true; close.disabled = true;
    form.setAttribute('aria-busy', 'true');
    // Bloquear edición durante el envío; una repetición usa el mismo ID.
    form.querySelectorAll('input').forEach(input => { input.disabled = true; });
    progress.textContent = 'Guardando tu respuesta…';
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ ...attempt, website: document.getElementById('rsvp-website').value }),
        signal: AbortSignal.timeout(25000)
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true || result.saved !== true || result.id !== attempt.id || result.attendance !== attendance) {
        throw new Error(response.status === 503 ? 'La confirmación aún no está habilitada. Inténtalo más tarde.' : 'No pudimos confirmar el guardado. Reintenta en unos momentos; tu envío no se duplicará.');
      }
      submitted = true;
      form.hidden = true;
      success.textContent = attendance === 'Sí asistiré'
        ? '¡Qué alegría contar contigo! Gracias por acompañarnos en este día tan especial. 🤍'
        : 'Gracias por avisarnos. Aunque no puedas acompañarnos, te tendremos presente con mucho cariño. 🤍';
      success.hidden = false;
      success.focus();
    } catch (failure) {
      error.textContent = failure.name === 'TimeoutError' || failure.name === 'AbortError'
        ? 'La conexión tardó demasiado. No pudimos confirmar el guardado. Reintenta para verificarlo sin duplicar tu envío.'
        : failure instanceof SyntaxError || failure instanceof TypeError
          ? 'No pudimos conectar con el registro. No se ha confirmado tu respuesta. Inténtalo de nuevo.' : failure.message;
    } finally {
      busy = false; close.disabled = false; submit.disabled = false;
      form.removeAttribute('aria-busy');
      form.querySelectorAll('input').forEach(input => { input.disabled = false; });
      progress.textContent = '';
    }
  });
})();
