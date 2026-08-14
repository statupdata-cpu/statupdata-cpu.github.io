// Basic shared JS for menu toggle, accordion, and footer years

document.addEventListener('DOMContentLoaded', function () {
  // header nav toggles (works for all navToggle ids used)
  ['navToggle','navToggle2','navToggle3','navToggle4','navToggle5'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', function () {
      // try find sibling nav by id pattern
      const nav = this.nextElementSibling || document.querySelector('.main-nav');
      if (nav) nav.classList.toggle('show');
    });
  });

  // accordion behavior
  document.querySelectorAll('.accordion .accordion-item').forEach(item => {
    const head = item.querySelector('.acc-head');
    const body = item.querySelector('.acc-body');
    if (!head || !body) return;
    head.addEventListener('click', function () {
      const open = body.style.display === 'block';
      // close all
      document.querySelectorAll('.accordion .acc-body').forEach(b => b.style.display = 'none');
      if (!open) body.style.display = 'block';
      else body.style.display = 'none';
      // smooth scroll to opened item on mobile
      if (!open) setTimeout(()=> head.scrollIntoView({behavior:'smooth', block:'center'}), 120);
    });
  });

  // footer year
  const years = ['year','year2','year3','year4','year5'];
  years.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = new Date().getFullYear();
  });

  // simple enhancement: open target _blank safely
  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    a.setAttribute('rel', 'noopener noreferrer');
  });

  // enable clickable .link elements that are anchors
  document.querySelectorAll('.link').forEach(l => {
    // nothing additional required
  });

  // Accessible keyboard nav for accordion
  document.querySelectorAll('.acc-head').forEach(h => {
    h.setAttribute('tabindex', '0');
    h.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') h.click();
    });
  });
});

