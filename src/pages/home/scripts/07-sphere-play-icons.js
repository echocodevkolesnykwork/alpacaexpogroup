// Reference script block 7
(function () {
  function fixPlayIcons() {
    document.querySelectorAll('.pe-orb-sphere').forEach(function (s) {
      let label = s.querySelector('.pe-sphere-label');

      if (!label) {
        const txt = Array.from(s.childNodes)
          .filter((n) => n.nodeType === 3)
          .map((n) => n.textContent.trim())
          .join(' ')
          .trim();

        Array.from(s.childNodes).forEach((n) => {
          if (n.nodeType === 3) n.textContent = '';
        });

        label = document.createElement('span');
        label.className = 'pe-sphere-label';
        label.textContent = txt || s.getAttribute('data-label') || '';
        s.appendChild(label);
      }

      // remove any old duplicate icons inside sphere, then add one stable icon inside label
      s.querySelectorAll('.pe-play-icon').forEach((i) => i.remove());

      const icon = document.createElement('span');
      icon.className = 'pe-play-icon';
      icon.setAttribute('aria-hidden', 'true');
      label.appendChild(icon);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixPlayIcons);
  } else {
    fixPlayIcons();
  }
})();
