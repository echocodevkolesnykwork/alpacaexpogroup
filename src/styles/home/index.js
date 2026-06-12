import criticalFoundation from './foundation/00-critical-foundation.css?raw';
import navigation from './layout/10-navigation.css?raw';
import splash from './layout/15-splash.css?raw';
import navigationLogo from './layout/20-navigation-logo.css?raw';
import sectionLayout from './layout/30-sections.css?raw';
import responsiveGrid from './layout/40-responsive-grid.css?raw';
import footer from './layout/90-footer.css?raw';
import footerLinkFix from './layout/95-footer-link-fix.css?raw';
import hero from './sections/10-hero.css?raw';
import heroMobile from './sections/15-hero-mobile.css?raw';
import statement from './sections/20-statement.css?raw';
import whyUs from './sections/30-why-us.css?raw';
import whyUsVideo from './sections/35-why-us-video.css?raw';
import whyUsFinalFixes from './sections/36-why-us-final-fixes.css?raw';
import projects from './sections/40-projects.css?raw';
import projectCardSlider from './sections/42-project-card-slider.css?raw';
import projectsMore from './sections/45-projects-more.css?raw';
import shows from './sections/50-shows.css?raw';
import reviews from './sections/54-reviews.css?raw';
import reviewsVideo from './sections/55-reviews-video.css?raw';
import process from './sections/60-process.css?raw';
import contact from './sections/70-contact.css?raw';
import standShow from './sections/80-stand-show.css?raw';
import globe from './sections/90-globe.css?raw';
import perfectEventScroll from './sections/100-perfect-event-scroll.css?raw';
import perfectEventOrbitCore from './sections/110-perfect-event-orbit-core.css?raw';
import perfectEventOrbitPositioning from './sections/111-perfect-event-orbit-positioning.css?raw';
import perfectEventSphereStyles from './sections/112-perfect-event-sphere-styles.css?raw';
import perfectEventTitleTransition from './sections/113-perfect-event-title-transition.css?raw';
import perfectEventOrbitLines from './sections/114-perfect-event-orbit-lines.css?raw';
import perfectEventTitleLock from './sections/115-perfect-event-title-lock.css?raw';
import perfectEventSubtitle from './sections/120-perfect-event-subtitle.css?raw';
import serviceCards from './components/10-service-cards.css?raw';
import messengerButtons from './components/20-messenger-buttons.css?raw';
import floatingContact from './components/30-floating-contact.css?raw';
import floatingContactReveal from './components/35-floating-contact-reveal.css?raw';
import fullCycle from './components/40-full-cycle.css?raw';
import fullCycleCleanup from './components/45-full-cycle-cleanup.css?raw';
import reveal from './utilities/10-reveal.css?raw';
import requestPopup from './overlays/10-request-popup.css?raw';
import portfolioOverlay from './overlays/20-portfolio-overlay.css?raw';
import perfectEventVideo from './overlays/30-perfect-event-video.css?raw';
import motionPolish from './legacy/10-motion-polish.css?raw';

export const criticalHomeStyleBlocks = [
  ['home-critical-foundation', criticalFoundation],
  ['home-navigation', navigation],
  ['home-splash', splash],
  ['home-navigation-logo', navigationLogo],
  ['home-hero', hero],
];

export const homeStyleBlocks = [
  ['home-section-layout', sectionLayout],
  ['home-statement', statement],
  ['home-perfect-event-scroll', perfectEventScroll],
  ['home-perfect-event-orbit-core', perfectEventOrbitCore],
  ['home-perfect-event-orbit-positioning', perfectEventOrbitPositioning],
  ['home-perfect-event-sphere-styles', perfectEventSphereStyles],
  ['home-perfect-event-title-transition', perfectEventTitleTransition],
  ['home-perfect-event-orbit-lines', perfectEventOrbitLines],
  ['home-perfect-event-title-lock', perfectEventTitleLock],
  ['home-perfect-event-subtitle', perfectEventSubtitle],
  ['home-why-us', whyUs],
  ['home-why-us-video', whyUsVideo],
  ['home-why-us-final-fixes', whyUsFinalFixes],
  ['home-projects', projects],
  ['home-project-card-slider', projectCardSlider],
  ['home-projects-more', projectsMore],
  ['home-shows', shows],
  ['home-reviews', reviews],
  ['home-reviews-video', reviewsVideo],
  ['home-process', process],
  ['home-contact', contact],
  ['home-stand-show', standShow],
  ['home-globe', globe],
  ['home-service-cards', serviceCards],
  ['home-messenger-buttons', messengerButtons],
  ['home-floating-contact', floatingContact],
  ['home-floating-contact-reveal', floatingContactReveal],
  ['home-full-cycle', fullCycle],
  ['home-full-cycle-cleanup', fullCycleCleanup],
  ['home-reveal', reveal],
  ['home-request-popup', requestPopup],
  ['home-portfolio-overlay', portfolioOverlay],
  ['home-perfect-event-video', perfectEventVideo],
  ['home-responsive-grid', responsiveGrid],
  ['home-footer', footer],
  ['home-footer-link-fix', footerLinkFix],
  ['home-motion-polish', motionPolish],
];

export async function loadDeferredHomeStyleBlocks() {
  const { legacyPatchStyleBlocks } = await import('./legacy/patches');

  return legacyPatchStyleBlocks;
}
