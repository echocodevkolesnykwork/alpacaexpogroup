// Reference script block 11
(function () {
  const floatingContact = document.getElementById('floatingContact');
  const mainButton = floatingContact ? floatingContact.querySelector('.fc-main') : null;
  const options = floatingContact ? floatingContact.querySelector('.fc-options') : null;

  function updateFloatingContactVisibility() {
    if (!floatingContact) return;
    const visible = document.body.classList.contains('splash-gone') && window.scrollY > 60;
    floatingContact.classList.toggle('visible', visible);
    if (!visible) {
      floatingContact.classList.remove('open');
      if (mainButton) mainButton.setAttribute('aria-expanded', 'false');
      if (options) options.setAttribute('aria-hidden', 'true');
    }
  }

  // Hover opens options, mouseleave closes
  if (mainButton && floatingContact) {
    floatingContact.addEventListener('mouseenter', function () {
      floatingContact.classList.add('open');
      if (mainButton) mainButton.setAttribute('aria-expanded', 'true');
      if (options) options.setAttribute('aria-hidden', 'false');
    });
    floatingContact.addEventListener('mouseleave', function () {
      setTimeout(function () {
        floatingContact.classList.remove('open');
        if (mainButton) mainButton.setAttribute('aria-expanded', 'false');
        if (options) options.setAttribute('aria-hidden', 'true');
      }, 220);
    });
    // Keep click as fallback on mobile
    mainButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = floatingContact.classList.toggle('open');
      mainButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (options) options.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });
  }

  window.addEventListener('scroll', updateFloatingContactVisibility, { passive: true });
  window.addEventListener('resize', updateFloatingContactVisibility);
  updateFloatingContactVisibility();

  // right offset = same as distance from nav-btn right edge to screen edge
  function positionByNav() {
    const navBtn = document.querySelector('.nav-btn');
    const fc = document.getElementById('floatingContact');
    if (!navBtn || !fc || window.innerWidth <= 768) return;
    const navBtnRect = navBtn.getBoundingClientRect();
    fc.style.right = window.innerWidth - navBtnRect.right + 'px';
  }
  window.addEventListener('resize', positionByNav);
  window.addEventListener('load', positionByNav);
  document.addEventListener('DOMContentLoaded', positionByNav);
  setTimeout(positionByNav, 100);
  setTimeout(positionByNav, 500);
})();
