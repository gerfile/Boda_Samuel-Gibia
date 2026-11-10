'use strict';
(() => {
  const images = [...document.querySelectorAll('img[data-gif]')];
  const button = document.getElementById('toggle-icon-motion');
  const info = document.getElementById('icon-motion-info');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  function sync() {
    images.forEach(image => {
      const source = paused || reduced.matches ? image.dataset.still : image.dataset.gif;
      if (image.getAttribute('src') !== source) image.setAttribute('src', source);
    });
    button.disabled = reduced.matches;
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = paused ? 'Reanudar iconos animados' : 'Pausar iconos animados';
    info.textContent = reduced.matches ? 'Iconos estáticos por tu preferencia de movimiento reducido.' : '';
  }
  button.addEventListener('click', () => { paused = !paused; sync(); });
  reduced.addEventListener?.('change', sync);
  sync();
  button.hidden = false;
})();
