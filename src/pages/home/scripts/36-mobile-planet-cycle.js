// Mobile planet auto-cycle — rotates the is-mobile-focus highlight through
// all orbit spheres on mobile (≤768px), one planet per second, looping.
// CSS transitions (0.5s) on filter/transform handle the smooth crossfade.
// Runs immediately so a planet is already highlighted when the user scrolls
// to the planet section. Stops/resumes if the section leaves / enters view.
(function () {
  if (!window.matchMedia('(max-width: 768px)').matches) return;

  var spheres = [];
  var current = 0;
  var timerId = null;

  function gather() {
    spheres = Array.from(document.querySelectorAll('#peSecondRight .pe-orb-sphere'));
  }

  function clearFocus() {
    spheres.forEach(function (s) {
      s.classList.remove('is-mobile-focus');
    });
  }

  function next() {
    if (!spheres.length) return;
    clearFocus();
    spheres[current].classList.add('is-mobile-focus');
    current = (current + 1) % spheres.length;
  }

  function start() {
    if (timerId || !spheres.length) return;
    next();
    timerId = window.setInterval(next, 1000);
  }

  function stop() {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
    clearFocus();
    current = 0;
  }

  gather();
  if (!spheres.length) return;

  var container = document.getElementById('peSecond');

  if (!container || typeof IntersectionObserver === 'undefined') {
    start();
    return;
  }

  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          start();
        } else {
          stop();
        }
      });
    },
    { threshold: 0.05 },
  );

  obs.observe(container);
})();
