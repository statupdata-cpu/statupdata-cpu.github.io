// Basic SPA behaviour: show/hide sections when menu clicked.
// Also supports in-page links and a hamburger on small screens.

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link, .btn[data-target]');
  const sections = document.querySelectorAll('.page-section');
  const year = document.getElementById('year');
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  year.textContent = new Date().getFullYear();

  function showSection(id) {
    // hide all
    sections.forEach(s => s.classList.remove('active'));
    // show chosen
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      target.focus({preventScroll:true});
      // update nav active state
      document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.target === id));
      // close mobile nav
      navList.classList.remove('show');
      navToggle.setAttribute('aria-expanded','false');
      history.replaceState(null,'', '#' + id);
    }
  }

  // hook nav links
  links.forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const t = this.dataset.target;
      if (t) showSection(t);
      else if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
        showSection(this.getAttribute('href').substring(1));
      }
    });
  });

  // nav toggle for small screens
  navToggle.addEventListener('click', function () {
    const shown = navList.classList.toggle('show');
    this.setAttribute('aria-expanded', String(shown));
  });

  // on load, check hash or default to home
  const start = (location.hash && location.hash.substring(1)) || 'home';
  showSection(start);

  // simple form handler demo
  const form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const fd = new FormData(form);
      alert(`Thanks ${fd.get('name') || ''}! We'll contact you at ${fd.get('email')}.`);
      form.reset();
      showSection('home');
    });
  }

  // Connect button scroll to register
  const connectBtn = document.getElementById('connectBtn');
  if (connectBtn) connectBtn.addEventListener('click', function (e) {
    e.preventDefault();
    showSection('register');
  });

});
