// Reference script block 10 data-fix="our-projects-popup-slider-v2"
(function () {
  'use strict';

  var lastStart = { x: 0, y: 0, scale: 0.34 };
  var _currentSlide = 0;
  var _totalSlides = 1;

  // ── DOM helpers ────────────────────────────────────────────────────────────
  function getPopup() {
    return document.getElementById('opPopup');
  }
  function getImgWrap() {
    return document.getElementById('opPopupImg');
  }
  function getSlidesEl() {
    var w = getImgWrap();
    return w ? w.querySelector('.op-popup-slides') : null;
  }
  function getFsBtn() {
    return document.getElementById('opPopupFs');
  }
  function getCounter() {
    return document.getElementById('opPopupCounter');
  }
  function getFill() {
    return document.getElementById('opPopupFill');
  }

  // ── YouTube audio leak fix ────────────────────────────────────────────────
  // Sets src="about:blank" on any iframe in the given slide index.
  // Called whenever the user leaves a slide or closes the popup.
  function stopSlideIframes(slidesEl, idx) {
    var slideEls = slidesEl.querySelectorAll('.op-popup-slide');
    var slide = slideEls[idx];
    if (!slide) return;
    slide.querySelectorAll('iframe').forEach(function (frame) {
      frame.setAttribute('src', 'about:blank');
    });
  }

  // ── Progress bar ───────────────────────────────────────────────────────────
  function updateProgress(idx, total) {
    var counter = getCounter();
    var fill = getFill();
    if (counter) counter.textContent = pad(idx + 1) + ' / ' + pad(total);
    if (fill) fill.style.width = ((idx + 1) / total) * 100 + '%';
  }

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  // ── Fullscreen ────────────────────────────────────────────────────────────
  function fsRequest(el) {
    return (
      el.requestFullscreen ||
      el.webkitRequestFullscreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullscreen
    );
  }
  function fsExitFn() {
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

  function applyFsStyles(slidesEl, on) {
    if (!slidesEl) return;
    if (on) {
      slidesEl.style.setProperty('height', '100vh', 'important');
      slidesEl.style.setProperty('max-height', 'none', 'important');
    } else {
      slidesEl.style.removeProperty('height');
      slidesEl.style.removeProperty('max-height');
    }
    var slides = slidesEl.querySelectorAll('.op-popup-slide');
    for (var i = 0; i < slides.length; i++) {
      var slide = slides[i];
      if (on) {
        slide.style.setProperty('height', '100vh', 'important');
        slide.style.setProperty('max-height', 'none', 'important');
      } else {
        slide.style.removeProperty('height');
        slide.style.removeProperty('max-height');
      }
      var img = slide.querySelector('img');
      if (img) {
        if (on) {
          img.style.setProperty('width', '100%', 'important');
          img.style.setProperty('height', '100vh', 'important');
          img.style.setProperty('max-height', 'none', 'important');
          img.style.setProperty('object-fit', 'cover', 'important');
          img.style.setProperty('object-position', 'center center', 'important');
          img.style.setProperty('display', 'block', 'important');
        } else {
          img.style.removeProperty('width');
          img.style.removeProperty('height');
          img.style.removeProperty('max-height');
          img.style.removeProperty('object-fit');
          img.style.removeProperty('object-position');
          img.style.removeProperty('display');
        }
      }
    }
  }

  function syncFsIcon() {
    var btn = getFsBtn();
    if (!btn) return;
    var active = !!fsElement();
    btn.classList.toggle('is-fullscreen', active);
    btn.setAttribute('aria-label', active ? 'Exit fullscreen' : 'Fullscreen');
    btn.setAttribute('data-tooltip', active ? 'Exit fullscreen' : 'Fullscreen');

    var wrap = getImgWrap();
    if (!wrap) return;
    wrap.classList.toggle('op-popup-fs-active', active);

    var card = wrap.parentElement;

    if (active) {
      if (card) {
        card.style.setProperty('max-height', '100vh', 'important');
        card.style.setProperty('overflow', 'visible', 'important');
        card.style.setProperty('transform', 'none', 'important');
      }
      wrap.style.setProperty('height', '100vh', 'important');
      wrap.style.setProperty('max-height', 'none', 'important');
      wrap.style.setProperty('overflow', 'hidden', 'important');
      applyFsStyles(getSlidesEl(), true);
    } else {
      if (card) {
        card.style.removeProperty('max-height');
        card.style.removeProperty('overflow');
        card.style.removeProperty('transform');
      }
      wrap.style.removeProperty('height');
      wrap.style.removeProperty('max-height');
      wrap.style.removeProperty('overflow');
      applyFsStyles(getSlidesEl(), false);
    }
  }

  [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange',
  ].forEach(function (ev) {
    document.addEventListener(ev, function () {
      syncFsIcon();
      // Safari sometimes sets fullscreenElement async — re-check after paint
      setTimeout(syncFsIcon, 50);
    });
  });

  // ── Slide navigation ──────────────────────────────────────────────────────
  function goToModalSlide(idx) {
    var slides = getSlidesEl();
    if (!slides) return;
    var prev = _currentSlide;
    _currentSlide = Math.max(0, Math.min(idx, _totalSlides - 1));
    if (prev !== _currentSlide) stopSlideIframes(slides, prev);
    slides.scrollTo({ left: _currentSlide * slides.offsetWidth, behavior: 'smooth' });
    updateProgress(_currentSlide, _totalSlides);
  }

  // ── Close ─────────────────────────────────────────────────────────────────
  function closeOpPopup() {
    var popup = getPopup();
    if (!popup) return;

    // Exit fullscreen if active
    if (fsElement()) {
      var ex = fsExitFn();
      if (ex) ex.call(document);
    }

    // Stop any playing YouTube iframes — prevents audio leaking after close
    var slidesOnClose = getSlidesEl();
    if (slidesOnClose) {
      slidesOnClose.querySelectorAll('iframe').forEach(function (frame) {
        frame.setAttribute('src', 'about:blank');
      });
    }

    popup.classList.add('closing');
    popup.classList.remove('open');
    popup.setAttribute('aria-hidden', 'true');
    popup.querySelectorAll('.op-popup-nav').forEach(function (b) {
      b.hidden = true;
    });

    setTimeout(function () {
      popup.classList.remove('closing');
      document.body.style.overflow = '';
    }, 290);
  }

  // ── Expand animation origin ───────────────────────────────────────────────
  function setStartGeometry(card, popup) {
    var popupCard = popup.querySelector('.op-popup-card');
    if (!popupCard || !card) return;
    var r = card.getBoundingClientRect();
    var vw = window.innerWidth;
    var targetWidth = Math.min(980, vw * 0.94);
    var scale = Math.max(0.18, Math.min(0.82, r.width / targetWidth));
    lastStart = {
      x: r.left + r.width / 2 - vw / 2,
      y: r.top + r.height / 2 - window.innerHeight / 2,
      scale: scale,
    };
    popupCard.style.setProperty('--op-start-x', lastStart.x + 'px');
    popupCard.style.setProperty('--op-start-y', lastStart.y + 'px');
    popupCard.style.setProperty('--op-start-scale', lastStart.scale);
  }

  // ── Open ──────────────────────────────────────────────────────────────────
  function openOpPopup(card) {
    var popup = getPopup();
    if (!popup || !card) return;

    var slideEls = Array.from(card.querySelectorAll('.pc-slide'));
    _currentSlide = 0;
    _totalSlides = slideEls.length || 1;

    // Build slides HTML
    var slidesHtml =
      slideEls.length > 0
        ? slideEls
            .map(function (slide) {
              var vid = slide.querySelector('video');
              var ytFrame = slide.querySelector('iframe.pc-slide-yt');
              var img = slide.querySelector('img');
              var inner;
              if (vid) {
                inner =
                  '<video src="' +
                  vid.getAttribute('src') +
                  '" playsinline muted loop autoplay></video>';
              } else if (ytFrame) {
                var ytId = ytFrame.getAttribute('data-youtube-id');
                var ytSrc =
                  'https://www.youtube.com/embed/' +
                  ytId +
                  '?autoplay=0&controls=1&rel=0&modestbranding=1';
                inner =
                  '<iframe class="op-popup-slide-yt" src="' +
                  ytSrc +
                  '" title="YouTube video"' +
                  ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"' +
                  ' allowfullscreen></iframe>';
              } else if (img) {
                inner =
                  '<img src="' +
                  img.getAttribute('src') +
                  '" alt="' +
                  (img.getAttribute('alt') || '') +
                  '">';
              } else {
                inner = '';
              }
              return '<div class="op-popup-slide">' + inner + '</div>';
            })
            .join('')
        : (function () {
            var fb = card.querySelector('.pc-bg img');
            return fb
              ? '<div class="op-popup-slide"><img src="' +
                  fb.getAttribute('src') +
                  '" alt="' +
                  (fb.getAttribute('alt') || '') +
                  '"></div>'
              : '<div class="op-popup-slide"></div>';
          })();

    // Inject or replace only .op-popup-slides — preserves .op-popup-fs button
    var imgWrap = getImgWrap();
    var oldSlides = imgWrap ? imgWrap.querySelector('.op-popup-slides') : null;
    var newSlides = document.createElement('div');
    newSlides.className = 'op-popup-slides';
    newSlides.innerHTML = slidesHtml;
    if (oldSlides) {
      imgWrap.replaceChild(newSlides, oldSlides);
    } else if (imgWrap) {
      imgWrap.insertBefore(newSlides, imgWrap.firstChild);
    }

    // Sync _currentSlide on native swipe
    if (_totalSlides > 1) {
      var scrollTimer;
      newSlides.addEventListener('scroll', function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
          if (newSlides.offsetWidth > 0) {
            var next = Math.round(newSlides.scrollLeft / newSlides.offsetWidth);
            if (next !== _currentSlide) stopSlideIframes(newSlides, _currentSlide);
            _currentSlide = next;
            updateProgress(_currentSlide, _totalSlides);
          }
        }, 80);
      });
    }

    // Backdrop nav arrows
    var prevBtn = popup.querySelector('.op-popup-nav--prev');
    var nextBtn = popup.querySelector('.op-popup-nav--next');
    if (prevBtn) prevBtn.hidden = _totalSlides < 2;
    if (nextBtn) nextBtn.hidden = _totalSlides < 2;

    // Reset fullscreen icon
    syncFsIcon();

    // Text fields
    var title = card.querySelector('.pc-t');
    var client = card.querySelector('.pc-cl');
    var meta = card.querySelector('.pc-m');
    var titleEl = document.getElementById('opPopupTitle');
    var clientEl = document.getElementById('opPopupClient');
    var metaEl = document.getElementById('opPopupMeta');
    if (titleEl) titleEl.textContent = title ? title.textContent.trim() : '';
    if (clientEl) clientEl.textContent = client ? client.textContent.trim() : '';
    if (metaEl) metaEl.textContent = meta ? meta.textContent.trim() : '';

    // Mirror same text into the overlay inside #opPopupImg
    var imgTitle = document.getElementById('opPopupImgTitle');
    var imgClient = document.getElementById('opPopupImgClient');
    var imgMeta = document.getElementById('opPopupImgMeta');
    if (imgTitle) imgTitle.textContent = title ? title.textContent.trim() : '';
    if (imgClient) imgClient.textContent = client ? client.textContent.trim() : '';
    if (imgMeta) imgMeta.textContent = meta ? meta.textContent.trim() : '';

    // Progress bar (always shown)
    updateProgress(0, _totalSlides);

    setStartGeometry(card, popup);
    popup.classList.remove('closing');
    popup.classList.add('open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // ── Unified capture-phase click handler ───────────────────────────────────
  document.addEventListener(
    'click',
    function (e) {
      // Card click → open popup
      var card = e.target && e.target.closest ? e.target.closest('#portfolio .pc') : null;
      if (card) {
        if (e.target.closest && e.target.closest('.pc-dot')) return;
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
        openOpPopup(card);
        return;
      }

      var popup = getPopup();
      if (!popup || (!popup.classList.contains('open') && !popup.classList.contains('closing')))
        return;

      // Backdrop or close button
      if (
        e.target === popup ||
        (e.target.classList && e.target.classList.contains('op-popup-close'))
      ) {
        e.preventDefault();
        e.stopPropagation();
        closeOpPopup();
        return;
      }

      // Fullscreen button
      if (e.target.closest && e.target.closest('#opPopupFs')) {
        var imgWrap = getImgWrap();
        if (!imgWrap) return;
        if (!fsElement()) {
          var req = fsRequest(imgWrap);
          if (req) req.call(imgWrap);
        } else {
          var exit = fsExitFn();
          if (exit) exit.call(document);
        }
        return;
      }

      // Modal prev/next arrows
      if (e.target.closest && e.target.closest('.op-popup-nav--prev')) {
        goToModalSlide(_currentSlide - 1);
        return;
      }
      if (e.target.closest && e.target.closest('.op-popup-nav--next')) {
        goToModalSlide(_currentSlide + 1);
        return;
      }
    },
    true,
  );

  // Keyboard: Escape / arrows
  document.addEventListener('keydown', function (e) {
    var popup = getPopup();
    if (!popup || !popup.classList.contains('open')) return;
    if (e.key === 'Escape') {
      closeOpPopup();
      return;
    }
    if (e.key === 'ArrowLeft') {
      goToModalSlide(_currentSlide - 1);
      return;
    }
    if (e.key === 'ArrowRight') {
      goToModalSlide(_currentSlide + 1);
    }
  });
})();
