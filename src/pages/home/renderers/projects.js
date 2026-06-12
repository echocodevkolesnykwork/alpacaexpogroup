import { escapeAttribute, escapeHtml } from './html';

const PROJECT_GRID_SIZES = [5, 5, 5];

function renderMediaItem(media) {
  if (media.type === 'video') {
    return `<video
            src="${escapeAttribute(media.src)}"
            aria-label="${escapeAttribute(media.alt || '')}"
            playsinline muted loop autoplay
          ></video>`;
  }
  if (media.type === 'youtube') {
    const ytSrc = `https://www.youtube.com/embed/${escapeAttribute(media.youtubeId)}?autoplay=0&controls=0&rel=0&modestbranding=1`;
    return `<iframe
            class="pc-slide-yt"
            src="${ytSrc}"
            data-youtube-id="${escapeAttribute(media.youtubeId)}"
            title="${escapeAttribute(media.alt || 'YouTube video')}"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          ></iframe>`;
  }
  return `<img
            src="${escapeAttribute(media.src)}"
            alt="${escapeAttribute(media.alt || '')}"
          />`;
}

function renderProjectCard(project) {
  const mediaItems = project.media?.length ? project.media : [];
  const details = project.details?.[0] || '';
  const revealClass = project.revealClass ? ` ${escapeAttribute(project.revealClass)}` : '';
  const hasMultiple = mediaItems.length > 1;
  const sliderAttr = hasMultiple ? ' data-slider' : '';

  const slides = mediaItems
    .map((m) => `\n          <div class="pc-slide">${renderMediaItem(m)}</div>`)
    .join('');

  const dots = hasMultiple
    ? `\n      <div class="pc-dots" aria-hidden="true">${mediaItems
        .map(
          (_, i) =>
            `<button class="pc-dot${i === 0 ? ' active' : ''}" data-idx="${i}" tabindex="-1"></button>`,
        )
        .join('')}</div>`
    : '';

  const nav = hasMultiple
    ? `
      <button class="pc-nav pc-nav--prev" aria-label="Попереднє фото" tabindex="-1">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="pc-nav pc-nav--next" aria-label="Наступне фото" tabindex="-1">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`
    : '';

  return `
    <div class="pc rv${revealClass}"${sliderAttr}>
      <div class="pc-bg">
        <div class="pc-slides">${slides}
        </div>
      </div>
      <div class="pc-ov"></div>
      <div class="pc-info">
        <div class="pc-cl">${escapeHtml(project.client)}</div>
        <div class="pc-t">${escapeHtml(project.title)}</div>
        <div class="pc-m">${escapeHtml(details)}</div>
      </div>${dots}${nav}
    </div>`;
}

function renderProjectGrid(projects, gridIndex) {
  const gridClass = gridIndex === 1 ? 'pg pg-alt' : 'pg';
  const deferAttrs = gridIndex > 0 ? ` data-chunk="${gridIndex}" hidden` : '';

  return `
  <div class="${gridClass}"${deferAttrs}>
    ${projects.map(renderProjectCard).join('\n')}
  </div>`;
}

function splitProjectGroups(projects) {
  let offset = 0;

  return PROJECT_GRID_SIZES.map((size) => {
    const group = projects.slice(offset, offset + size);
    offset += size;
    return group;
  }).filter((group) => group.length);
}

export function renderProjectsSection(projects) {
  const groups = splitProjectGroups(projects);
  const grids = groups
    .map((group, index) => {
      const spacer =
        index === 0
          ? ''
          : `\n  <div aria-hidden="true" class="project-block-spacer" data-chunk="${index}" hidden></div>`;
      return `${spacer}${renderProjectGrid(group, index)}`;
    })
    .join('\n');

  return `
<section class="portfolio" id="portfolio">
  <div class="sec-hd rv">
    <div class="section-title-block">
      <h2 class="sh section-title">OUR <em>PROJECTS</em></h2>
      <div class="section-subtitle">PROVEN RESULTS</div>
    </div>
  </div>
  ${grids}
  <div class="more-cases-wrap rv">
    <button aria-controls="moreCases" aria-expanded="false" class="view-more-cases" type="button">
      VIEW MORE CASES
    </button>
  </div>
  <div aria-hidden="true" class="more-cases" id="moreCases"></div>
</section>
<!-- VIDEO TESTIMONIAL -->`;
}
