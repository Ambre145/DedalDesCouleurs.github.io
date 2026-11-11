// Menu : ouvrir / fermer
(function () {
  var menu = document.getElementById('menu');
  if (!menu) return;

  document.querySelectorAll('[data-ouvrir-menu]').forEach(function (b) {
    b.addEventListener('click', function () { menu.hidden = false; });
  });
  document.getElementById('fermer-menu').addEventListener('click', function () {
    menu.hidden = true;
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') menu.hidden = true;
  });
})();

// Newsletter (si le formulaire existe sur la page)
(function () {
  var form = document.getElementById('newsletter');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('message-newsletter').textContent =
      'Merci ! Votre inscription a bien été prise en compte.';
    form.reset();
  });
})();
