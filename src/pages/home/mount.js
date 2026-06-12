import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { runClassicScripts } from '../../scripts/run-classic-scripts';
import {
  criticalHomeStyleBlocks,
  homeStyleBlocks,
  loadDeferredHomeStyleBlocks,
} from '../../styles/home';
import { defaultHomeData } from './data';
import { createHomeHtml } from './index';
import { homeScripts } from './scripts';

gsap.registerPlugin(ScrollTrigger);
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;

function appendStyle(id, css) {
  if (document.getElementById(id)) return;

  const style = document.createElement('style');
  style.id = id;
  style.textContent = css;
  document.head.appendChild(style);
}

async function loadDeferredStyles() {
  const styleBlocks = await loadDeferredHomeStyleBlocks();
  styleBlocks.forEach(([id, css]) => appendStyle(id, css));
}

function queueDeferredStyles() {
  const loadDeferred = () => {
    loadDeferredStyles().catch((error) => {
      console.error('[home] Failed to load deferred styles.', error);
    });
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadDeferred, { timeout: 1200 });
  } else {
    window.setTimeout(loadDeferred, 0);
  }
}

function appendInitialStyles() {
  criticalHomeStyleBlocks.forEach(([id, css]) => appendStyle(id, css));
  homeStyleBlocks.forEach(([id, css]) => appendStyle(id, css));
}

export function mountHomePage(root) {
  if (!root) return;

  const data = window.AEG_DATA || defaultHomeData;

  appendInitialStyles();
  root.innerHTML = createHomeHtml(data);
  runClassicScripts(homeScripts);
  queueDeferredStyles();
}
