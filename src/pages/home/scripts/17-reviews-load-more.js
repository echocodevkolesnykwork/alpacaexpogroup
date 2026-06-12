// Reference script block 17 data-fix="reviews-pagination-v2"
//
// WP / Toolset note: each chunk is a pre-rendered .vr-chunk[data-chunk="N"][hidden].
// To switch to AJAX, replace revealNextChunk() with a fetch() call that appends
// server HTML to #reviews, then dispatch 'aeg:reviews-chunk-revealed'.
// collapseAll() and button-state logic stay unchanged.
(function () {
  'use strict';

  var REVEAL_DELAY = 600; // ms — matches projects loader, feels intentional

  var SPINNER_HTML =
    '<span class="btn-spinner" aria-hidden="true"></span>' + '<span>LOADING…</span>';

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    var section = document.getElementById('reviews');
    if (!section) return;

    var btn = document.getElementById('moreReviewsBtn');
    if (!btn) return;

    // Collect all [data-chunk] elements inside #reviews
    var allChunkEls = Array.from(section.querySelectorAll('[data-chunk]'));
    var chunks = {};
    allChunkEls.forEach(function (el) {
      var key = el.dataset.chunk;
      if (!chunks[key]) chunks[key] = [];
      chunks[key].push(el);
    });
    var chunkKeys = Object.keys(chunks).sort();
    var totalChunks = chunkKeys.length;
    var shown = 0;
    var busy = false;

    // No extra chunks → hide the button entirely
    if (totalChunks === 0) {
      if (btn.parentElement) btn.parentElement.style.display = 'none';
      return;
    }

    function setBusy(state) {
      busy = state;
      btn.disabled = state;
      btn.style.pointerEvents = state ? 'none' : '';
    }

    function revealNextChunk() {
      if (busy) return;
      var key = chunkKeys[shown];
      if (!key) return;

      // ── Loading state ──────────────────────────────────────────────────
      setBusy(true);
      btn.innerHTML = SPINNER_HTML;

      setTimeout(function () {
        // Reveal chunk elements
        chunks[key].forEach(function (el) {
          el.hidden = false;
        });

        // Staggered reveal via vt-in + transition-delay.
        // 31-clients-reveal.css keeps all .vt-cell at opacity:0 !important until
        // .vt-in is added. fade-up-enter cannot win against that !important, so
        // we trigger the built-in Apple-style reveal transition instead.
        // Select video cell first, then review cards — video reveals at 0ms,
        // cards stagger after. Both need vt-in because 31-clients-reveal.css
        // keeps all .vt-cell and .vt-cell-video at opacity:0 !important.
        var cards = Array.from(
          chunks[key]
            .filter(function (el) {
              return el.classList.contains('vr-chunk');
            })
            .reduce(function (acc, chunk) {
              Array.prototype.push.apply(acc, chunk.querySelectorAll('.vt-cell-video, .vt-cell'));
              return acc;
            }, []),
        );

        cards.forEach(function (card, i) {
          card.style.transitionDelay = i * 100 + 'ms';
          card.classList.add('vt-in');
          card.addEventListener('transitionend', function handler(e) {
            if (e.propertyName === 'opacity') {
              card.style.transitionDelay = '';
              card.removeEventListener('transitionend', handler);
            }
          });
        });

        shown++;
        document.dispatchEvent(new CustomEvent('aeg:reviews-chunk-revealed'));

        // ── Restore button ──────────────────────────────────────────────
        setBusy(false);
        if (shown >= totalChunks) {
          btn.textContent = 'SHOW LESS';
          btn.setAttribute('aria-expanded', 'true');
        } else {
          btn.textContent = 'VIEW MORE REVIEWS';
          btn.setAttribute('aria-expanded', 'false');
        }
      }, REVEAL_DELAY);
    }

    function collapseAll() {
      if (busy) return;
      setBusy(true);
      btn.textContent = 'VIEW MORE REVIEWS';
      btn.setAttribute('aria-expanded', 'false');

      // Scroll to section top minus nav scroll-margin (86px from CSS)
      var targetY = Math.max(0, section.getBoundingClientRect().top + window.scrollY - 86);

      function hideChunksAndFinish() {
        chunkKeys.forEach(function (key) {
          chunks[key].forEach(function (el) {
            el.hidden = true;
          });
        });
        shown = 0;
        setBusy(false);
      }

      // Scroll first, hide chunks only after scroll completes so layout never jumps
      if (window.gsap) {
        var proxy = { y: window.scrollY };
        window.gsap.to(proxy, {
          y: targetY,
          duration: 0.8,
          ease: 'power2.inOut',
          onUpdate: function () {
            window.scrollTo(0, proxy.y);
          },
          onComplete: hideChunksAndFinish,
        });
      } else {
        window.scrollTo({ top: targetY, behavior: 'smooth' });
        setTimeout(hideChunksAndFinish, 800);
      }
    }

    btn.addEventListener('click', function () {
      if (busy) return;
      if (shown >= totalChunks) {
        collapseAll();
      } else {
        revealNextChunk();
      }
    });
  });
})();
