// Floating CTA — Safari compositor fix.
//
// ROOT CAUSES (Safari pulsation + square border):
//  1. filter:drop-shadow on .fc-main svg → GPU compositor layer with square
//     bounding box. Fixed in 30-floating-contact.css but also killed here via
//     inline !important to survive WP cache of old CSS.
//  2. fc-main::after had inset:-45% → huge compositor region. Fixed in base CSS.
//  3. backdrop-filter on .fc-btn / .fc-options → hidden compositor layers always
//     in DOM. Fixed in 30-floating-contact.css and patch-43.
//  4. animation properties from older patches. Killed here.
//
// ROOT CAUSE (Chrome blink of button+dropdown on first show):
//  will-change on wrapper caused Chrome to pre-rasterize all children
//  (including .fc-options) before CSS opacity:0 was applied → flash.
//  Fix: no will-change. Natural GPU promotion via CSS transition is correct.
(function () {
  var ua = navigator.userAgent;
  var isSafari =
    ua.includes('Safari') &&
    !ua.includes('Chrome') &&
    !ua.includes('Chromium') &&
    !ua.includes('Android');

  if (!isSafari) return;

  var wrapper = document.getElementById('floatingContact');
  if (!wrapper) return;

  // Kill ALL filter + backdrop-filter + animation on every descendant.
  // Uses inline !important — beats any !important stylesheet rule including
  // WP-injected styles with the same ID (appendStyle skip guard).
  function killCompositorTriggers() {
    // Kill compositor triggers on the WRAPPER itself — bottomBtnPulse and
    // floatingContactReveal animate #floatingContact (wrapper), not .fc-main.
    // querySelectorAll('*') returns children only, not the wrapper element.
    wrapper.style.setProperty('animation', 'none', 'important');
    wrapper.style.setProperty('filter', 'none', 'important');
    wrapper.style.setProperty('-webkit-filter', 'none', 'important');

    var all = wrapper.querySelectorAll('*');
    all.forEach(function (el) {
      el.style.setProperty('filter', 'none', 'important');
      el.style.setProperty('-webkit-filter', 'none', 'important');
      el.style.setProperty('backdrop-filter', 'none', 'important');
      el.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
      el.style.setProperty('animation', 'none', 'important');
    });
    // fc-main specific
    var fcMain = wrapper.querySelector('.fc-main');
    if (fcMain) {
      fcMain.style.setProperty('isolation', 'auto', 'important');
      fcMain.style.setProperty('will-change', 'auto', 'important');
      fcMain.style.setProperty('background', 'rgb(218, 60, 0)', 'important');
      // overflow:hidden lets Safari clip the compositing layer to border-radius
      // (overflow:visible exposes the square bounding box as the GPU tile edge)
      fcMain.style.setProperty('overflow', 'hidden', 'important');
    }
  }

  killCompositorTriggers();

  // Stylesheet for pseudo-elements (inline JS cannot target ::before/::after).
  // Fresh unique ID — appendStyle never created this → WP guard never skips it.
  if (!document.getElementById('fc-safari-pseudo-kill')) {
    var s = document.createElement('style');
    s.id = 'fc-safari-pseudo-kill';
    s.textContent =
      '#floatingContact .fc-main::before,' +
      '#floatingContact .fc-main::after{' +
      'display:none!important;content:none!important;}' +
      '#floatingContact *{' +
      'filter:none!important;' +
      '-webkit-filter:none!important;' +
      'backdrop-filter:none!important;' +
      '-webkit-backdrop-filter:none!important;}' +
      '#floatingContact .fc-main,' +
      '#floatingContact.visible .fc-main{animation:none!important;}';
    document.head.appendChild(s);
  }

  // Re-apply after deferred patches load (~1200ms).
  setTimeout(killCompositorTriggers, 1400);
})();
