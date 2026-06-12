// Reference script block 35 — project card media slider + staggered auto-advance
//
// Auto-advance logic: rolling wave — one card advances every 2s in DOM order.
// New cards revealed by pagination are pushed to the end of allSliders and
// picked up naturally as wavePos continues incrementing.
(function () {
  'use strict';

  var initialized = new WeakSet();
  var allSliders = []; // grows in DOM order as cards are registered
  var wavePos = 0; // actual index into allSliders (not a counter)
  var autoStarted = false;
  var STAGGER = 2000; // ms between consecutive card advances

  // ── Per-card init ──────────────────────────────────────────────────────────
  function initCard(card) {
    if (initialized.has(card)) return;
    initialized.add(card);

    var slides = card.querySelector('.pc-slides');
    if (!slides) return;

    var slideEls = Array.from(card.querySelectorAll('.pc-slide'));
    var count = slideEls.length;
    if (count < 2) return;

    var dots = Array.from(card.querySelectorAll('.pc-dot'));
    var current = 0;

    function setActive(idx) {
      current = ((idx % count) + count) % count;
      slides.scrollTo({ left: current * slides.offsetWidth, behavior: 'smooth' });
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function (e) {
        setActive(Number(e.currentTarget.dataset.idx));
      });
    });

    // Sync active dot on native scroll / swipe
    if (typeof IntersectionObserver !== 'undefined') {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var idx = slideEls.indexOf(entry.target);
            if (idx === -1) return;
            current = idx;
            dots.forEach(function (d, i) {
              d.classList.toggle('active', i === idx);
            });
          });
        },
        { root: slides, threshold: 0.6 },
      );
      slideEls.forEach(function (slide) {
        io.observe(slide);
      });
    }

    allSliders.push({ el: slides, count: count });
  }

  // ── Advance one item ───────────────────────────────────────────────────────
  function advanceItem(item) {
    var w = item.el.offsetWidth;
    if (!w) return;
    var curr = Math.round(item.el.scrollLeft / w);
    var next = (curr + 1) % item.count;

    // Snap to first slide instantly so the user never sees a long backward scroll
    if (next === 0) {
      item.el.scrollTo({ left: 0, behavior: 'instant' });
    } else {
      item.el.scrollTo({ left: next * w, behavior: 'smooth' });
    }

    var card = item.el.closest('.pc');
    if (!card) return;
    card.querySelectorAll('.pc-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === next);
    });
  }

  // ── Rolling wave ───────────────────────────────────────────────────────────
  // Every STAGGER ms: advance the card at wavePos, move to the next.
  // wavePos is a real array index — adding new cards to the END of allSliders
  // does not disturb the current position, so new cards extend the wave
  // seamlessly without any jumps or resets.
  function waveTick() {
    // Prune cards removed from DOM (e.g. after grid re-render)
    var removed = false;
    allSliders = allSliders.filter(function (s) {
      var ok = document.body.contains(s.el);
      if (!ok) removed = true;
      return ok;
    });
    // Re-clamp index if the array shrank due to pruning
    if (removed && wavePos >= allSliders.length) wavePos = 0;

    if (allSliders.length > 0) {
      advanceItem(allSliders[wavePos]);
      wavePos = (wavePos + 1) % allSliders.length;
    }

    setTimeout(waveTick, STAGGER);
  }

  function startAutoAdvance() {
    if (autoStarted) return;
    autoStarted = true;
    setTimeout(waveTick, STAGGER); // first tick after one stagger interval
  }

  function initAll() {
    document.querySelectorAll('.pc[data-slider]').forEach(initCard);
  }

  // New cards revealed by VIEW MORE — push to end, wave continues
  document.addEventListener('aeg:portfolio-chunk-revealed', function () {
    document.querySelectorAll('#portfolio .pc[data-slider]').forEach(initCard);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAll();
      startAutoAdvance();
    });
  } else {
    initAll();
    startAutoAdvance();
  }
})();
