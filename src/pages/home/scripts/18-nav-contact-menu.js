// Reference script block 18
(function () {
  var wrap = document.getElementById('navContactWrap');
  var btn = document.getElementById('navContactBtn');
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (!wrap || !btn) return;

  var closeTimer = null;
  var CLOSE_DELAY = 350; // ms after mouseleave before closing

  // pointer:coarse = touch device (phone/tablet), pointer:fine = mouse
  var mqlCoarse = window.matchMedia('(pointer: coarse)');
  function isTouchPrimary() {
    return mqlCoarse.matches;
  }

  // ── DROPDOWN STATE ──────────────────────────────────────────────

  function openDropdown() {
    clearTimeout(closeTimer);
    wrap.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    clearTimeout(closeTimer);
    wrap.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }

  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(closeDropdown, CLOSE_DELAY);
  }

  // ── MOUSE (desktop) ─────────────────────────────────────────────
  // hover in → open immediately
  // hover out → 350ms grace before close (mouse can move diagonally to icons)
  wrap.addEventListener('mouseenter', function () {
    if (isTouchPrimary()) return;
    openDropdown();
  });

  wrap.addEventListener('mouseleave', function () {
    if (isTouchPrimary()) return;
    scheduleClose();
  });

  // ── TAP / CLICK (touch + keyboard click) ────────────────────────
  // Tap the CONTACT NOW button: toggle open/close.
  // On desktop this fires after mouseenter already opened it, so it toggles closed
  // only if the user explicitly clicks the trigger — that's intentional.
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (wrap.classList.contains('is-open')) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  // Close when tapping/clicking anywhere outside the wrap
  document.addEventListener('click', function (event) {
    if (!wrap.contains(event.target)) {
      closeDropdown();
    }
  });

  // ── KEYBOARD ────────────────────────────────────────────────────
  wrap.addEventListener('focusin', function () {
    if (isTouchPrimary()) return;
    openDropdown();
  });

  wrap.addEventListener('focusout', function (event) {
    if (!wrap.contains(event.relatedTarget)) {
      scheduleClose();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    if (wrap.classList.contains('is-open')) {
      closeDropdown();
      btn.focus();
      return;
    }
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
      if (burger) burger.focus();
    }
  });

  // ── MOBILE BURGER MENU ──────────────────────────────────────────

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('open');
    var nav = document.getElementById('nav');
    if (nav) nav.classList.remove('menu-open');
    document.body.style.overflow = '';
    if (burger) burger.setAttribute('aria-expanded', 'false');
    closeDropdown();
  }

  function toggleMobileMenu() {
    if (!burger || !mobileMenu) return;
    var isOpen = mobileMenu.classList.toggle('open');
    var nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (burger) burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (!isOpen) closeDropdown();
  }

  if (burger && mobileMenu) {
    burger.addEventListener('click', toggleMobileMenu);
    burger.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMobileMenu();
      }
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // API used by other scripts
  window.toggleMenu = toggleMobileMenu;
  window.closeMenu = closeMobileMenu;
})();
