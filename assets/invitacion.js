'use strict';
(() => {
  const audio = document.getElementById('music-audio');
  const play = document.getElementById('playPauseBtn');
  const previous = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  const progress = document.getElementById('progressBar');
  const status = document.getElementById('music-status');
  const tracks = [
    { src: './musica/melodia 1.mp3' },
    { src: './musica/melodia.mp3' }
  ];
  let track = 0;
  let pendingPlay = false;
  let audioAdvancing = false;
  let playAttempt = 0;
  const formatTime = value => Number.isFinite(value)
    ? `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}` : '--:--';
  function sync() {
    const playing = !audio.paused && !audio.ended;
    play.classList.toggle('is-playing', audioAdvancing && playing && !audio.error);
    document.getElementById('play-icon').classList.toggle('hidden', playing);
    document.getElementById('pause-icon').classList.toggle('hidden', !playing);
    play.setAttribute('aria-label', playing ? 'Pausar música' : 'Reproducir música');
    play.setAttribute('aria-pressed', String(playing));
    document.getElementById('currentTime').textContent = formatTime(audio.currentTime);
    document.getElementById('totalDuration').textContent = formatTime(audio.duration);
    progress.value = Number.isFinite(audio.duration) && audio.duration > 0
      ? String(audio.currentTime / audio.duration * 100) : '0';
    progress.disabled = !Number.isFinite(audio.duration) || audio.duration <= 0;
  }
  async function start() {
    const attempt = ++playAttempt;
    pendingPlay = true;
    status.textContent = '';
    try { await audio.play(); }
    catch (error) {
      if (attempt === playAttempt) {
        audioAdvancing = false;
        if (error.name !== 'AbortError') status.textContent = 'No se pudo reproducir. Pulsa reproducir para reintentar.';
      }
    } finally { if (attempt === playAttempt) pendingPlay = false; sync(); }
  }
  if (audio && play && progress) {
    play.addEventListener('click', () => {
      if (pendingPlay || !audio.paused) { pendingPlay = false; audio.pause(); }
      else { if (audio.ended) audio.currentTime = 0; start(); }
    });
    function selectTrack(offset) {
      const resume = pendingPlay || !audio.paused;
      audio.pause();
      track = (track + offset + tracks.length) % tracks.length;
      audio.src = tracks[track].src;

      status.textContent = '';
      audio.load();
      sync();
      if (resume) start();
    }
    previous.addEventListener('click', () => selectTrack(-1));
    next.addEventListener('click', () => selectTrack(1));
    progress.addEventListener('input', () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        audio.currentTime = Number(progress.value) / 100 * audio.duration;
        sync();
      }
    });
    audio.addEventListener('playing', () => { audioAdvancing = true; sync(); });
    for (const event of ['pause', 'ended', 'waiting', 'seeking', 'emptied', 'error', 'abort']) {
      audio.addEventListener(event, () => { audioAdvancing = false; sync(); });
    }
    for (const event of ['play', 'pause', 'ended', 'timeupdate', 'loadedmetadata', 'durationchange', 'emptied']) audio.addEventListener(event, sync);
    audio.addEventListener('error', () => {
      status.textContent = 'No se pudo cargar esta melodía. Prueba la siguiente o vuelve a intentarlo.';
      sync();
    });

    sync();
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  const sections = [...document.querySelectorAll('main > section')].slice(1);
  function revealAll() {
    observer?.disconnect();
    sections.forEach(section => { section.classList.remove('reveal-section'); section.classList.add('is-visible'); });
  }
  function setupReveals() {
    revealAll();
    if (reduced.matches || !('IntersectionObserver' in window)) return;
    try {
      observer = new IntersectionObserver(entries => {
        try {
          for (const entry of entries) {
            // Igual que onEnter / onLeaveBack: revertir al volver bajo el umbral.
            // Una sección que ya salió por arriba conserva su estado visible.
            const visible = entry.isIntersecting || entry.boundingClientRect.top < 0
              || entry.target.contains(document.activeElement);
            entry.target.classList.toggle('is-visible', visible);
          }
        } catch { revealAll(); }
      }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
      sections.forEach(section => {
        observer.observe(section);
        section.classList.add('reveal-section');
        const top = section.getBoundingClientRect().top;
        section.classList.toggle('is-visible', top < window.innerHeight - 24);
      });
    } catch { revealAll(); }
  }
  // El foco del teclado nunca queda en una sección visualmente oculta.
  sections.forEach(section => section.addEventListener('focusin', () => section.classList.add('is-visible')));
  setupReveals();
  reduced.addEventListener?.('change', setupReveals);
})();
