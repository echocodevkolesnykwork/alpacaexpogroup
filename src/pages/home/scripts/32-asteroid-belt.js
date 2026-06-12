// Asteroid belt — hybrid SVG rendering:
//
//   A. Diffuse haze   — stroke-dasharray ellipses, round linecap, blurred
//   B. Dust streams   — micro-dasharray, butt linecap
//   C. Rocky debris  }  individual <polygon> stones, each orbiting via
//   D. Boulders      }  <animateMotion> + <mpath> along an elliptical path.
//
// animateMotion + mpath keeps every stone on the correct ellipse (unlike
// animateTransform rotate, which traces a circle). Each stone has:
//   • a time-offset begin → distributed evenly around the orbit
//   • a fixed intrinsic rotation → unique facet orientation
//   • an irregular polygon shape (5–8 sides, LCG-deterministic per session)
//   • a colour sampled from a small per-layer palette for subtle variety
(function () {
  'use strict';

  if (!window.matchMedia || window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var NS = 'http://www.w3.org/2000/svg';
  var XLINK = 'http://www.w3.org/1999/xlink';
  var OX = 350,
    OY = 250;
  var C = 1172; // belt-centre circumference (SVG units)

  // ── STROKE LAYERS (A + B) ──────────────────────────────────────────────────
  // [rx, ry, strokeW, dashArrayString, R, G, B, opacity, blurPx, beginS, durS, linecap]
  var STROKE_LAYERS = [
    // A. Diffuse haze — blurred, round linecap (opacity +40% vs initial)
    [284, 95, 8.0, '16 4 10 5 14 3 8 6 12 4 18 3', 140, 168, 210, 0.07, 3.5, 0, 212, 'round'],
    [247, 79, 6.5, '12 5 8 4 15 3 10 5 9 4', 150, 172, 218, 0.06, 3.0, -18, 210, 'round'],
    [266, 87, 4.5, '10 4 14 3 8 5 12 4 16 3', 145, 168, 215, 0.06, 2.2, -8, 215, 'round'],
    // B. Dust streams — micro-dashes, butt linecap (opacity +20%)
    [
      276,
      91,
      0.8,
      '0.8 26 1.5 40 0.5 20 2 48 0.8 32 1.2 44 1 19 0.6 36',
      122,
      150,
      196,
      0.11,
      0,
      -35,
      203,
      'butt',
    ],
    [
      252,
      82,
      0.7,
      '1 23 0.5 34 1.8 46 0.7 29 1.2 40 0.4 26',
      135,
      165,
      210,
      0.1,
      0,
      -52,
      201,
      'butt',
    ],
    [
      264,
      86,
      0.8,
      '0.6 19 2 42 0.8 31 1.4 50 0.5 23 1.8 37',
      128,
      158,
      205,
      0.09,
      0,
      -72,
      205,
      'butt',
    ],
  ];

  // ── POLYGON LAYERS (C + D) ─────────────────────────────────────────────────
  // [rx, ry, count, wMin, wMax, hFactor, colors[], durS, beginS]
  // hFactor: stone height ≈ w × hFactor × rand(0.6–1.0)
  // Sizes and alpha both +15–20% vs previous for subtle visibility boost.
  var POLY_LAYERS = [
    // C1 — small rocky debris, blue-grey + warm grey
    [
      270,
      89,
      40,
      2.3,
      4.6,
      0.72,
      [
        'rgba(125,150,195,0.24)',
        'rgba(108,138,185,0.28)',
        'rgba(142,162,205,0.22)',
        'rgba(158,148,132,0.23)',
        'rgba(172,158,140,0.21)',
        'rgba(115,142,192,0.26)',
        'rgba(180,165,145,0.20)',
        'rgba(102,130,182,0.27)',
      ],
      202,
      -88,
    ],

    // C2 — small rocky debris, cooler hue cluster
    [
      258,
      84,
      35,
      2.1,
      4.0,
      0.7,
      [
        'rgba(138,162,208,0.23)',
        'rgba(118,148,195,0.27)',
        'rgba(148,168,210,0.21)',
        'rgba(162,152,138,0.24)',
        'rgba(175,160,142,0.20)',
        'rgba(112,140,190,0.28)',
        'rgba(168,158,144,0.22)',
        'rgba(105,136,188,0.26)',
      ],
      200,
      -112,
    ],

    // D1a — medium boulders, brown + blue mix
    [
      265,
      87,
      22,
      4.0,
      7.5,
      0.66,
      [
        'rgba(150,136,112,0.33)',
        'rgba(165,150,125,0.30)',
        'rgba(142,128,106,0.35)',
        'rgba(112,140,195,0.32)',
        'rgba(125,152,200,0.29)',
        'rgba(178,140,115,0.29)',
        'rgba(102,132,188,0.34)',
        'rgba(160,145,125,0.31)',
        'rgba(185,148,120,0.28)',
      ],
      198,
      -138,
    ],

    // D1b — medium boulders, blue-grey dominant
    [
      261,
      85,
      20,
      3.5,
      7.0,
      0.68,
      [
        'rgba(115,142,196,0.33)',
        'rgba(128,155,202,0.30)',
        'rgba(105,135,188,0.35)',
        'rgba(148,136,118,0.32)',
        'rgba(160,148,128,0.29)',
        'rgba(102,128,182,0.34)',
        'rgba(170,152,130,0.30)',
        'rgba(122,150,200,0.31)',
      ],
      206,
      -68,
    ],

    // D2a — large sparse boulders, warm brown
    [
      272,
      90,
      16,
      5.8,
      10.5,
      0.62,
      [
        'rgba(148,135,112,0.37)',
        'rgba(162,148,126,0.34)',
        'rgba(140,126,104,0.39)',
        'rgba(175,160,136,0.33)',
        'rgba(110,138,194,0.37)',
        'rgba(168,142,118,0.35)',
        'rgba(190,155,128,0.31)',
      ],
      195,
      -158,
    ],

    // D2b — large sparse boulders, cool blue
    [
      258,
      83,
      14,
      5.2,
      9.8,
      0.64,
      [
        'rgba(112,140,195,0.37)',
        'rgba(125,152,202,0.34)',
        'rgba(102,132,188,0.39)',
        'rgba(148,136,118,0.35)',
        'rgba(130,158,205,0.33)',
        'rgba(168,145,122,0.35)',
        'rgba(105,142,200,0.38)',
      ],
      200,
      -85,
    ],
  ];

  // ── HELPERS ────────────────────────────────────────────────────────────────

  function seamlessStr(dashStr) {
    var period = dashStr.split(' ').reduce(function (s, v) {
      return s + parseFloat(v);
    }, 0);
    return Math.ceil(C / period) * period;
  }

  function rgbaStr(r, g, b, a) {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a.toFixed(3) + ')';
  }

  // Deterministic LCG — identical layout on every page load
  var _rng = 0;
  function pr() {
    _rng = (_rng * 1664525 + 1013904223) >>> 0;
    return _rng / 4294967295;
  }

  // Irregular polygon for a faceted pebble, centred at (0,0), size w × h
  function buildPebble(w, h, sides) {
    var pts = [];
    for (var i = 0; i < sides; i++) {
      var base = (i / sides) * Math.PI * 2;
      var a = base + (pr() - 0.5) * ((Math.PI * 2) / sides) * 0.55;
      var rr = 0.58 + pr() * 0.42;
      pts.push(
        ((w / 2) * rr * Math.cos(a)).toFixed(2) + ',' + ((h / 2) * rr * Math.sin(a)).toFixed(2),
      );
    }
    return pts.join(' ');
  }

  // ── BUILD ──────────────────────────────────────────────────────────────────

  function build() {
    var belt = document.getElementById('peOrbitAsteroidBelt');
    if (!belt) return;
    var svg = belt.ownerSVGElement;
    if (!svg) return;

    var defs = svg.querySelector('defs');
    if (!defs) {
      defs = document.createElementNS(NS, 'defs');
      svg.insertBefore(defs, svg.firstChild);
    }

    function ensureFilter(id, dev) {
      if (document.getElementById(id)) return;
      var f = document.createElementNS(NS, 'filter');
      f.setAttribute('id', id);
      f.setAttribute('x', '-60%');
      f.setAttribute('y', '-60%');
      f.setAttribute('width', '220%');
      f.setAttribute('height', '220%');
      var fe = document.createElementNS(NS, 'feGaussianBlur');
      fe.setAttribute('in', 'SourceGraphic');
      fe.setAttribute('stdDeviation', dev);
      f.appendChild(fe);
      defs.appendChild(f);
    }
    ensureFilter('peAstBlur22', '2.2');
    ensureFilter('peAstBlur30', '3');
    ensureFilter('peAstBlur35', '3.5');
    var BLUR = { 2.2: 'peAstBlur22', 3.0: 'peAstBlur30', 3.5: 'peAstBlur35' };

    // Ensure motion paths exist in defs — one per unique (rx,ry) pair.
    // Path is centered at (0,0): element is placed inside a translate(OX,OY) group.
    // Full CW ellipse: M rx,0  A rx,ry 0 0,1 -rx,0  A rx,ry 0 0,1 rx,0
    function ensurePath(prx, pry) {
      var id = 'peOrbitMotion' + prx + 'x' + pry;
      if (!document.getElementById(id)) {
        var p = document.createElementNS(NS, 'path');
        p.setAttribute('id', id);
        p.setAttribute(
          'd',
          'M ' +
            prx +
            ',0 ' +
            'A ' +
            prx +
            ',' +
            pry +
            ' 0 0,1 -' +
            prx +
            ',0 ' +
            'A ' +
            prx +
            ',' +
            pry +
            ' 0 0,1 ' +
            prx +
            ',0',
        );
        defs.appendChild(p);
      }
      return id;
    }

    while (belt.firstChild) belt.removeChild(belt.firstChild);

    var frag = document.createDocumentFragment();

    // ── Stroke layers (haze + dust) ───────────────────────────────────────────
    for (var i = 0; i < STROKE_LAYERS.length; i++) {
      var L = STROKE_LAYERS[i];
      var rx = L[0],
        ry = L[1],
        sw = L[2],
        dashStr = L[3];
      var r = L[4],
        g = L[5],
        b = L[6];
      var alpha = L[7],
        blurPx = L[8],
        begin = L[9],
        dur = L[10],
        linecap = L[11];

      var el = document.createElementNS(NS, 'ellipse');
      el.setAttribute('cx', OX);
      el.setAttribute('cy', OY);
      el.setAttribute('rx', rx);
      el.setAttribute('ry', ry);
      el.setAttribute('fill', 'none');
      el.setAttribute('stroke', rgbaStr(r, g, b, alpha));
      el.setAttribute('stroke-width', sw);
      el.setAttribute('stroke-dasharray', dashStr);
      el.setAttribute('stroke-linecap', linecap);
      if (blurPx > 0 && BLUR[blurPx]) el.setAttribute('filter', 'url(#' + BLUR[blurPx] + ')');

      var target = seamlessStr(dashStr);
      var anim = document.createElementNS(NS, 'animate');
      anim.setAttribute('attributeName', 'stroke-dashoffset');
      anim.setAttribute('from', '0');
      anim.setAttribute('to', target.toFixed(1));
      anim.setAttribute('dur', dur + 's');
      anim.setAttribute('begin', begin + 's');
      anim.setAttribute('repeatCount', 'indefinite');
      anim.setAttribute('calcMode', 'linear');
      el.appendChild(anim);
      frag.appendChild(el);
    }

    // ── Polygon layers (rocky debris + boulders) ──────────────────────────────
    _rng = 42; // reset seed — deterministic per session

    for (var li = 0; li < POLY_LAYERS.length; li++) {
      var PL = POLY_LAYERS[li];
      var prx = PL[0],
        pry = PL[1],
        count = PL[2];
      var wMin = PL[3],
        wMax = PL[4],
        hFactor = PL[5];
      var colors = PL[6],
        animDur = PL[7],
        animBegin = PL[8];

      var pathId = ensurePath(prx, pry);
      var interval = animDur / count;

      // Group shifted to orbit centre so the local path (0,0)-centred ellipse
      // maps correctly to the SVG coordinate space.
      var grp = document.createElementNS(NS, 'g');
      grp.setAttribute('transform', 'translate(' + OX + ',' + OY + ')');

      for (var j = 0; j < count; j++) {
        var stoneG = document.createElementNS(NS, 'g');

        // Time offset distributes stones evenly; ±20% jitter for organic feel
        var jitter = (pr() - 0.5) * interval * 0.4;
        var beginVal = (animBegin - j * interval + jitter).toFixed(2);

        var am = document.createElementNS(NS, 'animateMotion');
        am.setAttribute('dur', animDur + 's');
        am.setAttribute('begin', beginVal + 's');
        am.setAttribute('repeatCount', 'indefinite');
        am.setAttribute('calcMode', 'linear');
        am.setAttribute('rotate', 'none'); // keep stone's own rotation fixed

        var mp = document.createElementNS(NS, 'mpath');
        // Support both modern href and legacy xlink:href
        mp.setAttribute('href', '#' + pathId);
        mp.setAttributeNS(XLINK, 'xlink:href', '#' + pathId);
        am.appendChild(mp);
        stoneG.appendChild(am);

        // Polygon geometry
        var w = wMin + pr() * (wMax - wMin);
        var h = w * hFactor * (0.6 + pr() * 0.4);
        var rot = pr() * 360;
        var color = colors[Math.floor(pr() * colors.length)];
        var sides = 5 + Math.floor(pr() * 4); // 5–8 sides

        var poly = document.createElementNS(NS, 'polygon');
        poly.setAttribute('points', buildPebble(w, h, sides));
        poly.setAttribute('fill', color);
        poly.setAttribute('transform', 'rotate(' + rot.toFixed(1) + ')');
        stoneG.appendChild(poly);

        grp.appendChild(stoneG);
      }

      frag.appendChild(grp);
    }

    belt.appendChild(frag);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
