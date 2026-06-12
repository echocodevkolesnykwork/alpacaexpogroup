// Reference script block 21 id="fullcycle-final-single-logic-js"
document.addEventListener('DOMContentLoaded', function () {
  const selectors = [
    '.hero-tagline',
    '.full-cycle-tagline',
    '.pe-tagline',
    '#full-cycle-tagline',
    '.full-cycle-text',
    '.fullcycle-tagline',
    '.full-cycle-fix',
  ];

  const nodes = Array.from(document.querySelectorAll(selectors.join(','))).filter(
    (el) =>
      (el.textContent || '').toUpperCase().includes('FULL CYCLE') ||
      (el.textContent || '').toUpperCase().includes('ZERO STRESS'),
  );

  if (!nodes.length) return;

  // Keep the first visible/real tagline only. Hide duplicates to stop double blink.
  const main = nodes[0];
  nodes.forEach((el, index) => {
    el.style.animation = 'none';
    el.style.transition = 'opacity .35s ease';
    el.style.transform = 'none';
    el.style.filter = 'none';
    el.style.textShadow = 'none';
    el.classList.remove('animate-in', 'active', 'pulse', 'blink', 'is-active', 'show');
    if (index > 0) {
      el.classList.add('fullcycle-hidden-final');
      el.style.display = 'none';
    }
  });

  main.classList.add('fullcycle-hidden-final');

  const contact = document.querySelector(
    '.bottom-contact, .floating-contact, .contact-float, .contact-button-red, .contact-trigger, .bottom-contact-btn',
  );

  function isContactVisible() {
    if (!contact) return window.scrollY > window.innerHeight * 0.45;
    // Use class state only — getComputedStyle + getBoundingClientRect every 250ms
    // forces Safari to re-evaluate compositor layers on the element, causing the
    // "pulsation" artifact. classList.contains has zero layout/compositing cost.
    return contact.classList.contains('visible');
  }

  function updateFullCycle() {
    if (isContactVisible()) {
      main.classList.remove('fullcycle-hidden-final');
      main.classList.add('fullcycle-visible-final');
    } else {
      main.classList.remove('fullcycle-visible-final');
      main.classList.add('fullcycle-hidden-final');
    }
  }

  // No setInterval — DOM classList mutations every 250ms cause Safari to
  // re-evaluate compositor layers for nearby elements → visual pulsation.
  // scroll + resize events are sufficient; track last state to avoid
  // unnecessary DOM mutations when state hasn't changed.
  var lastFullCycleVisible = null;
  function updateFullCycleIfChanged() {
    var nowVisible = isContactVisible();
    if (nowVisible === lastFullCycleVisible) return;
    lastFullCycleVisible = nowVisible;
    updateFullCycle();
  }
  window.addEventListener('scroll', updateFullCycleIfChanged, { passive: true });
  window.addEventListener('resize', updateFullCycleIfChanged);
  updateFullCycleIfChanged();
});
