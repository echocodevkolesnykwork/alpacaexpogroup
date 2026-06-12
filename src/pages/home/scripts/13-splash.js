// Reference script block 13
(function () {
  // Timing Configuration
  var SPLASH_MIN_MS = 3200; // minimum text-read time
  var VIDEO_TIMEOUT_MS = 5000; // how long to wait for video before iframe fallback
  var FAILSAFE_MS = 6500; // absolute max — never block the page longer
  var SPLASH_FADE_MS = 50;
  // Synchronized Sequence Timings
  var SPLASH_CONTENT_OUT_MS = 150; // Sync text and line fade out
  var SPLASH_FLASH_DELAY_MS = 250; // Final global screen flash
  var SPLASH_HIDE_DELAY_MS = 350; // Hide splash background under the flash
  var SPLASH_FINALIZE_MS = 1000; // Cleanup DOM

  var splashState = {
    minElapsed: false,
    videoReady: false,
    closed: false,
    fadeTimer: null,
    flashNode: null,
  };

  function removeTransitionFlash() {
    if (!splashState.flashNode) return;
    splashState.flashNode.classList.remove('is-active');
    splashState.flashNode = null;
  }

  function finalizeSplash(splash) {
    if (splash && splash.parentNode) {
      splash.parentNode.removeChild(splash);
    }
    document.body.classList.add('splash-gone');
    window.dispatchEvent(new Event('scroll'));
    removeTransitionFlash();
  }

  function triggerTransitionFlash() {
    if (splashState.flashNode) return;
    var flash = document.querySelector('.sp-flash');
    if (!flash) return;

    splashState.flashNode = flash;
    flash.classList.add('is-active');

    flash.addEventListener('animationend', removeTransitionFlash, { once: true });
    setTimeout(removeTransitionFlash, 650);
  }

  function closeSplash() {
    if (splashState.closed) return;
    splashState.closed = true;
    var splash = document.getElementById('splash-screen');

    // 1. Trigger the neon line charge
    if (splash) {
      splash.classList.add('line-flash');
    }

    // 2. Fade out text and line simultaneously
    setTimeout(function () {
      if (splash) {
        splash.classList.add('content-out');
      }
    }, SPLASH_CONTENT_OUT_MS);

    // 3. Trigger global transition flash
    setTimeout(triggerTransitionFlash, SPLASH_FLASH_DELAY_MS);

    // 4. Hide splash screen background
    setTimeout(function () {
      if (splash) {
        splash.classList.add('hide');
      }
    }, SPLASH_HIDE_DELAY_MS);

    // 5. Finalize and clean up DOM
    setTimeout(function () {
      finalizeSplash(splash);
    }, SPLASH_FINALIZE_MS);
  }

  function maybeFinishSplash() {
    var splash = document.getElementById('splash-screen');
    if (!splash) return;

    if (!splashState.minElapsed || !splashState.videoReady || splashState.closed) return;
    if (splashState.fadeTimer) return;

    splashState.fadeTimer = setTimeout(closeSplash, SPLASH_FADE_MS);
  }

  function initHeroVideoFallback() {
    var hero = document.getElementById('heroRight');
    var video = document.getElementById('heroBgVideo');
    var fallback = hero ? hero.querySelector('.hero-vid-fallback') : null;
    var source = document.getElementById('heroBgVideoSource');
    var localSrc = source && source.getAttribute('src') ? source.getAttribute('src').trim() : '';

    if (!hero || !video || !fallback) return;

    function markVideoReady() {
      if (splashState.closed) return;
      splashState.videoReady = true;
      maybeFinishSplash();
    }

    function showFallback() {
      if (splashState.closed) return;
      video.hidden = true;
      fallback.hidden = false;
      markVideoReady();
    }

    function showLocalVideo() {
      if (splashState.closed) return;
      fallback.hidden = true;
      video.hidden = false;

      var playPromise = video.play ? video.play() : null;
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(showFallback);
      }

      markVideoReady();
    }

    if (!localSrc) {
      showFallback();
      return;
    }

    video.hidden = true;
    fallback.hidden = true;
    if (typeof video.load === 'function') video.load();

    if (video.readyState >= 2) {
      showLocalVideo();
      return;
    }

    video.addEventListener('loadeddata', showLocalVideo, { once: true });
    video.addEventListener('canplaythrough', showLocalVideo, { once: true });
    video.addEventListener('error', showFallback, { once: true });

    setTimeout(function () {
      if (splashState.closed || splashState.videoReady) return;
      showFallback();
    }, VIDEO_TIMEOUT_MS);
  }

  function startSplashSequence() {
    var splash = document.getElementById('splash-screen');
    if (!splash) return;

    setTimeout(function () {
      splashState.minElapsed = true;
      maybeFinishSplash();
    }, SPLASH_MIN_MS);

    setTimeout(function () {
      if (!splashState.closed) closeSplash();
    }, FAILSAFE_MS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initHeroVideoFallback();
      startSplashSequence();
    });
  } else {
    initHeroVideoFallback();
    startSplashSequence();
  }

  window.addEventListener('load', function () {
    maybeFinishSplash();
  });
})();
