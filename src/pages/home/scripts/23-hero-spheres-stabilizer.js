// Reference script block 23 id="hero-and-spheres-safe-final-js"
document.addEventListener('DOMContentLoaded', function () {
  const wrap = document.getElementById('peWrap') || document.querySelector('.pe-pin-wrap');
  const hero = document.getElementById('heroSection');
  const peSecond = document.getElementById('peSecond');
  const heroLeft = document.getElementById('heroLeft');
  const heroRight = document.getElementById('heroRight');

  function progressInWrap() {
    if (!wrap) return 0;
    const rect = wrap.getBoundingClientRect();
    const total = Math.max(1, rect.height - window.innerHeight);
    return Math.min(1, Math.max(0, -rect.top / total));
  }

  function stabilizeHeroAndSpheres() {
    const p = progressInWrap();

    // First hero area: keep normal hero visible and keep planet layer hidden.
    if (p < 0.2) {
      if (peSecond) {
        peSecond.classList.remove('pe-active', 'pe-focus-mode');
        peSecond.style.opacity = '0';
        peSecond.style.visibility = 'hidden';
        peSecond.style.pointerEvents = 'none';
      }
      if (heroLeft) {
        heroLeft.style.visibility = 'visible';
      }
      if (heroRight) {
        heroRight.style.visibility = 'visible';
        heroRight.style.opacity = '1';
      }
      return;
    }

    // Planet scene: allow original scroll animation, but stop sphere dimming.
    if (peSecond && p >= 0.2 && p <= 0.92) {
      peSecond.classList.add('pe-active');
      peSecond.classList.remove('pe-focus-mode');
      peSecond.style.visibility = 'visible';
      peSecond.style.opacity = '1';
      document.querySelectorAll('.pe-orb-sphere').forEach(function (s) {
        s.style.visibility = 'visible';
        s.style.filter = 'none';
        if (parseFloat(s.style.opacity || '1') < 0.35) {
          s.style.opacity = '1';
        }
      });
    }
  }

  window.addEventListener('scroll', stabilizeHeroAndSpheres, { passive: true });
  window.addEventListener('resize', stabilizeHeroAndSpheres);
  requestAnimationFrame(stabilizeHeroAndSpheres);
  setInterval(stabilizeHeroAndSpheres, 160);
});
