// Wide outer solar corona — position:fixed overlay in <body>.
//
// Drop-shadows on #peOrbTitle are capped at 200 px to avoid container-edge
// clipping (overflow-clip-margin is not supported in Safari). This element
// provides the wide diffuse glow (previously 380–560 px shadows) that cannot
// be achieved with drop-shadow without clipping on smaller viewports.
//
// Placed in <body> at z-index:11 (above #heroSection z:10, below nav z:100).
// position:fixed escapes every overflow:clip/hidden ancestor — never clips.
// Opacity synced with --solar-alpha thresholds (p: 0.31 → 0.46).
(function () {
  'use strict';

  if (!window.matchMedia || window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var FADE_IN_START = 0.31;
  var FADE_IN_END = 0.46;

  function clamp(v, a, b) {
    return v < a ? a : v > b ? b : v;
  }
  function smootherstep(t) {
    t = clamp(t, 0, 1);
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function getP() {
    var wrap = document.getElementById('pePinWrap');
    if (!wrap) return 0;
    var rect = wrap.getBoundingClientRect();
    var total = Math.max(1, wrap.offsetHeight - window.innerHeight);
    return clamp(-rect.top / total, 0, 1);
  }

  var el = null;

  function ensureEl() {
    if (el) return;
    el = document.createElement('div');
    el.style.cssText = [
      'position:fixed',
      'inset:0',
      'pointer-events:none',
      'z-index:11',
      'background:radial-gradient(' +
        'ellipse 82% 76% at 50% 50%,' +
        'rgba(0,218,255,0.13) 0%,' +
        'rgba(0,172,242,0.07) 22%,' +
        'rgba(0,100,210,0.03) 46%,' +
        'rgba(0,55,180,0.01) 66%,' +
        'transparent 82%)',
      'opacity:0',
    ].join(';');
    document.body.appendChild(el);
  }

  function sync() {
    if (!el) return;
    var p = getP();
    var t = (p - FADE_IN_START) / (FADE_IN_END - FADE_IN_START);
    var alpha = smootherstep(clamp(t, 0, 1));
    el.style.opacity = String(alpha);
  }

  document.addEventListener('DOMContentLoaded', function () {
    ensureEl();
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  });
})();
