// Reference script block 4
// PATCH: main-page portfolio images also open as a modal popup, not as rectangular inline blocks.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.portfolio .pc').forEach((card) => {
    if (card.dataset.popupBound === '1') return;
    card.dataset.popupBound = '1';
    card.addEventListener('click', (event) => {
      event.preventDefault();
      const title = card.querySelector('.pc-t')?.textContent?.trim() || 'Portfolio case';
      const client = card.querySelector('.pc-cl')?.textContent?.trim() || 'Portfolio';
      const meta = card.querySelector('.pc-m')?.textContent?.trim() || '';
      if (typeof openLightbox === 'function') {
        openLightbox({ cat: 'main', category: client, name: title, meta });
      }
    });
  });
});
