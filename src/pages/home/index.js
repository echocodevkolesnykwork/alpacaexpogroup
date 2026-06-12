import { defaultHomeData } from './data';
import homeLogoUrl from '../../assets/images/logo.png?url';
import heroVideoUrl from '../../assets/videos/hero/draft.mp4?url';
import popupVideo2Url from '../../assets/videos/hero/draft-2.mp4?url';
import popupVideo3Url from '../../assets/videos/hero/draft-3.MP4?url';
import planetStandUrl from '../../assets/planets/Stand/Stand.webm?url';
import planetActivationUrl from '../../assets/planets/Activation/Activation.webm?url';
import planetHostsUrl from '../../assets/planets/Hosts/Hosts.webm?url';
import planetScreensUrl from '../../assets/planets/Screens/Screens.webm?url';
import planetCateringUrl from '../../assets/planets/Catering/Catering.webm?url';
import planetMerchUrl from '../../assets/planets/Merch/Merch.webm?url';
import planetContentUrl from '../../assets/planets/Content/Content.webm?url';
import planetSupportUrl from '../../assets/planets/Support/Support.webm?url';
// Poster images: first frame from each planet's PNG sequence.
// Used as the video poster attribute — shows before the webm decodes.
import planetStandPosterUrl from '../../assets/planets/Stand/Stand - секвенція PNG/Comp 8_00000.png?url';
import planetActivationPosterUrl from '../../assets/planets/Activation/Activation - секвенція PNG/Comp 2_00000 1.png?url';
import planetHostsPosterUrl from '../../assets/planets/Hosts/Hosts - секвенція PNG/Comp 5_00000 1 1.png?url';
import planetScreensPosterUrl from '../../assets/planets/Screens/Screens - секвенція PNG/Comp 7_00000 1.png?url';
import planetCateringPosterUrl from '../../assets/planets/Catering/Catering - секвенція PNG/Comp 3_00000 1.png?url';
import planetMerchPosterUrl from '../../assets/planets/Merch/Merch - секвенція PNG/Comp 6_00000 1.png?url';
import planetContentPosterUrl from '../../assets/planets/Content/Content - секвенція PNG/Comp 4_00000 1.png?url';
// Note: Support PNG folder name has a trailing space — preserved as-is from the source assets.
import planetSupportPosterUrl from '../../assets/planets/Support/Support - секвенція PNG /Comp 9_00000 1.png?url';
import splash from './partials/layout/splash.html?raw';
import navigation from './partials/layout/navigation.html?raw';
import heroPerfectEvent from './partials/sections/hero-perfect-event.html?raw';
import whyUs from './partials/sections/why-us.html?raw';
import shows from './partials/sections/shows.html?raw';
import contact from './partials/sections/contact.html?raw';
import footer from './partials/layout/footer.html?raw';
import portfolioOverlay from './partials/overlays/portfolio.html?raw';
import perfectEventVideoPopup from './partials/overlays/perfect-event-video.html?raw';
import projectPopup from './partials/overlays/project-popup.html?raw';
import floatingContact from './partials/overlays/floating-contact.html?raw';
import requestPopup from './partials/overlays/request-popup.html?raw';
import { renderProjectsSection } from './renderers/projects';
import { renderReviewsSection } from './renderers/reviews';

function normalizeHomeData(data) {
  return {
    projects: Array.isArray(data?.projects) ? data.projects : defaultHomeData.projects,
    reviews: Array.isArray(data?.reviews) ? data.reviews : defaultHomeData.reviews,
  };
}

// Returns a <source> element for HEVC (hvc1 codec) or an empty string when
// no HEVC file is available yet. Safari/iOS needs hvc1 mp4 for alpha video;
// Chrome/Firefox skip any source whose type they don't support — so passing ''
// here is safe: the browser falls through to the webm source below.
// Replace '' with an actual import once HEVC files are generated.
function hevcSource(url) {
  return url ? `<source src="${url}" type='video/mp4; codecs="hvc1"'>` : '';
}

export function createHomeHtml(data = defaultHomeData) {
  const homeData = normalizeHomeData(data);
  const navigationHtml = navigation.replaceAll('__HOME_LOGO_URL__', homeLogoUrl);
  const heroHtml = heroPerfectEvent
    .replaceAll('__HERO_VIDEO_URL__', heroVideoUrl)
    // webm sources (files exist)
    .replaceAll('__PLANET_STAND_URL__', planetStandUrl)
    .replaceAll('__PLANET_ACTIVATION_URL__', planetActivationUrl)
    .replaceAll('__PLANET_HOSTS_URL__', planetHostsUrl)
    .replaceAll('__PLANET_SCREENS_URL__', planetScreensUrl)
    .replaceAll('__PLANET_CATERING_URL__', planetCateringUrl)
    .replaceAll('__PLANET_MERCH_URL__', planetMerchUrl)
    .replaceAll('__PLANET_CONTENT_URL__', planetContentUrl)
    .replaceAll('__PLANET_SUPPORT_URL__', planetSupportUrl)
    // HEVC sources — empty until .mp4 hvc1 files are generated from the PNG sequences
    .replaceAll('__PLANET_STAND_HEVC_SOURCE__', hevcSource(''))
    .replaceAll('__PLANET_ACTIVATION_HEVC_SOURCE__', hevcSource(''))
    .replaceAll('__PLANET_HOSTS_HEVC_SOURCE__', hevcSource(''))
    .replaceAll('__PLANET_SCREENS_HEVC_SOURCE__', hevcSource(''))
    .replaceAll('__PLANET_CATERING_HEVC_SOURCE__', hevcSource(''))
    .replaceAll('__PLANET_MERCH_HEVC_SOURCE__', hevcSource(''))
    .replaceAll('__PLANET_CONTENT_HEVC_SOURCE__', hevcSource(''))
    .replaceAll('__PLANET_SUPPORT_HEVC_SOURCE__', hevcSource(''))
    // Popup test videos — cycling through 3 local drafts (1→2→3→1→…)
    // In WP/Toolset these tokens are absent; CMS sets data-popup-video directly.
    .replaceAll('__POPUP_VIDEO_1__', heroVideoUrl)
    .replaceAll('__POPUP_VIDEO_2__', popupVideo2Url)
    .replaceAll('__POPUP_VIDEO_3__', popupVideo3Url)
    // Poster images — first frame from each planet's PNG sequence
    .replaceAll('__PLANET_STAND_POSTER_URL__', planetStandPosterUrl)
    .replaceAll('__PLANET_ACTIVATION_POSTER_URL__', planetActivationPosterUrl)
    .replaceAll('__PLANET_HOSTS_POSTER_URL__', planetHostsPosterUrl)
    .replaceAll('__PLANET_SCREENS_POSTER_URL__', planetScreensPosterUrl)
    .replaceAll('__PLANET_CATERING_POSTER_URL__', planetCateringPosterUrl)
    .replaceAll('__PLANET_MERCH_POSTER_URL__', planetMerchPosterUrl)
    .replaceAll('__PLANET_CONTENT_POSTER_URL__', planetContentPosterUrl)
    .replaceAll('__PLANET_SUPPORT_POSTER_URL__', planetSupportPosterUrl);

  return [
    splash,
    navigationHtml,
    heroHtml,
    whyUs,
    renderProjectsSection(homeData.projects),
    renderReviewsSection(homeData.reviews),
    shows,
    contact,
    footer,
    portfolioOverlay,
    perfectEventVideoPopup,
    projectPopup,
    floatingContact,
    requestPopup,
  ].join('\n');
}
