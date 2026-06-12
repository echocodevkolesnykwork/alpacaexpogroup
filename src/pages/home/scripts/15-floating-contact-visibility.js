// Reference script block 15 id="floating-contact-unified-logic"
(function () {
  const fc = document.getElementById('floatingContact');
  const nav = document.getElementById('nav');
  if (!fc) return;

  function syncFloatingContact() {
    // Перевіряємо чи ми в PE секції
    const wrap = document.getElementById('pePinWrap');
    let inPeSection = false;
    let peProgress = 0;

    if (wrap) {
      const rect = wrap.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight);
      peProgress = Math.max(0, Math.min(1, -rect.top / total));
      // Hide CTA for the full planet-section dwell, including the tail
      // (p 0.85–0.97) where the section is still pinned and visible.
      inPeSection = peProgress > 0.1 && peProgress < 0.97;
    }

    // Never set inline opacity/pointerEvents — CSS classes own all visual state.
    // Inline style + CSS !important conflict causes Safari GPU compositor to
    // bounce between two opacity values → visible "pulsation" + square tile border.

    if (peProgress > 0 && peProgress <= 0.1) {
      fc.classList.remove('visible');
      return;
    }

    if (inPeSection) {
      fc.classList.remove('visible');
      return;
    }

    if (peProgress >= 0.97 && peProgress < 1) {
      return;
    }

    // Standard logic — classList only
    const afterSplash = document.body.classList.contains('splash-gone');
    const menuVisible = window.scrollY > 60;
    const visible = afterSplash && menuVisible;

    if (nav) nav.classList.toggle('on', menuVisible);
    fc.classList.toggle('visible', visible);

    if (!visible) {
      fc.classList.remove('open');
      const mainButton = fc.querySelector('.fc-main');
      const options = fc.querySelector('.fc-options');
      if (mainButton) mainButton.setAttribute('aria-expanded', 'false');
      if (options) options.setAttribute('aria-hidden', 'true');
    }
  }

  window.addEventListener('scroll', syncFloatingContact, { passive: true });
  window.addEventListener('resize', syncFloatingContact);
  window.addEventListener('load', syncFloatingContact);
  document.addEventListener('DOMContentLoaded', syncFloatingContact);
  syncFloatingContact();
})();
