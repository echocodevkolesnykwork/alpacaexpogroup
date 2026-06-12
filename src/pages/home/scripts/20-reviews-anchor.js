// Reference script block 20 id="reviews-anchor-fix-final"
(function () {
  function scrollToReviews(event) {
    var target = document.getElementById('reviews');
    if (!target) return;
    if (event) event.preventDefault();

    if (typeof window.closeMenu === 'function') window.closeMenu();

    var nav = document.getElementById('nav');
    var navHeight = nav ? nav.getBoundingClientRect().height : 0;
    var extraGap = window.matchMedia('(max-width: 768px)').matches ? 28 : 34;
    var y = target.getBoundingClientRect().top + window.pageYOffset - navHeight - extraGap;

    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

    if (history.pushState) history.pushState(null, '', '#reviews');
  }

  function init() {
    document.querySelectorAll('a[href="#reviews"]').forEach(function (link) {
      link.addEventListener('click', scrollToReviews);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
