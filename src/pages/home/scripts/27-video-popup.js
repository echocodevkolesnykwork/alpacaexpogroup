// Stage 2.4 — planet video popup: manual prev/next slider + auto-advance on end.
(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    var backdrop = document.getElementById('pePopupBackdrop');
    var video = document.getElementById('pePopupVideo');
    var closeBtn = document.getElementById('pePopupClose');
    var prevBtn = document.getElementById('pePopupPrev');
    var nextBtn = document.getElementById('pePopupNext');
    var fsBtn = document.getElementById('pePopupFullscreen');
    var orbitWrapper = document.getElementById('peSecondRight');

    if (!backdrop || !video || !closeBtn || !orbitWrapper) return;

    var spheres = Array.from(document.querySelectorAll('.pe-orb-sphere'));
    if (!spheres.length) return;

    var currentSphere = null;
    var isCycling = false;

    // ── Highlight helpers ────────────────────────────────────────────────────
    function setActiveSphere(sphere) {
      spheres.forEach(function (s) {
        s.classList.remove('is-playing-video');
      });
      if (sphere) sphere.classList.add('is-playing-video');
    }

    // ── Open / close ─────────────────────────────────────────────────────────
    function openPopup(sphere) {
      if (!sphere) return;
      var src = sphere.getAttribute('data-popup-video') || '';
      if (!src) return;

      video.pause();
      video.muted = true;
      video.src = src;
      video.load();

      orbitWrapper.classList.add('is-popup-open'); // patch-42 compat
      document.body.classList.add('is-popup-active'); // patch-53 per-sphere states
      backdrop.classList.add('is-open');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      currentSphere = sphere;
      setActiveSphere(sphere);

      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {});
      }
    }

    function closePopup() {
      backdrop.classList.remove('is-open');
      backdrop.setAttribute('aria-hidden', 'true');
      video.pause();
      video.removeAttribute('src');
      video.load();
      video.style.opacity = '1';
      document.body.style.overflow = '';
      document.body.classList.remove('is-popup-active');
      orbitWrapper.classList.remove('is-popup-open');
      spheres.forEach(function (s) {
        s.classList.remove('is-playing-video');
      });
      currentSphere = null;
      isCycling = false;
    }

    // ── Navigation (shared by buttons, keyboard, and auto-advance) ───────────
    // direction: +1 = next, -1 = prev
    function navigate(direction) {
      if (!currentSphere || isCycling) return;
      isCycling = true;

      var idx = spheres.indexOf(currentSphere);
      var target = spheres[(idx + direction + spheres.length) % spheres.length];

      // Crossfade: fade out → swap source → fade back in
      video.style.opacity = '0';
      setTimeout(function () {
        openPopup(target);
        setTimeout(function () {
          video.style.opacity = '1';
          isCycling = false;
        }, 60);
      }, 300);
    }

    // ── Sphere click (capture phase — fires before any sphere-level stoppers) ─
    document.addEventListener(
      'click',
      function (e) {
        var sphere = e.target.closest && e.target.closest('.pe-orb-sphere');
        if (!sphere) return;
        e.stopPropagation();
        video.style.opacity = '1';
        isCycling = false;
        openPopup(sphere);
      },
      true,
    );

    // ── Keyboard: Enter/Space to open, Escape to close, arrows to navigate ───
    document.addEventListener(
      'keydown',
      function (e) {
        var sphere = e.target.closest && e.target.closest('.pe-orb-sphere');
        if (sphere && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          video.style.opacity = '1';
          isCycling = false;
          openPopup(sphere);
          return;
        }
        if (!backdrop.classList.contains('is-open')) return;
        if (e.key === 'Escape') {
          closePopup();
          return;
        }
        if (e.key === 'ArrowRight') {
          navigate(1);
          return;
        }
        if (e.key === 'ArrowLeft') {
          navigate(-1);
          return;
        }
      },
      true,
    );

    // ── Fullscreen ────────────────────────────────────────────────────────────
    // Target: the video element itself. Browser shows native fullscreen with
    // its own controls; Esc exits natively. fullscreenchange keeps our icon
    // in sync regardless of how fullscreen was exited (Esc, button, browser UI).
    function fsRequest(el) {
      return (
        el.requestFullscreen ||
        el.webkitRequestFullscreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullscreen
      );
    }
    function fsExit() {
      return (
        document.exitFullscreen ||
        document.webkitExitFullscreen ||
        document.mozCancelFullScreen ||
        document.msExitFullscreen
      );
    }
    function fsElement() {
      return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
    }

    function syncFsIcon() {
      var active = !!fsElement();
      if (!fsBtn) return;
      fsBtn.classList.toggle('is-fullscreen', active);
      fsBtn.setAttribute('aria-label', active ? 'Exit fullscreen' : 'Fullscreen');
      fsBtn.setAttribute('data-tooltip', active ? 'Exit fullscreen' : 'Fullscreen');
    }

    if (fsBtn) {
      fsBtn.addEventListener('click', function () {
        if (!fsElement()) {
          var req = fsRequest(video);
          if (req) req.call(video);
        } else {
          var exit = fsExit();
          if (exit) exit.call(document);
        }
      });
    }

    // Sync icon whenever fullscreen state changes (covers Esc, button, browser UI)
    [
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'MSFullscreenChange',
    ].forEach(function (ev) {
      document.addEventListener(ev, syncFsIcon);
    });

    // Reset fullscreen when popup closes so next open starts clean
    var _closePopup = closePopup;
    closePopup = function () {
      _closePopup();
      if (fsElement()) {
        var exit = fsExit();
        if (exit) exit.call(document);
      }
    };

    // ── Button listeners ─────────────────────────────────────────────────────
    closeBtn.addEventListener('click', closePopup);
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closePopup();
    });
    if (prevBtn)
      prevBtn.addEventListener('click', function () {
        navigate(-1);
      });
    if (nextBtn)
      nextBtn.addEventListener('click', function () {
        navigate(1);
      });

    // ── Auto-advance on video end ─────────────────────────────────────────────
    video.addEventListener('ended', function () {
      navigate(1);
    });
  });
})();
