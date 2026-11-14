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


// Apparition des textes au défilement
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var style = document.createElement('style');
  style.textContent = '.revele{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s ease}.revele.visible{opacity:1;transform:none}';
  document.head.appendChild(style);
  var cibles = document.querySelectorAll(
    '.citation, .texte-presentation, .artistes-texte, .intentions h2, ' +
    '.intention, .ateliers h2, .bloc-texte, .o-texte, .dm-texte, ' +
    '.oeuvre-contact, .video-section h3, .form-main h1'
  );

  var observateur = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observateur.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  cibles.forEach(function (el) {
    el.classList.add('revele');
    observateur.observe(el);
  });
})();
