// Planet loop-transition — masks the hard cut at the video loop point.
//
// Problem: planet videos are not seamlessly encoded, so the last frame
// jumping to the first frame produces a visible visual stutter.
//
// Solution (elegant workaround):
//   · Detect when the video is ~NEAR_END_S seconds from its end.
//   · Slow playback to SLOW_RATE (half-speed) → extends the last frames.
//   · Apply .pe-loop-flash class:
//       – removes grayscale → shows the planet's real colour
//       – adds a cyan glow ring (like hover but no scale)
//   · On loop restart (currentTime jumps back near 0): restore playbackRate,
//     hold the flash for HOLD_MS then fade it out via CSS transition.
//
// This creates a "pulse-of-life" at the loop point that distracts the eye
// from the frame discontinuity and feels intentional.
//
// ── DISABLE TOGGLE ───────────────────────────────────────────────────────────
// Set ENABLED = false to turn off without removing the code.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  'use strict';

  var ENABLED = false; // ← flip to true to re-enable
  var NEAR_END_S = 0.5; // seconds before end to begin transition
  var SLOW_RATE = 0.5; // playback rate while winding down (0.5 = half-speed)
  var HOLD_MS = 700; // ms to hold colour flash after loop restart
  var CLASS = 'pe-loop-flash';

  if (!ENABLED) return;

  // Desktop + tablet only — mobile never runs the orbit animation scene
  if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) return;

  function init(sphere) {
    var video = sphere.querySelector('video.pe-orb-video');
    if (!video) return;

    var active = false;
    var lastTime = 0;
    var holdTimer = null;

    function activate() {
      if (active) return;
      active = true;
      video.playbackRate = SLOW_RATE;
      sphere.classList.add(CLASS);
    }

    function deactivate() {
      clearTimeout(holdTimer);
      video.playbackRate = 1.0;
      holdTimer = setTimeout(function () {
        sphere.classList.remove(CLASS);
        active = false;
      }, HOLD_MS);
    }

    function onTimeUpdate() {
      var ct = video.currentTime;
      var dur = video.duration;
      if (!dur || isNaN(dur) || dur < 0.5) return;

      // ── 1. Near end → activate colour transition ──────────────────────────
      if (!active && dur - ct <= NEAR_END_S) {
        activate();
      }

      // ── 2. Loop detected: time jumped backward past beginning ─────────────
      //    (currentTime < 0.3 while previously > 0.8 handles all loop cases)
      if (active && ct < 0.3 && lastTime > 0.8) {
        deactivate();
      }

      lastTime = ct;
    }

    // Attach as soon as duration is available
    if (video.readyState >= 1 && !isNaN(video.duration)) {
      video.addEventListener('timeupdate', onTimeUpdate, { passive: true });
    } else {
      video.addEventListener('loadedmetadata', function onMeta() {
        video.removeEventListener('loadedmetadata', onMeta);
        video.addEventListener('timeupdate', onTimeUpdate, { passive: true });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.pe-orb-sphere').forEach(init);
  });
})();
