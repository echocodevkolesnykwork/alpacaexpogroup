// Reference script block 2
// ── Cases data ──
const cases = [
  { name: 'Parimatch', show: 'ICE London 2024', cat: 'ice', area: '240m²' },
  { name: 'Betsson', show: 'SiGMA Malta 2024', cat: 'sigma', area: '180m²' },
  { name: '1xBet', show: 'ICE London 2023', cat: 'ice', area: '320m²' },
  { name: 'Melbet', show: 'iGB Live 2024', cat: 'igb', area: '120m²' },
  { name: 'GGBet', show: 'SBC Summit 2024', cat: 'sbc', area: '96m²' },
  { name: 'Winline', show: 'GAT Expo 2024', cat: 'gat', area: '144m²' },
  { name: 'Mostbet', show: 'ICE London 2024', cat: 'ice', area: '200m²' },
  { name: 'Pin-Up', show: 'SiGMA Malta 2023', cat: 'sigma', area: '160m²' },
  { name: 'Betway', show: 'ICE London 2023', cat: 'ice', area: '280m²' },
  { name: 'Unibet', show: 'iGB Live 2023', cat: 'igb', area: '210m²' },
  { name: 'Bwin', show: 'SBC Madrid 2024', cat: 'sbc', area: '130m²' },
  { name: 'Sportingbet', show: 'GAT Expo 2023', cat: 'gat', area: '88m²' },
  { name: 'Fonbet', show: 'ICE London 2022', cat: 'ice', area: '190m²' },
  { name: 'Pinnacle', show: 'SiGMA Malta 2022', cat: 'sigma', area: '110m²' },
  { name: 'LeoVegas', show: 'iGB Affiliate 2024', cat: 'igb', area: '150m²' },
  { name: 'Casumo', show: 'SBC Summit 2023', cat: 'sbc', area: '76m²' },
  { name: 'BetVictor', show: 'GAT Expo 2024', cat: 'gat', area: '100m²' },
  { name: 'Coolbet', show: 'ICE London 2024', cat: 'ice', area: '72m²' },
  { name: 'Tipbet', show: 'SiGMA Malta 2024', cat: 'sigma', area: '64m²' },
  { name: 'Bodog', show: 'iGB Live 2023', cat: 'igb', area: '88m²' },
  { name: 'Dafabet', show: 'SBC Madrid 2023', cat: 'sbc', area: '120m²' },
  { name: 'MyBookie', show: 'GAT Expo 2023', cat: 'gat', area: '56m²' },
  { name: 'BetRebels', show: 'ICE London 2023', cat: 'ice', area: '96m²' },
  { name: 'Vbet', show: 'SiGMA Malta 2023', cat: 'sigma', area: '140m²' },
  { name: 'Betiton', show: 'iGB Live 2024', cat: 'igb', area: '68m²' },
  { name: 'SpinSamurai', show: 'SBC Summit 2024', cat: 'sbc', area: '80m²' },
  { name: 'Betmaster', show: 'GAT Expo 2024', cat: 'gat', area: '72m²' },
  { name: 'Lilibet', show: 'ICE London 2024', cat: 'ice', area: '60m²' },
  { name: 'Betandyou', show: 'SiGMA Malta 2024', cat: 'sigma', area: '92m²' },
  { name: 'Ivibet', show: 'iGB Live 2024', cat: 'igb', area: '56m²' },
];

const catColors = {
  ice: '#00C8FF',
  sigma: '#00C8FF',
  igb: '#00C8FF',
  sbc: '#00C8FF',
  gat: '#00C8FF',
};
const catLabel = {
  ice: 'ICE London',
  sigma: 'SiGMA Malta',
  igb: 'iGB Live',
  sbc: 'SBC Summit',
  gat: 'GAT Expo',
};

// ── Build grid ──
function buildGrid(filter) {
  const grid = document.getElementById('portGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? cases : cases.filter((c) => c.cat === filter);

  filtered.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'port-card';
    card.addEventListener('click', () => openLightbox(c));
    card.innerHTML = `
      <div class="card-img" style="--cat-color:${catColors[c.cat]}">
        <div class="card-img-bg" style="position:absolute;inset:0;background:radial-gradient(ellipse at 35% 45%, ${catColors[c.cat]}12 0%, transparent 65%)"></div>
        <div class="card-num">${String(i + 1).padStart(2, '0')}</div>
        <div class="card-stand-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.8">
            <rect x="2" y="8" width="20" height="14" rx="1"/>
            <path d="M6 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3"/>
            <line x1="12" y1="2" x2="12" y2="8"/>
          </svg>
        </div>
        <div class="card-overlay"></div>
        <div class="card-show-badge" style="color:${catColors[c.cat]};border-color:${catColors[c.cat]}44;background:${catColors[c.cat]}10">${c.show.split(' ').slice(0, 2).join(' ')}</div>
      </div>
      <div class="card-body">
        <div class="card-category" style="color:${catColors[c.cat]}">${catLabel[c.cat]}</div>
        <div class="card-name">${c.name}</div>
        <div class="card-show">${c.show} · ${c.area}</div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Staggered reveal on scroll
  observeCards();
}

// ── IntersectionObserver for stagger ──
function observeCards() {
  const cards = document.querySelectorAll('.port-card');
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = [...cards].indexOf(e.target);
          const col = idx % 3;
          setTimeout(() => e.target.classList.add('vis'), col * 80);
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
  );
  cards.forEach((c) => obs.observe(c));
}

// ── Filters ──
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    buildGrid(btn.dataset.filter);
  });
});

// ── Page intro animations ──
window.addEventListener('load', () => {
  ['eyebrow', 'portTitle', 'portSub', 'portFilters'].forEach((id, i) => {
    setTimeout(() => document.getElementById(id)?.classList.add('vis'), i * 100);
  });
  buildGrid('all');
});

// Lightbox
function openLightbox(c) {
  document.getElementById('lbCat').textContent = catLabel[c.cat];
  document.getElementById('lbName').textContent = c.name;
  document.getElementById('lbMeta').textContent = c.show + ' · ' + c.area;
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.add('closing');
  setTimeout(() => {
    lb.classList.remove('open', 'closing');
    document.body.style.overflow = '';
  }, 300);
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// ── Background canvas ──
(function () {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  const CYAN = [0, 200, 255],
    ORANGE = [255, 85, 0];
  const lines = Array.from({ length: 16 }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    len: 100 + Math.random() * 220,
    speed: 0.4 + Math.random() * 0.8,
    angle: -0.28 + (Math.random() - 0.5) * 0.14,
    c: i % 4 === 0 ? ORANGE : CYAN,
    alpha: 0.06 + Math.random() * 0.14,
    width: 0.3 + Math.random() * 0.6,
  }));
  function rgb(c, a) {
    return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    lines.forEach((l) => {
      const dx = Math.cos(l.angle) * l.len,
        dy = Math.sin(l.angle) * l.len;
      const g = ctx.createLinearGradient(l.x, l.y, l.x + dx, l.y + dy);
      g.addColorStop(0, rgb(l.c, 0));
      g.addColorStop(0.4, rgb(l.c, l.alpha));
      g.addColorStop(1, rgb(l.c, 0));
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x + dx, l.y + dy);
      ctx.strokeStyle = g;
      ctx.lineWidth = l.width;
      ctx.stroke();
      l.x += Math.cos(l.angle) * l.speed;
      l.y += Math.sin(l.angle) * l.speed;
      if (l.x > W + 300 || l.y < -300) {
        l.x = Math.random() * W * 0.3 - 100;
        l.y = H * 0.4 + Math.random() * H * 0.6;
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
