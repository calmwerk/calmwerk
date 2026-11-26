// Calmwerk — kleine Helfer: Menü auf dem Smartphone, Kopfzeile beim Scrollen, E-Mail kopieren, Jahr im Footer.

function initMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  const mobile = window.matchMedia('(max-width: 900px)');

  const setOpen = (open: boolean): void => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Schließen' : 'Menü';
    nav.hidden = mobile.matches ? !open : false;
  };

  setOpen(false);
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a') && mobile.matches) setOpen(false);
  });
  mobile.addEventListener('change', () => setOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}

function initHeader(): void {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = (): void => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initCopyButtons(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const text = button.dataset.copy ?? '';
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = 'kopiert';
      } catch {
        const range = document.createRange();
        if (button.parentElement) range.selectNodeContents(button.parentElement);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        button.textContent = 'markiert';
      }
      window.setTimeout(() => {
        button.textContent = 'kopieren';
      }, 2000);
    });
  });
}

function initYear(): void {
  const year = String(new Date().getFullYear());
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = year;
  });
}

/** Schlagwörter (<mark>) einmal einlaufen lassen, sobald sie zu sehen sind. */
function initMarks(): void {
  const marks = document.querySelectorAll('mark');
  if (marks.length === 0) return;
  if (!('IntersectionObserver' in window)) {
    marks.forEach((mark) => mark.classList.add('is-marked'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-marked');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -15% 0px', threshold: 0.6 },
  );
  marks.forEach((mark) => observer.observe(mark));
}

/** Projektübersicht: Kachel öffnet den passenden Dialog; Schließen-Knopf, Klick daneben und Esc schließen ihn. */
function initShowcase(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-open]').forEach((tile) => {
    tile.addEventListener('click', () => {
      const dialog = document.getElementById(tile.dataset.open ?? '');
      if (dialog instanceof HTMLDialogElement) {
        dialog.showModal();
        dialog.querySelector('.sc-body')?.scrollTo(0, 0);
      }
    });
  });
  document.querySelectorAll<HTMLDialogElement>('.sc-dialog').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || (event.target instanceof Element && event.target.closest('[data-close]'))) dialog.close();
    });
  });
}

initMenu();
initHeader();
initCopyButtons();
initYear();
initMarks();
initShowcase();
