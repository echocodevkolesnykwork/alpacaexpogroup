// Reference script block 9 — paginated project grid with smooth reveal
//
// WP / Toolset note: each chunk is a pre-rendered .pg[data-chunk="N"][hidden].
// To switch to AJAX, replace revealNextChunk() with a fetch() call that
// appends server HTML to #portfolio, then dispatch 'aeg:portfolio-chunk-revealed'.
// collapseAll() and button-state logic stay unchanged.
(function () {
  'use strict';

  var REVEAL_DELAY = 600; // ms — simulates network latency, makes the transition feel intentional

  var SPINNER_HTML =
    '<span class="btn-spinner" aria-hidden="true"></span>' + '<span>LOADING…</span>';

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    var portfolio = document.getElementById('portfolio');
    if (!portfolio) return;

    var btn = portfolio.querySelector('.view-more-cases');
    if (!btn) return;

    // Group [data-chunk] elements by their chunk key
    var allChunkEls = Array.from(portfolio.querySelectorAll('[data-chunk]'));
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
        // Reveal elements
        chunks[key].forEach(function (el) {
          el.hidden = false;
        });

        // Staggered fade-up on individual cards in this chunk
        var cards = Array.from(
          chunks[key]
            .filter(function (el) {
              return el.classList.contains('pg');
            })
            .reduce(function (acc, grid) {
              Array.prototype.push.apply(acc, grid.querySelectorAll('.pc'));
              return acc;
            }, []),
        );

        cards.forEach(function (card, i) {
          card.style.animationDelay = i * 75 + 'ms';
          card.classList.add('fade-up-enter');
          card.addEventListener('animationend', function handler() {
            card.classList.remove('fade-up-enter');
            card.style.animationDelay = '';
            card.removeEventListener('animationend', handler);
          });
        });

        shown++;
        document.dispatchEvent(new CustomEvent('aeg:portfolio-chunk-revealed'));

        // ── Restore button ──────────────────────────────────────────────
        setBusy(false);
        if (shown >= totalChunks) {
          btn.textContent = 'SHOW LESS';
          btn.setAttribute('aria-expanded', 'true');
        } else {
          btn.textContent = 'VIEW MORE CASES';
          btn.setAttribute('aria-expanded', 'false');
        }
      }, REVEAL_DELAY);
    }

    function collapseAll() {
      if (busy) return;
      setBusy(true);
      btn.textContent = 'VIEW MORE CASES';
      btn.setAttribute('aria-expanded', 'false');

      // Target scroll position: portfolio top minus nav scroll-margin (86px from CSS)
      var targetY = Math.max(0, portfolio.getBoundingClientRect().top + window.scrollY - 86);

      function hideChunksAndFinish() {
        chunkKeys.forEach(function (key) {
          chunks[key].forEach(function (el) {
            el.hidden = true;
          });
        });
        shown = 0;
        setBusy(false);
      }

      // Scroll first, hide chunks only after the scroll completes so the layout
      // never jumps while the user can see it moving.
      if (window.gsap) {
        // Proxy tween — works without ScrollToPlugin being registered
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
        // Fallback: native smooth scroll + 800ms delay to match GSAP duration
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
