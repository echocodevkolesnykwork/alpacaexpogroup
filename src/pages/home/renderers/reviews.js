import { escapeAttribute, escapeHtml } from './html';

const CHUNK_SIZE = 4;

// In WP/Toolset this src comes from window.AEG_DATA.reviewVideo or ACF per-row field.
// Extra chunks reuse the same video; swap URL per row when WP data is available.
const VIDEO_SRC =
  'https://player.vimeo.com/video/1189839327?autoplay=1&muted=1&loop=1&background=1&autopause=0&controls=0';
const VIDEO_BADGE = '30 years · Real reactions';

function renderVideoCell() {
  return `
      <div class="vt-cell-video rv">
        <div class="vt-video-wrap clients-video-vertical">
          <iframe
            src="${VIDEO_SRC}"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
          ></iframe>
          <div class="vt-video-badge">${VIDEO_BADGE}</div>
        </div>
      </div>`;
}

function renderReviewLogo(logo, company) {
  if (logo?.type === 'html') return logo.html;

  return `
          <img
            src="${escapeAttribute(logo?.src)}"
            alt="${escapeAttribute(logo?.alt || company)}"
            style="${escapeAttribute(logo?.style || 'height: 36px; width: auto; object-fit: contain')}"
          />`;
}

function renderReviewCard(review) {
  return `
      <div class="vt-cell rv">
        <div class="vt-logo">
          ${renderReviewLogo(review.logo, review.company)}
        </div>
        <div class="vt-quote-wrap">
          <div class="vt-quote">
            ${escapeHtml(review.text)}
          </div>
        </div>
        <div class="vt-author">
          <div class="vt-author-name">
            ${escapeHtml(review.authorName)}, <span class="vt-author-role">${escapeHtml(review.authorPosition)}</span>
          </div>
        </div>
      </div>`;
}

export function renderReviewsSection(reviews) {
  const initialReviews = reviews.slice(0, CHUNK_SIZE);
  const extraReviews = reviews.slice(CHUNK_SIZE);

  const extraChunks = [];
  for (let i = 0; i < extraReviews.length; i += CHUNK_SIZE) {
    extraChunks.push(extraReviews.slice(i, i + CHUNK_SIZE));
  }

  // Even-indexed extra chunks (0, 2, 4…) get vr-chunk-alt → video on right.
  // Bento (row 0) is always video-left, so the first extra chunk alternates to right.
  // In WP/Toolset: add vr-chunk-alt server-side via loop index or ACF field.
  const chunksHtml = extraChunks
    .map((chunk, idx) => {
      const altClass = idx % 2 === 0 ? ' vr-chunk-alt' : '';
      return `
  <div class="vr-chunk${altClass}" data-chunk="${idx + 1}" hidden>
      ${renderVideoCell()}
      ${chunk.map(renderReviewCard).join('\n')}
  </div>`;
    })
    .join('');

  return `
<section class="video-testimonial" id="reviews">
  <div class="container">
    <!-- Section title -->
    <div class="vt-head rv">
      <h2 class="sh section-title">WHAT OUR CLIENTS <em>SAY?</em></h2>
      <div class="section-subtitle">REAL REACTION. REAL STAND.</div>
    </div>

    <!-- Bento 3-col grid: video left (col 1, rowspan 2) + first ${CHUNK_SIZE} review cards -->
    <div class="vt-bento">
      ${renderVideoCell()}
      ${initialReviews.map(renderReviewCard).join('\n')}
    </div>
    <!-- /vt-bento -->
${chunksHtml}
    <!-- Button matching VIEW MORE CASES style -->
    <div class="more-cases-wrap rv">
      <button
        aria-controls="moreReviews"
        aria-expanded="false"
        class="view-more-cases"
        id="moreReviewsBtn"
        type="button"
      >
        VIEW MORE REVIEWS
      </button>
    </div>
    <div class="more-reviews" id="moreReviews" aria-hidden="true"></div>
  </div>
</section>
<!-- GLOBE / WHERE WE BUILD -->`;
}
