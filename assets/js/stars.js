// Based on https://codepen.io/ThatMartianDev/pen/poadOex

document.addEventListener('DOMContentLoaded', function () {
  function randomStars(layer, count, size) {
    const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width;
    const h = 2000;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i += 1) {
      for (let offset = 0; offset <= h; offset += h) {
        const star = document.createElement('span');
        star.className = 'starfield__star';
        star.style.left = `${Math.floor(Math.random() * width)}px`;
        star.style.top = `${Math.floor(Math.random() * h) + offset}px`;
        star.style.width = size;
        star.style.height = size;
        fragment.appendChild(star);
      }
    }

    layer.replaceChildren(fragment);
  }

  document.querySelectorAll('.starfield').forEach(function (starfield) {
    var stars1 = starfield.querySelector('.starfield__layer--sm');
    var stars2 = starfield.querySelector('.starfield__layer--md');
    var stars3 = starfield.querySelector('.starfield__layer--lg');

    if (stars1) randomStars(stars1, 80, '1px');
    if (stars2) randomStars(stars2, 50, '2px');
    if (stars3) randomStars(stars3, 30, '3px');
  });
});
