// Reference script block 12
document.querySelectorAll('.wu-video-card').forEach((card) => {
  const btn = card.querySelector('.wu-custom-play');
  const iframe = card.querySelector('iframe.vimeo-cover');

  if (!btn || !iframe) return;

  btn.addEventListener('click', () => {
    document.querySelectorAll('.wu-video-card').forEach((otherCard) => {
      if (otherCard === card) return;
      const otherIframe = otherCard.querySelector('iframe.vimeo-cover');
      const otherBtn = otherCard.querySelector('.wu-custom-play');
      if (otherIframe) {
        otherIframe.src = otherIframe.src
          .replace('autoplay=1', 'autoplay=0')
          .replace('controls=1', 'controls=0');
        otherIframe.style.pointerEvents = 'none';
      }
      if (otherBtn) otherBtn.classList.remove('is-hidden');
    });

    iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1').replace('controls=0', 'controls=1');

    iframe.style.pointerEvents = 'auto';
    btn.classList.add('is-hidden');
  });
});
