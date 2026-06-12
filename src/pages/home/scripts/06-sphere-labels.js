// Reference script block 6
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.pe-orb-sphere').forEach(function (s) {
      if (!s.querySelector('.pe-sphere-label')) {
        var txt = Array.from(s.childNodes)
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent.trim())
          .join(' ')
          .trim();
        if (txt) {
          Array.from(s.childNodes).forEach((n) => {
            if (n.nodeType === 3) n.textContent = '';
          });
          var span = document.createElement('span');
          span.className = 'pe-sphere-label';
          span.textContent = txt;
          s.appendChild(span);
        } else {
          var label = s.getAttribute('data-label') || s.getAttribute('aria-label');
          if (label) {
            var span = document.createElement('span');
            span.className = 'pe-sphere-label';
            span.textContent = label;
            s.appendChild(span);
          }
        }
      }
    });
  });
})();
