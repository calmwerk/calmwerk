// Calmwerk — kleine Helfer: Menü auf dem Smartphone, Kopfzeile beim Scrollen, E-Mail kopieren, Jahr im Footer.
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');
  const mobile = window.matchMedia('(max-width: 900px)');

  function setOpen(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Schließen' : 'Menü';
    nav.hidden = mobile.matches ? !open : false;
  }

  if (toggle && nav) {
    setOpen(false);
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a') && mobile.matches) setOpen(false); });
    mobile.addEventListener('change', () => setOpen(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'kopiert';
      } catch {
        const range = document.createRange();
        range.selectNodeContents(btn.parentElement);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        btn.textContent = 'markiert';
      }
      setTimeout(() => { btn.textContent = 'kopieren'; }, 2000);
    });
  });

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
