// Reference script block 16 id="final-contact-edge-align-script"
// Positions the floating CTA anchored to the section container (max-width 1120px):
//   ≤768px  → mobile CSS takes over (right: 24px from patch-15)
//   769–1439px → 40px from container right edge
//   ≥1440px    → 60px from container right edge
(function () {
  function alignFloatingContact() {
    var floating = document.getElementById('floatingContact');
    if (!floating) return;

    if (window.innerWidth <= 768) {
      floating.style.removeProperty('right');
      floating.style.removeProperty('left');
      return;
    }

    var CONTAINER = 1120;
    var gutter = window.innerWidth >= 1440 ? 60 : 40;
    var rightOffset = Math.max(32, Math.round((window.innerWidth - CONTAINER) / 2 - gutter));

    floating.style.setProperty('right', rightOffset + 'px', 'important');
    floating.style.setProperty('left', 'auto', 'important');
  }

  window.addEventListener('load', alignFloatingContact);
  window.addEventListener('resize', alignFloatingContact);
  document.addEventListener('DOMContentLoaded', alignFloatingContact);
  setTimeout(alignFloatingContact, 50);
  setTimeout(alignFloatingContact, 300);
})();
