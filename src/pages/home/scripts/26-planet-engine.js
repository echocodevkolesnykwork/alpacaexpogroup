// Planet Orbit Entrance Choreography — GSAP cinematic timeline.
// Fires once when the LERP scroll (01-core-interactions.js) adds
// .is-centered-sun to #peOrbTitle (at scroll progress >= 0.46).
// Requires window.gsap exposed by mount.js before classic scripts run.
//
// SEQUENCE (total ~1.9s from trigger, after 0.5s delay):
//   0.5s  delay — planets finish their scroll-driven entrance
//   0→0.6s       — bloom explodes to peak (power3.out — punchy climax)
//   0.3s          — labels shoot out mid-bloom, 60ms stagger (rapid succession)
//   0.6→1.4s      — bloom recedes and dissipates (power2.in)
(function () {
  var gsap = window.gsap;
  if (!gsap) return;

  // Mobile: 01-core-interactions.js handles static state — skip entrance.
  if (window.matchMedia('(max-width: 768px)').matches) {
    document.querySelectorAll('.pe-orb-sphere').forEach(function (s) {
      s.classList.add('label-revealed');
    });
    return;
  }

  var orbTitle = document.getElementById('peOrbTitle');
  var secondRight = document.getElementById('peSecondRight');
  if (!orbTitle || !secondRight) return;

  // Solar bloom overlay — soft corona gradient, GSAP owns all transforms.
  var bloomEl = document.createElement('div');
  bloomEl.className = 'pe-flash-overlay';
  bloomEl.setAttribute('aria-hidden', 'true');
  secondRight.appendChild(bloomEl);
  gsap.set(bloomEl, { xPercent: -50, yPercent: -50, scale: 0.12, opacity: 0 });

  // Clockwise order: ACTIVATION → STAFF → SCREENS → CATERING → MERCH → CONTENT → SUPPORT → STAND
  var CW_ORDER = [
    'pe-orb-vr', // ACTIVATION  — top center
    'pe-orb-staff', // STAFF       — top right
    'pe-orb-led', // SCREENS     — right
    'pe-orb-bar', // CATERING    — bottom right
    'pe-orb-materials', // MERCH       — bottom center-right
    'pe-orb-motion', // CONTENT     — bottom center
    'pe-orb-activation', // SUPPORT     — bottom left
    'pe-orb-ideas', // STAND       — top left
  ];

  function sortClockwise(spheres) {
    return Array.from(spheres).sort(function (a, b) {
      var ai = CW_ORDER.findIndex(function (cls) {
        return a.classList.contains(cls);
      });
      var bi = CW_ORDER.findIndex(function (cls) {
        return b.classList.contains(cls);
      });
      if (ai === -1) ai = 99;
      if (bi === -1) bi = 99;
      return ai - bi;
    });
  }

  var played = false;

  function triggerEntrance() {
    if (played) return;
    played = true;

    var spheres = sortClockwise(document.querySelectorAll('.pe-orb-sphere'));
    var tl = gsap.timeline({
      // Wait for planets to finish their scroll-driven scale-in before bloom starts
      delay: 0.5,
    });

    // ── Phase 1: Bloom explodes to peak (0→0.6s) ─────────────────────────────
    // power3.out: fast initial expansion that decelerates at peak — punchy
    // without over-shooting. opacity 0.9 so the bloom is vivid but not white.
    tl.to(
      bloomEl,
      {
        duration: 0.6,
        scale: 1.5,
        opacity: 0.9,
        ease: 'power3.out',
      },
      0,
    );

    // ── Phase 2: Labels shoot out mid-bloom (0.3s) ───────────────────────────
    // 0.3s = halfway through Phase 1. Labels erupt from inside the expanding
    // corona in rapid clockwise succession (60ms stagger — almost simultaneous).
    tl.add(function () {
      spheres.forEach(function (sphere, i) {
        setTimeout(function () {
          sphere.classList.add('label-revealed');
        }, i * 60);
      });
    }, 0.3);

    // ── Phase 3: Bloom recedes and dissipates (0.6→1.4s) ─────────────────────
    // power2.in: slow start, accelerating fade — the corona exhales cleanly.
    tl.to(
      bloomEl,
      {
        duration: 0.8,
        scale: 2.8,
        opacity: 0,
        ease: 'power2.in',
      },
      0.6,
    );
  }

  // Watch #peOrbTitle for is-centered-sun (added by LERP scroll at p >= 0.46)
  var mo = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      if (
        mutations[i].attributeName === 'class' &&
        orbTitle.classList.contains('is-centered-sun')
      ) {
        triggerEntrance();
        mo.disconnect();
        return;
      }
    }
  });

  mo.observe(orbTitle, { attributes: true, attributeFilter: ['class'] });
})();
