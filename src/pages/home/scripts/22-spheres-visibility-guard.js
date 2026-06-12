// Reference script block 22 id="spheres-no-abrupt-off-final-js"
document.addEventListener('DOMContentLoaded', function () {
  const sphereSelectors = [
    '.pe-orb',
    '.pe-planet',
    '.pe-sphere',
    '.pe-orb-wrap',
    '#peOrbitStage',
    '#peOrbStage',
    '#peOrbs',
    '#peSpheres',
  ];

  function keepSpheresAlive() {
    const nodes = document.querySelectorAll(sphereSelectors.join(','));
    nodes.forEach(function (el) {
      const text = (el.textContent || '').toUpperCase();
      if (text.includes('FULL CYCLE') || text.includes('ZERO STRESS')) return;

      el.classList.remove('hidden', 'is-hidden', 'hide', 'is-off', 'fade-out', 'dimmed');
      el.style.visibility = 'visible';
      if (el.style.display === 'none') el.style.display = '';
      if (parseFloat(el.style.opacity || '1') < 0.08) el.style.opacity = '1';
      el.style.filter = 'none';
    });
  }

  window.addEventListener('scroll', keepSpheresAlive, { passive: true });
  window.addEventListener('resize', keepSpheresAlive);
  setInterval(keepSpheresAlive, 200);
  keepSpheresAlive();
});
