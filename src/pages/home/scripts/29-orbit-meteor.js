// Comet system — multi-trajectory, multi-size, randomised scheduler.
//
// Comets live inside #peSecondRight at z-index:3 (below planets z:4, title z:8).
// 6 CSS keyframe trajectories: 3 LTR (left→right) + 3 RTL (right→left).
// All travel top→bottom. Sizes: sm (52px) 45%, md (85px) 35%, lg (115px) 20%.
// Color: 90% neon cyan, 10% random planet accent via CSS custom properties.
//
// Scheduler:
//   • base gap between launches: 2–6 s (random)
//   • hard floor between any two launches: 500 ms
//   • max 5 concurrent comets
//   • 25% chance of a second comet 200–800 ms after the first
//   • 12% chance of a third comet 400–1400 ms after the first
//   • scroll-guard: stops when outside planets section (p < 0.40 || p ≥ 0.86)
(function () {
  function ready(fn) {
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', fn, { once: true })
      : fn();
  }

  ready(function () {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var pinWrap = document.getElementById('pePinWrap');
    var container = document.getElementById('peSecondRight');
    if (!pinWrap || !container) return;

    // ── SCROLL PROGRESS ──────────────────────────────────────────────────────
    function getP() {
      var rect = pinWrap.getBoundingClientRect();
      var total = pinWrap.offsetHeight - window.innerHeight;
      return total > 0 ? Math.max(0, Math.min(1, -rect.top / total)) : 0;
    }

    // ── CONFIG ────────────────────────────────────────────────────────────────
    var TRAJECTORIES = ['ltr1', 'ltr2', 'ltr3', 'rtl1', 'rtl2', 'rtl3'];

    // Base animation duration per trajectory class (JS may add ±0.2s jitter)
    var TRAJ_DUR = { ltr1: 2.0, ltr2: 2.2, ltr3: 2.4, rtl1: 2.0, rtl2: 2.2, rtl3: 2.4 };

    // Planet glow colours [r, g, b] — matches CSS --planet-glow per sphere class
    var PLANET_COLORS = [
      [82, 34, 160], // STAND     — purple
      [91, 167, 242], // ACTIVATION — sky blue
      [219, 111, 81], // STAFF     — orange
      [31, 74, 188], // SCREENS   — deep blue
      [210, 171, 65], // MERCH     — gold
      [51, 124, 219], // CATERING  — cobalt
      [159, 68, 47], // CONTENT   — rust
      [80, 144, 74], // SUPPORT   — green
    ];

    // ── STATE ─────────────────────────────────────────────────────────────────
    var sectionActive = false;
    var activeCount = 0;
    var scheduleTimer = null;
    var lastLaunchMs = 0;
    var MIN_BETWEEN = 500; // ms hard floor between any two launches
    var MAX_ACTIVE = 5; // max concurrent comets

    // ── HELPERS ───────────────────────────────────────────────────────────────
    function pickSize() {
      var r = Math.random();
      return r < 0.45 ? 'sm' : r < 0.8 ? 'md' : 'lg';
    }

    function pickTraj() {
      return TRAJECTORIES[Math.floor(Math.random() * TRAJECTORIES.length)];
    }

    function rgba(r, g, b, a) {
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    }

    // ── COMET FACTORY ─────────────────────────────────────────────────────────
    function launchComet() {
      if (!sectionActive || activeCount >= MAX_ACTIVE) return;
      var now = Date.now();
      if (now - lastLaunchMs < MIN_BETWEEN) return;
      lastLaunchMs = now;

      var size = pickSize();
      var traj = pickTraj();
      var dur = TRAJ_DUR[traj] + (Math.random() * 0.4 - 0.2);
      var usePlanet = Math.random() < 0.1; // 10% → planet color

      var el = document.createElement('div');
      el.className = 'pe-comet pe-comet-' + size + ' pe-comet-' + traj;

      if (usePlanet) {
        var c = PLANET_COLORS[Math.floor(Math.random() * PLANET_COLORS.length)];
        el.style.setProperty('--comet-head', rgba(c[0], c[1], c[2], 0.92));
        el.style.setProperty('--comet-glow1', rgba(c[0], c[1], c[2], 0.75));
        el.style.setProperty('--comet-glow2', rgba(c[0], c[1], c[2], 0.32));
        el.style.background =
          'linear-gradient(to right,transparent 0%,' +
          rgba(c[0], c[1], c[2], 0.45) +
          ' 32%,' +
          rgba(c[0], c[1], c[2], 0.92) +
          ' 100%)';
        el.style.boxShadow =
          '0 0 5px ' + rgba(c[0], c[1], c[2], 0.7) + ',0 0 14px ' + rgba(c[0], c[1], c[2], 0.3);
      }

      // JS duration override (CSS class provides base, this fine-tunes it)
      el.style.animationDuration = dur.toFixed(2) + 's';

      container.appendChild(el);
      activeCount++;

      el.addEventListener(
        'animationend',
        function () {
          if (el.parentNode) el.parentNode.removeChild(el);
          activeCount--;
        },
        { once: true },
      );
    }

    // ── SCHEDULER ─────────────────────────────────────────────────────────────
    function scheduleNext() {
      if (scheduleTimer) return;
      // 2 – 6 s gap between primary launches
      var gap = 2000 + Math.random() * 4000;
      scheduleTimer = setTimeout(function () {
        scheduleTimer = null;
        if (!sectionActive) return;

        launchComet();

        // 25% chance: a second comet 200–800 ms later (minimal gap → feels simultaneous)
        if (Math.random() < 0.25 && activeCount < MAX_ACTIVE) {
          setTimeout(
            function () {
              if (sectionActive && activeCount < MAX_ACTIVE) launchComet();
            },
            200 + Math.random() * 600,
          );
        }

        // 12% chance: a third comet 400–1400 ms after first
        if (Math.random() < 0.12 && activeCount < MAX_ACTIVE) {
          setTimeout(
            function () {
              if (sectionActive && activeCount < MAX_ACTIVE) launchComet();
            },
            400 + Math.random() * 1000,
          );
        }

        scheduleNext();
      }, gap);
    }

    function cancelSchedule() {
      if (scheduleTimer) {
        clearTimeout(scheduleTimer);
        scheduleTimer = null;
      }
    }

    function clearComets() {
      var live = container.querySelectorAll('.pe-comet');
      live.forEach(function (el) {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
      activeCount = 0;
    }

    // ── SCROLL SYNC ───────────────────────────────────────────────────────────
    var COMET_IN = 0.4;
    var COMET_OUT = 0.97; // fly until the section is almost fully scrolled out

    function syncSection() {
      var p = getP();
      var on = p >= COMET_IN && p < COMET_OUT;
      if (on === sectionActive) return;
      sectionActive = on;
      if (on) {
        scheduleNext();
      } else {
        cancelSchedule();
        clearComets();
      }
    }

    window.addEventListener('scroll', syncSection, { passive: true });
    syncSection();
  });
})();
