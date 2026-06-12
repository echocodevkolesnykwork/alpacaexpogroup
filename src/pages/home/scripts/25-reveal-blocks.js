// Reference script block 25
(function () {
  var blocks = document.querySelectorAll('.reveal-block');
  if (!blocks.length) return;
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  blocks.forEach(function (b) {
    io.observe(b);
  });
})();
