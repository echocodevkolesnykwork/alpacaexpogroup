// Starfield — sub-pixel point stars covering the FULL hero viewport.
//
// Parent: #peSecond (position:absolute; inset:0 on #heroSection → full viewport).
// SVG is prepended as the first child of #peSecond so #peSecondRight (isolation:
// isolate) and all planets render on top of it naturally via DOM order.
//
// Star placement: viewport coordinates (0 0 W H where W/H = hero dimensions).
// Exclusion zones: each planet + central solar glow, positions recalculated in
// viewport px based on #peSecondRight's offset within #peSecond.
//
// Distribution: 55% edge-biased (four 18% bands at top/bottom/left/right),
// 45% uniform-random in outer viewport area.
//
// Colors: 70% white/gray, 20% subtle planet tint (blended with white 18–35%),
// 10% neon accent (rgba 0,212,255 — project colour).
//
// Animation: opacity only — fade/shimmer. No translate, no scale.
// ResizeObserver rebuilds on container resize.
// Desktop + tablet only (≥769px).
(function () {
  'use strict';

  function ready(fn) {
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', fn, { once: true })
      : fn();
  }

  ready(function () {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var peSecond = document.getElementById('peSecond'); // full-viewport overlay
    var peSecondRight = document.getElementById('peSecondRight'); // orbit container
    if (!peSecond || !peSecondRight) return;

    var svgNS = 'http://www.w3.org/2000/svg';
    var currentSvg = null;
    var resizeTimer = null;

    // ── PLANET EXCLUSION ZONE DEFINITIONS (in container-% coords) ────────────
    // cx/cy: planet center as % of #peSecondRight (from patch-111).
    // excR:  exclusion radius in % of #peSecondRight width.
    // rgb:   planet glow colour for nearby star tinting.
    var PLANET_DEFS = [
      { cx: 26, cy: 24, excR: 15, rgb: [82, 34, 160] }, // STAND
      { cx: 50, cy: 14, excR: 9, rgb: [91, 167, 242] }, // ACTIVATION
      { cx: 76, cy: 26, excR: 13, rgb: [219, 111, 81] }, // STAFF
      { cx: 86, cy: 50, excR: 10, rgb: [31, 74, 188] }, // SCREENS
      { cx: 76, cy: 74, excR: 14, rgb: [210, 171, 65] }, // MERCH
      { cx: 54, cy: 86, excR: 9, rgb: [51, 124, 219] }, // CATERING
      { cx: 32, cy: 80, excR: 12, rgb: [159, 68, 47] }, // CONTENT
      { cx: 16, cy: 58, excR: 13, rgb: [80, 144, 74] }, // SUPPORT
    ];

    // Neon accent colour (project accent)
    var NEON = [0, 212, 255];

    var TC = ['pe-st1', 'pe-st2', 'pe-st3', 'pe-st4', 'pe-st5', 'pe-st6'];

    // ── STAR BUILDER ──────────────────────────────────────────────────────────
    function buildStars() {
      if (currentSvg && currentSvg.parentNode) currentSvg.parentNode.removeChild(currentSvg);

      // Dimensions of the full-viewport overlay
      var W = peSecond.offsetWidth;
      var H = peSecond.offsetHeight;
      if (!W || !H) return;

      // Position of #peSecondRight within #peSecond (in pixels)
      var cW = peSecondRight.offsetWidth;
      var cH = peSecondRight.offsetHeight;
      var cL = (W - cW) / 2; // left offset (centered)
      var cT = (H - cH) / 2; // top offset  (centered)

      // Convert planet defs to viewport-pixel exclusion zones
      var planets = PLANET_DEFS.map(function (p) {
        return {
          px: cL + (p.cx / 100) * cW, // center x in viewport px
          py: cT + (p.cy / 100) * cH, // center y in viewport px
          pr: (p.excR / 100) * cW, // exclusion radius in viewport px
          rgb: p.rgb,
        };
      });

      // Central solar-glow exclusion: circle at container center, r = 18% of cW
      var glowPx = cL + cW * 0.5;
      var glowPy = cT + cH * 0.5;
      var glowR = cW * 0.18;

      function isExcluded(x, y) {
        // Solar glow
        var gdx = x - glowPx,
          gdy = y - glowPy;
        if (gdx * gdx + gdy * gdy < glowR * glowR) return true;
        // Per-planet
        for (var i = 0; i < planets.length; i++) {
          var pl = planets[i];
          var dx = x - pl.px,
            dy = y - pl.py;
          if (dx * dx + dy * dy < pl.pr * pl.pr) return true;
        }
        return false;
      }

      function nearestPlanet(x, y) {
        var best = null,
          bestD2 = Infinity;
        for (var i = 0; i < planets.length; i++) {
          var pl = planets[i];
          var d2 = (x - pl.px) * (x - pl.px) + (y - pl.py) * (y - pl.py);
          if (d2 < bestD2) {
            bestD2 = d2;
            best = pl;
          }
        }
        // Influence: fades from 1 at planet edge to 0 at 30% of cW beyond it
        var influence = Math.max(0, 1 - Math.sqrt(bestD2) / (cW * 0.3));
        return { planet: best, influence: influence };
      }

      // ── SVG setup ────────────────────────────────────────────────────────────
      var svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.setAttribute('class', 'pe-starfield');
      svg.setAttribute('aria-hidden', 'true');
      // z-index not set: SVG is prepended → DOM order puts it behind peSecondRight
      svg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;';
      currentSvg = svg;

      // ── Star generation ───────────────────────────────────────────────────────
      var TOTAL = 180;
      var EDGE = 18; // edge band width as % of viewport dimension
      var frag = document.createDocumentFragment();
      var placed = 0,
        tries = 0;

      while (placed < TOTAL && tries < TOTAL * 35) {
        tries++;

        var x, y; // viewport pixel coords

        if (Math.random() < 0.55) {
          // Edge-biased: pick one of the four viewport-edge bands
          var band = (Math.random() * 4) | 0;
          switch (band) {
            case 0:
              x = Math.random() * W;
              y = (Math.random() * H * EDGE) / 100;
              break; // top
            case 1:
              x = Math.random() * W;
              y = H * (1 - EDGE / 100) + (Math.random() * H * EDGE) / 100;
              break; // bottom
            case 2:
              x = (Math.random() * W * EDGE) / 100;
              y = Math.random() * H;
              break; // left
            default:
              x = W * (1 - EDGE / 100) + (Math.random() * W * EDGE) / 100;
              y = Math.random() * H;
              break; // right
          }
        } else {
          x = Math.random() * W;
          y = Math.random() * H;
        }

        // Margin: at least 2px from edge
        if (x < 2 || x > W - 2 || y < 2 || y > H - 2) continue;
        if (isExcluded(x, y)) continue;

        // ── Star properties ───────────────────────────────────────────────────
        var r = 0.35 + Math.random() * 0.65; // 0.35 – 1.0 CSS px
        var alpha = 0.08 + Math.random() * 0.72;

        // Color split: 70% white/gray, 20% planet tint, 10% neon accent
        var roll = Math.random();
        var fill;

        if (roll < 0.1) {
          // Neon accent
          fill =
            'rgba(' +
            NEON[0] +
            ',' +
            NEON[1] +
            ',' +
            NEON[2] +
            ',' +
            (alpha * 0.75).toFixed(2) +
            ')';
        } else if (roll < 0.3) {
          // Planet tint — blended with white for subtlety
          var np = nearestPlanet(x, y);
          if (np.influence > 0.02) {
            var c = np.planet.rgb;
            var sat = 0.18 + Math.random() * 0.17; // 18–35% planet, rest white
            var cr = Math.round(255 + (c[0] - 255) * sat);
            var cg = Math.round(255 + (c[1] - 255) * sat);
            var cb = Math.round(255 + (c[2] - 255) * sat);
            fill = 'rgba(' + cr + ',' + cg + ',' + cb + ',' + (alpha * 0.72).toFixed(2) + ')';
          } else {
            // No nearby planet zone — fall through to white
            fill = 'rgba(255,255,255,' + alpha.toFixed(2) + ')';
          }
        } else if (roll < 0.35) {
          // Gray
          var g = (150 + Math.random() * 90) | 0;
          fill = 'rgba(' + g + ',' + g + ',' + Math.min(255, g + 14) + ',' + alpha.toFixed(2) + ')';
        } else {
          // White (majority)
          fill = 'rgba(255,255,255,' + alpha.toFixed(2) + ')';
        }

        var circle = document.createElementNS(svgNS, 'circle');
        circle.setAttribute('cx', x.toFixed(1));
        circle.setAttribute('cy', y.toFixed(1));
        circle.setAttribute('r', r.toFixed(2));
        circle.setAttribute('fill', fill);

        // 58% get twinkling (opacity only)
        if (Math.random() < 0.58) {
          circle.setAttribute('class', TC[(Math.random() * TC.length) | 0]);
          circle.style.animationDelay = (Math.random() * 9).toFixed(2) + 's';
        }

        frag.appendChild(circle);
        placed++;
      }

      svg.appendChild(frag);
      // Prepend so peSecondRight (and its planets) render on top via DOM order
      peSecond.insertBefore(svg, peSecond.firstChild);
    }

    // ── INIT + RESIZE ─────────────────────────────────────────────────────────
    buildStars();

    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(buildStars, 250);
      }).observe(peSecond);
    }
  });
})();
