// Nav → planet orbit section scroll handler.
//
// Target progress p = 0.65:
//   p ≥ 0.46 → title locked, solar glow active
//   p ≥ 0.55 → all 8 spheres locked
//   p = 0.65 → fully settled, well before exit phase (≈ p 0.92)
//
// The main animation loop in 01-core-interactions.js snaps instantly when
// |targetP − smoothP| > 0.20 (SNAP_DIST), so jumping here via scrollTo
// ({behavior:'auto'}) always lands in the correct rendered state within
// one animation frame — no lerp lag, no partial-state flash.
//
// Handles:
//   • nav link click          → smooth scroll (good UX for intentional nav)
//   • initial page-load hash  → instant scroll after layout settles
//   • popstate (back/forward) → re-evaluate hash and scroll if needed
(function () {
  'use strict';

  var DESKTOP_PROGRESS = 0.65;
  var MOBILE_PROGRESS = 0.38;
  var HASH = '#pe-planets';

  function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  function getPlanetsScrollY() {
    var wrap = document.getElementById('pePinWrap');
    if (!wrap) return 0;
    var wrapTop = wrap.getBoundingClientRect().top + window.pageYOffset;
    var scrollable = Math.max(1, wrap.offsetHeight - window.innerHeight);
    var progress = isMobile() ? MOBILE_PROGRESS : DESKTOP_PROGRESS;
    return Math.max(0, wrapTop + scrollable * progress);
  }

  function closeMobileMenu() {
    if (typeof window.closeMenu === 'function') window.closeMenu();
  }

  // Called on explicit nav click — use smooth scroll for intentional navigation.
  function handleNavClick(e) {
    e.preventDefault();
    closeMobileMenu();
    var y = getPlanetsScrollY();
    window.scrollTo({ top: y, behavior: 'smooth' });
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', HASH);
    }
  }

  // Called on page load / popstate when hash is already in the URL —
  // use instant scroll so the animation loop can snap to the correct state.
  function jumpToPlanets() {
    var y = getPlanetsScrollY();
    // rAF ensures layout is complete (pinWrap dimensions are final)
    requestAnimationFrame(function () {
      window.scrollTo({ top: y, behavior: 'auto' });
    });
  }

  function bindLinks() {
    document
      .querySelectorAll('a[href="' + HASH + '"], a[data-scroll-target="pe-planets"]')
      .forEach(function (link) {
        link.addEventListener('click', handleNavClick);
      });
  }

  // popstate fires when the user hits browser back/forward.
  // If the restored URL contains our hash, jump to the section.
  window.addEventListener('popstate', function () {
    if (window.location.hash === HASH) jumpToPlanets();
  });

  function init() {
    bindLinks();

    // Page loaded with the hash already in the URL (direct link / bookmark).
    if (window.location.hash === HASH) {
      // Small delay: let the browser's own fragment scroll settle first,
      // then override to the exact progress-based position.
      setTimeout(jumpToPlanets, 150);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
