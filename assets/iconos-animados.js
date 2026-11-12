'use strict';
(() => {
  const images = [...document.querySelectorAll('img[data-gif]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  function sync() {
    images.forEach(image => {
      const source = reduced.matches ? image.dataset.still : image.dataset.gif;
      if (image.getAttribute('src') !== source) image.setAttribute('src', source);
    });
  }
  reduced.addEventListener?.('change', sync);
  sync();
})();
