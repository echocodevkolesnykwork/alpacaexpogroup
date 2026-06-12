// Reference script block 14 id="pe-layer-isolation-final-fix-js"
(function () {
  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function getPeProgress() {
    const wrap = document.getElementById('pePinWrap');
    if (!wrap) return 0;
    const rect = wrap.getBoundingClientRect();
    const total = Math.max(1, rect.height - window.innerHeight);
    return clamp(-rect.top / total, 0, 1);
  }

  function setReveal(el, opacity, yOffset, withTransition) {
    if (!el) return;
    el.style.transition = withTransition ? 'opacity 0.5s, transform 0.5s' : 'none';
    el.style.opacity = String(opacity);
    el.style.transform = el._baseTransform
      ? el._baseTransform + ` translateY(${yOffset}px)`
      : `translateY(${yOffset}px)`;
    el.style.pointerEvents = opacity > 0.5 ? '' : 'none';
  }

  function updatePeLayer() {
    const peSecond = document.getElementById('peSecond');
    const nav = document.getElementById('nav');
    const subtitle = document.getElementById('peOrbSubtitle');
    const fc = document.getElementById('floatingContact');
    if (!peSecond) return;

    const p = getPeProgress();

    // ── PLANETS PHASE (0.16 → 0.85): full focus, everything hidden ──
    if (p > 0.16 && p < 0.85) {
      peSecond.classList.add('pe-active');

      if (nav) {
        nav.style.transition = 'opacity 0.4s, transform 0.4s';
        nav.style.opacity = '0';
        nav.style.transform = 'translate(-50%, -18px)';
        nav.style.pointerEvents = 'none';
      }
      // FULL CYCLE. ZERO STRESS appears together with spheres
      if (subtitle) {
        subtitle.style.transition =
          'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
        subtitle.style.opacity = '1';
        subtitle.style.visibility = 'visible';
        subtitle.style.transform = 'translateX(-50%) translateY(0) scale(1)';
        subtitle.classList.add('underline-on');
      }
      peSecond.classList.remove('pe-focus-mode');
      // floating contact hidden during planets
      if (fc) {
        fc.style.transition = 'opacity 0.3s';
        fc.style.opacity = '0';
        fc.style.pointerEvents = 'none';
      }

      // ── HERO PHASE (p ≤ 0.16): normal nav, no subtitle yet ──
    } else if (p <= 0.16) {
      peSecond.classList.remove('pe-active');
      peSecond.style.opacity = '1';
      peSecond.style.visibility = 'visible';
      peSecond.style.pointerEvents = 'auto';

      if (nav) {
        nav.style.transition = 'opacity 0.5s, transform 0.5s';
        nav.style.opacity = '1';
        nav.style.transform = 'translate(-50%, 0)';
        nav.style.pointerEvents = '';
      }
      if (subtitle) {
        subtitle.classList.remove('underline-on');
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateX(-50%) translateY(10px)';
      }
      peSecond.classList.remove('pe-focus-mode');
      if (fc) {
        fc.style.transition = '';
        fc.style.opacity = '';
        fc.style.pointerEvents = '';
      }

      // ── EXIT PHASE (p ≥ 0.85): nav + subtitle + btn fade in together ──
    } else {
      peSecond.classList.add('pe-active');

      const fadeIn = clamp((p - 0.85) / 0.15, 0, 1);
      const yOff = (1 - fadeIn) * 14;

      if (nav) {
        nav.style.transition = 'none';
        nav.style.opacity = String(fadeIn);
        nav.style.transform = `translate(-50%, ${-yOff}px)`;
        nav.style.pointerEvents = fadeIn > 0.5 ? '' : 'none';
      }
      // FULL CYCLE. ZERO STRESS — появляється разом з nav
      if (subtitle) {
        subtitle.style.transition = 'none';
        subtitle.style.opacity = String(fadeIn);
        // Scroll-driven scale: grows as FULL CYCLE. ZERO STRESS enters focus
        const fcScale = 1 + fadeIn * 0.34;
        const fcGlow = fadeIn * 0.42;
        subtitle.style.transform = `translateX(-50%) translateY(${yOff}px) scale(${fcScale})`;
        subtitle.style.textShadow = `0 0 ${14 + fadeIn * 28}px rgba(0,212,255,${fcGlow}), 0 0 ${6 + fadeIn * 12}px rgba(255,255,255,${fadeIn * 0.16})`;
        if (fadeIn > 0.45) {
          subtitle.classList.add('underline-on');
          peSecond.classList.remove('pe-focus-mode');
        } else {
          subtitle.classList.remove('underline-on');
          peSecond.classList.remove('pe-focus-mode');
        }
      }
      // floating contact — з'являється разом з nav
      if (fc) {
        fc.style.transition = 'none';
        fc.style.opacity = String(fadeIn);
        fc.style.pointerEvents = fadeIn > 0.5 ? '' : 'none';
      }
    }
  }

  window.addEventListener('scroll', updatePeLayer, { passive: true });
  window.addEventListener('resize', updatePeLayer);
  document.addEventListener('DOMContentLoaded', updatePeLayer);
  window.addEventListener('load', updatePeLayer);
  requestAnimationFrame(updatePeLayer);
})();
