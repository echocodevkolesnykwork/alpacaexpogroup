// Reference script block 8
// Superseded by 27-video-popup.js (Stage 2.4) when #pePopupBackdrop is present.
// Kept as a fallback for WP environments where the Stage 2.4 markup is not yet deployed.
(function () {
  if (document.getElementById('pePopupBackdrop')) return;
  const sphereVideoMap = {
    IDEAS: 'videos/pe-ideas.mp4',
    VR: 'videos/pe-vr.mp4',
    STAFF: 'videos/pe-staff.mp4',
    LED: 'videos/pe-led.mp4',
    BAR: 'videos/pe-bar.mp4',
    MATERIALS: 'videos/pe-materials.mp4',
    MOTION: 'videos/pe-motion.mp4',
    ACTIVATION: 'videos/pe-activation.mp4',
  };

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    const popup = document.getElementById('peVideoPopup');
    const video = document.getElementById('peVideoPopupVideo');
    const fallback = document.getElementById('peVideoPopupFallback');
    const title = document.getElementById('peVideoPopupTitle');
    const closeBtn = popup ? popup.querySelector('.pe-video-popup-close') : null;

    if (!popup || !video || !fallback || !title || !closeBtn) return;

    document.querySelectorAll('.pe-orb-sphere').forEach(function (sphere) {
      const label = (sphere.getAttribute('data-label') || sphere.textContent || '')
        .trim()
        .toUpperCase();

      if (label && !sphere.getAttribute('data-label')) {
        sphere.setAttribute('data-label', label);
      }

      if (label && !sphere.getAttribute('data-video') && sphereVideoMap[label]) {
        sphere.setAttribute('data-video', sphereVideoMap[label]);
      }

      sphere.setAttribute('role', 'button');
      sphere.setAttribute('tabindex', '0');
      sphere.setAttribute(
        'aria-label',
        'Watch ' + (sphere.getAttribute('data-label') || 'video') + ' video',
      );
    });

    function getSphereFromEventTarget(target) {
      if (!target || !target.closest) return null;
      return target.closest('.pe-orb-sphere');
    }

    function openSphereVideo(sphere) {
      if (!sphere) return;

      const label = sphere.getAttribute('data-label') || 'Video';
      const src =
        sphere.getAttribute('data-video') ||
        sphereVideoMap[String(label).trim().toUpperCase()] ||
        '';

      title.textContent = label;
      fallback.textContent = src ? 'Loading video…' : 'Video will appear here';

      video.pause();
      video.removeAttribute('src');
      video.style.display = 'none';
      fallback.style.display = 'grid';
      video.load();

      if (src) {
        video.src = src;
        video.style.display = 'block';
        fallback.style.display = 'none';
        video.load();

        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(function () {});
        }
      }

      popup.classList.add('open');
      popup.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      setTimeout(function () {
        try {
          closeBtn.focus({ preventScroll: true });
        } catch (e) {}
      }, 80);
    }

    function closePopup() {
      popup.classList.remove('open');
      popup.setAttribute('aria-hidden', 'true');
      video.pause();
      video.removeAttribute('src');
      video.style.display = 'none';
      video.load();
      fallback.style.display = 'grid';
      document.body.style.overflow = '';
    }

    // Capture phase: works even if another script stops bubbling later.
    document.addEventListener(
      'click',
      function (e) {
        const sphere = getSphereFromEventTarget(e.target);
        if (!sphere) return;

        e.preventDefault();
        e.stopPropagation();
        openSphereVideo(sphere);
      },
      true,
    );

    document.addEventListener(
      'keydown',
      function (e) {
        const sphere = getSphereFromEventTarget(e.target);

        if (sphere && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          e.stopPropagation();
          openSphereVideo(sphere);
          return;
        }

        if (e.key === 'Escape' && popup.classList.contains('open')) {
          closePopup();
        }
      },
      true,
    );

    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closePopup();
    });

    popup.addEventListener('click', function (e) {
      if (e.target === popup) closePopup();
    });
  });
})();
