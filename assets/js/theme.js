(function () {
  var saved = localStorage.getItem('theme');
  var preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  if ((saved || preferred) === 'light') document.documentElement.classList.add('light');
})();

document.addEventListener('DOMContentLoaded', function () {
  var html = document.documentElement;
  var btn = document.querySelector('.theme-toggle');

  function setTheme(theme) {
    if (theme === 'light') {
      html.classList.add('light');
      btn.innerHTML = '<i class="nf nf-fa-moon"></i>';
    } else {
      html.classList.remove('light');
      btn.innerHTML = '<i class="nf nf-fa-sun"></i>';
    }
    localStorage.setItem('theme', theme);
  }

  setTheme(html.classList.contains('light') ? 'light' : 'dark');

  btn.addEventListener('click', function () {
    setTheme(html.classList.contains('light') ? 'dark' : 'light');
  });
});
