// Reference script block 1
function flipProc() {
  document.getElementById('proc-card-5').classList.toggle('flipped');
}

function flipCard(id) {
  const card = document.getElementById('card-' + id);
  card.classList.toggle('flipped');
}
const nav = document.getElementById('nav');

(function () {
  if (!nav) return;
  var lastY = 0;
  var ticking = false;

  function updateNavState() {
    var y = window.scrollY;
    nav.classList.toggle('on', y > 60);
    if (y > 80 && !nav.classList.contains('menu-open')) {
      nav.classList.toggle('nav-hidden', y > lastY);
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    function () {
      if (!ticking) {
        requestAnimationFrame(updateNavState);
        ticking = true;
      }
    },
    { passive: true },
  );
})();
const obs = new IntersectionObserver(
  (e) =>
    e.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add('vis');
        obs.unobserve(x.target);
      }
    }),
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
);
document.querySelectorAll('.rv, .rv-left, .rv-right, .rv-scale').forEach((el) => obs.observe(el));

// ── WHY US — Apple-style chess / stagger reveal ──
(function () {
  const items = document.querySelectorAll('.why-us .wu-item');
  if (!items.length) return;

  items.forEach((item, index) => {
    item.style.transitionDelay = `${(index % 2) * 0.08}s`;
  });

  const wuObs = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => [...items].indexOf(a.target) - [...items].indexOf(b.target))
        .forEach((entry, visibleIndex) => {
          entry.target.style.transitionDelay = `${visibleIndex * 0.11}s`;
          entry.target.classList.add('wu-vis');
          wuObs.unobserve(entry.target);
        });
    },
    { threshold: 0.18, rootMargin: '0px 0px -90px 0px' },
  );

  items.forEach((item) => wuObs.observe(item));
})();

// ── WHAT OUR CLIENTS SAY — premium Apple-style stagger reveal ──
(function () {
  const section = document.querySelector('.video-testimonial');
  if (!section) return;

  const items = [
    section.querySelector('.vt-head'),
    section.querySelector('.vt-cell-video'),
    ...section.querySelectorAll('.vt-bento > .vt-cell'),
    section.querySelector('.more-cases-wrap'),
  ].filter(Boolean);

  if (!items.length) return;

  const reveal = () => {
    items.forEach((item, index) => {
      const chessDelay = index === 0 ? 0 : 0.12 + (index - 1) * 0.095;
      item.style.transitionDelay = `${chessDelay}s`;
      window.setTimeout(() => item.classList.add('vt-in'), chessDelay * 1000);
    });
  };

  const vtObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal();
          vtObs.disconnect();
        }
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -90px 0px' },
  );

  vtObs.observe(section);
})();

// Globe
(function () {
  const canvas = document.getElementById('globe');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 360,
    H = 360,
    CX = 180,
    CY = 180,
    R = 158;
  let rotY = 0.3,
    pulse = 0;

  const continents = {
    northAmerica: [
      [70, -140],
      [70, -60],
      [60, -55],
      [50, -55],
      [45, -60],
      [40, -65],
      [35, -75],
      [30, -80],
      [25, -80],
      [20, -87],
      [15, -85],
      [10, -83],
      [8, -77],
      [9, -75],
      [12, -70],
      [15, -65],
      [18, -66],
      [25, -80],
      [30, -81],
      [35, -76],
      [40, -74],
      [45, -64],
      [50, -55],
      [60, -55],
      [65, -64],
      [70, -75],
      [72, -80],
      [70, -90],
      [68, -100],
      [65, -110],
      [60, -120],
      [55, -130],
      [50, -125],
      [45, -124],
      [40, -124],
      [35, -120],
      [30, -117],
      [25, -110],
      [20, -105],
      [15, -92],
      [10, -84],
      [8, -77],
      [15, -90],
      [20, -105],
      [25, -110],
      [30, -117],
      [35, -120],
      [40, -122],
      [45, -124],
      [50, -125],
      [55, -130],
      [60, -138],
      [65, -168],
      [70, -163],
      [70, -140],
    ],
    southAmerica: [
      [12, -72],
      [10, -62],
      [8, -60],
      [5, -52],
      [2, -50],
      [0, -50],
      [-5, -35],
      [-10, -37],
      [-15, -39],
      [-20, -40],
      [-25, -48],
      [-30, -51],
      [-33, -53],
      [-35, -57],
      [-40, -62],
      [-45, -65],
      [-50, -68],
      [-55, -68],
      [-55, -65],
      [-53, -70],
      [-50, -75],
      [-45, -75],
      [-40, -73],
      [-35, -72],
      [-30, -71],
      [-25, -70],
      [-20, -70],
      [-15, -75],
      [-10, -78],
      [-5, -80],
      [0, -80],
      [5, -77],
      [10, -73],
      [12, -72],
    ],
    europe: [
      [70, 28],
      [68, 20],
      [65, 14],
      [60, 5],
      [55, 8],
      [50, 2],
      [45, 0],
      [43, 3],
      [41, 2],
      [38, 0],
      [36, 5],
      [37, 10],
      [38, 15],
      [40, 18],
      [41, 20],
      [40, 22],
      [37, 22],
      [36, 26],
      [37, 28],
      [40, 30],
      [42, 28],
      [44, 28],
      [46, 30],
      [48, 22],
      [50, 20],
      [52, 20],
      [54, 18],
      [55, 14],
      [58, 12],
      [60, 5],
      [62, 6],
      [65, 14],
      [68, 18],
      [70, 28],
    ],
    africa: [
      [37, 10],
      [30, 32],
      [25, 37],
      [20, 38],
      [15, 42],
      [10, 42],
      [5, 42],
      [0, 42],
      [-5, 40],
      [-10, 38],
      [-15, 35],
      [-20, 35],
      [-25, 33],
      [-30, 30],
      [-34, 26],
      [-34, 18],
      [-30, 17],
      [-25, 15],
      [-20, 12],
      [-15, 12],
      [-10, 15],
      [-5, 10],
      [0, 8],
      [5, 2],
      [10, -2],
      [15, -17],
      [20, -17],
      [25, -15],
      [30, -10],
      [35, 0],
      [37, 10],
    ],
    asia: [
      [70, 30],
      [65, 35],
      [60, 30],
      [55, 35],
      [50, 40],
      [45, 38],
      [40, 36],
      [35, 36],
      [30, 32],
      [25, 57],
      [20, 58],
      [15, 52],
      [10, 45],
      [5, 45],
      [0, 42],
      [5, 80],
      [10, 78],
      [15, 80],
      [20, 87],
      [25, 90],
      [20, 100],
      [15, 100],
      [10, 105],
      [5, 103],
      [0, 105],
      [5, 115],
      [10, 120],
      [15, 120],
      [20, 110],
      [25, 120],
      [30, 122],
      [35, 120],
      [40, 122],
      [35, 130],
      [40, 140],
      [45, 142],
      [50, 140],
      [55, 135],
      [60, 140],
      [65, 170],
      [70, 170],
      [72, 140],
      [70, 110],
      [65, 90],
      [60, 80],
      [55, 68],
      [50, 52],
      [45, 50],
      [40, 50],
      [35, 52],
      [30, 48],
      [25, 57],
      [20, 58],
      [15, 43],
      [10, 44],
      [15, 43],
      [20, 38],
      [25, 37],
      [30, 32],
      [35, 36],
      [40, 36],
      [45, 38],
      [50, 40],
      [55, 35],
      [60, 30],
      [65, 35],
      [70, 30],
    ],
    australia: [
      [-15, 130],
      [-13, 136],
      [-12, 136],
      [-10, 142],
      [-15, 145],
      [-20, 148],
      [-25, 153],
      [-30, 153],
      [-35, 150],
      [-38, 146],
      [-38, 140],
      [-35, 137],
      [-32, 134],
      [-30, 115],
      [-25, 114],
      [-22, 114],
      [-18, 122],
      [-15, 128],
      [-15, 130],
    ],
    greenland: [
      [76, -70],
      [72, -55],
      [68, -52],
      [65, -53],
      [64, -52],
      [63, -50],
      [65, -42],
      [68, -35],
      [72, -28],
      [76, -28],
      [80, -30],
      [83, -35],
      [83, -50],
      [80, -60],
      [76, -70],
    ],
  };

  const shows = [
    { lat: 41.4, lng: 2.2, active: true },
    { lat: 35.9, lng: 14.5, active: false },
    { lat: 38.7, lng: -9.1, active: false },
    { lat: 52.4, lng: 4.9, active: false },
    { lat: 4.7, lng: -74.1, active: false },
  ];
  const extraDots = [
    { lat: 40.7, lng: -74 },
    { lat: 35.7, lng: 139.7 },
    { lat: -23.5, lng: -46.6 },
    { lat: 55.7, lng: 37.6 },
    { lat: 1.3, lng: 103.8 },
    { lat: -33.9, lng: 18.4 },
    { lat: 48.8, lng: 2.3 },
    { lat: 25.2, lng: 55.3 },
    { lat: 19.4, lng: -99.1 },
    { lat: 31.2, lng: 121.5 },
    { lat: 28.6, lng: 77.2 },
    { lat: -37.8, lng: 144.9 },
    { lat: 59.9, lng: 30.3 },
    { lat: 37.6, lng: 126.9 },
    { lat: 6.5, lng: 3.4 },
  ];
  function r2d(d) {
    return (d * Math.PI) / 180;
  }
  function proj3d(lat, lng) {
    const phi = r2d(90 - lat),
      th = r2d(lng) + rotY;
    const x = R * Math.sin(phi) * Math.cos(th),
      y = -R * Math.cos(phi),
      z = R * Math.sin(phi) * Math.sin(th);
    return { sx: CX + x, sy: CY + y, vis: z > -5 };
  }
  function drawCont(pts) {
    ctx.beginPath();
    let st = false,
      pv = false;
    pts.forEach(([la, lg]) => {
      const p = proj3d(la, lg);
      if (p.vis) {
        if (!st || !pv) {
          ctx.moveTo(p.sx, p.sy);
          st = true;
        } else ctx.lineTo(p.sx, p.sy);
      }
      pv = p.vis;
    });
    ctx.strokeStyle = 'rgba(0,212,255,0.75)';
    ctx.lineWidth = 1.2;
    ctx.shadowBlur = 8;
    ctx.shadowColor = '#00D4FF';
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    pulse += 0.035;
    for (let i = 3; i >= 1; i--) {
      const a = ctx.createRadialGradient(CX, CY, R, CX, CY, R + i * 18);
      a.addColorStop(0, `rgba(0,212,255,${0.12 / i})`);
      a.addColorStop(1, 'rgba(0,212,255,0)');
      ctx.beginPath();
      ctx.arc(CX, CY, R + i * 18, 0, Math.PI * 2);
      ctx.fillStyle = a;
      ctx.fill();
    }
    const body = ctx.createRadialGradient(CX - 50, CY - 50, 10, CX, CY, R);
    body.addColorStop(0, '#031525');
    body.addColorStop(0.5, '#020d1a');
    body.addColorStop(1, '#010810');
    ctx.beginPath();
    ctx.arc(CX, CY, R, 0, Math.PI * 2);
    ctx.fillStyle = body;
    ctx.fill();
    ctx.save();
    ctx.beginPath();
    ctx.arc(CX, CY, R, 0, Math.PI * 2);
    ctx.clip();
    for (let la = -75; la <= 75; la += 15) {
      const cL = Math.cos(r2d(la)),
        sL = Math.sin(r2d(la)),
        r2 = R * cL,
        cy2 = CY - R * sL;
      ctx.beginPath();
      let st = false;
      for (let lg = -180; lg <= 180; lg += 2) {
        const th = r2d(lg) + rotY,
          x = CX + r2 * Math.cos(th),
          z = r2 * Math.sin(th);
        if (z >= 0) {
          if (!st) {
            ctx.moveTo(x, cy2);
            st = true;
          } else ctx.lineTo(x, cy2);
        } else st = false;
      }
      ctx.strokeStyle = `rgba(0,150,255,${la === 0 ? 0.12 : 0.05})`;
      ctx.lineWidth = la === 0 ? 0.8 : 0.4;
      ctx.stroke();
    }
    for (let lg = 0; lg < 360; lg += 15) {
      ctx.beginPath();
      let st = false;
      for (let la = -88; la <= 88; la += 3) {
        const p = proj3d(la, lg - 180);
        if (p.vis) {
          if (!st) {
            ctx.moveTo(p.sx, p.sy);
            st = true;
          } else ctx.lineTo(p.sx, p.sy);
        } else st = false;
      }
      ctx.strokeStyle = 'rgba(0,150,255,0.05)';
      ctx.lineWidth = 0.4;
      ctx.stroke();
    }
    Object.values(continents).forEach((pts) => drawCont(pts));
    ctx.restore();
    ctx.beginPath();
    ctx.arc(CX, CY, R, 0, Math.PI * 2);
    const bg = ctx.createLinearGradient(CX - R, CY, CX + R, CY);
    bg.addColorStop(0, 'rgba(0,212,255,0.9)');
    bg.addColorStop(0.35, 'rgba(0,212,255,0.3)');
    bg.addColorStop(0.65, 'rgba(0,212,255,0.3)');
    bg.addColorStop(1, 'rgba(0,212,255,0.9)');
    ctx.strokeStyle = bg;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#00D4FF';
    ctx.stroke();
    ctx.shadowBlur = 0;
    extraDots.forEach((d) => {
      const p = proj3d(d.lat, d.lng);
      if (!p.vis) return;
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,212,255,0.4)';
      ctx.shadowBlur = 4;
      ctx.shadowColor = '#00D4FF';
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    shows.forEach((s) => {
      const p = proj3d(s.lat, s.lng);
      if (!p.vis) return;
      const pf = s.active ? 0.55 + 0.45 * Math.sin(pulse) : 0.85;
      const ringR = (s.active ? 20 : 12) * pf;
      const rg = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, ringR);
      rg.addColorStop(0, `rgba(0,212,255,${s.active ? 0.4 * pf : 0.15})`);
      rg.addColorStop(1, 'rgba(0,212,255,0)');
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, ringR, 0, Math.PI * 2);
      ctx.fillStyle = rg;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, s.active ? 5 : 3, 0, Math.PI * 2);
      ctx.fillStyle = '#00D4FF';
      ctx.shadowBlur = s.active ? 18 : 6;
      ctx.shadowColor = '#00D4FF';
      ctx.fill();
      ctx.shadowBlur = 0;
    });
    const sp = ctx.createRadialGradient(CX - 60, CY - 60, 5, CX - 40, CY - 40, R * 0.6);
    sp.addColorStop(0, 'rgba(100,200,255,0.06)');
    sp.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.arc(CX, CY, R, 0, Math.PI * 2);
    ctx.fillStyle = sp;
    ctx.fill();
  }
  document.querySelectorAll('.gshow-item').forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.gshow-item').forEach((e) => e.classList.remove('active'));
      el.classList.add('active');
      const i = +el.dataset.i;
      shows.forEach((s) => (s.active = false));
      shows[i].active = true;
      rotY = -r2d(shows[i].lng) - Math.PI / 2;
    });
  });
  (function loop() {
    rotY += 0.003;
    draw();
    requestAnimationFrame(loop);
  })();
})();

// 3×3 grid reveal — center text, then ALL buttons at once, then WATCH neon
const orbitWrap = document.getElementById('svcOrbit');
const orbitCenter = document.querySelector('.svc-orbit-center');
const glassBtns = [...document.querySelectorAll('.svc-glass-btn')];
const watchLabels = [...document.querySelectorAll('.btn-watch')];

if (orbitWrap) {
  const orbitObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;

        // 1. Center text
        if (orbitCenter) orbitCenter.classList.add('vis');

        // 2. ALL buttons simultaneously
        setTimeout(() => {
          glassBtns.forEach((btn) => btn.classList.add('vis'));
        }, 300);

        // 3. WATCH neon flash — all at once after buttons fully appear
        setTimeout(() => {
          watchLabels.forEach((w) => w.classList.add('neon'));
        }, 2200);

        orbitObs.unobserve(orbitWrap);
      });
    },
    { threshold: 0.2 },
  );
  orbitObs.observe(orbitWrap);
}

const portalWrap = document.querySelector('.portal-svg-wrap');
if (portalWrap) {
  const portalObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('drawn');
          portalObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  portalObs.observe(portalWrap);
}

// ── Perfect event scroll transition — static center lock with reverse animation ──
(function () {
  const pinWrap = document.getElementById('pePinWrap');
  const bgDark = document.getElementById('peBgDark');
  const heroPre = document.getElementById('heroPre');
  const heroSub = document.getElementById('heroSub');
  const heroBtns = document.getElementById('heroBtnsRow');
  const heroTicker = document.getElementById('heroTicker');
  const heroLeft = document.getElementById('heroLeft');
  const heroRight = document.getElementById('heroRight');
  const heroSection = heroLeft ? heroLeft.closest('section') || heroLeft.parentElement : null;
  const peHl = document.getElementById('peHighlight');
  const peSecond = document.getElementById('peSecond');
  const spheres = [...document.querySelectorAll('.pe-orb-sphere')];
  const orbTitle = document.getElementById('peOrbTitle');

  if (!pinWrap || !peHl) return;

  // Mobile: no scroll animation on the first screen.
  // Hero stays static; the orbit/perfect-event scene is shown as a separate second screen.
  if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
    if (bgDark) bgDark.style.display = 'none';
    if (heroPre) {
      heroPre.style.opacity = '1';
      heroPre.style.transform = 'none';
    }
    if (heroSub) heroSub.style.opacity = '1';
    if (heroBtns) heroBtns.style.opacity = '1';
    if (heroTicker) heroTicker.style.opacity = '1';
    if (heroRight) heroRight.style.opacity = '1';
    peHl.style.opacity = '1';
    peHl.style.transform = 'none';
    peHl.style.filter = 'none';
    if (peSecond) {
      peSecond.style.opacity = '1';
      peSecond.style.visibility = 'visible';
      peSecond.style.pointerEvents = 'auto';
    }
    if (orbTitle) {
      orbTitle.classList.add('pe-title-static');
      orbTitle.style.setProperty('--pe-title-alpha', '1');
      orbTitle.style.setProperty('--pe-title-visibility', 'visible');
      orbTitle.style.opacity = '1';
      orbTitle.style.visibility = 'visible';
    }
    spheres.forEach((s) => {
      s.classList.add('pe-sphere-locked');
      s.style.opacity = '1';
      s.style.transform = 'translate3d(0, 0, 0) scale(1)';
      s.style.filter = 'blur(0px) brightness(1)';
      s.style.visibility = 'visible';
    });
    return;
  }

  let targetP = 0;
  let smoothP = 0;
  let rafOn = false;

  let ghost = null;
  let ghostBase = null;
  let centerTarget = null;
  let titleLocked = false;

  let lastSunActive = false;
  let labelSplashTimer = null;

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const range = (p, a, b) => clamp((p - a) / (b - a), 0, 1);

  // The title must stop reacting to scroll once it reaches the next section center.
  // Keeping these values together prevents accidental long scrub movement later.
  const TITLE_MOVE_START = 0.06;
  const TITLE_MOVE_END = 0.38;
  // Movement stops at TITLE_MOVE_END; the handoff finishes later so there is
  // no one-frame gap between the ghost and the static section title.
  const TITLE_LOCK_PROGRESS = 0.46;
  const TITLE_STATIC_FADE_START = 0.31;
  const TITLE_GHOST_FADE_START = 0.37;

  function smootherstep(t) {
    t = clamp(t, 0, 1);
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function ensureLabels() {
    spheres.forEach((s) => {
      let label = s.querySelector('.pe-sphere-label');

      if (!label) {
        const txt = Array.from(s.childNodes)
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent.trim())
          .join(' ')
          .trim();

        Array.from(s.childNodes).forEach((n) => {
          if (n.nodeType === 3) n.textContent = '';
        });

        label = document.createElement('span');
        label.className = 'pe-sphere-label';
        label.textContent =
          txt || s.getAttribute('data-label') || s.getAttribute('aria-label') || '';
        s.appendChild(label);
      }

      let textNode = label.querySelector('.pe-label-text');
      if (!textNode) {
        const existingText = Array.from(label.childNodes)
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent.trim())
          .join(' ')
          .trim();

        Array.from(label.childNodes).forEach((n) => {
          if (n.nodeType === 3) n.textContent = '';
        });

        textNode = document.createElement('span');
        textNode.className = 'pe-label-text';
        textNode.textContent =
          existingText || label.textContent.trim() || s.getAttribute('data-label') || '';
        label.prepend(textNode);
      }

      s.querySelectorAll('.pe-play-icon').forEach((icon, idx) => {
        if (idx > 0) icon.remove();
      });

      if (!label.querySelector('.pe-play-icon')) {
        const icon = document.createElement('span');
        icon.className = 'pe-play-icon';
        icon.setAttribute('aria-hidden', 'true');
        label.appendChild(icon);
      }
    });
  }

  function measureCenterTarget() {
    centerTarget = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
  }

  function createGhost() {
    if (ghost) return;

    const r = peHl.getBoundingClientRect();

    // peHighlight is display:block — its bounding rect spans the full container
    // width even though the text "perfect event" is narrower and left-aligned.
    // Using r.left + r.width/2 as the ghost's centre would place the ghost's
    // block-centre at the original block-centre, but with text-align:center on
    // the ghost the text itself shifts right of the original → instant X jerk.
    // Fix: measure the tight bounding rect of the actual rendered glyphs via
    // createRange(), then base the ghost on TEXT centre and TEXT width so the
    // ghost overlays exactly what the user sees before the first scroll tick.
    const textRange = document.createRange();
    textRange.selectNodeContents(peHl);
    const textRect = textRange.getBoundingClientRect();

    ghostBase = {
      x: textRect.left + textRect.width / 2, // centre of TEXT, not of block
      y: r.top + r.height / 2,
      w: textRect.width, // ghost sized to text, not to block
      h: r.height,
    };

    if (!centerTarget) measureCenterTarget();

    ghost = peHl.cloneNode(true);
    ghost.id = 'peGhostTitle';
    ghost.classList.remove('pe-ghost-hidden');
    ghost.style.position = 'fixed';
    ghost.style.left = ghostBase.x + 'px';
    ghost.style.top = ghostBase.y + 'px';
    ghost.style.width = ghostBase.w + 'px';
    ghost.style.height = ghostBase.h + 'px';
    ghost.style.zIndex = '9998';
    ghost.style.pointerEvents = 'none';
    ghost.style.margin = '0';
    ghost.style.whiteSpace = 'nowrap';
    ghost.style.textAlign = 'center';
    ghost.style.transformOrigin = 'center center';
    ghost.style.willChange = 'transform, opacity, filter';
    ghost.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
    ghost.style.opacity = '1';
    ghost.style.visibility = 'visible';
    ghost.style.filter = 'blur(0)';
    document.body.appendChild(ghost);

    peHl.classList.add('pe-ghost-hidden');
  }

  function destroyGhost() {
    if (ghost) {
      ghost.remove();
      ghost = null;
      ghostBase = null;
    }
    peHl.classList.remove('pe-ghost-hidden');
  }

  function setSphereHidden() {
    spheres.forEach((s, i) => {
      sphereLocked[i] = false;
      s.classList.remove('pe-sphere-locked');
      s.style.opacity = '0';
      s.style.transform = 'translate(-50%, calc(-50% + 26px)) scale(.72)';
      s.style.filter = 'blur(18px) brightness(.55)';
    });
  }

  // Track which spheres have finished their intro animation
  const sphereLocked = new Array(spheres.length).fill(false);

  function animateSpheres(p) {
    spheres.forEach((s, i) => {
      const start = 0.39 + i * 0.012;
      const t = smootherstep(range(p, start, start + 0.16));
      const scale = 0.72 + 0.28 * t;
      const y = (1 - t) * 26;

      s.style.opacity = '1';
      s.style.filter = 'none';

      if (t >= 0.999) {
        if (!sphereLocked[i]) {
          sphereLocked[i] = true;
          s.classList.add('pe-sphere-locked');
        }

        s.style.transform = 'translate(-50%, -50%) scale(1)';
      } else {
        if (sphereLocked[i]) {
          sphereLocked[i] = false;
          s.classList.remove('pe-sphere-locked');
        }

        s.style.transform = `translate(-50%, calc(-50% + ${y}px)) scale(${scale})`;
      }
    });
  }

  function readProgress() {
    const rect = pinWrap.getBoundingClientRect();
    const total = Math.max(1, pinWrap.offsetHeight - window.innerHeight);
    targetP = clamp(-rect.top / total, 0, 1);
  }

  function draw(p) {
    ensureLabels();

    // The real title inside the orbit section is hidden only while the ghost is travelling.
    // After lock it becomes a normal static part of this page, so it will not move on scroll.
    // When scrolling back up, unlock it BEFORE the ghost branch so the reverse animation works.
    if (p < TITLE_LOCK_PROGRESS) {
      titleLocked = false;
    }

    let staticAlpha = smootherstep(range(p, TITLE_STATIC_FADE_START, TITLE_LOCK_PROGRESS));
    let ghostAlpha = 1 - smootherstep(range(p, TITLE_GHOST_FADE_START, TITLE_LOCK_PROGRESS));
    if (p >= TITLE_LOCK_PROGRESS) {
      staticAlpha = 1;
      ghostAlpha = 0;
    }

    if (orbTitle) {
      // Crossfade through CSS variables with !important priority. Older hotfix
      // rules used opacity:0/1 !important, which caused the visible blink.
      const titleIsStatic = staticAlpha > 0.001;
      orbTitle.classList.toggle('pe-title-static', titleIsStatic);
      orbTitle.style.setProperty('--pe-title-alpha', String(staticAlpha));
      orbTitle.style.setProperty('--pe-title-visibility', titleIsStatic ? 'visible' : 'hidden');
      orbTitle.style.pointerEvents = 'none';
      // Activate solar glow + deep-space background when title is locked at center.
      const sunActive = p >= TITLE_LOCK_PROGRESS;

      if (sunActive !== lastSunActive) {
        clearTimeout(labelSplashTimer);

        if (peSecond) {
          peSecond.classList.remove('planet-label-splash');
          void peSecond.offsetWidth;
          peSecond.classList.add('planet-label-splash');
        }

        labelSplashTimer = setTimeout(function () {
          if (peSecond) {
            peSecond.classList.remove('planet-label-splash');
          }
        }, 220);

        lastSunActive = sunActive;
      }

      orbTitle.classList.toggle('is-centered-sun', sunActive);

      if (peSecond) {
        peSecond.classList.toggle('is-centered-sun', sunActive);
        // --solar-alpha drives scroll-synced fade-in of the background corona layers
        peSecond.style.setProperty('--solar-alpha', String(staticAlpha));
      }
    }

    if (p < 0.008) {
      destroyGhost();
      titleLocked = false;
      if (orbTitle) {
        orbTitle.classList.remove('pe-title-static', 'is-centered-sun');
        orbTitle.style.setProperty('--pe-title-alpha', '0');
        orbTitle.style.setProperty('--pe-title-visibility', 'hidden');
      }
      if (peSecond) {
        peSecond.classList.remove('is-centered-sun', 'planet-label-splash');
        peSecond.style.setProperty('--solar-alpha', '0');
      }
      lastSunActive = false;
      clearTimeout(labelSplashTimer);
      // Reset sphere locks so intro animation plays again on next scroll
      sphereLocked.fill(false);

      if (bgDark) {
        bgDark.style.opacity = '1';
        bgDark.style.backgroundColor = 'rgba(2,13,26,0)';
      }
      if (heroPre) {
        heroPre.style.opacity = '1';
        heroPre.style.transform = 'translateY(0)';
      }
      if (heroSub) heroSub.style.opacity = '1';
      if (heroBtns) heroBtns.style.opacity = '1';
      if (heroTicker) heroTicker.style.opacity = '1';
      if (heroRight) heroRight.style.opacity = '1';

      peHl.style.transform = '';
      peHl.style.filter = '';
      peHl.style.opacity = '';

      if (peSecond) {
        peSecond.style.opacity = '1';
        peSecond.style.visibility = 'hidden';
        peSecond.style.pointerEvents = 'none';
      }

      if (heroLeft) heroLeft.classList.remove('pe-flat');
      if (heroRight) heroRight.classList.remove('pe-flat');
      if (heroSection) heroSection.classList.remove('pe-flat-hero');

      setSphereHidden();
      return;
    }

    const dark = smootherstep(range(p, 0.0, 0.4));
    if (bgDark) {
      bgDark.style.opacity = '1';
      bgDark.style.backgroundColor = `rgba(2,13,26,${dark * 0.97})`;
    }

    if (heroPre) {
      heroPre.style.opacity = String(1 - dark);
      heroPre.style.transform = `translateY(${-dark * 18}px)`;
    }
    if (heroSub) heroSub.style.opacity = String(1 - dark);
    if (heroBtns) heroBtns.style.opacity = String(1 - dark);
    if (heroTicker) heroTicker.style.opacity = String(1 - dark);
    if (heroRight) heroRight.style.opacity = String(1 - dark);

    if (dark > 0.03) {
      if (heroLeft) heroLeft.classList.add('pe-flat');
      if (heroRight) heroRight.classList.add('pe-flat');
      if (heroSection) heroSection.classList.add('pe-flat-hero');
    } else {
      if (heroLeft) heroLeft.classList.remove('pe-flat');
      if (heroRight) heroRight.classList.remove('pe-flat');
      if (heroSection) heroSection.classList.remove('pe-flat-hero');
    }

    if (p > 0.02) createGhost();

    if (ghost && ghostBase && centerTarget) {
      const move = smootherstep(range(p, TITLE_MOVE_START, TITLE_MOVE_END));

      if (p >= TITLE_LOCK_PROGRESS || titleLocked) {
        titleLocked = true;
        ghost.classList.add('pe-ghost-off');
        ghost.style.setProperty('--pe-ghost-alpha', '0');
        ghost.style.setProperty('--pe-ghost-visibility', 'hidden');
        ghost.style.opacity = '0';
        ghost.style.visibility = 'hidden';
        ghost.style.willChange = 'auto';
      } else {
        ghost.classList.remove('pe-ghost-off');
        ghost.style.setProperty('--pe-ghost-alpha', String(ghostAlpha));
        ghost.style.setProperty('--pe-ghost-visibility', ghostAlpha > 0.001 ? 'visible' : 'hidden');
        const dx = (centerTarget.x - ghostBase.x) * move;
        const dy = (centerTarget.y - ghostBase.y) * move;
        const scale = 1 - move * 0.025;
        ghost.style.position = 'fixed';
        ghost.style.left = ghostBase.x + 'px';
        ghost.style.top = ghostBase.y + 'px';
        ghost.style.width = ghostBase.w + 'px';
        ghost.style.height = ghostBase.h + 'px';
        ghost.style.transform = `translate3d(calc(-50% + ${dx}px), calc(-50% + ${dy}px), 0) scale(${scale})`;
        ghost.style.opacity = String(ghostAlpha);
        ghost.style.visibility = 'visible';
        ghost.style.filter = 'blur(0px)';
        ghost.style.willChange = 'transform, opacity, filter';
      }
    }

    if (peSecond) {
      peSecond.style.opacity = '1';
      peSecond.style.visibility = p > 0.2 ? 'visible' : 'hidden';
      peSecond.style.pointerEvents = p > 0.56 ? 'all' : 'none';
    }

    // Cover full range > 0.2: animateSpheres handles t=0 (hidden) through t=1 (locked),
    // so backward scroll past 0.36 plays the reverse animation instead of snapping.
    if (p > 0.2) animateSpheres(p);
    else setSphereHidden();
  }

  // ── LERP / SNAP CONFIG ────────────────────────────────────────────────────
  // LERP     — per-frame smoothing factor for normal scroll (≈ GSAP scrub 0.025).
  // LERP_EPS — stop threshold: once diff < this the RAF is cancelled.
  // SNAP_DIST — if |targetP - smoothP| exceeds this the animation snaps
  //             instantly instead of lerping.  Covers:
  //               • hash-nav / window.scrollTo({ behavior:'auto' })
  //               • bfcache restore (browser back / forward)
  //               • momentum fling past the section
  //             Normal scroll diffs are < 0.01 per frame → always lerps.
  const LERP = 0.025;
  const LERP_EPS = 0.0002;
  const SNAP_DIST = 0.2;

  function loop() {
    const diff = targetP - smoothP;
    const abs = Math.abs(diff);

    if (abs > SNAP_DIST) {
      // Large jump → skip lerp, settle immediately
      smoothP = targetP;
      draw(smoothP);
      rafOn = false;
    } else if (abs > LERP_EPS) {
      smoothP += diff * LERP;
      draw(smoothP);
      requestAnimationFrame(loop);
    } else {
      smoothP = targetP;
      draw(smoothP);
      rafOn = false;
    }
  }

  function queue() {
    readProgress();
    if (!rafOn) {
      rafOn = true;
      requestAnimationFrame(loop);
    }
  }

  // Snap (no lerp) to the current scroll position — used for instant
  // state corrections where visual lag would be wrong.
  function snapNow() {
    readProgress();
    smoothP = targetP;
    draw(smoothP);
    rafOn = false;
  }

  ensureLabels();
  setSphereHidden();
  measureCenterTarget();

  // ── EVENT LISTENERS ────────────────────────────────────────────────────────
  window.addEventListener('scroll', queue, { passive: true });

  window.addEventListener('resize', () => {
    centerTarget = null;
    measureCenterTarget();
    // Ghost positions are pixel-measured at creation time — stale after resize.
    // Destroy so createGhost() re-measures on the next draw frame if still needed.
    if (ghost) destroyGhost();
    queue();
  });

  // Hash-based navigation (nav link clicks that call history.pushState,
  // or any direct URL change with a fragment).
  window.addEventListener('hashchange', queue);

  // Tab switch / OS focus: when the page becomes visible the scroll position
  // is already correct but RAF was paused — re-sync state immediately.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') snapNow();
  });

  // bfcache: browser back/forward restores the page at the previous scrollY.
  // The scroll event does NOT fire for bfcache restores, so we must handle
  // pageshow explicitly.  persisted=true means it's a cache restore.
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) snapNow();
  });

  queue();
})();

// Flip-card video previews: video starts only while the card is hovered/focused.
(function () {
  document.querySelectorAll('.pe-flip-card').forEach((card) => {
    const video = card.querySelector('video');
    if (!video) return;

    video.addEventListener('loadeddata', () => card.classList.add('pe-video-ready'), {
      once: true,
    });

    const playVideo = () => {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(() => {});
    };
    const stopVideo = () => {
      video.pause();
      video.currentTime = 0;
    };

    card.addEventListener('mouseenter', playVideo);
    card.addEventListener('mouseleave', stopVideo);
    card.addEventListener('focusin', playVideo);
    card.addEventListener('focusout', stopVideo);
  });
})();

(function () {
  const canvas = document.getElementById('neon-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const CYAN = 'rgba(0,212,255,';
  const ORANGE = 'rgba(255,77,0,';

  // Lines flying from left/bottom
  const lines = Array.from({ length: 18 }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    len: 80 + Math.random() * 220,
    speed: 0.3 + Math.random() * 0.7,
    angle: -0.35 + (Math.random() - 0.5) * 0.18,
    color: i % 5 === 0 ? ORANGE : CYAN,
    alpha: 0.12 + Math.random() * 0.22,
    width: 0.4 + Math.random() * 0.8,
  }));

  // Particles
  const dots = Array.from({ length: 14 }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: 1 + Math.random() * 2,
    color: i % 4 === 0 ? ORANGE : CYAN,
    alpha: 0.4 + Math.random() * 0.5,
    speed: 0.15 + Math.random() * 0.4,
    angle: -0.35 + (Math.random() - 0.5) * 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);

    lines.forEach((l) => {
      const dx = Math.cos(l.angle) * l.len;
      const dy = Math.sin(l.angle) * l.len;
      const grad = ctx.createLinearGradient(l.x, l.y, l.x + dx, l.y + dy);
      grad.addColorStop(0, l.color + '0)');
      grad.addColorStop(0.4, l.color + l.alpha + ')');
      grad.addColorStop(1, l.color + '0)');
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x + dx, l.y + dy);
      ctx.strokeStyle = grad;
      ctx.lineWidth = l.width;
      ctx.stroke();

      // move
      l.x += Math.cos(l.angle) * l.speed;
      l.y += Math.sin(l.angle) * l.speed;
      if (l.x > W + 300 || l.y < -300) {
        l.x = Math.random() * W * 0.4;
        l.y = H * 0.5 + Math.random() * H * 0.5;
      }
    });

    dots.forEach((d) => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = d.color + d.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = d.color + '0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;

      d.x += Math.cos(d.angle) * d.speed;
      d.y += Math.sin(d.angle) * d.speed;
      if (d.x > W + 50 || d.y < -50) {
        d.x = Math.random() * W * 0.5;
        d.y = H * 0.6 + Math.random() * H * 0.4;
      }
    });

    requestAnimationFrame(draw);
  }
  draw();
})();
