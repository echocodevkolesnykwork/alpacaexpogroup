// Reference script block 19
(function () {
  function openRequestPopup(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    var popup = document.getElementById('requestPopup');
    if (!popup) return;
    popup.removeAttribute('inert');
    popup.classList.add('is-open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.classList.add('request-popup-open');
    setTimeout(function () {
      var first = popup.querySelector('input, textarea, button');
      if (first) first.focus();
    }, 80);
  }

  function closeRequestPopup() {
    var popup = document.getElementById('requestPopup');
    if (!popup) return;
    popup.classList.remove('is-open');
    popup.setAttribute('aria-hidden', 'true');
    popup.setAttribute('inert', '');
    document.body.classList.remove('request-popup-open');
  }

  window.openRequestPopup = openRequestPopup;
  window.closeRequestPopup = closeRequestPopup;

  document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('requestPopup');

    document.querySelectorAll('a, button').forEach(function (el) {
      var text = (el.textContent || '').trim().toLowerCase();
      if (text === 'request concept' || text === 'request a concept') {
        el.addEventListener('click', openRequestPopup);
        if (el.tagName.toLowerCase() === 'a') {
          el.setAttribute('href', '#request-concept');
        }
      }
    });

    if (popup) {
      popup.querySelectorAll('[data-request-close]').forEach(function (el) {
        el.addEventListener('click', closeRequestPopup);
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeRequestPopup();
    });
  });
})();
