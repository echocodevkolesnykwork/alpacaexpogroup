// Orbit scroll-reveal — fades in orbit rings one by one after all planets appear.
//
// Sequence (scroll progress p, same scale as 01-core-interactions.js):
//   p ≥ 0.64  → Ring3  (inner, 1st) fades in via CSS transition
//   p ≥ 0.70  → AsteroidBelt (2nd) fades in
//   p ≥ 0.76  → Ring1  (outer, 3rd) fades in
// Reverse: each ring hides again when p drops below (threshold − 0.05).
//
// Depends on CSS: .orbit-ring-visible transitions in 74-orbit-animated-lines.css.
(function () {
  'use strict';

  if (!window.matchMedia || window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var SHOW = { ring3: 0.64, asteroid: 0.7, ring1: 0.76 };
  var HIDE = { ring3: 0.59, asteroid: 0.65, ring1: 0.71 };

  var els = {};
  var state = { ring3: false, asteroid: false, ring1: false };

  function clamp(v, a, b) {
    return v < a ? a : v > b ? b : v;
  }

  function getProgress() {
    var wrap = document.getElementById('pePinWrap');
    if (!wrap) return 0;
    var rect = wrap.getBoundingClientRect();
    var total = Math.max(1, wrap.offsetHeight - window.innerHeight);
    return clamp(-rect.top / total, 0, 1);
  }

  function init() {
    els.ring3 = document.getElementById('peOrbitRing3');
    els.asteroid = document.getElementById('peOrbitAsteroidBelt');
    els.ring1 = document.getElementById('peOrbitRing1');
  }

  function setOrbit(key, el, visible) {
    if (!el || state[key] === visible) return;
    state[key] = visible;
    el.classList.toggle('orbit-ring-visible', visible);
  }

  function updateOrbits() {
    var p = getProgress();
    // Hysteresis: show at SHOW threshold, hide only when p drops below HIDE threshold.
    setOrbit('ring3', els.ring3, p >= (state.ring3 ? HIDE.ring3 : SHOW.ring3));
    setOrbit('asteroid', els.asteroid, p >= (state.asteroid ? HIDE.asteroid : SHOW.asteroid));
    setOrbit('ring1', els.ring1, p >= (state.ring1 ? HIDE.ring1 : SHOW.ring1));
  }

  document.addEventListener('DOMContentLoaded', function () {
    init();
    updateOrbits();
    window.addEventListener('scroll', updateOrbits, { passive: true });
    window.addEventListener('resize', updateOrbits);
  });
})();
