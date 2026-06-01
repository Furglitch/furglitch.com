// Based on https://codepen.io/ThatMartianDev/pen/poadOex

document.addEventListener('DOMContentLoaded', function () {
  function randomStars(n) {
    const w = window.screen.width;
    const h = 2000;
    let value = `${Math.floor(Math.random() * w)}px ${Math.floor(Math.random() * h)}px currentColor`;
    for (let i = 0; i < n; i += 2) {
      value += ` , ${Math.floor(Math.random() * w)}px ${Math.floor(Math.random() * h)}px currentColor`;
    }
    return value;
  }

  var stars1 = document.getElementById('stars-group1');
  var stars2 = document.getElementById('stars-group2');
  var stars3 = document.getElementById('stars-group3');

  const calc = 1000;
  if (stars1) stars1.style.setProperty('--stars-shadow', randomStars(1 * calc));
  if (stars2) stars2.style.setProperty('--stars-shadow', randomStars(.5 * calc));
  if (stars3) stars3.style.setProperty('--stars-shadow', randomStars(.2 * calc));
});
