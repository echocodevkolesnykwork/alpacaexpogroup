var e=[[`home-patch-projects-spacing`,`/* Reference style block 2 data-fix="projects-spacing" */
/* FIX: clean spacing between OUR PROJECTS groups without affecting card grid */
.portfolio > .pg {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  align-items: stretch;
}
.portfolio > .project-block-spacer {
  height: 38px;
  width: 100%;
}
.portfolio > .pg .pc {
  height: 100%;
}
@media (max-width: 768px) {
  .portfolio > .project-block-spacer {
    height: 28px;
  }
}

/* spacing when VIEW MORE CASES раскрыт */
#moreCases {
  margin-top: 38px;
}

/* FIX: spacing for dynamically loaded cases */
#moreCases .pg {
  margin: 0 !important;
}

#moreCases .pg + .pg {
  margin-top: 38px !important;
}

#moreCases .pc {
  height: 100%;
}

/* CONTACT ICONS HOVER EFFECT */
.contact-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.25s ease;
}

.contact-icons a:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.4);
  background: rgba(0, 212, 255, 0.12);
}

/* Brand-specific */
.contact-icons a.telegram:hover {
  box-shadow: 0 0 18px rgba(0, 136, 204, 0.6);
  background: rgba(0, 136, 204, 0.15);
}

.contact-icons a.whatsapp:hover {
  box-shadow: 0 0 18px rgba(37, 211, 102, 0.6);
  background: rgba(37, 211, 102, 0.15);
}

.full-cycle-fix {
  font-size: 1.15em;
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px) scale(0.94);
  transition:
    opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

#floatingContact.visible {
  pointer-events: auto;
  opacity: 1;
  transform: translateY(0) scale(1);
  animation: bottomBtnPulse 2s ease-in-out 0.5s infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-project-popup-base`,`/* Reference style block 3 data-fix="our-projects-popup-only" */
/* OUR PROJECTS popup only — no grid/layout changes */
.op-popup {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 28px;
  background: rgba(2, 10, 20, 0.92);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
}
.op-popup.open {
  display: flex;
}
.op-popup-card {
  position: relative;
  width: min(980px, 94vw);
  max-height: 90vh;
  border-radius: 24px;
  overflow: hidden;
  background: #020d1a;
  border: 1px solid rgba(0, 212, 255, 0.22);
  box-shadow:
    0 44px 120px rgba(0, 0, 0, 0.72),
    0 0 70px rgba(0, 212, 255, 0.12);
}
.op-popup-img {
  width: 100%;
  max-height: calc(90vh - 108px);
  background: #020d1a;
  display: flex;
  align-items: center;
  justify-content: center;
}
.op-popup-img img {
  width: 100%;
  max-height: calc(90vh - 108px);
  object-fit: contain;
  display: block;
}
.op-popup-info {
  padding: 18px 24px 22px;
  background: rgba(6, 14, 26, 0.92);
  border-top: 0.5px solid rgba(255, 255, 255, 0.08);
}
.op-popup-client {
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: none;
  margin-bottom: 5px;
}
.op-popup-title {
  font-family: var(--font-d);
  font-size: clamp(18px, 2vw, 28px);
  font-weight: 700;
  color: #fff;
}
.op-popup-meta {
  font-size: 12px;
  color: var(--muted);
  margin-top: 6px;
}
.op-popup-close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  background: rgba(2, 13, 26, 0.78);
  color: #fff;
  font-size: 24px;
  line-height: 34px;
  cursor: default;
}
.op-popup-close:hover {
  color: var(--accent);
  border-color: rgba(0, 212, 255, 0.42);
}
#portfolio .pc {
  cursor: zoom-in;
}
@media (max-width: 768px) {
  .op-popup {
    padding: 14px;
  }
  .op-popup-card {
    border-radius: 18px;
  }
  .op-popup-info {
    padding: 16px 18px 18px;
  }
}

/* CONTACT ICONS HOVER EFFECT */
.contact-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.25s ease;
}

.contact-icons a:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.4);
  background: rgba(0, 212, 255, 0.12);
}

/* Brand-specific */
.contact-icons a.telegram:hover {
  box-shadow: 0 0 18px rgba(0, 136, 204, 0.6);
  background: rgba(0, 136, 204, 0.15);
}

.contact-icons a.whatsapp:hover {
  box-shadow: 0 0 18px rgba(37, 211, 102, 0.6);
  background: rgba(37, 211, 102, 0.15);
}

.full-cycle-fix {
  font-size: 1.15em;
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-project-popup-animation`,`/* Reference style block 4 data-fix="our-projects-card-expand-animation" */
/* CARD EXPAND ANIMATION: popup opens from clicked OUR PROJECTS card */
.op-popup {
  display: flex !important;
  opacity: 0;
  pointer-events: none;
  background: rgba(2, 10, 20, 0);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  transition:
    opacity 0.34s ease,
    background 0.34s ease,
    backdrop-filter 0.34s ease,
    -webkit-backdrop-filter 0.34s ease;
}
.op-popup.open {
  opacity: 1;
  pointer-events: auto;
  background: rgba(2, 10, 20, 0.9);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
}
.op-popup-card {
  transform-origin: center center;
  opacity: 0;
}
.op-popup.open .op-popup-card {
  animation: opCardExpand 0.62s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.op-popup.closing {
  opacity: 0;
  pointer-events: none;
}
.op-popup.closing .op-popup-card {
  animation: opCardCollapse 0.28s cubic-bezier(0.4, 0, 0.2, 1) both;
}
@keyframes opCardExpand {
  0% {
    opacity: 0.72;
    transform: translate3d(var(--op-start-x, 0px), var(--op-start-y, 0px), 0)
      scale(var(--op-start-scale, 0.34));
    filter: blur(2px);
    border-radius: 18px;
  }
  52% {
    opacity: 1;
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    filter: blur(0);
    border-radius: 24px;
  }
}
@keyframes opCardCollapse {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    filter: blur(0);
  }
  to {
    opacity: 0;
    transform: translate3d(var(--op-start-x, 0px), var(--op-start-y, 0px), 0)
      scale(var(--op-start-scale, 0.34));
    filter: blur(2px);
  }
}

/* CONTACT ICONS HOVER EFFECT */
.contact-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.25s ease;
}

.contact-icons a:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.4);
  background: rgba(0, 212, 255, 0.12);
}

/* Brand-specific */
.contact-icons a.telegram:hover {
  box-shadow: 0 0 18px rgba(0, 136, 204, 0.6);
  background: rgba(0, 136, 204, 0.15);
}

.contact-icons a.whatsapp:hover {
  box-shadow: 0 0 18px rgba(37, 211, 102, 0.6);
  background: rgba(37, 211, 102, 0.15);
}

.full-cycle-fix {
  font-size: 1.15em;
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-why-us-video-card`,`/* Reference style block 5 */
.wu-video-card iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* CONTACT ICONS HOVER EFFECT */
.contact-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.25s ease;
}

.contact-icons a:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.4);
  background: rgba(0, 212, 255, 0.12);
}

/* Brand-specific */
.contact-icons a.telegram:hover {
  box-shadow: 0 0 18px rgba(0, 136, 204, 0.6);
  background: rgba(0, 136, 204, 0.15);
}

.contact-icons a.whatsapp:hover {
  box-shadow: 0 0 18px rgba(37, 211, 102, 0.6);
  background: rgba(37, 211, 102, 0.15);
}

.full-cycle-fix {
  font-size: 1.15em;
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-why-us-vimeo-embed`,`/* Reference style block 6 */
/* Vimeo embeds inside WHY US video cards */
.wu-video-card iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* CONTACT ICONS HOVER EFFECT */
.contact-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.25s ease;
}

.contact-icons a:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.4);
  background: rgba(0, 212, 255, 0.12);
}

/* Brand-specific */
.contact-icons a.telegram:hover {
  box-shadow: 0 0 18px rgba(0, 136, 204, 0.6);
  background: rgba(0, 136, 204, 0.15);
}

.contact-icons a.whatsapp:hover {
  box-shadow: 0 0 18px rgba(37, 211, 102, 0.6);
  background: rgba(37, 211, 102, 0.15);
}

.full-cycle-fix {
  font-size: 1.15em;
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-timing-vimeo-cover`,`/* Reference style block 7 data-fix="timing-vimeo-cover" */
/* FIX: Timing Vimeo fills entire video card */
.wu-video-card iframe.vimeo-cover {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  width: 177.78% !important;
  height: 100% !important;
  min-width: 100% !important;
  min-height: 177.78% !important;
  transform: translate(-50%, -50%) !important;
  border: 0 !important;
}
@media (max-width: 768px) {
  .wu-video-card iframe.vimeo-cover {
    width: 177.78% !important;
    height: 100% !important;
    min-width: 100% !important;
    min-height: 177.78% !important;
  }
}

/* CONTACT ICONS HOVER EFFECT */
.contact-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.25s ease;
}

.contact-icons a:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.4);
  background: rgba(0, 212, 255, 0.12);
}

/* Brand-specific */
.contact-icons a.telegram:hover {
  box-shadow: 0 0 18px rgba(0, 136, 204, 0.6);
  background: rgba(0, 136, 204, 0.15);
}

.contact-icons a.whatsapp:hover {
  box-shadow: 0 0 18px rgba(37, 211, 102, 0.6);
  background: rgba(37, 211, 102, 0.15);
}

.full-cycle-fix {
  font-size: 1.15em;
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-contact-icons-repeat`,`/* Reference style block 8 */
/* GLOBAL FIX: all Vimeo videos cover full container */
.wu-video-card iframe.vimeo-cover {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  width: 177.78% !important;
  height: 100% !important;
  min-width: 100% !important;
  min-height: 177.78% !important;
  transform: translate(-50%, -50%) !important;
  border: 0 !important;
}

/* CONTACT ICONS HOVER EFFECT */
.contact-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.25s ease;
}

.contact-icons a:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.4);
  background: rgba(0, 212, 255, 0.12);
}

/* Brand-specific */
.contact-icons a.telegram:hover {
  box-shadow: 0 0 18px rgba(0, 136, 204, 0.6);
  background: rgba(0, 136, 204, 0.15);
}

.contact-icons a.whatsapp:hover {
  box-shadow: 0 0 18px rgba(37, 211, 102, 0.6);
  background: rgba(37, 211, 102, 0.15);
}

.full-cycle-fix {
  font-size: 1.15em;
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-perfect-event-subtitle-bottom`,`/* Reference style block 9 data-fix="perfect-event-subtitle-bottom" */
/* FIX: FULL CYCLE subtitle is a clean text line below the sphere composition */
#peSecond {
  padding-bottom: 88px !important;
}

#peSecondRight {
  transform: translateY(-30px);
}

#peOrbSubtitle.pe-orb-subtitle-bottom {
  position: absolute !important;
  left: 50% !important;
  top: auto !important;
  bottom: 32px !important;
  transform: translateX(-50%) !important;
  z-index: 30 !important;

  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;

  font-family: var(--font-b) !important;
  font-size: 12px !important;
  line-height: 1 !important;
  font-weight: 500 !important;
  letter-spacing: 0.28em !important;
  text-transform: uppercase !important;
  color: rgba(255, 255, 255, 0.36) !important;
  text-shadow: none !important;
  white-space: nowrap !important;
  pointer-events: none !important;
}

@media (max-width: 768px) {
  #peSecond {
    padding-bottom: 62px !important;
  }

  #peSecondRight {
    transform: translateY(-20px);
  }

  #peOrbSubtitle.pe-orb-subtitle-bottom {
    bottom: 20px !important;
    font-size: 10px !important;
    letter-spacing: 0.18em !important;
  }
}

/* CONTACT ICONS HOVER EFFECT */
.contact-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.25s ease;
}

.contact-icons a:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.4);
  background: rgba(0, 212, 255, 0.12);
}

/* Brand-specific */
.contact-icons a.telegram:hover {
  box-shadow: 0 0 18px rgba(0, 136, 204, 0.6);
  background: rgba(0, 136, 204, 0.15);
}

.contact-icons a.whatsapp:hover {
  box-shadow: 0 0 18px rgba(37, 211, 102, 0.6);
  background: rgba(37, 211, 102, 0.15);
}

.full-cycle-fix {
  font-size: 1.15em;
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-hero-grid-alignment`,`/* Reference style block 10 data-fix="hero-grid-alignment" */
/* HERO: keep content in the same visual grid as the landing */
#peSecond {
  justify-content: center !important;
  padding-left: 32px !important;
  padding-right: 182px !important;
}

#peSecondLeft {
  display: none !important;
}

#peSecondRight {
  width: 100% !important;
  max-width: 1120px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  transform: translateY(-30px);
}

#peOrbTitle {
  left: 50% !important;
}

#peOrbSubtitle.pe-orb-subtitle-bottom {
  left: 50% !important;
}

@media (max-width: 768px) {
  #peSecond {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  #peSecondRight {
    max-width: 100% !important;
    transform: translateY(-20px);
  }
}

/* CONTACT ICONS HOVER EFFECT */
.contact-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.25s ease;
}

.contact-icons a:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 0 18px rgba(0, 212, 255, 0.4);
  background: rgba(0, 212, 255, 0.12);
}

/* Brand-specific */
.contact-icons a.telegram:hover {
  box-shadow: 0 0 18px rgba(0, 136, 204, 0.6);
  background: rgba(0, 136, 204, 0.15);
}

.contact-icons a.whatsapp:hover {
  box-shadow: 0 0 18px rgba(37, 211, 102, 0.6);
  background: rgba(37, 211, 102, 0.15);
}

/* HERO ALIGNMENT FIX — screenshot-style */
.hero-left {
  padding-left: clamp(72px, 6.3vw, 112px) !important;
  padding-right: clamp(42px, 4vw, 70px) !important;
}

.hero-card,
.hero-stats {
  max-width: 640px;
  margin-left: 0 !important;
  margin-right: auto !important;
}

.hero-sub {
  max-width: 610px !important;
}

.btns {
  justify-content: flex-start !important;
}

.hero-stats {
  width: fit-content !important;
  max-width: 100% !important;
}

@media (max-width: 1100px) {
  .hero-left {
    padding-left: 48px !important;
    padding-right: 182px !important;
  }
}

@media (max-width: 768px) {
  .hero-left {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .hero-card,
  .hero-stats,
  .hero-sub {
    max-width: none !important;
  }

  .hero-stats {
    width: 100% !important;
  }
}

/* HERO TICKER FIX — align exhibitions row to the exact hero text width */
.hero-tag-ticker,
#heroTicker {
  position: absolute !important;
  bottom: 24px !important;
  left: 52px !important;
  right: auto !important;
  width: min(460px, calc(100% - 104px)) !important;
  max-width: 460px !important;
  margin: 0 !important;
}

#heroTicker .ticker-track {
  width: max-content;
}

@media (max-width: 768px) {
  .hero-tag-ticker,
  #heroTicker {
    left: 24px !important;
    bottom: 20px !important;
    width: calc(100% - 48px) !important;
    max-width: none !important;
  }
}

.full-cycle-fix {
  font-size: 1.15em;
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-mobile-adaptation`,`/* Reference style block 11 data-fix="mobile-adaptation-final" */
/* === FINAL MOBILE ADAPTATION PATCH === */
/* ── TABLET: uniform project cards (769–991px) ──────────────────────────────
   Desktop shows large-card asymmetric grids (2fr+1fr+1fr / pg-alt).
   GSAP-driven scroll animations don't run at this range, and the asymmetric
   layout looks unbalanced on tablet. Force a uniform 2-column grid with
   equal fixed-height cards instead. */
@media (min-width: 769px) and (max-width: 991px) {
  #portfolio .pg,
  #portfolio .pg.pg-alt,
  #moreCases .pg,
  #moreCases .pg.pg-alt {
    grid-template-columns: 1fr 1fr !important;
    grid-template-rows: auto !important;
  }

  #portfolio .pg .pc,
  #portfolio .pg.pg-alt .pc,
  #portfolio .pg .pc:first-child,
  #portfolio .pg.pg-alt .pc:first-child,
  #moreCases .pg .pc,
  #moreCases .pg.pg-alt .pc {
    grid-column: auto !important;
    grid-row: auto !important;
    height: 280px !important;
    min-height: 280px !important;
    aspect-ratio: auto !important;
  }
}

@media (max-width: 768px) {
  html,
  body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden !important;
  }

  #splash-screen .sp-text,
  .sp-text {
    font-size: clamp(30px, 9vw, 58px) !important;
    line-height: 0.96 !important;
    padding: 0 22px !important;
    text-align: center !important;
    width: 100% !important;
  }

  nav {
    width: calc(100% - 24px) !important;
    max-width: none !important;
    left: 12px !important;
    right: 12px !important;
    transform: none !important;
    top: 10px !important;
    height: 54px !important;
    padding: 0 14px !important;
    border-radius: 16px !important;
  }
  .logo {
    font-size: 14px !important;
    white-space: nowrap !important;
  }
  .burger {
    display: flex !important;
  }
  .mobile-menu {
    gap: 20px !important;
    padding: 72px 22px 34px !important;
  }
  .mobile-menu a {
    font-size: 18px !important;
    line-height: 1.05 !important;
  }
  .mobile-menu .mob-cta {
    font-size: 11px !important;
    padding: 13px 28px !important;
  }

  .pe-pin-wrap {
    height: 260vh !important;
    overflow: visible !important;
  }
  .pe-pin-wrap .hero,
  .hero {
    display: flex !important;
    flex-direction: column-reverse !important;
    height: 100dvh !important;
    min-height: 100dvh !important;
    padding-top: 72px !important;
    overflow: hidden !important;
  }
  .hero-right {
    flex: 0 0 42dvh !important;
    min-height: 42dvh !important;
    width: 100% !important;
    border-radius: 0 0 22px 22px !important;
  }
  .hero-vid iframe {
    width: 177.78vh !important;
    height: 100vh !important;
    min-width: 100% !important;
    min-height: 56.25vw !important;
  }
  .hero-left {
    flex: 1 1 auto !important;
    width: 100% !important;
    min-height: 0 !important;
    justify-content: center !important;
    padding: 24px 22px 28px !important;
    border-right: 0 !important;
    border-top: 0.5px solid rgba(255, 255, 255, 0.07) !important;
  }
  .hero-card,
  #heroLeft {
    max-width: none !important;
  }
  .hero-pre {
    font-size: clamp(28px, 8.3vw, 42px) !important;
    line-height: 1.02 !important;
    white-space: normal !important;
    max-width: 100% !important;
  }
  .pe-headline {
    margin-bottom: 12px !important;
  }
  .pe-highlight,
  #peHighlight {
    font-size: clamp(34px, 10vw, 52px) !important;
    line-height: 1.02 !important;
    white-space: normal !important;
  }
  .hero-sub,
  #heroSub {
    max-width: 100% !important;
    font-size: 12px !important;
    line-height: 1.55 !important;
    margin-bottom: 16px !important;
  }
  .btns,
  #heroBtnsRow {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 10px !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  .btn-p,
  .btn-g {
    width: 100% !important;
    text-align: center !important;
    padding: 12px 10px !important;
    font-size: 10px !important;
    white-space: nowrap !important;
  }

  /* Exhibition ticker: same width as hero text, no drifting on mobile */
  .hero-tag-ticker,
  #heroTicker {
    position: relative !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
    top: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 14px 0 0 !important;
    padding: 8px 10px !important;
    border-radius: 12px !important;
    transform: none !important;
  }
  #heroTicker .ticker-track span {
    font-size: 10px !important;
  }

  .hero-stats {
    display: none !important;
  }
  .scr {
    display: none !important;
  }

  /* Second hero state / sphere scene: fit inside phone viewport */
  .pe-second-right {
    width: 100vw !important;
    height: 58dvh !important;
    top: 55% !important;
    left: 50% !important;
  }
  .pe-orb-svg {
    transform: translate(-50%, -50%) scale(0.82) !important;
    opacity: 0.56 !important;
  }
  .pe-orb-title {
    font-size: clamp(30px, 9vw, 48px) !important;
  }
  .pe-orb-sphere {
    transform: scale(0.82) !important;
  }
  .pe-orb-sphere .pe-sphere-label {
    font-size: 8px !important;
  }

  section,
  .sec,
  .statement,
  .why-us,
  .portfolio,
  .services,
  .show-block,
  .shows,
  .process,
  .video-testimonial,
  .cta-wrap {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .statement {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }
  .why-us {
    padding-top: 72px !important;
    padding-bottom: 76px !important;
  }
  .services,
  .show-block,
  .shows,
  .process,
  .portfolio {
    padding-bottom: 68px !important;
  }

  .sh {
    font-size: clamp(26px, 8vw, 38px) !important;
  }
  .eyebrow {
    font-size: 9px !important;
    margin-bottom: 10px !important;
  }
  .sec-hd {
    align-items: flex-start !important;
    gap: 10px !important;
    margin-bottom: 18px !important;
  }

  .st-inner,
  .vt-bento,
  .globe-layout,
  .services-top {
    grid-template-columns: 1fr !important;
  }

  .wu-story {
    max-width: 100% !important;
    gap: 28px !important;
  }
  .wu-item,
  .wu-item.reverse {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
    min-height: 0 !important;
    padding-bottom: 24px !important;
  }
  .wu-item.reverse .wu-video-card,
  .wu-item.reverse .wu-copy {
    order: initial !important;
  }
  .wu-video-card {
    aspect-ratio: 16/10 !important;
    border-radius: 16px !important;
  }
  .wu-copy {
    max-width: 100% !important;
    padding-left: 16px !important;
  }
  .wu-copy h3 {
    font-size: 22px !important;
  }

  /* Projects: equal compact cards on mobile */
  #portfolio .pg,
  #portfolio .pg.pg-alt,
  .portfolio .pg,
  .portfolio .pg.pg-alt {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  #portfolio .pc,
  #portfolio .pg .pc,
  #portfolio .pg.pg-alt .pc,
  .portfolio .pc,
  .portfolio .pg .pc,
  .portfolio .pg.pg-alt .pc,
  #portfolio .pc:first-child,
  .portfolio .pc:first-child {
    grid-column: auto !important;
    grid-row: auto !important;
    width: 100% !important;
    height: 180px !important;
    min-height: 180px !important;
    aspect-ratio: auto !important;
    border-radius: 16px !important;
  }
  #portfolio .pc-bg img,
  .portfolio .pc-bg img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
  .pc-info {
    padding: 11px 13px !important;
  }
  .pc-t {
    font-size: 13px !important;
  }
  .pc-m {
    font-size: 10px !important;
  }

  .svc-g,
  .show-grid,
  .shw-g,
  .svc-grid-new,
  .proc-g,
  .proc-row {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }
  .proc-arrow {
    display: none !important;
  }
  .proc-step,
  .proc-step-flip {
    min-height: 140px !important;
  }

  .svc-orbit-stage {
    grid-template-columns: 1fr 1fr !important;
    gap: 8px !important;
  }
  .svc-orbit-center {
    grid-column: 1 / -1 !important;
    order: -1 !important;
  }
  .svc-glass-btn {
    height: 112px !important;
    border-radius: 16px !important;
  }
  .svc-glass-btn span {
    font-size: 9px !important;
  }

  .vt-preview {
    border-radius: 18px !important;
  }
  .vt-bottom {
    align-items: flex-end !important;
    gap: 12px !important;
  }
  .vt-title {
    font-size: 19px !important;
  }

  .cta-box {
    flex-direction: column !important;
    align-items: stretch !important;
    text-align: left !important;
    padding: 34px 22px !important;
    gap: 22px !important;
  }
  .btn-cta {
    width: 100% !important;
    text-align: center !important;
  }

  footer {
    flex-direction: column !important;
    gap: 10px !important;
    text-align: center !important;
    padding: 24px 18px !important;
  }

  .floating-contact {
    opacity: 0;
    animation:
      floatingBtnReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 2.2s forwards,
      bottomBtnPulse 2s ease-in-out 3.2s infinite;
    right: 14px !important;
    bottom: 14px !important;
  }
  .fc-main {
    width: 56px !important;
    height: 56px !important;
  }
}

@media (max-width: 420px) {
  .hero-right {
    flex-basis: 39dvh !important;
    min-height: 39dvh !important;
  }
  .hero-left {
    padding: 20px 18px 24px !important;
  }
  .hero-pre {
    font-size: clamp(25px, 8vw, 34px) !important;
  }
  .pe-highlight,
  #peHighlight {
    font-size: clamp(31px, 9.5vw, 42px) !important;
  }
  .hero-sub,
  #heroSub {
    font-size: 11.5px !important;
  }
  .btns,
  #heroBtnsRow {
    grid-template-columns: 1fr !important;
  }
  #portfolio .pc,
  .portfolio .pc,
  #portfolio .pc:first-child,
  .portfolio .pc:first-child {
    height: 160px !important;
    min-height: 160px !important;
  }
  .svc-orbit-stage {
    grid-template-columns: 1fr !important;
  }
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-mobile-no-hero-animation`,`/* Reference style block 12 data-fix="mobile-no-hero-animation" */
/* === MOBILE: static first hero + separate second perfect-event screen === */
@media (max-width: 768px) {
  .pe-pin-wrap {
    height: auto !important;
    min-height: 0 !important;
    overflow: visible !important;
  }

  .pe-pin-wrap .hero,
  .hero {
    position: relative !important;
    top: auto !important;
    height: auto !important;
    min-height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    padding-top: 72px !important;
    overflow: visible !important;
  }

  .hero-right {
    order: 1 !important;
    flex: none !important;
    width: 100% !important;
    height: 42dvh !important;
    min-height: 260px !important;
    border-radius: 0 0 22px 22px !important;
  }

  .hero-left {
    order: 2 !important;
    flex: none !important;
    width: 100% !important;
    min-height: auto !important;
    justify-content: flex-start !important;
    padding: 24px 22px 30px !important;
    background: rgba(0, 212, 255, 0.05) !important;
    border-top: 0.5px solid rgba(255, 255, 255, 0.07) !important;
    border-right: 0 !important;
  }

  .hero-card,
  #heroLeft,
  #heroPre,
  #peHeadline,
  #peHighlight,
  #heroSub,
  #heroBtnsRow,
  #heroTicker,
  .hero-stats {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    visibility: visible !important;
  }

  #peHighlight {
    color: var(--accent) !important;
    display: block !important;
    white-space: normal !important;
  }

  .pe-bg-dark {
    display: none !important;
  }
  .pe-ghost-hidden {
    opacity: 1 !important;
    visibility: visible !important;
  }
  #peGhostTitle {
    display: none !important;
  }

  .pe-second {
    position: relative !important;
    inset: auto !important;
    display: block !important;
    height: 100dvh !important;
    min-height: 620px !important;
    padding: 70px 16px 90px !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    z-index: 2 !important;
    background: #020d1a !important;
    overflow: hidden !important;
  }

  .pe-second-left {
    display: none !important;
  }

  .pe-second-right {
    position: relative !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 100% !important;
    max-width: 720px !important;
    height: 70dvh !important;
    min-height: 430px !important;
    display: block !important;
    pointer-events: auto !important;
  }

  #peOrbTitle,
  .pe-orb-title {
    opacity: 1 !important;
    visibility: visible !important;
    --pe-title-alpha: 1 !important;
    --pe-title-visibility: visible !important;
    transform: translate(-50%, -50%) !important;
    font-size: clamp(32px, 10vw, 52px) !important;
  }

  .pe-orb-sphere {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translate3d(0, 0, 0) scale(0.86) !important;
    filter: none !important;
    pointer-events: auto !important;
  }

  .pe-orb-svg {
    opacity: 0.58 !important;
    transform: translate(-50%, -50%) scale(0.82) !important;
  }

  #peOrbSubtitle,
  .pe-orb-subtitle-bottom {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateX(-50%) !important;
    bottom: 48px !important;
  }
}

@media (max-width: 420px) {
  .hero-right {
    height: 39dvh !important;
    min-height: 235px !important;
  }
  .pe-second {
    min-height: 580px !important;
    padding-top: 58px !important;
  }
  .pe-second-right {
    height: 68dvh !important;
    min-height: 400px !important;
  }
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-mobile-static-hero-order`,`/* Reference style block 13 data-fix="mobile-static-hero-order-fix" */
/* === MOBILE FIX: first hero is static; sphere scene is a separate second screen === */
@media (max-width: 768px) {
  html,
  body {
    overflow-x: hidden !important;
  }

  .pe-pin-wrap {
    position: relative !important;
    height: auto !important;
    min-height: 0 !important;
    overflow: visible !important;
  }

  .pe-pin-wrap .hero,
  #heroSection.hero,
  .hero {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    height: auto !important;
    min-height: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    padding-top: 82px !important;
    overflow: visible !important;
    isolation: isolate !important;
  }

  .pe-bg-dark,
  #peBgDark,
  #peGhostTitle {
    display: none !important;
  }

  #heroRight,
  .hero-right {
    order: 1 !important;
    position: relative !important;
    flex: none !important;
    width: calc(100% - 32px) !important;
    height: 36dvh !important;
    min-height: 220px !important;
    max-height: 310px !important;
    margin: 0 16px !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    border-radius: 18px !important;
    overflow: hidden !important;
    z-index: 1 !important;
  }

  .hero-vid,
  .hero-vid iframe {
    opacity: 1 !important;
    visibility: visible !important;
  }

  #heroLeft,
  .hero-left,
  .hero-card {
    order: 2 !important;
    position: relative !important;
    flex: none !important;
    width: calc(100% - 32px) !important;
    min-height: 0 !important;
    margin: 0 16px !important;
    padding: 24px 22px 28px !important;
    justify-content: flex-start !important;
    background: rgba(0, 212, 255, 0.055) !important;
    border: 0.5px solid rgba(255, 255, 255, 0.07) !important;
    border-top: 0 !important;
    border-radius: 0 0 20px 20px !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    filter: none !important;
    animation: none !important;
    transition: none !important;
    z-index: 2 !important;
  }

  #heroPre,
  #peHeadline,
  #peHighlight,
  #heroSub,
  #heroBtnsRow,
  #heroTicker,
  .hero-pre,
  .pe-headline,
  .pe-highlight,
  .hero-sub,
  .btns,
  .hero-tag-ticker {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    filter: none !important;
    animation: none !important;
    transition: none !important;
  }

  #peHighlight,
  .pe-highlight {
    display: block !important;
    color: var(--accent) !important;
    white-space: normal !important;
  }

  /* Critical: sphere screen must come AFTER video+text, not above it */
  #peSecond,
  .pe-second {
    order: 3 !important;
    position: relative !important;
    inset: auto !important;
    display: block !important;
    width: 100% !important;
    height: 100dvh !important;
    min-height: 590px !important;
    margin: 0 !important;
    padding: 60px 16px 82px !important;
    background: #020d1a !important;
    overflow: hidden !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    transform: none !important;
    z-index: 1 !important;
  }

  #peSecondLeft,
  .pe-second-left {
    display: none !important;
  }

  #peSecondRight,
  .pe-second-right {
    position: relative !important;
    left: 50% !important;
    top: 50% !important;
    width: 100% !important;
    max-width: 720px !important;
    height: 70dvh !important;
    min-height: 410px !important;
    transform: translate(-50%, -50%) !important;
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    overflow: visible !important;
  }

  #peOrbTitle,
  .pe-orb-title {
    opacity: 1 !important;
    visibility: visible !important;
    --pe-title-alpha: 1 !important;
    --pe-title-visibility: visible !important;
    transform: translate(-50%, -50%) !important;
    font-size: clamp(32px, 10vw, 52px) !important;
  }

  .pe-orb-svg {
    opacity: 0.58 !important;
    visibility: visible !important;
    transform: translate(-50%, -50%) scale(0.82) !important;
  }

  .pe-orb-sphere {
    opacity: 1 !important;
    visibility: visible !important;
    filter: none !important;
    transform: translate3d(0, 0, 0) scale(0.86) !important;
    pointer-events: auto !important;
  }

  #peOrbSubtitle,
  .pe-orb-subtitle-bottom {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateX(-50%) !important;
    bottom: 44px !important;
  }
}

@media (max-width: 420px) {
  #heroSection.hero,
  .hero {
    padding-top: 80px !important;
  }
  #heroRight,
  .hero-right {
    height: 34dvh !important;
    min-height: 205px !important;
    max-height: 270px !important;
  }
  #heroLeft,
  .hero-left {
    padding: 22px 18px 26px !important;
  }
  #heroBtnsRow,
  .btns {
    grid-template-columns: 1fr !important;
  }
  #peSecond,
  .pe-second {
    min-height: 560px !important;
    padding-top: 48px !important;
  }
  #peSecondRight,
  .pe-second-right {
    height: 68dvh !important;
    min-height: 390px !important;
  }
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-hero-menu-50-50`,`/* Reference style block 14 data-fix="final-hero-50-50-centered-menu" */
/* === FINAL FIX: centered desktop menu + stable 50/50 hero === */
@media (min-width: 769px) {
  /* NAV: menu labels are centered in the nav, CTA stays on the right */
  #nav {
    width: calc(100% - 64px) !important;
    max-width: 1180px !important;
    height: 56px !important;
    padding: 0 28px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  #nav .nav-inner {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  #nav .nav-links {
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: clamp(24px, 3vw, 42px) !important;
    width: auto !important;
    flex: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  #nav .nav-links a {
    white-space: nowrap !important;
  }

  #nav .nav-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-left: auto !important;
    flex: 0 0 auto !important;
  }

  #nav .burger {
    display: none !important;
  }

  /* HERO: exact two-column composition */
  .pe-pin-wrap {
    width: 100% !important;
    overflow: hidden !important;
  }

  #heroSection.hero,
  .pe-pin-wrap #heroSection.hero {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
    grid-template-rows: 1fr !important;
    width: 100% !important;
    min-height: 100vh !important;
    height: 100vh !important;
    padding-top: 0 !important;
    align-items: stretch !important;
    overflow: hidden !important;
  }

  #heroLeft.hero-left,
  .pe-pin-wrap #heroLeft.hero-left,
  #heroLeft.hero-card {
    grid-column: 1 / 2 !important;
    grid-row: 1 / 2 !important;
    width: 100% !important;
    max-width: none !important;
    min-width: 0 !important;
    height: 100% !important;
    min-height: 100vh !important;
    margin: 0 !important;
    padding: clamp(82px, 9vh, 120px) clamp(48px, 6vw, 104px) clamp(64px, 8vh, 96px)
      clamp(56px, 6.5vw, 112px) !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    justify-content: center !important;
    background: var(--bg) !important;
    border-right: 0.5px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 0 !important;
    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
    z-index: 3 !important;
  }

  #heroLeft::before {
    display: none !important;
  }

  #heroPre,
  #peHeadline,
  #heroSub,
  #heroBtnsRow {
    width: 100% !important;
    max-width: 520px !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  #heroPre {
    font-size: clamp(18px, 2vw, 30px) !important;
    line-height: 1.05 !important;
  }

  #peHeadline {
    font-size: clamp(44px, 5.4vw, 82px) !important;
    line-height: 0.92 !important;
    margin-bottom: 18px !important;
  }

  #heroSub {
    font-size: clamp(13px, 1.05vw, 15px) !important;
    line-height: 1.65 !important;
    color: rgba(255, 255, 255, 0.46) !important;
    margin-bottom: 26px !important;
  }

  #heroBtnsRow,
  .btns {
    display: flex !important;
    justify-content: flex-start !important;
    align-items: center !important;
    gap: 12px !important;
  }

  #heroTicker.hero-tag-ticker {
    left: clamp(56px, 6.5vw, 112px) !important;
    bottom: clamp(28px, 5vh, 48px) !important;
    width: min(520px, calc(50vw - 112px)) !important;
    max-width: 520px !important;
    right: auto !important;
    transform: none !important;
  }

  #heroRight.hero-right,
  .pe-pin-wrap #heroRight.hero-right {
    grid-column: 2 / 3 !important;
    grid-row: 1 / 2 !important;
    position: relative !important;
    width: 100% !important;
    max-width: none !important;
    min-width: 0 !important;
    height: 100% !important;
    min-height: 100vh !important;
    margin: 0 !important;
    border-radius: 0 !important;
    overflow: hidden !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    z-index: 2 !important;
  }

  #heroRight .hero-vid,
  #heroRight .hero-vid iframe {
    opacity: 1 !important;
    visibility: visible !important;
  }

  #heroRight .hero-vid {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden !important;
  }

  #heroRight .hero-vid iframe {
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    width: 177.78vh !important;
    height: 100vh !important;
    min-width: 100% !important;
    min-height: 100% !important;
    transform: translate(-50%, -50%) !important;
    border: 0 !important;
    pointer-events: none !important;
  }

  #heroRight .hero-vid-overlay {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    background: linear-gradient(to left, rgba(2, 13, 26, 0.08), rgba(2, 13, 26, 0.28)) !important;
    pointer-events: none !important;
    z-index: 1 !important;
  }
}

/* Tablet/laptop tightening without changing the 50/50 structure */
@media (min-width: 769px) and (max-width: 1100px) {
  #nav .nav-links {
    gap: 22px !important;
  }
  #nav .nav-btn {
    padding-left: 14px !important;
    padding-right: 14px !important;
  }

  #heroLeft.hero-left,
  .pe-pin-wrap #heroLeft.hero-left,
  #heroLeft.hero-card {
    padding-left: 48px !important;
    padding-right: 36px !important;
  }

  #heroPre,
  #peHeadline,
  #heroSub,
  #heroBtnsRow {
    max-width: 460px !important;
  }

  #peHeadline {
    font-size: clamp(38px, 5vw, 58px) !important;
  }

  #heroTicker.hero-tag-ticker {
    left: 48px !important;
    width: min(460px, calc(50vw - 84px)) !important;
  }
}

/* Mobile stays usable: video first, text below, no broken 50/50 squeeze */
@media (max-width: 768px) {
  #nav {
    justify-content: space-between !important;
  }

  #nav .burger {
    margin-left: auto !important;
  }

  #heroRight.hero-right {
    border-radius: 18px 18px 0 0 !important;
  }

  #heroLeft.hero-left,
  #heroLeft.hero-card {
    border-radius: 0 0 18px 18px !important;
  }
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-perfect-event-layer-isolation`,`/* Reference style block 15 id="pe-layer-isolation-final-fix" */
/* FIX: second scroll layer must not visually sit under HERO before animation */

#pePinWrap.pe-pin-wrap,
.pe-pin-wrap {
  position: relative !important;
  background: var(--bg) !important;
  overflow: visible !important;
}

/* HERO remains the sticky scene, but it is opaque */
#heroSection.hero {
  position: sticky !important;
  top: 0 !important;
  z-index: 10 !important;
  overflow: hidden !important;
  background: var(--bg) !important;
  isolation: isolate !important;
}

/* First screen parts cover the second layer until scroll transition */
#heroLeft.hero-left,
#heroRight.hero-right {
  position: relative !important;
  z-index: 12 !important;
  background: var(--bg) !important;
}

#heroRight.hero-right {
  background: #021020 !important;
}

/* The second screen is still inside hero for the original animation,
   but starts completely invisible and non-interactive. */
#peSecond.pe-second {
  position: absolute !important;
  inset: 0 !important;
  z-index: 8 !important;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  background: var(--bg) !important;
  overflow: hidden !important;
}

/* Only when JS adds active class, it can appear above first screen */
#peSecond.pe-second.pe-active {
  z-index: 30 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

/* Ensure all second-screen content is hidden until active */
#peSecond:not(.pe-active) .pe-second-right,
#peSecond:not(.pe-active) .pe-orb-svg,
#peSecond:not(.pe-active) .pe-orb-title,
#peSecond:not(.pe-active) .pe-orb-subtitle-bottom,
#peSecond:not(.pe-active) .pe-orb-sphere {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

/* When active, let the original JS animate opacity/transform */
#peSecond.pe-active .pe-second-right,
#peSecond.pe-active .pe-orb-svg,
#peSecond.pe-active .pe-orb-title,
#peSecond.pe-active .pe-orb-subtitle-bottom,
#peSecond.pe-active .pe-orb-sphere {
  visibility: visible !important;
}

/* Hide accidental subtitle strip before transition */
#peSecond:not(.pe-active) #peOrbSubtitle {
  display: none !important;
}

@keyframes bottomBtnPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 26px rgba(255, 77, 0, 0.38);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 77, 0, 0);
  }
}

@keyframes floatingBtnReveal {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.92);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation:
    floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards,
    bottomBtnPulse 2s ease-in-out calc(3.2s + 0.9s) infinite;
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-floating-button-bottom`,`/* Reference style block 16 id="floating-button-bottom-fix" */
/* Bottom red communication button: hidden on splash, appears by original scroll logic */
.floating-contact,
.chat-button,
.contact-fab {
  position: fixed !important;
  right: max(32px, calc((100vw - 960px) / 2 + 24px)) !important;
  bottom: 28px !important;
  top: auto !important;
  left: auto !important;
  z-index: 999 !important;
}

.floating-contact {
  opacity: 0 !important;
  pointer-events: none !important;
  transform: translateY(12px) scale(0.88) !important;
  transition:
    opacity 0.5s ease,
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.floating-contact.visible {
  opacity: 1 !important;
  pointer-events: auto !important;
  transform: translateY(0) scale(1) !important;
}

/* Safety: never show over splash */
body:not(.splash-gone) .floating-contact {
  opacity: 0 !important;
  pointer-events: none !important;
  visibility: hidden !important;
}
body.splash-gone .floating-contact.visible {
  visibility: visible !important;
}

.floating-contact .fc-main {
  width: 62px !important;
  height: 62px !important;
  border-radius: 20px !important;
}

/* Animation removed — was causing Safari GPU compositing artifacts */
.floating-contact.visible .fc-main {
  animation: none !important;
}

.floating-contact .fc-main svg {
  width: 32px !important;
  height: 32px !important;
}

.floating-contact .fc-main:hover {
  transform: translateY(-2px) scale(1.04) !important;
}

@media (max-width: 768px) {
  .floating-contact,
  .chat-button,
  .contact-fab {
    right: 24px !important;
    bottom: 24px !important;
  }
  .floating-contact .fc-main {
    width: 58px !important;
    height: 58px !important;
  }
}

/* Floating contact appears with the same delay as FULL CYCLE. ZERO STRESS */
@keyframes floatingContactReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.94);
    /* filter:blur removed — sudden GPU layer creation at animation start
       causes a one-frame flash in both Chrome and Safari */
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    /* filter:blur(0) removed — keeps a compositor layer active after animation
       ends (via forwards fill), contributing to Safari square-border artifact */
  }
}

#floatingContact {
  opacity: 0;
  pointer-events: none;
}

#floatingContact.visible {
  pointer-events: auto;
  animation: floatingContactReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.2s forwards;
  /* bottomBtnPulse removed: animates transform:scale(1.06) on the WRAPPER div,
     causing Safari to composite the entire wrapper bounding box as a square GPU
     tile — visible as a rectangular border around the rounded .fc-main button.
     Patches 69-71 only kill animation on .fc-main (child), not on this wrapper.
     Removed at source to fix both Safari square border and the visible pulse. */
}

/* Floating contact options open upward */
#floatingContact .fc-options,
.floating-contact .fc-options {
  bottom: calc(100% + 12px) !important;
  top: auto !important;
  flex-direction: column-reverse !important;
}
`],[`home-patch-full-cycle-accent-underline`,`/* Reference style block 17 id="full-cycle-accent-underline-final" */
/* FULL CYCLE. ZERO STRESS — +30% size and animated blue accent underline */
#peOrbSubtitle.pe-orb-subtitle-bottom {
  font-size: 15.6px !important;
  letter-spacing: 0.3em !important;
  color: rgba(255, 255, 255, 0.58) !important;
  text-shadow: 0 0 18px rgba(0, 212, 255, 0.16) !important;
}

#peOrbSubtitle.pe-orb-subtitle-bottom .full-cycle-fix {
  position: relative !important;
  display: inline-block !important;
  padding-bottom: 9px !important;
  font-size: 1em !important;
}

#peOrbSubtitle.pe-orb-subtitle-bottom .full-cycle-fix::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 78%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent),
    rgba(255, 255, 255, 0.85),
    var(--accent),
    transparent
  );
  box-shadow:
    0 0 12px rgba(0, 212, 255, 0.72),
    0 0 28px rgba(0, 212, 255, 0.28);
  opacity: 0;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
}

#peOrbSubtitle.underline-on .full-cycle-fix::after {
  animation:
    fullCycleUnderlineSweep 1.15s cubic-bezier(0.16, 1, 0.3, 1) forwards,
    fullCycleUnderlineGlow 2.2s ease-in-out 1.15s infinite;
}

@keyframes fullCycleUnderlineSweep {
  0% {
    opacity: 0;
    transform: translateX(-50%) scaleX(0);
    filter: blur(5px);
  }
  45% {
    opacity: 1;
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) scaleX(1);
    filter: blur(0);
  }
}

@keyframes fullCycleUnderlineGlow {
  0%,
  100% {
    opacity: 0.72;
    box-shadow:
      0 0 10px rgba(0, 212, 255, 0.58),
      0 0 22px rgba(0, 212, 255, 0.22);
  }
  50% {
    opacity: 1;
    box-shadow:
      0 0 18px rgba(0, 212, 255, 0.9),
      0 0 42px rgba(0, 212, 255, 0.34);
  }
}

@media (max-width: 768px) {
  #peOrbSubtitle.pe-orb-subtitle-bottom {
    font-size: 13px !important;
    letter-spacing: 0.2em !important;
  }
  #peOrbSubtitle.pe-orb-subtitle-bottom .full-cycle-fix {
    padding-bottom: 7px !important;
  }
}
`],[`home-patch-full-cycle-focus-dim`,`/* Reference style block 18 id="full-cycle-focus-dim-final" */
/* FULL CYCLE focus mode: dim spheres/page, keep phrase as main accent */
#peSecond.pe-focus-mode {
  --fc-focus: 1;
}

#peSecond::before,
#peSecond::after,
#peSecond .pe-second-right,
#peSecond .pe-orbit-cinematic,
#peSecond .pe-orb-svg,
#peSecond .pe-orb-sphere,
#peSecond #peOrbTitle {
  transition:
    opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.65s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

#peSecond.pe-focus-mode .pe-second-right {
  opacity: 0.42 !important;
  filter: brightness(0.38) saturate(0.82) blur(1.2px) !important;
}

#peSecond.pe-focus-mode .pe-orb-sphere {
  opacity: 0.34 !important;
  filter: brightness(0.42) saturate(0.72) blur(0.8px) !important;
  transform: scale(0.985) !important;
}

#peSecond.pe-focus-mode .pe-orbit-cinematic,
#peSecond.pe-focus-mode .pe-orb-svg {
  opacity: 0.24 !important;
  filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.24)) brightness(0.52) blur(0.8px) !important;
}

#peSecond.pe-focus-mode::before {
  opacity: 0.22 !important;
  filter: blur(26px) brightness(0.55) !important;
}

#peSecond.pe-focus-mode::after {
  opacity: 0.18 !important;
  filter: blur(30px) brightness(0.55) !important;
}

#peSecond.pe-focus-mode::selection {
  background: rgba(0, 212, 255, 0.25);
}

#peOrbSubtitle.pe-orb-subtitle-bottom {
  z-index: 120 !important;
  isolation: isolate;
}

#peSecond.pe-focus-mode #peOrbSubtitle.pe-orb-subtitle-bottom {
  color: rgba(255, 255, 255, 0.92) !important;
  text-shadow:
    0 0 10px rgba(255, 255, 255, 0.16),
    0 0 26px rgba(0, 212, 255, 0.62),
    0 0 58px rgba(0, 212, 255, 0.3) !important;
}

#peSecond.pe-focus-mode #peOrbSubtitle.pe-orb-subtitle-bottom .full-cycle-fix::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 118%;
  height: 210%;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 212, 255, 0.16) 0%,
    rgba(0, 212, 255, 0.055) 42%,
    transparent 72%
  );
  filter: blur(16px);
  opacity: 0.95;
  z-index: -1;
  pointer-events: none;
}

#peSecond.pe-focus-mode #peOrbSubtitle.underline-on .full-cycle-fix::after {
  height: 3px;
  width: 86%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 212, 255, 0.35) 14%,
    #00d4ff 34%,
    #fff 50%,
    #00d4ff 66%,
    rgba(0, 212, 255, 0.35) 86%,
    transparent 100%
  );
  box-shadow:
    0 0 12px rgba(0, 212, 255, 0.95),
    0 0 34px rgba(0, 212, 255, 0.55),
    0 0 70px rgba(0, 212, 255, 0.25);
  animation:
    fullCycleUnderlineSweep 1.05s cubic-bezier(0.16, 1, 0.3, 1) forwards,
    fullCycleEnergyLine 1.8s ease-in-out 1.05s infinite !important;
}

@keyframes fullCycleEnergyLine {
  0%,
  100% {
    opacity: 0.78;
    filter: brightness(1);
    box-shadow:
      0 0 10px rgba(0, 212, 255, 0.7),
      0 0 26px rgba(0, 212, 255, 0.34);
  }
  45% {
    opacity: 1;
    filter: brightness(1.45);
    box-shadow:
      0 0 18px rgba(0, 212, 255, 1),
      0 0 48px rgba(0, 212, 255, 0.58),
      0 0 90px rgba(0, 212, 255, 0.28);
  }
}

@media (max-width: 768px) {
  #peSecond.pe-focus-mode .pe-second-right {
    opacity: 0.36 !important;
    filter: brightness(0.34) saturate(0.76) blur(1px) !important;
  }
  #peSecond.pe-focus-mode #peOrbSubtitle.pe-orb-subtitle-bottom .full-cycle-fix::before {
    width: 112%;
    height: 190%;
  }
}
`],[`home-patch-client-request-cta`,`/* Reference style block 19 id="client-final-request-cta-email-why-us" */
/* FINAL REQUEST: Email option + REQUEST CONCEPT label + stronger WHY CHOOSE US typography */
.floating-contact.open .fc-btn:nth-child(3) {
  transition-delay: 0.13s !important;
}
.fc-btn.em svg {
  fill: #ffffff !important;
}
.floating-contact.open .fc-btn.em:hover,
.floating-contact .fc-btn.em:hover {
  transform: translateY(-5px) scale(1.12) !important;
  border-color: rgba(255, 255, 255, 0.78) !important;
  background: radial-gradient(
    circle at 50% 42%,
    rgba(255, 255, 255, 0.24),
    rgba(0, 212, 255, 0.12) 58%,
    rgba(255, 255, 255, 0.045)
  ) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.34),
    0 18px 42px rgba(0, 0, 0, 0.32),
    0 0 20px rgba(255, 255, 255, 0.34),
    0 0 42px rgba(0, 212, 255, 0.24) !important;
}
.floating-contact .fc-btn.em:hover svg {
  fill: #ffffff !important;
  opacity: 1 !important;
  transform: scale(1.12) !important;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.65)) !important;
}
.msg-btn.em {
  animation-name: msgPulseEmail;
  animation-delay: 0.7s;
}
.msg-btn.em:hover {
  border-color: rgba(255, 255, 255, 0.74);
  background: rgba(255, 255, 255, 0.12);
  box-shadow:
    0 0 18px rgba(255, 255, 255, 0.34),
    0 0 32px rgba(0, 212, 255, 0.18);
}
@keyframes msgPulseEmail {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  50% {
    transform: scale(1.08);
    box-shadow: 0 0 18px rgba(255, 255, 255, 0.26);
  }
}
.why-us .why-us .wu-copy h3 {
  font-size: 14.4px !important;
  line-height: 1.38 !important;
  color: rgba(255, 255, 255, 0.56) !important;
  letter-spacing: 0.01em !important;
}
@media (max-width: 768px) {
  .why-us .why-us .wu-copy h3 {
    font-size: 13.6px !important;
  }
}
`],[`home-patch-reviews-load-more`,`/* Reference style block 20 id="reviews-load-more-patch" */
/* VIEW MORE REVIEWS — opens two blocks with 6 cards each */
.more-reviews {
  max-width: 1120px;
  margin: 18px auto 0;
  display: none;
}
.more-reviews.open {
  display: block;
  animation: fup 0.55s cubic-bezier(0.4, 0, 0.2, 1) both;
}
.more-reviews-block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 14px;
}
.more-reviews-block + .more-reviews-block {
  margin-top: 14px;
}
.more-reviews .vt-cell {
  min-height: 230px;
}
.view-more-cases {
  font-family: var(--font-b);
}
@media (max-width: 900px) {
  .more-reviews-block {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px) {
  .more-reviews {
    margin-top: 14px;
  }
  .more-reviews-block {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
`],[`home-patch-full-cycle-scroll-scale`,`/* Reference style block 21 id="full-cycle-scroll-scale-final" */
/* FULL CYCLE. ZERO STRESS — grows dynamically with scroll */
#peOrbSubtitle.pe-orb-subtitle-bottom {
  transform-origin: center center !important;
  will-change: transform, opacity, text-shadow !important;
  transition: none !important;
}

#peOrbSubtitle.pe-orb-subtitle-bottom .full-cycle-fix {
  transform-origin: center center !important;
  will-change: transform, filter !important;
}
`],[`home-patch-mobile-hero-menu-fixes`,`/* Reference style block 22 id="mobile-hero-menu-fixes" */
/* MOBILE MENU CTA — same style as desktop */
@media (max-width: 768px) {
  .mobile-menu .mob-cta {
    background: var(--glass-a) !important;
    border: 0.5px solid var(--glass-ab) !important;
    color: var(--accent2) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    box-shadow: none !important;
    border-radius: 22px !important;
    padding: 12px 26px !important;
    font-size: 11px !important;
    letter-spacing: 0.07em !important;
    text-transform: uppercase !important;
    font-family: var(--font-b) !important;
    font-weight: 500 !important;
  }

  /* HERO typography mobile */
  #heroPre {
    font-size: 24px !important;
    line-height: 1.05 !important;
    font-family: var(--font-d) !important;
    font-weight: 700 !important;
    color: #fff !important;
  }

  #peHeadline,
  .pe-headline {
    font-size: 38px !important;
    line-height: 0.95 !important;
  }

  #peHighlight,
  .pe-highlight {
    font-size: 1em !important;
    color: var(--accent) !important;
    text-shadow: 0 0 34px rgba(0, 212, 255, 0.34) !important;
  }

  .hero-sub {
    margin-top: 14px !important;
  }
}
`],[`home-patch-perfect-event-subtitle-sync`,`/* Reference style block 23 id="pe-subtitle-sync-and-pulse-fix" */
/* FIX 1: main website address stays visually in the bottom-right footer position */
footer .flnk {
  margin-left: auto !important;
  color: rgba(255, 255, 255, 0.46) !important;
  letter-spacing: 0.04em !important;
}
footer .flnk:hover {
  color: var(--accent) !important;
}

/* FIX 2: FULL CYCLE appears together with spheres and gets a soft pulse every 20s while PE page is active */
#peSecond.pe-active #peOrbSubtitle.pe-orb-subtitle-bottom {
  visibility: visible !important;
  display: block !important;
}

#peSecond.pe-active #peOrbSubtitle.pe-orb-subtitle-bottom .full-cycle-fix {
  animation: fullCycle20sHighlight 20s ease-in-out infinite !important;
}

@keyframes fullCycle20sHighlight {
  0%,
  100% {
    color: rgba(255, 255, 255, 0.72);
    text-shadow: 0 0 14px rgba(0, 212, 255, 0.18);
    filter: brightness(1);
  }
  4% {
    color: #fff;
    text-shadow:
      0 0 18px rgba(0, 212, 255, 0.86),
      0 0 44px rgba(0, 212, 255, 0.36);
    filter: brightness(1.35);
  }
  8% {
    color: rgba(255, 255, 255, 0.86);
    text-shadow:
      0 0 22px rgba(0, 212, 255, 0.62),
      0 0 34px rgba(255, 255, 255, 0.12);
    filter: brightness(1.15);
  }
  12% {
    color: rgba(255, 255, 255, 0.72);
    text-shadow: 0 0 14px rgba(0, 212, 255, 0.18);
    filter: brightness(1);
  }
}

@media (max-width: 768px) {
  footer .flnk {
    margin-left: 0 !important;
  }
}
`],[`home-patch-fullcycle-single-logic`,`/* Reference style block 24 id="fullcycle-final-single-logic" */
/* FINAL FIX: FULL CYCLE. ZERO STRESS — single stable logic */
.hero-tagline,
.full-cycle-tagline,
.pe-tagline,
#full-cycle-tagline,
.full-cycle-text,
.fullcycle-tagline,
.full-cycle-fix {
  animation: none !important;
  transition: opacity 0.35s ease !important;
  transform: none !important;
  filter: none !important;
  text-shadow: none !important;
  will-change: auto !important;
}

.hero-tagline.animate-in,
.full-cycle-tagline.animate-in,
.pe-tagline.animate-in,
#full-cycle-tagline.animate-in {
  animation: none !important;
}

.hero-tagline::before,
.hero-tagline::after,
.full-cycle-tagline::before,
.full-cycle-tagline::after,
.pe-tagline::before,
.pe-tagline::after,
#full-cycle-tagline::before,
#full-cycle-tagline::after,
.full-cycle-text::before,
.full-cycle-text::after,
.fullcycle-tagline::before,
.fullcycle-tagline::after,
.full-cycle-fix::before,
.full-cycle-fix::after {
  display: none !important;
  content: none !important;
}

.fullcycle-hidden-final {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

.fullcycle-visible-final {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}
`],[`home-patch-disable-spheres-darkening`,`/* Reference style block 25 id="disable-spheres-darkening-final" */
/* DISABLE SPHERES DARKENING */
.pe-pin-wrap,
.pe-orbit-section,
.pe-orbit-stage,
.pe-orbit-bg,
.pe-orb-wrap,
.pe-orbs-wrap,
.pe-spheres-wrap,
.pe-section-darkened,
.pe-dark-focus,
.pe-cinematic-focus {
  filter: none !important;
  opacity: 1 !important;
  background-color: transparent !important;
}

.pe-pin-wrap::before,
.pe-pin-wrap::after,
.pe-orbit-section::before,
.pe-orbit-section::after,
.pe-orbit-stage::before,
.pe-orbit-stage::after {
  opacity: 0 !important;
  display: none !important;
  content: none !important;
}

body.focus-darkened .pe-pin-wrap,
body.focus-darkened .pe-orbit-section,
body.cinematic-depth .pe-pin-wrap,
body.cinematic-depth .pe-orbit-section {
  filter: none !important;
  opacity: 1 !important;
}
`],[`home-patch-spheres-no-abrupt-off`,`/* Reference style block 26 id="spheres-no-abrupt-off-final" */
/* FINAL FIX: spheres must not switch off abruptly */
.pe-pin-wrap,
.pe-orbit-section,
.pe-orbit-stage,
.pe-orb-wrap,
.pe-orb,
.pe-planet,
.pe-sphere,
.pe-orb-play-icon,
#peOrbitStage,
#peOrbStage,
#peOrbs,
#peSpheres {
  visibility: visible !important;
}

.pe-orb,
.pe-planet,
.pe-sphere,
.pe-orb-wrap {
  transition:
    opacity 0.55s ease,
    transform 0.55s ease !important;
}

/* prevent old scripts/classes from hard-hiding the spheres */
.pe-orb.is-hidden,
.pe-orb.hidden,
.pe-planet.is-hidden,
.pe-planet.hidden,
.pe-sphere.is-hidden,
.pe-sphere.hidden,
.pe-orb-wrap.is-hidden,
.pe-orb-wrap.hidden {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}
`],[`home-patch-hero-and-spheres-safe`,`/* Reference style block 27 id="hero-and-spheres-safe-final" */
/* HERO SAFE FIX: second planet layer must not cover the first Hero screen */
#heroSection.hero #heroLeft,
#heroSection.hero #heroRight {
  visibility: visible;
}

#heroSection.hero #peSecond:not(.pe-active) {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}

#heroSection.hero #peSecond.pe-active {
  visibility: visible !important;
}

/* SPHERES SAFE FIX: when planet scene is active, spheres do not fade/dim */
#peSecond.pe-active .pe-orb-sphere {
  visibility: visible !important;
  filter: none !important;
}

#peSecond.pe-active .pe-orb-sphere[style*='opacity: 0'],
#peSecond.pe-active .pe-orb-sphere[style*='opacity:0'] {
  opacity: 1 !important;
}

#peSecond.pe-focus-mode {
  filter: none !important;
}
`],[`home-patch-aviator-review-style`,`/* Reference style block 28 id="aviator-review-style" */
.aviator-review-text {
  margin-top: 18px;
  font-size: 13px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
  max-width: 420px;
}
.aviator-review-author {
  margin-top: 14px;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.42);
}
`],[`home-patch-clients-logo-center`,`/* Reference style block 29 id="clients-cards-logo-center-final" */
/* WHAT OUR CLIENTS SAY — logo size + centered */
.video-testimonial .review-card img,
.video-testimonial .testimonial-card img,
.video-testimonial .client-card img,
.video-testimonial .vt-card img,
.clients-section .review-card img,
.clients-section .testimonial-card img,
.clients-section .client-card img,
.clients-section .vt-card img,
#clients img,
#testimonials img {
  display: block !important;
  margin: 0 auto 18px !important;
  max-width: 170px !important;
  max-height: 82px !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  filter: grayscale(1) brightness(0.82) contrast(1.08) !important;
  opacity: 0.86 !important;
  transition:
    filter 0.32s ease,
    opacity 0.32s ease,
    transform 0.32s ease !important;
}

.video-testimonial .review-card:hover img,
.video-testimonial .testimonial-card:hover img,
.video-testimonial .client-card:hover img,
.video-testimonial .vt-card:hover img,
.clients-section .review-card:hover img,
.clients-section .testimonial-card:hover img,
.clients-section .client-card:hover img,
.clients-section .vt-card:hover img,
#clients .review-card:hover img,
#clients .testimonial-card:hover img,
#clients .client-card:hover img,
#testimonials .review-card:hover img,
#testimonials .testimonial-card:hover img,
#testimonials .client-card:hover img {
  filter: grayscale(0) brightness(1) contrast(1) !important;
  opacity: 1 !important;
  transform: translateY(-1px) scale(1.04) !important;
}

/* If logo is in a wrapper, center the wrapper too */
.video-testimonial .clients-logo-wrap,
.clients-section .clients-logo-wrap,
#clients .clients-logo-wrap,
#testimonials .clients-logo-wrap {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
  margin-bottom: 18px !important;
}
`],[`home-patch-testimonial-logo-fix`,`/* Reference style block 30 id="vt-testimonial-logo-real-fix" */
/* WHAT OUR CLIENTS SAY — real testimonial cards logo fix */
.vt-card .vt-logo,
.vt-logo {
  width: 100% !important;
  height: auto !important;
  min-height: 96px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 0 22px !important;
  padding: 0 !important;
  text-align: center !important;
}

.vt-card .vt-logo img,
.vt-logo img {
  display: block !important;
  width: auto !important;
  height: auto !important;
  max-width: 190px !important;
  max-height: 92px !important;
  object-fit: contain !important;
  margin: 0 auto !important;
  filter: grayscale(1) brightness(0.78) contrast(1.08) !important;
  opacity: 0.84 !important;
  transition:
    filter 0.32s ease,
    opacity 0.32s ease,
    transform 0.32s ease !important;
}

.vt-card:hover .vt-logo img,
.vt-logo:hover img {
  filter: grayscale(0) brightness(1) contrast(1) !important;
  opacity: 1 !important;
  transform: translateY(-1px) scale(1.05) !important;
}
`],[`home-patch-why-us-chess-reveal`,`/* Reference style block 31 id="why-us-apple-chess-reveal" */
/* WHY CHOOSE US — Apple-style chess/stagger reveal */
.why-us .wu-story {
  perspective: 1200px !important;
}

.why-us .wu-item {
  opacity: 0 !important;
  filter: blur(14px) saturate(0.82) !important;
  transform: translate3d(0, 46px, 0) scale(0.965) !important;
  transition:
    opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.45s ease !important;
  will-change: opacity, transform, filter !important;
}

.why-us .wu-item:nth-child(odd) {
  transform: translate3d(-34px, 46px, 0) rotateY(4deg) scale(0.965) !important;
}

.why-us .wu-item:nth-child(even) {
  transform: translate3d(34px, 46px, 0) rotateY(-4deg) scale(0.965) !important;
}

.why-us .wu-item.wu-vis {
  opacity: 1 !important;
  filter: blur(0) saturate(1) !important;
  transform: translate3d(0, 0, 0) rotateY(0) scale(1) !important;
}

.why-us .wu-item.wu-vis .wu-video-card,
.why-us .wu-item.wu-vis .wu-copy {
  animation: whyUsSoftLift 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.why-us .wu-item.wu-vis .wu-copy {
  animation-delay: 0.08s;
}

@keyframes whyUsSoftLift {
  from {
    transform: translateY(18px);
    opacity: 0.72;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .why-us .wu-item,
  .why-us .wu-item:nth-child(odd),
  .why-us .wu-item:nth-child(even) {
    transform: translate3d(0, 34px, 0) scale(0.97) !important;
  }
  .why-us .wu-item.wu-vis {
    transform: translate3d(0, 0, 0) scale(1) !important;
  }
}
`],[`home-patch-clients-reveal`,`/* Reference style block 32 id="clients-apple-style-reveal" */
/* WHAT OUR CLIENTS SAY — premium Apple-style reveal */
.video-testimonial {
  overflow: hidden !important;
}
.video-testimonial .vt-bento {
  perspective: 1200px !important;
}
.video-testimonial .vt-head,
.video-testimonial .vt-cell-video,
.video-testimonial .vt-cell,
.video-testimonial .more-cases-wrap {
  opacity: 0 !important;
  filter: blur(16px) saturate(0.82) !important;
  transform: translate3d(0, 44px, 0) scale(0.965) !important;
  transition:
    opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.45s ease,
    border-color 0.45s ease !important;
  will-change: opacity, transform, filter !important;
}
.video-testimonial .vt-head {
  transform: translate3d(0, 28px, 0) scale(0.98) !important;
}
.video-testimonial .vt-cell-video {
  transform: translate3d(-38px, 54px, 0) rotateY(5deg) scale(0.965) !important;
}
.video-testimonial .vt-cell:nth-of-type(odd) {
  transform: translate3d(34px, 46px, 0) rotateY(-4deg) scale(0.965) !important;
}
.video-testimonial .vt-cell:nth-of-type(even) {
  transform: translate3d(-24px, 46px, 0) rotateY(3deg) scale(0.965) !important;
}
.video-testimonial .vt-head.vt-in,
.video-testimonial .vt-cell-video.vt-in,
.video-testimonial .vt-cell.vt-in,
.video-testimonial .more-cases-wrap.vt-in {
  opacity: 1 !important;
  filter: blur(0) saturate(1) !important;
  transform: translate3d(0, 0, 0) rotateY(0) scale(1) !important;
}
.video-testimonial .vt-cell.vt-in::after,
.video-testimonial .vt-cell-video.vt-in .vt-video-wrap::after {
  animation: clientsNeonSweep 1.15s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}
.video-testimonial .vt-cell.vt-in .vt-logo,
.video-testimonial .vt-cell.vt-in .vt-quote-wrap,
.video-testimonial .vt-cell.vt-in .vt-author {
  animation: clientsSoftLift 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.video-testimonial .vt-cell.vt-in .vt-quote-wrap {
  animation-delay: 0.06s;
}
.video-testimonial .vt-cell.vt-in .vt-author {
  animation-delay: 0.11s;
}
@keyframes clientsSoftLift {
  from {
    transform: translateY(14px);
    opacity: 0.7;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes clientsNeonSweep {
  0% {
    box-shadow: 0 0 0 rgba(0, 212, 255, 0);
    opacity: 0.35;
  }
  45% {
    box-shadow: 0 0 34px rgba(0, 212, 255, 0.2);
    opacity: 1;
  }
  100% {
    box-shadow: 0 0 0 rgba(0, 212, 255, 0);
    opacity: 0.55;
  }
}
@media (max-width: 768px) {
  .video-testimonial .vt-head,
  .video-testimonial .vt-cell-video,
  .video-testimonial .vt-cell,
  .video-testimonial .vt-cell:nth-of-type(odd),
  .video-testimonial .vt-cell:nth-of-type(even),
  .video-testimonial .more-cases-wrap {
    transform: translate3d(0, 34px, 0) scale(0.97) !important;
  }
  .video-testimonial .vt-head.vt-in,
  .video-testimonial .vt-cell-video.vt-in,
  .video-testimonial .vt-cell.vt-in,
  .video-testimonial .more-cases-wrap.vt-in {
    transform: translate3d(0, 0, 0) scale(1) !important;
  }
}
`],[`home-patch-final-contact-edge-align`,`/* Reference style block 33 id="final-contact-edge-align" */
@media (min-width: 769px) {
  #floatingContact,
  .floating-contact {
    right: var(--contact-now-edge-offset, 32px) !important;
    left: auto !important;
  }
}
`],[`home-patch-hero-exhibition-marquee`,`/* Reference style block 34 id="hero-exhibition-marquee-final" */
/* FINAL HERO EXHIBITION MARQUEE — smooth moving ribbon */
#heroTicker.hero-tag-ticker {
  overflow: hidden !important;
  white-space: nowrap !important;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 10%,
    #000 90%,
    transparent 100%
  );
  mask-image: linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%);
}

#heroTicker .ticker-track {
  display: flex !important;
  align-items: center !important;
  gap: 18px !important;
  width: max-content !important;
  min-width: max-content !important;
  will-change: transform !important;
  transform: translate3d(0, 0, 0);
  animation: heroExhibitionsMarquee 18s linear infinite !important;
}

#heroTicker .ticker-set {
  display: inline-flex !important;
  align-items: center !important;
  gap: 14px !important;
  flex: 0 0 auto !important;
}

#heroTicker .ticker-track span {
  flex: 0 0 auto !important;
  font-family: var(--font-b) !important;
  font-size: 11px !important;
  line-height: 1 !important;
  color: rgba(255, 255, 255, 0.42) !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  font-weight: 500 !important;
}

#heroTicker .ticker-track .dot {
  color: rgba(0, 212, 255, 0.42) !important;
  font-size: 12px !important;
  letter-spacing: 0 !important;
}

#heroTicker:hover .ticker-track {
  animation-play-state: paused !important;
}

@keyframes heroExhibitionsMarquee {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(calc(-33.333% - 12px), 0, 0);
  }
}

@media (max-width: 768px) {
  #heroTicker .ticker-track {
    animation: heroExhibitionsMarquee 14s linear infinite !important;
  }
}
`],[`home-patch-reviews-anchor-fix`,`/* Reference style block 35 id="reviews-anchor-fix-final" */
#reviews {
  scroll-margin-top: 96px !important;
}
@media (max-width: 768px) {
  #reviews {
    scroll-margin-top: 88px !important;
  }
}
`],[`home-patch-full-cycle-menu-to-planets`,`/* Reference style block 36 id="full-cycle-menu-to-planets-final" */
#pe-planets {
  position: relative;
  display: block;
  height: 0;
  width: 0;
  overflow: hidden;
  scroll-margin-top: 0;
}
`],[`home-patch-reference-tail-1`,`/* Reference style block 37 */
.reveal-block {
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-block.is-visible {
  opacity: 1;
  transform: translateY(0);
}
`],[`home-patch-reference-tail-2`,`/* Reference style block 38 */
.gshow-item:hover,
.gshow-item.active {
  background: rgba(255, 255, 255, 0.03) !important;
  border-color: rgba(255, 255, 255, 0.07) !important;
  box-shadow: none !important;
  transform: none !important;
}

.gshow-item:hover .gshow-name,
.gshow-item.active .gshow-name,
.gshow-item:hover .gshow-date,
.gshow-item.active .gshow-date,
.gshow-item:hover .gshow-loc,
.gshow-item.active .gshow-loc {
  color: inherit !important;
  text-shadow: none !important;
}

.gshow-item:hover .gshow-dot,
.gshow-item.active .gshow-dot {
  background: rgba(255, 255, 255, 0.15) !important;
  box-shadow: none !important;
}

.gshow-item {
  cursor: default !important;
  transition: none !important;
}
`],[`home-patch-reference-tail-3`,`/* Reference style block 39 */
/* STATIC EXHIBITION CALENDAR — no hover, no animation */
.gshow-item,
.gshow-item:hover,
.gshow-item.active {
  background: rgba(255, 255, 255, 0.03) !important;
  border-color: rgba(255, 255, 255, 0.07) !important;
  box-shadow: none !important;
  transform: none !important;
  cursor: default !important;
  transition: none !important;
}

.gshow-name,
.gshow-item:hover .gshow-name,
.gshow-item.active .gshow-name {
  color: #fff !important;
  text-shadow: none !important;
  transition: none !important;
}

.gshow-date,
.gshow-item:hover .gshow-date,
.gshow-item.active .gshow-date {
  color: var(--accent) !important;
  text-shadow: none !important;
  transition: none !important;
}

.gshow-loc,
.gshow-item:hover .gshow-loc,
.gshow-item.active .gshow-loc {
  color: rgba(255, 255, 255, 0.32) !important;
  text-shadow: none !important;
  transition: none !important;
}

.gshow-dot,
.gshow-item:hover .gshow-dot,
.gshow-item.active .gshow-dot {
  background: rgba(255, 255, 255, 0.15) !important;
  box-shadow: none !important;
  transition: none !important;
}
`],[`home-patch-tablet-layout-fix`,`/* ── TABLET LAYOUT FIX (769–991px) ─────────────────────────────────────────
   Problem: 100-perfect-event-scroll.css sets pe-pin-wrap to 420vh and makes
   the hero sticky. That layout is driven by GSAP scroll-scrub, which is only
   active on desktop (≥992px). On tablet, GSAP does not run, so the 420vh
   creates a large blank scroll gap between the hero and the next section.
   Fix: collapse pe-pin-wrap to auto height and convert the hero from a sticky
   scroll scene to a static full-viewport block. The planet orbit layer
   (pe-second) is then shown as a separate section that flows naturally below.
   ─────────────────────────────────────────────────────────────────────────── */
@media (min-width: 769px) and (max-width: 991px) {
  /* Remove the 420vh GSAP scroll area — tablet has no scroll driver. */
  #pePinWrap.pe-pin-wrap {
    height: auto !important;
    min-height: 0 !important;
  }

  /* Hero becomes a static block: fills one full viewport height, clips
     the absolute pe-second layer so it cannot bleed into the next section. */
  #heroSection.hero,
  .pe-pin-wrap .hero {
    position: relative !important;
    top: auto !important;
    min-height: 100svh !important;
    height: auto !important;
    overflow: hidden !important;
  }

  /* Planet orbit section flows as an independent block below the hero.
     position: relative + isolation: isolate creates a new stacking context
     (block formatting context) so planet z-index layers are self-contained. */
  #peSecond.pe-second {
    position: relative !important;
    inset: auto !important;
    display: block !important;
    width: 100% !important;
    height: 100svh !important;
    min-height: 640px !important;
    padding: 72px clamp(24px, 4vw, 60px) 88px !important;
    background: #020d1a !important;
    overflow: hidden !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    transform: none !important;
    z-index: 2 !important;
    isolation: isolate !important;
  }

  #peSecondLeft,
  .pe-second-left {
    display: none !important;
  }

  #peSecondRight,
  .pe-second-right {
    position: relative !important;
    left: 50% !important;
    top: 50% !important;
    width: 90% !important;
    max-width: 900px !important;
    height: 72svh !important;
    min-height: 480px !important;
    transform: translate(-50%, -50%) !important;
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    overflow: visible !important;
  }

  #peOrbTitle,
  .pe-orb-title {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translate(-50%, -50%) !important;
    font-size: clamp(34px, 5.5vw, 58px) !important;
  }

  .pe-orb-sphere {
    opacity: 1 !important;
    visibility: visible !important;
    filter: none !important;
    transform: translate3d(0, 0, 0) scale(0.9) !important;
    pointer-events: auto !important;
  }

  .pe-orb-svg {
    opacity: 0.6 !important;
    visibility: visible !important;
    transform: translate(-50%, -50%) scale(0.9) !important;
  }

  #peOrbSubtitle,
  .pe-orb-subtitle-bottom {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateX(-50%) !important;
    bottom: 52px !important;
  }
}

/* ── MOBILE LAYOUT FIX (≤768px) ────────────────────────────────────────────
   Patches 11 and 12 already stack the hero vertically and set height: auto.
   They set min-height: 0, which allows the hero to shrink smaller than the
   viewport. This override ensures the hero block always fills at least one
   full small-viewport height (100svh is more accurate than 100vh on mobile
   because it excludes the browser chrome / collapsible address bar).
   overflow: hidden prevents any absolutely-positioned child (e.g. a stray
   pe-second during a class-toggle transition) from visually overflowing the
   hero boundary and overlapping the section below.
   ─────────────────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  #heroSection.hero,
  .pe-pin-wrap .hero,
  .hero {
    min-height: 100svh !important;
    overflow: hidden !important;
  }
}
`],[`home-patch-ui-polish`,`/* ── TITLE TRANSITION FIX ────────────────────────────────────────────────────
   The rAF loop writes transform on every frame via inline styles.
   Any CSS transition on transform fights the JS update and causes a jerk.

   #peHighlight — transition: none. Its show/hide is driven by the ghost:
   pe-ghost-hidden hides it while the ghost travels, destroyGhost() reveals
   it instantly. A CSS opacity transition here causes a 0.3s fade-in AFTER
   the ghost is removed — that's the scroll-back flicker.

   #peGhostTitle — keeps opacity transition; harmless since JS sets inline
   opacity every rAF frame anyway.
   ─────────────────────────────────────────────────────────────────────────── */
#peHighlight {
  transition: none !important;
}
#peGhostTitle {
  transition: opacity 0.3s ease !important;
}

/* ── PLAY ICON: proportional size + visual restore ───────────────────────────
   110-perfect-event-orbit-core.css defines the base 35% / aspect-ratio rule.
   112-perfect-event-sphere-styles.css kills border/background.
   This patch (loads last as deferred) restores the glass circle with a
   matching transition so blur/opacity animate smoothly on hover.
   ─────────────────────────────────────────────────────────────────────────── */
.pe-orb-play-icon {
  width: 35% !important;
  aspect-ratio: 1 / 1 !important;
  height: auto !important;
  min-width: unset !important;
  min-height: unset !important;
  max-width: unset !important;
  max-height: unset !important;
  border: 1.5px solid rgba(255, 255, 255, 0.44) !important;
  background: rgba(0, 0, 0, 0.26) !important;
  backdrop-filter: blur(5px) !important;
  -webkit-backdrop-filter: blur(5px) !important;
  box-shadow:
    0 0 14px rgba(0, 212, 255, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.12) !important;
  /* transition covers backdrop-filter/filter/opacity for the hover blur effect */
  transition:
    backdrop-filter 0.6s cubic-bezier(0.25, 1, 0.5, 1),
    filter 0.6s cubic-bezier(0.25, 1, 0.5, 1),
    opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1),
    transform 0.3s ease !important;
}

/* On hover the backdrop blur intensifies — glass deepens without touching
   the triangle, which must stay pixel-sharp at all times. */
.pe-orb-sphere:hover .pe-orb-play-icon {
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  background: rgba(255, 255, 255, 0.1) !important;
}

/* ── SOLAR GLOW — DEEP SPACE STAR ────────────────────────────────────────────
   8 s cycle: slow majestic breathing instead of the previous fast pulse.
   50% amplitude is intentionally large so the glow reads across the canvas,
   but softer than before to avoid overwhelming the planet silhouettes.
   ─────────────────────────────────────────────────────────────────────────── */
@keyframes solarBreathing {
  0%,
  100% {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.55))
      drop-shadow(0 0 26px rgba(0, 212, 255, 0.55)) drop-shadow(0 0 56px rgba(0, 130, 255, 0.28));
  }
  50% {
    filter: drop-shadow(0 0 40px #fff) drop-shadow(0 0 100px #00d4ff) drop-shadow(0 0 250px #0077ff);
  }
}

#peOrbTitle.is-centered-sun {
  animation: solarBreathing 8s ease-in-out infinite;
}

/* ── DEEP SPACE GALAXY BACKGROUND ────────────────────────────────────────────
   nebulaPulse: 8 s, reduced amplitude (scale 0.98↔1.02, opacity 0.7↔0.9)
   for a subtle, hypnotic expansion rather than an aggressive pop.

   transition on the base rule gives a 2.5 s fade-OUT when .is-centered-sun
   is removed (scrolling back). The animation overrides the transition for
   opacity while active, so there is no conflict during normal forward scroll.
   ─────────────────────────────────────────────────────────────────────────── */
@keyframes nebulaPulse {
  0%,
  100% {
    opacity: 0.7;
    transform: scale(0.98);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.02);
  }
}

#peSecond::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 212, 255, 0.25) 0%,
    rgba(0, 100, 255, 0.15) 40%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 2.5s ease-in-out;
  pointer-events: none;
  z-index: 0;
  transform-origin: center center;
}

#peSecond.is-centered-sun::before {
  animation: nebulaPulse 8s ease-in-out infinite;
}

/* ── PLANET ORBIT PULSE — hover / focus ─────────────────────────────────────
   Three-layer box-shadow pulses between a dim and a vivid state, simulating
   an orbiting energy field around the planet.
   box-shadow is used (not filter:drop-shadow) because filter on the wrapper
   would create an isolated stacking context and break the child video's
   mix-blend-mode:screen transparency.
   ─────────────────────────────────────────────────────────────────────────── */
@keyframes planetOrbitPulse {
  0%,
  100% {
    box-shadow:
      0 0 12px rgba(0, 212, 255, 0.3),
      0 0 32px rgba(0, 120, 255, 0.16),
      0 0 58px rgba(0, 212, 255, 0.06);
  }
  50% {
    box-shadow:
      0 0 24px rgba(0, 212, 255, 0.58),
      0 0 58px rgba(0, 120, 255, 0.3),
      0 0 95px rgba(0, 212, 255, 0.12);
  }
}

.pe-orb-sphere {
  /* zero-size transparent shadow gives the transition a typed value to
     animate FROM on hover-out, so the glow fades smoothly rather than pops */
  box-shadow: 0 0 0 0 transparent !important;
  transition:
    transform 0.7s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.7s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

.pe-orb-sphere:hover,
.pe-orb-sphere:focus-visible {
  transform: translate(-50%, calc(-50% - 6px)) scale(1.06) !important;
  /* animation drives box-shadow; transition handles the smooth exit when
     hover ends (browser interpolates from last animated value → transparent) */
  animation: planetOrbitPulse 2.5s ease-in-out infinite !important;
  outline: none !important;
}

/* ── MOBILE CLEAN COLUMN ─────────────────────────────────────────────────────
   Hero fills the small viewport; pe-second is a self-contained relative block
   directly below with no z-index bleed.
   ─────────────────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .pe-pin-wrap .hero,
  #heroSection.hero,
  .hero {
    min-height: 100svh !important;
    overflow: hidden !important;
  }

  #peSecond.pe-second,
  .pe-second {
    position: relative !important;
    overflow: hidden !important;
  }
}
`],[`home-patch-video-popup`,`/* Stage 2.4 — planet video popup */

.pe-popup-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 5, 20, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}

.pe-popup-backdrop.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.pe-popup-close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 5, 20, 0.6);
  color: #fff;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s;
}

.pe-popup-close:hover {
  background: rgba(0, 212, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.4);
  color: #00d4ff;
}

/* Strict 16:9 — width is capped at 80vw OR the width that fills 80vh in 16:9 */
.pe-popup-video-wrap {
  position: relative;
  width: min(80vw, calc(80vh * 16 / 9));
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 40px 120px rgba(0, 0, 0, 0.7),
    0 0 60px rgba(0, 212, 255, 0.12);
}

/* opacity transition enables the crossfade when auto-cycling between planets */
.pe-popup-video-wrap video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #000;
  transition: opacity 0.3s ease;
}

/* ── POPUP-OPEN STATE ────────────────────────────────────────────────────────
   New UX flow: click → planet resets to default B&W → popup opens.
   dim the entire orbit wrapper slightly so it recedes behind the backdrop.
   pointer-events: none on spheres instantly clears :hover, reverting the
   planet to its default grayscale + normal-size state without any transform
   override that would fight the orbit translate(-50%, -50%) centering.
   transition: transform on spheres smooths the de-hover revert (0 → base).
   ─────────────────────────────────────────────────────────────────────────── */
.pe-second-right.is-popup-open {
  opacity: 0.55;
  transition: opacity 0.3s ease;
}

.pe-second-right.is-popup-open .pe-orb-sphere {
  pointer-events: none !important;
  transition: transform 0.25s ease !important;
}
`],[`home-patch-floating-contact-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Stage 2.5 — Floating CTA + global button hover polish
   ═══════════════════════════════════════════════════════════════════════════
   RULES:
   • No JS changes — scroll visibility logic in scripts 11 / 15 is untouched.
   • All transitions live on BASE state so mouse-leave never snaps.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. GLOBAL: child elements must never steal hover events ─────────────────
   SVG / span / pseudo-elements inside buttons were capturing mouse events,
   causing different :hover states on the border vs. the icon interior.
   pointer-events: none on every interior node fixes this site-wide.
   ─────────────────────────────────────────────────────────────────────────── */
.fc-main > svg,
.fc-btn > svg,
.btn-p > svg,
.btn-p > span,
.btn-g > svg,
.btn-g > span,
.nav-btn > svg,
.nav-btn > span,
.nav-contact-item > svg,
.nav-contact-item::before,
.btn-cta > svg,
.btn-cta > span,
.btn-liquid > svg,
.btn-watch > span,
.btn-proc-watch > span {
  pointer-events: none !important;
}

/* ── 2. WRAPPER — must be 100% transparent ───────────────────────────────────
   Root cause of the black box artifact: if any CSS rule (variable default,
   browser UA reset, or stacking-context quirk) paints a background on the
   .floating-contact div, it shows as an opaque rectangle behind the rounded
   .fc-main button. Force transparent on every selector that may be involved.
   ─────────────────────────────────────────────────────────────────────────── */
.floating-contact,
#floatingContact {
  background: transparent !important;
  background-color: transparent !important;
}

/* ── 3. FC-MAIN — base shape, no backdrop-filter, no animation ──────────────
   backdrop-filter removed: Safari composites it as a square GPU tile regardless
   of overflow or border-radius, causing the visible rectangular artifact.
   overflow:hidden is now safe (no backdrop-filter to conflict with).
   transition on specific properties only — transition:all was triggering
   unwanted interpolation on animation: and causing a Chrome first-render blink.
   ─────────────────────────────────────────────────────────────────────────── */
.floating-contact .fc-main {
  width: 48px !important;
  height: 48px !important;
  border-radius: 16px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  position: relative !important;
  overflow: visible !important;
  background: rgb(218, 60, 0) !important;
  border: 1px solid rgba(255, 255, 255, 0.28) !important;
  border-top-color: rgba(255, 255, 255, 0.45) !important;
  border-bottom-color: rgba(180, 40, 0, 0.45) !important;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.38),
    inset 0 -1px 0 rgba(0, 0, 0, 0.18),
    0 4px 18px rgba(255, 70, 0, 0.44),
    0 8px 28px rgba(0, 0, 0, 0.28) !important;
  transition:
    transform 0.28s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.28s ease,
    background 0.22s ease !important;
  animation: none !important;
}

/* Kill all pseudo-element decorators */
.floating-contact .fc-main::before,
.floating-contact .fc-main::after {
  display: none !important;
  content: none !important;
}

/* No pulse animation */
.floating-contact.visible .fc-main {
  animation: none !important;
}

/* ── 4. FC-MAIN HOVER ────────────────────────────────────────────────────── */
.floating-contact .fc-main:hover,
.floating-contact .fc-main:focus-visible {
  transform: translateY(-3px) scale(1.04) !important;
  background: rgba(255, 92, 10, 0.96) !important;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.48),
    inset 0 -1px 0 rgba(0, 0, 0, 0.14),
    0 6px 22px rgba(255, 70, 0, 0.62),
    0 14px 36px rgba(0, 0, 0, 0.34) !important;
}

/* SVG icon: perfectly centered, no pointer events */
.floating-contact .fc-main > svg {
  width: 30px !important;
  height: 30px !important;
  fill: none !important;
  stroke: #fff !important;
  stroke-width: 2 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
  display: block !important;
  pointer-events: none !important;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.35)) !important;
  position: relative !important;
  z-index: 2 !important;
}

/* ── 5. HOVER BRIDGE ─────────────────────────────────────────────────────────
   .fc-options sits at bottom:calc(100% + 12px) — its bottom edge is 12px
   above the .floating-contact container's top. Cursor crossing this invisible
   gap triggers mouseleave on the wrapper and may close the dropdown prematurely.

   Fix: ::before pseudo on .floating-contact fills the gap with a transparent
   hit area. pointer-events:auto makes it part of the element's hover region,
   so mouseleave does NOT fire while cursor is in this bridge zone.
   height: 18px = 12px gap + 6px buffer into the bottom edge of .fc-options.
   ─────────────────────────────────────────────────────────────────────────── */
.floating-contact::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: -10px;
  right: -10px;
  height: 18px;
  pointer-events: auto;
  background: transparent;
}

/* ── 6. FC-OPTIONS — glassmorphism container, vertical column ────────────────
   Visual language is an EXACT match of .nav-contact-menu in the header:
   dark glass, blur(28px), fine border with brighter top, inset glow.
   Direction (column-reverse = opens upward) comes from an existing patch.
   gap:8px prevents button overlap when scale transforms are applied on hover.
   Transition on BASE state ensures open AND close both animate smoothly.
   ─────────────────────────────────────────────────────────────────────────── */
.floating-contact .fc-options {
  /* glass container */
  background: rgba(6, 14, 28, 0.96) !important;
  border: 0.5px solid rgba(255, 255, 255, 0.1) !important;
  border-top-color: rgba(255, 255, 255, 0.2) !important;
  border-radius: 20px !important;
  padding: 8px !important;
  gap: 8px !important;
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.06) inset,
    0 20px 48px rgba(0, 0, 0, 0.55),
    0 8px 16px rgba(0, 0, 0, 0.32) !important;
  /* reveal/hide — transition on BASE animates both open and close */
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transform: translateY(8px) scale(0.95) !important;
  transition:
    opacity 0.28s ease,
    visibility 0s 0.28s,
    transform 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.floating-contact.open .fc-options {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
  transform: translateY(0) scale(1) !important;
  transition:
    opacity 0.28s ease,
    visibility 0s 0s,
    transform 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

/* ── 7. FC-BTN — exact 1:1 match with .nav-contact-item ──────────────────────
   Every dimension, radius, background, border, and shadow value is copied
   directly from .nav-contact-item in 10-navigation.css. The slide-in
   transform (translateY(-6px) → 0) from the original CSS is removed; the
   glass container handles the reveal animation instead.
   Transition on BASE with 0.4s matches the global button timing.
   ─────────────────────────────────────────────────────────────────────────── */
.floating-contact .fc-btn {
  /* dimensions — match nav-contact-item */
  width: 48px !important;
  height: 48px !important;
  border-radius: 14px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-decoration: none !important;
  position: relative !important;
  overflow: hidden !important;
  /* glass background — rgba(255,255,255,0.05) as requested */
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  ) !important;
  backdrop-filter: blur(20px) saturate(1.4) !important;
  -webkit-backdrop-filter: blur(20px) saturate(1.4) !important;
  /* fine border — same as nav-contact-item */
  border: 0.5px solid rgba(255, 255, 255, 0.1) !important;
  border-top-color: rgba(255, 255, 255, 0.24) !important;
  border-bottom-color: rgba(255, 255, 255, 0.06) !important;
  /* 4-layer shadow matches hover count → enables smooth CSS interpolation */
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.12) inset,
    0 -1px 0 rgba(0, 0, 0, 0.06) inset,
    0 4px 16px rgba(0, 0, 0, 0.18),
    0 0 0 rgba(255, 255, 255, 0) !important;
  /* no slide-in transform — let container handle reveal */
  transform: none !important;
  /* 0.4s transition on BASE for smooth leave-state reversal */
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

/* Remove old open-state slide transforms and stagger delays */
.floating-contact.open .fc-btn,
.floating-contact.open .fc-btn:nth-child(1),
.floating-contact.open .fc-btn:nth-child(2) {
  transform: none !important;
  transition-delay: 0s !important;
}

/* Inner gloss highlight — same as nav-contact-item::before */
.floating-contact .fc-btn::before {
  content: '' !important;
  position: absolute !important;
  top: 1px !important;
  left: 14% !important;
  right: 14% !important;
  height: 38% !important;
  border-radius: 14px 14px 60% 60% !important;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 255, 255, 0) 100%
  ) !important;
  pointer-events: none !important;
}

/* SVG: properly sized, pointer-events off */
.floating-contact .fc-btn > svg {
  width: 22px !important;
  height: 22px !important;
  display: block !important;
  pointer-events: none !important;
  fill: currentColor !important;
}

/* ── 8. FC-BTN BRAND HOVER — gentle scale(1.02) + brand glow ────────────────
   Matches .nav-contact-item:hover exactly. scale(1.02) translateY(-2px) is
   gentle enough to never overlap siblings at gap:8px spacing.
   Shadow count (4 layers) matches base → CSS interpolates smoothly.
   ─────────────────────────────────────────────────────────────────────────── */

/* Telegram */
.floating-contact .fc-btn.tg {
  color: #27a7e7 !important;
}
.floating-contact .fc-btn.tg > svg {
  fill: #27a7e7 !important;
  opacity: 1 !important;
}
.floating-contact .fc-btn.tg:hover {
  transform: none !important;
  background: rgba(39, 167, 231, 0.14) !important;
  border-color: rgba(39, 167, 231, 0.48) !important;
  border-top-color: rgba(39, 167, 231, 0.65) !important;
  box-shadow:
    0 2px 0 rgba(39, 167, 231, 0.22) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset,
    0 12px 28px rgba(0, 0, 0, 0.28),
    0 0 28px rgba(39, 167, 231, 0.5) !important;
}

/* WhatsApp */
.floating-contact .fc-btn.wa {
  color: #25d366 !important;
}
.floating-contact .fc-btn.wa > svg {
  fill: #25d366 !important;
  opacity: 1 !important;
}
.floating-contact .fc-btn.wa:hover {
  transform: none !important;
  background: rgba(37, 211, 102, 0.14) !important;
  border-color: rgba(37, 211, 102, 0.48) !important;
  border-top-color: rgba(37, 211, 102, 0.65) !important;
  box-shadow:
    0 2px 0 rgba(37, 211, 102, 0.22) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset,
    0 12px 28px rgba(0, 0, 0, 0.28),
    0 0 28px rgba(37, 211, 102, 0.5) !important;
}

/* Email */
.floating-contact .fc-btn.em {
  color: #ffffff !important;
}
.floating-contact .fc-btn.em > svg {
  fill: #ffffff !important;
  opacity: 1 !important;
}
.floating-contact .fc-btn.em:hover {
  transform: none !important;
  background: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
  border-top-color: rgba(255, 255, 255, 0.45) !important;
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.22) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset,
    0 12px 28px rgba(0, 0, 0, 0.28),
    0 0 20px rgba(255, 255, 255, 0.28) !important;
}
`],[`home-patch-hero-cta-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Stage 2.5b — Hero button hover, ticker hitbox, CTA solid redesign
   Loads AFTER patch 43 — overrides glassmorphism where needed.
   No JS changes. No layout shifts.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ══ 2. TICKER CAROUSEL — larger hitbox + confident hover ════════════════════
   #heroTicker .ticker-track span words are font-size:11px → ~11px tall hit
   area. Small targets cause misses and jarring enter/leave cycles.

   Fix: ::before pseudo-element extends the hit area 8px above and below the
   text (matching the ticker's own padding:8px so it stays inside overflow:hidden)
   and 4px left/right. The ::before shares the span's pointer events, so
   hovering over the extended zone correctly triggers span:hover.

   transform:scale(1.05) is applied with will-change:transform declared on the
   BASE so the compositor pre-allocates the layer and the scale is GPU-smooth.
   ─────────────────────────────────────────────────────────────────────────── */
#heroTicker .ticker-track span:not(.dot) {
  position: relative !important;
  cursor: pointer !important;
  will-change: transform !important;
  /* transition on BASE so leave-state animates out cleanly */
  transition:
    color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    text-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    transform 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

/* Invisible hit-area extension — stays within ticker's 8px padding */
#heroTicker .ticker-track span:not(.dot)::before {
  content: '' !important;
  position: absolute !important;
  top: -8px !important;
  bottom: -8px !important;
  left: -4px !important;
  right: -4px !important;
  pointer-events: auto !important;
  background: transparent !important;
}

#heroTicker .ticker-track span:not(.dot):hover {
  color: #fff !important;
  text-shadow:
    0 0 10px rgba(255, 255, 255, 0.7),
    0 0 24px rgba(255, 255, 255, 0.3) !important;
  transform: scale(1.05) !important;
}

/* ══ 3. FC-MAIN — solid opaque CTA, width synced with dropdown panel ═════════

   ROOT CAUSE of misalignment: .fc-options (padding:8px + 48px buttons) is
   64px wide, but .fc-main was only 48px. With right:0 anchor on the options
   panel, it overflowed 16px left of the button → visual gap / mismatch.

   Fix: pin the wrapper to 64px. Both button and options fill it at width:100%
   so they share the exact same left/right edges at all times.

   Root cause of glassmorphism artifacts (patch 43): backdrop-filter + the
   residual ::before/::after from 30-floating-contact.css painted ghost layers.
   This patch replaces the glass with a clean solid #ff5500 fill, no blur.
   ─────────────────────────────────────────────────────────────────────────── */

/* Lock wrapper to 64px — the canonical reference width for both children */
.floating-contact,
#floatingContact {
  width: 64px !important;
}

/* SOLID CTA — overrides glassmorphism from patch 43 */
.floating-contact .fc-main {
  width: 100% !important; /* 64px — matches options panel */
  height: 54px !important;
  border-radius: 18px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  position: relative !important;
  overflow: hidden !important; /* safe — no backdrop-filter present */
  /* solid fill — no glassmorphism */
  background: #ff5500 !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: none !important;
  border-color: transparent !important;
  /* outer glow only — no inset white highlight */
  box-shadow:
    0 4px 16px rgba(255, 85, 0, 0.45),
    0 8px 28px rgba(0, 0, 0, 0.28) !important;
  transition:
    transform 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.3s ease !important;
}

/* Kill all pseudo-element decorators from previous patches */
.floating-contact .fc-main::before,
.floating-contact .fc-main::after {
  display: none !important;
  content: none !important;
}

/* SVG: larger, perfectly centered */
.floating-contact .fc-main > svg {
  width: 26px !important;
  height: 26px !important;
  fill: none !important;
  stroke: #fff !important;
  stroke-width: 2 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
  display: block !important;
  pointer-events: none !important;
  position: relative !important;
  z-index: 1 !important;
}

/* HOVER — simple scale + warm glow, nothing aggressive */
.floating-contact .fc-main:hover,
.floating-contact .fc-main:focus-visible {
  animation-play-state: paused !important;
  transform: scale(1.04) translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(255, 85, 0, 0.6) !important;
}

/* PULSE — glow-ring only, no box-shadow conflict with hover */
.floating-contact.visible .fc-main {
  animation: fcSolidPulse 2.6s ease-out infinite !important;
}

.floating-contact.visible .fc-main:hover {
  animation: none !important;
}

@keyframes fcSolidPulse {
  0%,
  100% {
    box-shadow:
      0 4px 16px rgba(255, 85, 0, 0.45),
      0 8px 28px rgba(0, 0, 0, 0.28),
      0 0 0 0px rgba(255, 85, 0, 0.28);
  }
  55% {
    box-shadow:
      0 4px 20px rgba(255, 85, 0, 0.58),
      0 10px 32px rgba(0, 0, 0, 0.32),
      0 0 0 9px rgba(255, 85, 0, 0);
  }
}

/* Sync options panel width with button — fill the 64px wrapper */
.floating-contact .fc-options {
  width: 100% !important;
  left: 0 !important;
  right: 0 !important;
}
`],[`home-patch-button-hover-hardening`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 45 — FC-MAIN hover + overflow fix.
   btn-glass / btn-g / btn-p rules removed — original button CSS is the
   source of truth for hero buttons.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── FC-MAIN: overflow visible so hit-area buffer extends outward ──────────── */
.floating-contact .fc-main {
  overflow: visible !important;
  isolation: isolate !important;
  transition:
    transform 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    background 0.3s ease !important;
}

/* ── FC-MAIN ::after — hit-area buffer ──────────────────────────────────────── */
.floating-contact .fc-main::after {
  content: '' !important;
  display: block !important;
  position: absolute !important;
  inset: -15px !important;
  background: transparent !important;
  z-index: -1 !important;
  pointer-events: auto !important;
  border-radius: inherit !important;
  transform: none !important;
  animation: none !important;
}

/* ── FC-MAIN HOVER ──────────────────────────────────────────────────────────── */
.floating-contact .fc-main:hover,
.floating-contact .fc-main:focus-visible {
  animation-play-state: paused !important;
  transform: scale(1.04) translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(255, 85, 0, 0.6) !important;
}
`],[`home-patch-ultimate-hover-cta-fix`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 46 — CTA frame kill + square CTA glass.
   btn-glass / btn-g / btn-p sections removed — original button CSS preserved.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ══ 4. KILL ANY RESIDUAL FRAME ON .floating-contact WRAPPER ════════════════ */
.floating-contact,
#floatingContact {
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
}

/* ══ 5. FC-MAIN — solid Safari-safe architecture ════════════════════════════
   No isolation:isolate, no ::before/::after backdrop-filter, no GPU layers.
   backdrop-filter directly on the element with overflow:hidden is the only
   approach that doesn't produce square compositing artifacts in Safari.      */
.floating-contact .fc-main {
  width: 64px !important;
  height: 64px !important;
  border-radius: 20px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  position: relative !important;
  overflow: visible !important;
  background: rgb(218, 60, 0) !important;
  border: 1px solid rgba(255, 255, 255, 0.22) !important;
  border-top-color: rgba(255, 255, 255, 0.38) !important;
  border-bottom-color: rgba(180, 40, 0, 0.45) !important;
  outline: none !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 160, 120, 0.3),
    0 4px 18px rgba(255, 70, 0, 0.42),
    0 8px 28px rgba(0, 0, 0, 0.28) !important;
  /* specific properties only — avoids transition:all triggering on animation */
  transition:
    transform 0.28s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.28s ease,
    background 0.22s ease !important;
  animation: none !important;
}

/* Kill ::before and ::after — no pseudo-element GPU layers */
.floating-contact .fc-main::before,
.floating-contact .fc-main::after {
  content: none !important;
  display: none !important;
}

/* SVG icon */
.floating-contact .fc-main > svg {
  width: 26px !important;
  height: 26px !important;
  display: block !important;
  fill: none !important;
  stroke: #fff !important;
  stroke-width: 2 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
  pointer-events: none !important;
  position: relative !important;
  z-index: 2 !important;
}

/* ══ 6. NO PULSE — animation removed entirely ═══════════════════════════════ */
.floating-contact.visible .fc-main {
  animation: none !important;
}

/* ══ 7. FC-MAIN HOVER ════════════════════════════════════════════════════════ */
.floating-contact .fc-main:hover,
.floating-contact .fc-main:focus-visible {
  transform: translateY(-2px) scale(1.04) !important;
  background: rgba(255, 92, 10, 0.96) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 180, 140, 0.38),
    0 6px 26px rgba(255, 70, 0, 0.7),
    0 12px 36px rgba(0, 0, 0, 0.34) !important;
}

/* ══ 8. FC-OPTIONS LAYOUT ════════════════════════════════════════════════════ */
.floating-contact .fc-options {
  display: flex !important;
  flex-direction: column !important;
  gap: 6px !important;
  padding: 8px !important;
  width: 100% !important;
  left: 0 !important;
  right: 0 !important;
}

/* ══ 9. FC-BTN HOVER — zero movement, pure color shift ══════════════════════ */
.floating-contact .fc-btn:hover {
  transform: none !important;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.08) 100%
  ) !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
}
`],[`home-patch-emergency-ui-fix`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 47 — FC-MAIN glass z-index fix.
   btn-glass / btn-g / btn-p sections removed — original button CSS preserved.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ══ FC-MAIN — z-index:10 creates explicit stacking context so ::before
   at z-index:-1 is scoped within fc-main, not behind the page.           ══ */
.floating-contact .fc-main {
  position: relative !important;
  z-index: 10 !important;
  overflow: visible !important;
  width: 64px !important;
  height: 64px !important;
  border-radius: 20px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border: none !important;
  outline: none !important;
  box-shadow: 0 0 15px rgba(255, 85, 0, 0.4) !important;
  transition:
    transform 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

/* glass visual layer — z:-1 scoped within fc-main's z:10 stacking context */
.floating-contact .fc-main::before {
  content: '' !important;
  display: block !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: -1 !important;
  border-radius: inherit !important;
  overflow: hidden !important;
  pointer-events: none !important;
  background: rgba(255, 85, 0, 0.65) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
}

/* hit-area buffer */
.floating-contact .fc-main::after {
  content: '' !important;
  display: block !important;
  position: absolute !important;
  top: -20px !important;
  right: -20px !important;
  bottom: -20px !important;
  left: -20px !important;
  background: transparent !important;
  z-index: 99 !important;
  pointer-events: auto !important;
  border-radius: inherit !important;
  transform: none !important;
  animation: none !important;
}

/* SVG */
.floating-contact .fc-main > svg {
  position: relative !important;
  z-index: 2 !important;
  pointer-events: none !important;
  width: 26px !important;
  height: 26px !important;
  display: block !important;
  fill: none !important;
  stroke: #fff !important;
  stroke-width: 2 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
}

@keyframes fcSolidPulse {
  0%,
  100% {
    box-shadow: 0 0 15px rgba(255, 85, 0, 0.4);
  }
  50% {
    box-shadow:
      0 0 35px rgba(255, 85, 0, 0.8),
      0 0 10px rgba(255, 85, 0, 0.5);
  }
}

.floating-contact.visible .fc-main {
  animation: fcSolidPulse 3s ease-in-out infinite !important;
}

.floating-contact .fc-main:hover,
.floating-contact .fc-main:focus-visible {
  animation-play-state: paused !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 30px rgba(255, 85, 0, 0.9) !important;
}

/* ══ DROPDOWN ══════════════════════════════════════════════════════════════ */
.floating-contact .fc-options {
  display: flex !important;
  flex-direction: column !important;
  gap: 8px !important;
  padding: 8px !important;
}

.floating-contact .fc-btn:hover {
  transform: scale(1.02) !important;
  transition: transform 0.3s ease !important;
}
`],[`home-patch-final-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 48 — Final polish: simplified glass CTA, front-shield buffer,
   scroll flicker fix, zero-movement dropdown hover.
   Loads last — overrides patches 43–47 where needed.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ══ 2. FC-MAIN — SINGLE-LAYER GLASS (delete all ::before complexity) ═════════
   The 3-layer ::before/::after visual architecture across patches 43–47
   created compounding z-index / stacking-context conflicts where the red
   glass either disappeared entirely or showed as a solid black square.

   Simplest reliable fix: apply glass DIRECTLY to the element, exactly as
   it appears in the task spec. position:relative + z-index:10 creates a
   stacking context so the pulsing box-shadow renders outside overflow:visible
   and the SVG (z:2) renders above the button background without complexity.
   ::before is explicitly killed. ::after remains as the 20px hit buffer.
   ─────────────────────────────────────────────────────────────────────────── */
.floating-contact .fc-main {
  width: 64px !important;
  height: 64px !important;
  border-radius: 20px !important;
  position: relative !important;
  z-index: 10 !important;
  overflow: visible !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  cursor: pointer !important;
  /* glass directly on the element — no ::before intermediary */
  background: rgba(255, 85, 0, 0.8) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3) !important;
  transition: all 0.4s ease !important;
}

/* kill ::before from all previous patches */
.floating-contact .fc-main::before {
  display: none !important;
  content: none !important;
}

/* ::after — transparent 20px hit-area buffer, above everything in fc-main context */
.floating-contact .fc-main::after {
  content: '' !important;
  display: block !important;
  position: absolute !important;
  inset: -20px !important;
  z-index: 99 !important;
  background: transparent !important;
  pointer-events: auto !important;
  border-radius: inherit !important;
  transform: none !important;
  animation: none !important;
}

/* SVG — always visible above button background */
.floating-contact .fc-main > svg {
  position: relative !important;
  z-index: 2 !important;
  pointer-events: none !important;
  width: 26px !important;
  height: 26px !important;
  display: block !important;
  fill: none !important;
  stroke: #fff !important;
  stroke-width: 2 !important;
  stroke-linecap: round !important;
  stroke-linejoin: round !important;
}

/* Pulse — box-shadow only, inset highlight preserved in every keyframe */
@keyframes fcSolidPulse {
  0%,
  100% {
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.3),
      0 0 20px rgba(255, 85, 0, 0.5);
  }
  50% {
    box-shadow:
      inset 0 1px 1px rgba(255, 255, 255, 0.3),
      0 0 40px rgba(255, 85, 0, 0.9);
  }
}

.floating-contact.visible .fc-main {
  animation: fcSolidPulse 3s ease-in-out infinite !important;
}

/* Hover: pause pulse, gentle lift, strong glow */
.floating-contact .fc-main:hover,
.floating-contact .fc-main:focus-visible {
  animation-play-state: paused !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 30px rgba(255, 85, 0, 0.9) !important;
}

/* ══ 3. DROPDOWN — 8px gap, zero-movement hover ══════════════════════════════
   scale() on 48px buttons in a tight column causes visual jitter even at
   scale(1.02). Hover signalled purely through background brightening + shadow.
   ─────────────────────────────────────────────────────────────────────────── */
.floating-contact .fc-options {
  gap: 8px !important;
}

.floating-contact .fc-btn:hover {
  transform: none !important;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1) !important;
  background: rgba(255, 255, 255, 0.1) !important;
}

/* ══ 4. SCROLL-BACK FLICKER FIX — pe-title-static ═══════════════════════════
   When scrolling from the planets section back to hero (p dropping toward 0),
   the JS removes .pe-title-static and updates --pe-title-alpha on every rAF
   frame. Any CSS transition on the title element fights the JS instant update,
   producing a visible opacity flutter for ~300 ms.

   Fix: while .pe-title-static is active, suppress all transitions and force
   the resolved values. JS is in full control; CSS yields completely.
   The transition on the base rule (without .pe-title-static) resumes when
   the class is removed — so fade-out on scroll-back is still smooth.
   ─────────────────────────────────────────────────────────────────────────── */
.pe-title-static {
  transition: none !important;
  transform: none !important;
  opacity: 1 !important;
}
`],[`home-patch-brute-force`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 49 — Brute-force fixes: dropdown scale kill + border hit-area trick
   ═══════════════════════════════════════════════════════════════════════════ */

/* ══ 1. FC-BTN HOVER — maximum specificity scale kill ════════════════════════
   Every previous transform:none was overridden by a more-specific rule.
   Using 4-level compound selectors + scale/translate longhand properties
   to cover every possible transform path. gap:8px prevents visual overlap.
   ─────────────────────────────────────────────────────────────────────────── */
html body #floatingContact .floating-contact .fc-options .fc-btn:hover,
html body .floating-contact .fc-options .fc-btn:hover,
html body .floating-contact .fc-options .fc-btn.tg:hover,
html body .floating-contact .fc-options .fc-btn.wa:hover,
html body .floating-contact .fc-options .fc-btn.em:hover {
  transform: none !important;
  scale: 1 !important;
  translate: none !important;
  margin: 0 !important;
}

html body #floatingContact .floating-contact .fc-options {
  gap: 8px !important;
}

/* ── FC-BTN — transition identical to .nav-contact-item ─────────────────── */
html body .floating-contact .fc-options .fc-btn {
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1) !important;
}
`],[`home-patch-hero-button-flicker-fix`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 50 — Hero "View cases": 3-layer flicker-free hover architecture.
   Scoped strictly to #heroBtnsRow .btn-glass — header button untouched.

   Root cause of flicker: backdrop-filter on the element itself gets
   re-composited on every hover enter/leave, causing a paint flash.
   Fix: move the glass visual to ::before (overflow:hidden clips the blur
   to the button bounds), keep the wrapper structural-only, and use ::after
   as a transparent 20px hit-area buffer so the cursor never "falls off"
   the edge during a fast sweep.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Layer 0: Wrapper — structural only, visual stripped to ::before ─────── */
#heroBtnsRow .btn-glass {
  position: relative !important;
  overflow: visible !important; /* ::after must extend beyond bounds */
  isolation: isolate !important; /* new stacking context for z-index layers */
  background: transparent !important;
  border: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  box-shadow: none !important;
  /* only properties that stay on the wrapper: text color + lift */
  transition:
    color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    transform 0.2s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

#heroBtnsRow .btn-glass:hover {
  transform: translateY(-1px) !important;
}

/* ── Layer 1: Visual glass — ::before, clipped to button shape ───────────── */
#heroBtnsRow .btn-glass::before {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: -1 !important;
  border-radius: inherit !important;
  overflow: hidden !important; /* clips backdrop-filter to the button */
  pointer-events: none !important;
  /* exact original glass visual */
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.06) 50%,
    rgba(255, 255, 255, 0.03) 100%
  ) !important;
  backdrop-filter: blur(24px) saturate(1.5) !important;
  -webkit-backdrop-filter: blur(24px) saturate(1.5) !important;
  border: 0.5px solid rgba(255, 255, 255, 0.1) !important;
  border-top-color: rgba(255, 255, 255, 0.24) !important;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.14) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset,
    0 6px 24px rgba(0, 0, 0, 0.16),
    0 0 0 rgba(255, 255, 255, 0) !important;
  transition:
    background 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    border-color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

#heroBtnsRow .btn-glass:hover::before {
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.14) 0%,
    rgba(255, 255, 255, 0.07) 50%,
    rgba(255, 255, 255, 0.04) 100%
  ) !important;
  border-color: rgba(255, 255, 255, 0.14) !important;
  border-top-color: rgba(255, 255, 255, 0.26) !important;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset,
    0 8px 28px rgba(0, 0, 0, 0.2),
    0 0 0 rgba(255, 255, 255, 0) !important;
}

/* ── Layer 2: Transparent hit-area buffer — 20px beyond button bounds ─────── */
#heroBtnsRow .btn-glass::after {
  content: '' !important;
  position: absolute !important;
  top: -20px !important;
  bottom: -20px !important;
  left: -20px !important;
  right: -20px !important;
  z-index: 99 !important;
  background: transparent !important;
  pointer-events: auto !important;
}

/* ── Children — non-interactive so ::after wins all cursor events ─────────── */
#heroBtnsRow .btn-glass > * {
  pointer-events: none !important;
  position: relative !important;
  z-index: 1 !important;
}
`],[`home-patch-hero-hitbox-fix`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 52 — Hero button: flush hitbox shield + nuke all child pointer events.
   No visual changes. Overrides patch 50's extended ::after with inset:0.
   ═══════════════════════════════════════════════════════════════════════════ */

/* Kill pointer events on ALL descendants (text nodes, spans, SVGs, etc.) */
#heroBtnsRow .btn-glass * {
  pointer-events: none !important;
}

/* ::before is visual-only, must never steal events */
#heroBtnsRow .btn-glass::before {
  pointer-events: none !important;
}

/* Wrapper needs position:relative as the containing block for ::after */
#heroBtnsRow .btn-glass {
  position: relative !important;
}

/* Flush transparent shield exactly over the button — no gaps, no holes */
#heroBtnsRow .btn-glass::after {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: 99 !important;
  border-radius: inherit !important;
  pointer-events: auto !important;
  background: transparent !important;
}
`],[`home-patch-orbit-expansion`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 53 — Orbit expansion (desktop) + video popup background states.
   Mobile/tablet (≤ 900px) is fully protected by the min-width media query.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. DESKTOP ORBIT CONTAINER EXPANSION (+20%) ─────────────────────────── */
/* Wrapped in min-width: 901px so mobile/tablet rules are never touched.
   Planets use % positions relative to .pe-second-right — they scale outward
   automatically as the container grows. No per-sphere changes needed.    */
@media (min-width: 901px) {
  .pe-second-right {
    width: min(96vw, 1420px) !important; /* was min(92vw, 1180px) */
    height: min(85vh, 750px) !important; /* was min(72vh, 620px)  */
  }
}

/* ── 2. DESKTOP PLANET COORDINATES — pushed to container edges ───────────── */
/* Wrapped in min-width: 901px — tablet/mobile coordinates are untouched.
   JS applies translate(-50%, -50%) so top/left mark the sphere CENTER.     */
@media (min-width: 901px) {
  .pe-orb-activation {
    top: 50% !important;
    left: 5% !important;
  } /* SUPPORT  — left-center  */
  .pe-orb-led {
    top: 50% !important;
    left: 95% !important;
  } /* SCREENS  — right-center */
  .pe-orb-vr {
    top: 2% !important;
    left: 50% !important;
  } /* ACTIVATION — top-center  */
  .pe-orb-bar {
    top: 98% !important;
    left: 54% !important;
  } /* CATERING — bottom-center */
  .pe-orb-ideas {
    top: 15% !important;
    left: 15% !important;
  } /* STAND    — top-left      */
  .pe-orb-staff {
    top: 15% !important;
    left: 85% !important;
  } /* STAFF    — top-right     */
  .pe-orb-motion {
    top: 85% !important;
    left: 20% !important;
  } /* CONTENT  — bottom-left   */
  .pe-orb-materials {
    top: 85% !important;
    left: 80% !important;
  } /* MERCH    — bottom-right  */

  /* Expand SVG rings proportionally to match new planet spread */
  .pe-second-right .pe-orb-svg {
    transform: translate(-50%, -50%) scale(1.18) !important;
  }
}

/* ── 3. POPUP BACKGROUND STATES ───────────────────────────────────────────── */
/* JS adds .is-popup-active to document.body and .is-playing-video to the
   clicked sphere. body.is-popup-active cancels patch-42's container opacity
   so per-sphere dimming works correctly.                                    */

/* Cancel patch 42's whole-container dim — individual spheres handle it */
body.is-popup-active #peSecondRight {
  opacity: 1 !important;
  transition: opacity 0.5s ease !important;
}

/* 3a. Dim all inactive planets */
body.is-popup-active .pe-second-right .pe-orb-sphere:not(.is-playing-video) {
  filter: grayscale(1) opacity(0.25) !important;
  pointer-events: none !important;
  transition: filter 0.5s ease !important;
}

/* 3b. Keep the active planet bright and lifted */
body.is-popup-active .pe-second-right .pe-orb-sphere.is-playing-video {
  filter: none !important;
  opacity: 1 !important;
  transform: scale(1.05) translate(-50%, -50%) !important;
  z-index: 10 !important;
  box-shadow:
    0 0 25px rgba(0, 212, 255, 0.6),
    0 0 55px rgba(0, 100, 255, 0.35),
    0 8px 32px rgba(0, 0, 0, 0.4) !important;
  transition:
    transform 0.5s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.5s ease !important;
}

/* 3c. Dim SVG orbit rings */
body.is-popup-active .pe-orb-svg {
  opacity: 0.15 !important;
  transition: opacity 0.5s ease !important;
}
`],[`home-patch-popup-slider`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 54 — Video popup: prev/next slider navigation buttons.
   ═══════════════════════════════════════════════════════════════════════════ */

.pe-popup-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.22s cubic-bezier(0.25, 1, 0.5, 1),
    background 0.22s ease,
    border-color 0.22s ease;
}

.pe-popup-nav.prev {
  left: 2vw;
}
.pe-popup-nav.next {
  right: 2vw;
}

.pe-popup-nav:hover {
  background: rgba(0, 212, 255, 0.14);
  border-color: rgba(0, 212, 255, 0.38);
  transform: translateY(-50%) scale(1.1);
}

.pe-popup-nav:active {
  transform: translateY(-50%) scale(0.96);
}

.pe-popup-nav svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
  display: block;
}

@media (max-width: 600px) {
  .pe-popup-nav svg {
    width: 18px;
    height: 18px;
  }
}
`],[`home-patch-modal-mobile-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 55 — Request Concept modal: glassmorphism polish + mobile layout.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. GLASSMORPHISM POLISH (all breakpoints) ────────────────────────────── */
.request-popup__card {
  background: linear-gradient(
    160deg,
    rgba(15, 20, 30, 0.85) 0%,
    rgba(5, 10, 15, 0.75) 100%
  ) !important;
  backdrop-filter: blur(24px) saturate(1.2) !important;
  -webkit-backdrop-filter: blur(24px) saturate(1.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-top-color: rgba(255, 255, 255, 0.2) !important;
  border-radius: 24px !important;
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.5),
    inset 0 1px 1px rgba(255, 255, 255, 0.15) !important;
}

/* ── 2. MOBILE — stack form to single column ─────────────────────────────── */
/* Overrides the rogue \`grid-template-columns: 1fr 1fr !important\` rule
   at the bottom of 10-request-popup.css that was breaking mobile layout.  */
@media (max-width: 768px) {
  /* Outer wrapper: tight padding so modal doesn't touch viewport edges */
  .request-popup {
    padding: 16px !important;
    align-items: center !important;
  }

  /* Card: safe margins + reduced inner padding */
  .request-popup__card {
    width: calc(100% - 32px) !important;
    max-width: 100% !important;
    padding: 32px 20px 24px !important;
    padding-top: 32px !important;
    border-radius: 20px !important;
  }

  /* Title: right padding so text never slides under the close button */
  .request-popup__title {
    padding-right: 50px !important;
  }

  /* Close button: always tappable above any overlapping bounding boxes */
  .request-popup__close {
    z-index: 10 !important;
  }

  /* Form: flex column wins over any !important grid rule */
  .request-form {
    display: flex !important;
    flex-direction: column !important;
    gap: 16px !important;
  }

  /* Fields: full width, no stray margins */
  .request-form__field,
  .request-form__wide {
    width: 100% !important;
    margin: 0 !important;
  }

  /* Submit: fit to text so the underline decoration stays tight */
  .request-form__submit {
    width: max-content !important;
    align-self: center !important;
    margin-top: 16px !important;
    margin-bottom: 0 !important;
  }

  /* textarea: modest fixed height on small screens */
  textarea.request-form__field {
    min-height: 80px !important;
  }

  /* Submit button: bump to full-width pill on mobile */
  .request-form__submit {
    justify-self: unset !important;
    margin-top: 4px !important;
    text-align: center !important;
  }

  /* Close button: 44×44 minimum tap target */
  .request-popup__close {
    width: 44px !important;
    height: 44px !important;
    top: 14px !important;
    right: 14px !important;
    font-size: 24px !important;
    border-radius: 12px !important;
  }
}
`],[`home-patch-popup-refinement`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 56 — Video popup: smaller video, transparent backdrop, nav buttons
   hugging the video boundary, close button matching nav style.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. VIDEO SIZE & BACKDROP ─────────────────────────────────────────────── */
.pe-popup-video-wrap {
  width: min(50vw, calc(50vh * 16 / 9)) !important;
  max-width: none !important;
}

.pe-popup-backdrop {
  background: rgba(4, 12, 24, 0.22) !important;
  backdrop-filter: blur(2px) !important;
  -webkit-backdrop-filter: blur(2px) !important;
}

/* ── 2. NAV BUTTONS — hug the video boundary ─────────────────────────────── */
/* Video half-width = min(25vw, 25vh * 16/9).
   Buttons are 56px wide; sit 24px outside the video edge → gap = 28px + 28px.
   80px = half button (28px) + desired gap (≈52px feels right at this scale).  */
.pe-popup-nav.prev {
  left: calc(50% - min(25vw, calc(25vh * 16 / 9)) - 80px) !important;
}
.pe-popup-nav.next {
  right: calc(50% - min(25vw, calc(25vh * 16 / 9)) - 80px) !important;
}

/* ── 3. CLOSE BUTTON — matches nav button style ───────────────────────────── */
.pe-popup-close {
  /* position */
  position: absolute !important;
  top: 40px !important;
  right: 40px !important;
  left: auto !important;

  /* size & shape */
  width: 56px !important;
  height: 56px !important;
  border-radius: 50% !important;
  padding: 0 !important;

  /* center the × glyph */
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 28px !important;
  font-weight: 300 !important;
  line-height: 1 !important;
  color: #fff !important;

  /* glass — identical to .pe-popup-nav */
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  box-shadow: none !important;

  transition:
    transform 0.22s cubic-bezier(0.25, 1, 0.5, 1),
    background 0.22s ease,
    border-color 0.22s ease !important;
  cursor: pointer !important;
  z-index: 3 !important;
}

.pe-popup-close:hover {
  transform: scale(1.1) !important;
  background: rgba(255, 255, 255, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.4) !important;
}
`],[`home-patch-planets-colors-and-sizing`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 57 — Planet orbit: moderate coordinates, unique glow colors,
   unified hover/active state, buttery transition.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. DESKTOP COORDINATES — pulled in from extremes ────────────────────── */
@media (min-width: 901px) {
  .pe-orb-activation {
    top: 55% !important;
    left: 10% !important;
  } /* SUPPORT  — left   */
  .pe-orb-led {
    top: 50% !important;
    left: 90% !important;
  } /* SCREENS  — right  */
  .pe-orb-vr {
    top: 6% !important;
    left: 50% !important;
  } /* ACTIVATION — top  */
  .pe-orb-bar {
    top: 94% !important;
    left: 54% !important;
  } /* CATERING — bottom */
  .pe-orb-ideas {
    top: 18% !important;
    left: 20% !important;
  } /* STAND    — TL     */
  .pe-orb-staff {
    top: 18% !important;
    left: 80% !important;
  } /* STAFF    — TR     */
  .pe-orb-motion {
    top: 82% !important;
    left: 22% !important;
  } /* CONTENT  — BL     */
  .pe-orb-materials {
    top: 82% !important;
    left: 78% !important;
  } /* MERCH    — BR     */

  /* SVG rings — proportional to new spread (was 1.18) */
  .pe-second-right .pe-orb-svg {
    transform: translate(-50%, -50%) scale(1.08) !important;
  }
}

/* ── 2. UNIQUE GLOW COLORS — CSS variable per planet ─────────────────────── */
.pe-orb-ideas {
  --planet-glow: rgb(82, 34, 160);
} /* STAND       */
.pe-orb-vr {
  --planet-glow: rgb(91, 167, 242);
} /* ACTIVATION  */
.pe-orb-staff {
  --planet-glow: rgb(219, 111, 81);
} /* STAFF       */
.pe-orb-led {
  --planet-glow: rgb(31, 74, 188);
} /* SCREENS     */
.pe-orb-materials {
  --planet-glow: rgb(210, 171, 65);
} /* MERCH       */
.pe-orb-bar {
  --planet-glow: rgb(51, 124, 219);
} /* CATERING    */
.pe-orb-motion {
  --planet-glow: rgb(159, 68, 47);
} /* CONTENT     */
.pe-orb-activation {
  --planet-glow: rgb(80, 144, 74);
} /* SUPPORT     */

/* ── 3. SMOOTH BASE TRANSITION ───────────────────────────────────────────── */
.pe-orb-sphere {
  transition:
    transform 0.6s cubic-bezier(0.25, 1, 0.5, 1),
    filter 0.6s cubic-bezier(0.25, 1, 0.5, 1),
    opacity 0.6s ease !important;
}

/* ── 4. UNIFIED HOVER + ACTIVE STATE ─────────────────────────────────────── */
/* Identical visuals for mouse-hover and popup-active planet.
   Glow moves to sphere level via drop-shadow so it follows the circular
   silhouette. box-shadow: none cancels patch-53's old glow approach.     */
.pe-orb-sphere:hover,
body.is-popup-active .pe-second-right .pe-orb-sphere.is-playing-video {
  transform: translate(-50%, -50%) scale(1.04) !important;
  filter: drop-shadow(0 0 25px var(--planet-glow)) drop-shadow(0 0 50px var(--planet-glow)) !important;
  opacity: 1 !important;
  z-index: 10 !important;
  box-shadow: none !important;
}

/* Reset video-level hover effects — glow is now on the sphere wrapper */
.pe-orb-sphere:hover .pe-orb-video,
body.is-popup-active .pe-second-right .pe-orb-sphere.is-playing-video .pe-orb-video {
  transform: none !important;
  filter: none !important;
}
`],[`home-patch-planets-glow-fix`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 58 — Orbit: bottom coords, scale bump, glow on video element.
   drop-shadow on the wrapper is ignored by GPU-composited <video> — fix:
   apply filter directly to .pe-orb-video so the GPU layer receives it.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. BOTTOM ORBIT COORDINATES ─────────────────────────────────────────── */
@media (min-width: 901px) {
  .pe-orb-bar {
    top: 83% !important;
    left: 50% !important;
  } /* CATERING — bottom      */
  .pe-orb-motion {
    top: 78% !important;
    left: 26% !important;
  } /* CONTENT  — bottom-left */
  .pe-orb-materials {
    top: 78% !important;
    left: 74% !important;
  } /* MERCH    — bottom-right */

  .pe-second-right .pe-orb-svg {
    transform: translate(-50%, -50%) scale(1.02) !important;
  }
}

/* ── 2. BASE TRANSITION — buttery smooth ─────────────────────────────────── */
.pe-orb-sphere {
  transition:
    transform 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.9s ease !important;
}

/* ── 3. SCALE ON HOVER / ACTIVE — reduced ────────────────────────────────── */
.pe-orb-sphere:hover,
body.is-popup-active .pe-second-right .pe-orb-sphere.is-playing-video {
  transform: translate(-50%, -50%) scale(1.05) !important;
  opacity: 1 !important;
  z-index: 10 !important;
}

/* ── 4. GLOW ON VIDEO ELEMENT (bypass GPU-composited wrapper bug) ─────────── */
.pe-orb-video {
  transition: filter 0.9s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.pe-orb-sphere:hover .pe-orb-video,
body.is-popup-active .pe-second-right .pe-orb-sphere.is-playing-video .pe-orb-video {
  filter: drop-shadow(0 0 20px var(--planet-glow)) drop-shadow(0 0 50px var(--planet-glow)) !important;
}
`],[`home-patch-video-fouc-fix`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 59 — Video popup FOUC fix.

   ROOT CAUSE: CSS patches are JS-injected. On first paint the browser sees
   no patch CSS → backdrop renders at browser-default opacity:1. When the
   patch injects and sets opacity:0 WITH a transition, the browser animates
   1→0 over 300ms = a visible flash on every page load.

   Secondary: backdrop-filter on the base state can trigger GPU compositing
   before opacity:0 takes effect, causing a brief blur bleed-through.

   FIX STRATEGY:
   · Base state: instant hide (transition:none, backdrop-filter:none).
   · .is-open state: transition lives here → smooth open; instant close is
     acceptable and avoids the FOUC without any JS changes.
   · All child controls (nav, close) get their own opacity/visibility so
     they can never bleed through if backdrop's stacking context shifts.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. BACKDROP — instant hidden base, no GPU bleed ─────────────────────── */
.pe-popup-backdrop {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  /* GPU compositing off while hidden — prevents backdrop-filter bleed */
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  /* NO transition: prevents 1→0 animation on CSS injection (the FOUC) */
  transition: none !important;
}

/* Re-apply blur and transition only when open */
.pe-popup-backdrop.is-open {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
  backdrop-filter: blur(2px) !important;
  -webkit-backdrop-filter: blur(2px) !important;
  transition: opacity 0.35s ease !important;
}

/* ── 2. NAV BUTTONS — explicit hidden, don't rely on backdrop inheritance ── */
.pe-popup-nav {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transition: none !important;
}

.pe-popup-backdrop.is-open .pe-popup-nav {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
  /* slight delay so buttons appear after backdrop fades in */
  transition:
    opacity 0.3s ease 0.1s,
    transform 0.22s cubic-bezier(0.25, 1, 0.5, 1),
    background 0.22s ease,
    border-color 0.22s ease !important;
}

/* ── 3. CLOSE BUTTON — same treatment as nav buttons ─────────────────────── */
.pe-popup-close {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transition: none !important;
}

.pe-popup-backdrop.is-open .pe-popup-close {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
  transition:
    opacity 0.3s ease 0.1s,
    transform 0.22s cubic-bezier(0.25, 1, 0.5, 1),
    background 0.22s ease,
    border-color 0.22s ease !important;
}

/* ── 4. VIDEO ELEMENT — ensure no native controls or poster flash ─────────── */
#pePopupVideo {
  /* controls attribute is absent in HTML; belt-and-suspenders */
  display: block !important;
  opacity: 1 !important;
}
`],[`home-patch-solar-core-effect`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 60 — "perfect event" solar core.

   Corona layers are on #peSecond::before/after (position:absolute; inset:0
   from patch-14 → fills the full viewport). #peSecond is centred in the
   viewport, and #peSecondRight is centred inside #peSecond via
     left:50%; top:50%; transform:translate(-50%,-50%)
   so radial-gradient(circle at 50% 50%) on #peSecond aligns exactly with
   the sun title. This eliminates the visible boundary that the old
   #peSecondRight-based corona showed at the container edge.

   patch-41's #peSecond::before (nebulaPulse) is superseded by the rules
   below — same specificity, patch-60 loads later → patch-60 wins.

   Scroll sync: JS sets --solar-alpha on #peSecond (0→1 as p: 0.31→0.46).
   CSS custom properties cascade DOWN — #peSecond::before reads
   var(--solar-alpha) inherited from its owner element.

   Pulsation: two independently asynchronous layers (13 s / 17 s, offset -6 s)
   with uneven keyframe stops → organic, non-mechanical breathing.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 0. CANCEL OLD ORBIT-CONTAINER CORONA ──────────────────────────────────── */
/* Corona moved from #peSecondRight (container-sized) to #peSecond (viewport). */
#peSecondRight::before,
#peSecondRight::after {
  content: none !important;
  display: none !important;
}

/* ── 1. KEYFRAMES ─────────────────────────────────────────────────────────── */

/* Title: 6 irregular brightness surges over 13 s.
   All drop-shadow radii capped at 200 px — safe within the viewport on any
   desktop width ≥ 769 px when the title is centred. The wide outer corona
   (previously 380–560 px shadows) is now handled by #peSecond::before which
   covers the full viewport without any overflow:clip boundary.              */
@keyframes solarCoreGlow {
  0% {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1))
      drop-shadow(0 0 28px rgba(140, 248, 255, 0.96)) drop-shadow(0 0 72px rgba(0, 212, 255, 0.64))
      drop-shadow(0 0 160px rgba(0, 162, 232, 0.44));
  }
  14% {
    filter: drop-shadow(0 0 18px rgba(255, 255, 255, 1))
      drop-shadow(0 0 50px rgba(168, 252, 255, 0.99)) drop-shadow(0 0 120px rgba(0, 222, 255, 0.88))
      drop-shadow(0 0 180px rgba(0, 172, 242, 0.64));
  }
  27% {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.95))
      drop-shadow(0 0 26px rgba(115, 242, 255, 0.84)) drop-shadow(0 0 60px rgba(0, 200, 255, 0.56))
      drop-shadow(0 0 148px rgba(0, 148, 226, 0.38));
  }
  46% {
    filter: drop-shadow(0 0 24px rgba(255, 255, 255, 1))
      drop-shadow(0 0 64px rgba(210, 255, 255, 1)) drop-shadow(0 0 148px rgba(0, 228, 255, 0.97))
      drop-shadow(0 0 200px rgba(0, 178, 248, 0.74));
  }
  61% {
    filter: drop-shadow(0 0 11px rgba(255, 255, 255, 0.97))
      drop-shadow(0 0 30px rgba(118, 244, 255, 0.88)) drop-shadow(0 0 76px rgba(0, 208, 255, 0.6))
      drop-shadow(0 0 158px rgba(0, 154, 234, 0.42));
  }
  79% {
    filter: drop-shadow(0 0 16px rgba(255, 255, 255, 1))
      drop-shadow(0 0 46px rgba(155, 250, 255, 0.99)) drop-shadow(0 0 106px rgba(0, 218, 255, 0.8))
      drop-shadow(0 0 178px rgba(0, 168, 240, 0.57));
  }
  100% {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1))
      drop-shadow(0 0 28px rgba(140, 248, 255, 0.96)) drop-shadow(0 0 72px rgba(0, 212, 255, 0.64))
      drop-shadow(0 0 160px rgba(0, 162, 232, 0.44));
  }
}

/* Inner corona: organic opacity breathing, 17 s.
   transform:scale removed — scaling a viewport-sized pseudo-element
   (inset:0 on #peSecond) causes GPU-compositing edge artifacts at the
   clip boundary in Chrome/Safari. Opacity-only pulsation is sufficient. */
@keyframes solarInnerCorona {
  0% {
    opacity: 0.62;
  }
  14% {
    opacity: 0.92;
  }
  26% {
    opacity: 0.68;
  }
  43% {
    opacity: 0.9;
  }
  57% {
    opacity: 0.6;
  }
  72% {
    opacity: 0.93;
  }
  85% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.62;
  }
}

/* Outer corona: slow diffuse breathing, 23 s — opacity-only, same reason. */
@keyframes solarOuterCorona {
  0% {
    opacity: 0.38;
  }
  20% {
    opacity: 0.72;
  }
  35% {
    opacity: 0.42;
  }
  54% {
    opacity: 0.75;
  }
  69% {
    opacity: 0.36;
  }
  84% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.38;
  }
}

/* ══ SOLAR GLOW OVERFLOW FIX ══════════════════════════════════════════════
   overflow:hidden clips the Gaussian drop-shadow at the element boundary.
   overflow:clip replaces it without creating a BFC, so position:sticky
   and all layout behaviour on #heroSection stay intact.

   Drop-shadow radii are now capped at 200 px (see solarCoreGlow above),
   so they never reach the container boundary on supported viewports ≥ 769 px.
   The removed overflow-clip-margin was Safari-incompatible anyway.         */
#heroSection.hero,
#peSecond.pe-second,
.pe-second,
#peSecond {
  overflow: clip !important;
}

/* ── 2. TITLE GLOW ────────────────────────────────────────────────────────── */
#peOrbTitle.is-centered-sun {
  animation: solarCoreGlow 13s ease-in-out infinite !important;
}

/* ── 3. INNER CORONA — #peSecond::before (full viewport) ─────────────────── */
/* Supersedes patch-41's #peSecond::before (nebulaPulse + simple gradient).
   Same selector specificity, patch-60 loads later → patch-60 wins.
   #peSecond is position:absolute; inset:0 → fills full viewport.
   gradient at circle 50% 50% = viewport centre = sun title position.       */
#peSecond::before {
  content: '';
  position: absolute;
  inset: 0;
  /* Single centred gradient — a second off-centre gradient (previously at
     32% 30%) created a faint glow in the top-left area of the viewport
     that the user saw as an unwanted "corner flare". Removed.
     The .pe-solar-flare element (inside #peSecondRight) provides the
     intentional STAND-planet accent independently.                      */
  background: radial-gradient(
    ellipse 52% 60% at 50% 50%,
    rgba(250, 255, 255, 0.99) 0%,
    rgba(0, 235, 255, 0.94) 3%,
    rgba(0, 218, 255, 0.82) 7%,
    rgba(0, 196, 255, 0.64) 14%,
    rgba(0, 162, 245, 0.42) 24%,
    rgba(0, 112, 220, 0.2) 38%,
    rgba(0, 68, 192, 0.04) 55%,
    rgba(0, 38, 162, 0.02) 72%,
    rgba(0, 20, 140, 0.01) 84%,
    transparent 94%
  );
  opacity: var(--solar-alpha, 0);
  pointer-events: none;
  z-index: 0;
  transform-origin: center center;
  transition: none;
}

#peSecond::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 52% 60% at 50% 50%,
    rgba(250, 255, 255, 0.99) 0%,
    rgba(0, 235, 255, 0.94) 3%,
    rgba(0, 218, 255, 0.82) 7%,
    rgba(0, 196, 255, 0.64) 14%,
    rgba(0, 162, 245, 0.42) 24%,
    rgba(0, 112, 220, 0.2) 38%,
    rgba(0, 68, 192, 0.04) 55%,
    rgba(0, 38, 162, 0.02) 72%,
    rgba(0, 20, 140, 0.01) 84%,
    transparent 94%
  );
  opacity: var(--solar-alpha, 0);
  pointer-events: none;
  z-index: 0;
  transform-origin: center center;
  transition: none;
}

#peSecond.is-centered-sun::before {
  animation: solarInnerCorona 17s ease-in-out infinite;
}

/* ── 4. OUTER CORONA — #peSecond::after (full viewport, wide diffuse haze) ── */
/* Renders after #peSecondRight in paint order (::after), but its max opacity
   (~0.22) is too low to obscure planets — just adds a diffuse atmospheric glow. */
#peSecond::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 225, 255, 0.22) 0%,
    rgba(0, 165, 242, 0.14) 20%,
    rgba(0, 95, 205, 0.08) 40%,
    rgba(0, 50, 165, 0.04) 60%,
    rgba(0, 25, 135, 0.01) 78%,
    transparent 92%
  );
  opacity: var(--solar-alpha, 0);
  pointer-events: none;
  z-index: 0;
  transform-origin: center center;
  transition: none;
}

#peSecond.is-centered-sun::after {
  animation: solarOuterCorona 23s ease-in-out infinite;
  animation-delay: -9s;
}

/* ── 5. STAND SOLAR FLARE — secondary glow, top-left of orbit ────────────── */
/* Separate element so it has its own rhythm (19 s, offset -11 s), independent
   from the central corona. Opacity ~3× paler than the center so it reads as
   a secondary "sun flare" accent, not a competing focal point.              */
@keyframes solarFlareStand {
  0% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.93);
  }
  23% {
    opacity: 0.88;
    transform: translate(-50%, -50%) scale(1.08);
  }
  47% {
    opacity: 0.42;
    transform: translate(-50%, -50%) scale(0.91);
  }
  71% {
    opacity: 0.82;
    transform: translate(-50%, -50%) scale(1.07);
  }
  100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.93);
  }
}

.pe-solar-flare {
  position: absolute;
  top: 18%;
  left: 20%;
  width: 46%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 215, 255, 0.32) 0%,
    rgba(0, 185, 248, 0.2) 18%,
    rgba(0, 140, 225, 0.1) 38%,
    rgba(0, 80, 195, 0.04) 58%,
    transparent 76%
  );
  /* scroll-synced: inherits --solar-alpha cascaded from #peSecond */
  opacity: var(--solar-alpha, 0);
  pointer-events: none;
  z-index: 0;
  transform-origin: center center;
  transition: none;
}

#peSecond.is-centered-sun .pe-solar-flare {
  animation: solarFlareStand 19s ease-in-out infinite;
  animation-delay: -11s;
}
`],[`home-patch-orbit-entrance-choreography`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 61 — Planet Orbit Entrance Choreography

   Initial state: labels (.pe-label-text) start hidden below their sphere.
   JS (26-planet-engine.js) adds .label-revealed to each .pe-orb-sphere in
   clockwise stagger order, triggered after the solar flash fires.

   Specificity ladder:
     #peSecondRight .pe-orb-sphere .pe-label-text           → (1,2,0) !important
       beats patch-112's  .pe-orb-sphere .pe-label-text      → (0,2,0) !important
     #peSecondRight .pe-orb-sphere.label-revealed .pe-label-text → (1,3,0) !important
       beats the hiding rule for the revealed phase.
   ═══════════════════════════════════════════════════════════════════════════ */

@media (min-width: 769px) {
  /* ── 1. INITIAL HIDDEN STATE ─────────────────────────────────────────────── */
  #peSecondRight .pe-orb-sphere .pe-label-text {
    opacity: 0 !important;
    transform: translateY(10px) !important;
    transition:
      opacity 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      color 0.36s ease-out,
      text-shadow 0.36s ease-out,
      filter 0.36s ease-out !important;
  }

  /* ── 2. REVEALED — .label-revealed added by JS with per-sphere stagger ──── */
  #peSecondRight .pe-orb-sphere.label-revealed .pe-label-text {
    opacity: 1 !important;
    transform: translateY(0px) !important;
  }

  #peSecondRight .pe-orb-sphere .pe-sphere-label .pe-label-text {
    position: relative !important;
    z-index: 1 !important;
    isolation: isolate !important;
  }

  /* ── LABEL FLASH — one-shot pulse, triggered by 01-core-interactions.js ───
     Direct !important properties are used because base label styles also use
     !important; keyframe animations cannot reliably override that cascade. */
  #peSecond.planet-label-splash #peSecondRight .pe-orb-sphere .pe-label-text {
    color: rgba(0, 212, 255, 1) !important;
    text-shadow:
      0 0 10px rgba(0, 212, 255, 1),
      0 0 26px rgba(0, 118, 255, 0.75),
      0 0 52px rgba(0, 72, 195, 0.45) !important;
    filter: brightness(1.8) saturate(1.35) !important;
  }

  #peSecondRight .pe-orb-sphere .pe-sphere-label {
    position: absolute !important;
    isolation: isolate !important;
    overflow: visible !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  #peSecondRight .pe-orb-sphere .pe-label-text::before {
    content: '' !important;
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    width: 120% !important;
    height: 100% !important;
    transform: translate(-50%, -50%) scale(1) !important;
    border-radius: 999px !important;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 212, 255, 0.72) 0%,
      rgba(0, 212, 255, 0.34) 20%,
      rgba(0, 118, 255, 0.22) 44%,
      rgba(0, 72, 195, 0.1) 66%,
      transparent 82%
    ) !important;
    opacity: 0 !important;
    filter: blur(22px) saturate(1.2) !important;
    pointer-events: none !important;
    mix-blend-mode: screen !important;
    z-index: -1 !important;
    transition:
      opacity 0.18s ease-out,
      transform 0.48s ease-out !important;
  }

  #peSecond.planet-label-splash #peSecondRight .pe-orb-sphere .pe-label-text::before {
    opacity: 0.86 !important;
    transform: translate(-50%, -50%) scale(1.18) !important;
  }

  /* ── 3. SOLAR BLOOM OVERLAY ──────────────────────────────────────────────── */
  /* position: absolute within #peSecondRight, centered on the orbit title.
     GSAP controls transform (xPercent, yPercent, scale) and opacity.
     Gradient is soft and diffuse — this is a slow corona breath, not a flash.
     Low white-core opacity prevents harshness; colour matches the solar glow.
     mix-blend-mode: screen on a <div> is safe (no GPU alpha-channel issue);
     isolation: isolate on #peSecondRight confines the blend to the orbit panel. */
  .pe-flash-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 720px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at 50% 50%,
      rgba(255, 255, 255, 0.14) 0%,
      rgba(180, 242, 255, 0.1) 10%,
      rgba(0, 212, 255, 0.07) 24%,
      rgba(0, 72, 195, 0.01) 64%,
      transparent 80%
    );
    pointer-events: none;
    z-index: 20;
    mix-blend-mode: screen;
    will-change: transform, opacity;
  }
}

/* #peSecondRight .pe-flash-overlay {
  display: none !important;
} */
`],[`home-patch-safari-planets-fix`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 62 — Safari Planet Fix: GPU-safe glow architecture + smooth scale

   ROOT CAUSE (two bugs):
   1. SAFARI BLACK BOX — filter: drop-shadow applied to a GPU-composited
      <video> with an alpha channel. WebKit creates a separate compositor
      layer for the video and renders its alpha boundary as opaque black
      before compositing. Patches 57 and 58 both do this.
   2. JERKY HOVER — transitioning \`filter\` and \`transform\` simultaneously on
      a <video> element forces Safari to tear down and rebuild compositor
      layers mid-animation, causing frame drops.

   FIX ARCHITECTURE:
   · All filter stripped from .pe-orb-video in every state (base/hover/active).
   · Glow promoted to .pe-orb-sphere::before — a pure CSS box-shadow layer
     that composites independently of the video's GPU layer. No alpha issue.
   · Sphere hover uses translate3d(-50%, -50%, 0) scale() so the browser
     promotes the sphere to a compositor layer before the interaction fires,
     eliminating the first-hover jitter.
   · will-change: transform on base state locks each sphere onto the GPU.

   SPECIFICITY NOTES:
   · To override patch-112's "#peSecondRight .pe-orb-sphere::before {
     display:none !important; content:none !important; }" which has (1,1,1),
     we use the same selector — later source order (deferred patches inject
     after homeStyleBlocks) wins at equal specificity + !important.
   · Hover overrides on .pe-orb-sphere use #peSecondRight prefix → (1,1,1)
     beats patches 57/58 plain class rules at (0,2,0).
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. STRIP FILTER + FIX BLEND MODE ON VIDEO ───────────────────────────────
   HEVC files with a true alpha channel must render with mix-blend-mode: normal
   so the browser uses the native alpha track directly. mix-blend-mode: screen
   (the previous "transparent black" hack) discards native alpha and treats
   black as transparent via math — wrong for real-alpha sources; causes black
   bounding boxes in Safari because the alpha boundary is mis-read.
   background: transparent ensures no browser default black shows through
   transparent regions of the frame.
   ─────────────────────────────────────────────────────────────────────────── */
.pe-orb-video {
  filter: none !important;
  transform: none !important;
  mix-blend-mode: normal !important;
  background: transparent !important;
}

.pe-orb-sphere:hover .pe-orb-video,
body.is-popup-active .pe-second-right .pe-orb-sphere.is-playing-video .pe-orb-video {
  filter: none !important;
  transform: none !important;
}

/* ── 2. RE-ENABLE ::before — hardware-accelerated glow layer ─────────────────
   patch-112 killed ::before with "display:none !important; content:none
   !important" at specificity (1,1,1) for "#peSecondRight .pe-orb-sphere::before".
   This rule matches the same specificity; later source order wins.
   ─────────────────────────────────────────────────────────────────────────── */
#peSecondRight .pe-orb-sphere::before {
  content: '' !important;
  display: block !important;
  position: absolute !important;
  inset: 10% !important;
  border-radius: 50% !important;
  /* z-index: 0 — sits behind video (z:1) but above transparent sphere bg */
  z-index: 0 !important;
  background: transparent !important;
  opacity: 0 !important;
  box-shadow: none !important;
  transform: scale(1) !important;
  transition:
    opacity 0.4s ease-out,
    transform 0.4s ease-out,
    box-shadow 0.4s ease-out !important;
  will-change: opacity, transform !important;
  pointer-events: none !important;
}

/* ── 3. GLOW ON ::before FOR HOVER + POPUP-ACTIVE STATE ─────────────────────
   box-shadow (not drop-shadow/filter) composites on a separate GPU layer that
   is completely independent of the video's alpha compositor layer. No black
   box, no Safari rendering artifact.
   Outer shadow: visible aura ring around the sphere.
   Inset shadow: ambient interior fill showing through transparent sphere bg.
   ─────────────────────────────────────────────────────────────────────────── */
#peSecondRight .pe-orb-sphere:hover::before,
body.is-popup-active #peSecondRight .pe-orb-sphere.is-playing-video::before {
  opacity: 1 !important;
  box-shadow:
    0 0 10px var(--planet-glow),
    inset 0 0 5px var(--planet-glow) !important;
  transform: scale(1.1) !important;
}

/* ── 4. GPU-SMOOTH SPHERE SCALE ──────────────────────────────────────────────
   will-change: transform on the BASE state promotes each sphere to its own
   compositor layer upfront. Safari then never needs to tear down / rebuild a
   layer mid-animation, eliminating the first-hover stutter.
   translate3d (not translate) is the explicit 3D form — WebKit treats it as a
   definitive signal to use the hardware transform path.
   transform-style: preserve-3d keeps the 3D rendering context intact so
   translate3d on hover doesn't flatten back into a 2D repaint.
   ─────────────────────────────────────────────────────────────────────────── */
#peSecondRight .pe-orb-sphere {
  will-change: transform !important;
  transform-style: preserve-3d !important;
  /* cancel any filter the sphere wrapper ever received */
  filter: none !important;
}

#peSecondRight .pe-orb-sphere:hover,
body.is-popup-active #peSecondRight .pe-orb-sphere.is-playing-video {
  transform: translate3d(-50%, -50%, 0) scale(1.08) !important;
  filter: none !important;
  z-index: 10 !important;
  opacity: 1 !important;
}
`],[`home-patch-planets-polish-final`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 63 — Planet Polish: grayscale restore, screen-blend restore,
               glow-gap calibration.

   All three fixes override patch-62 rules at equal specificity + !important.
   Patch 63 loads last (legacyPatchStyleBlocks tail), so later source order
   wins every tie at the same specificity + !important level.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. RESTORE GRAYSCALE + SCREEN BLEND ON VIDEO ────────────────────────────
   Patch 62 set filter:none and mix-blend-mode:normal — both wrong.
   · mix-blend-mode: screen is the correct cross-browser way to make the solid
     black background of non-alpha video sources transparent. It is also safe
     for HEVC-alpha files: screen of pure black (0,0,0) = transparent, so no
     colour information is lost.
   · grayscale(1) in base → grayscale(0) on hover restores the desaturated-
     to-colour reveal that existed before patch 62.
   · transition: filter 0.6s ease drives the smooth colour-reveal on hover
     without transitioning transform (avoids the Safari compositor rebuild).
   ─────────────────────────────────────────────────────────────────────────── */
.pe-orb-video {
  mix-blend-mode: screen !important;
  background: transparent !important;
  filter: grayscale(1) !important;
  transition: filter 0.6s ease !important;
}

.pe-orb-sphere:hover .pe-orb-video,
body.is-popup-active .pe-second-right .pe-orb-sphere.is-playing-video .pe-orb-video {
  filter: grayscale(0) !important;
}

/* ── 2. CALIBRATE ::before GLOW LAYER — close the gap ───────────────────────
   The visual planet content sits inside the video bounding box with natural
   padding (the video frame is square, the planet silhouette is circular).
   inset: 10% (patch 62) left a visible gap between the glow halo and the
   planet edge. inset: 12% pulls the ::before circle inward to hug the
   actual planet silhouette more precisely.

   box-shadow values: outer 15px blur + 2px spread for a tight accent ring;
   inset 10px/2px for a subtle interior ambient fill. Both use --planet-glow
   so the colour remains per-planet from patch 57.
   ─────────────────────────────────────────────────────────────────────────── */
#peSecondRight .pe-orb-sphere::before {
  inset: 12% !important;
  border-radius: 50% !important;
}

#peSecondRight .pe-orb-sphere:hover::before,
body.is-popup-active #peSecondRight .pe-orb-sphere.is-playing-video::before {
  opacity: 1 !important;
  box-shadow:
    0 0 15px 2px var(--planet-glow),
    inset 0 0 10px 2px var(--planet-glow) !important;
}
`],[`home-patch-safari-and-sync-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 64 — Safari layer-isolation fix + bottom-planet glow calibration.

   BUG (Safari black frame in resting state only):
   WebKit's GPU compositor handles <video> elements on a separate render path.
   Applying mix-blend-mode: screen directly to <video> asks that compositor to
   blend via the video-specific GPU pipeline, which mis-reads the alpha boundary
   of the video frame as opaque black — ONLY in the resting state where
   filter: grayscale is also active. The two GPU operations (blend + filter)
   on the same video element collapse into a single pass that WebKit gets wrong.

   FIX — split the operations onto two separate DOM layers:
   · .pe-orb-sphere (a plain <div>): owns mix-blend-mode: screen. Safari
     composites <div> screen-blends correctly. NO isolation: isolate — that
     property forces an offscreen buffer whose default fill is opaque black
     before the screen blend is applied, recreating the capsule artifact.
     mix-blend-mode alone already creates an implicit stacking context.
     background: transparent ensures no solid fill interferes.
   · .pe-orb-video: mix-blend-mode: normal. The video now renders into the
     sphere's already-blended stacking context and contributes its pixels
     as-is. filter: grayscale stays here (CSS filter on <video> alone is
     fine; it's the COMBINATION of filter + mix-blend-mode that breaks).

   SPECIFICITY NOTES:
   · Sphere blend rule: "#peSecondRight .pe-orb-sphere" matches (1,1,0) —
     same as patch-62, but patch-64 loads last so later source order wins.
   · Video mix-blend-mode: ".pe-orb-video" at (0,1,0) beats patch-63's same
     selector by later source order.
   · Bottom-planet ::before inset: "#peSecondRight .pe-orb-{bar|motion|
     materials}::before" at (1,1,1) — same as patch-63's base ::before rule,
     later source wins.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. SPHERE WRAPPER — takes over the screen blend ─────────────────────────
   Moving mix-blend-mode: screen from <video> to its <div> parent routes the
   blending through Safari's standard (correct) compositor path.
   isolation: isolate was previously here but caused the "black capsule" bug:
   Safari renders isolated stacking contexts in an offscreen buffer with an
   opaque black default fill, which shows as a rectangular capsule around the
   video frame before the screen blend can eliminate the black background.
   mix-blend-mode: screen already creates an implicit stacking context, so
   isolation is redundant and has been removed.
   ─────────────────────────────────────────────────────────────────────────── */
#peSecondRight .pe-orb-sphere {
  mix-blend-mode: screen !important;
  background: transparent !important;
  /* isolation: isolate removed — it forces an offscreen buffer with an opaque
     black default fill in Safari, causing the visible black capsule around each
     planet video frame. mix-blend-mode already creates an implicit stacking
     context, so isolation is redundant and harmful here. */
}

/* ── 2. VIDEO — render normally inside the already-blended stacking context ──
   mix-blend-mode: normal lets the video pixels (including the black BG) pass
   straight into the sphere's stacking context. The sphere's screen blend then
   eliminates the black. filter: grayscale lives here and is safe in isolation.
   ─────────────────────────────────────────────────────────────────────────── */
.pe-orb-video {
  mix-blend-mode: normal !important;
}

/* ── 3. BOTTOM PLANETS — tighter ::before inset ──────────────────────────────
   pe-orb-bar (CATERING), pe-orb-motion (CONTENT), pe-orb-materials (MERCH)
   have more padding around the visual planet inside their square video frame
   than the top/side planets. The 12% inset from patch-63 still shows a gap.
   18% closes it — verified against the visible planet silhouette boundary.
   ─────────────────────────────────────────────────────────────────────────── */
#peSecondRight .pe-orb-bar::before,
#peSecondRight .pe-orb-motion::before,
#peSecondRight .pe-orb-materials::before {
  inset: 18% !important;
  border-radius: 50% !important;
}
`],[`home-patch-scroll-and-spacing-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 65 — Scroll length, orbit spacing, MERCH glow, solar breathing.

   DOES NOT touch 26-planet-engine.js.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. LENGTHEN THE SCROLL — desktop only ───────────────────────────────────
   Base height in 100-perfect-event-scroll.css is 260vh.
   Scroll distance = height − 100vh.
   500vh → 400vh of travel (150 % more than the original 160vh).
   At this travel the comet window (p 0.40–0.90) covers 200vh of scrolling,
   giving users ample time to watch the orbit before the section exits.
   Restricted to ≥992px: patch-39 already overrides to height:auto for
   769–991px tablets so that breakpoint is unaffected.
   ─────────────────────────────────────────────────────────────────────────── */
@media (min-width: 992px) {
  .pe-pin-wrap {
    height: 500vh !important;
  }
}

/* ── 2. BOTTOM BREATHING ROOM ────────────────────────────────────────────────
   #peSecond fills the sticky hero via inset:0 and centres content with
   align-items:center. Adding padding-bottom shifts the visual centre upward,
   creating visible empty space at the bottom of the viewport while pinned.
   Desktop only — mobile/tablet layout is vertical and doesn't pin.
   ─────────────────────────────────────────────────────────────────────────── */
@media (min-width: 992px) {
  #peSecond {
    padding-bottom: 15vh !important;
  }
}

/* ── 3. MERCH GLOW GAP — tighter inset ──────────────────────────────────────
   pe-orb-materials (MERCH) has more padding around its planet silhouette than
   the other bottom planets. 18% (patch-64) still shows a gap; 22% closes it.
   Selector specificity (1,1,1) matches patch-64's base rule; later source wins.
   ─────────────────────────────────────────────────────────────────────────── */
#peSecondRight .pe-orb-materials::before {
  inset: 22% !important;
  border-radius: 50% !important;
}

/* ── 4. SOLAR BREATHING — redefine solarCoreGlow keyframes ──────────────────
   The latest @keyframes definition for a given name wins in CSS — this
   replaces the patch-60 version without touching any animation: declaration.

   Structure requested:
   · 0%, 100% — wide, dim corona: long dwell, minimal glow radius keeps
     the "perfect event" text fully legible.
   · 8%        — gentle ramp-up so the approach to peak isn't abrupt.
   · 15%       — brief bright peak: tight inner rings + wider outer halo.
   · 28%       — decay back to base; ~1.7 s of animation covers the spike.
   · 28%→100%  — browser interpolates smoothly back through base (same values
     as 0%/100%), so the dim state fills ≈ 9 s of the 13 s cycle.

   NOTE: the animation also sets text-shadow on #peOrbTitle.is-centered-sun
   (see §4b below) to maintain text legibility at peak brightness.
   Animating opacity is intentionally omitted — it is controlled by
   --pe-title-alpha !important (set by the LERP JS each rAF frame) and
   keyframe opacity would be silently overridden.
   ─────────────────────────────────────────────────────────────────────────── */
@keyframes solarCoreGlow {
  0%,
  100% {
    /* Dim corona — capped at 60px to avoid compositor bleed into fixed elements */
    filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.55))
      drop-shadow(0 0 28px rgba(0, 212, 255, 0.42)) drop-shadow(0 0 60px rgba(0, 119, 255, 0.28));
  }
  8% {
    filter: drop-shadow(0 0 14px rgba(255, 255, 255, 0.75))
      drop-shadow(0 0 50px rgba(0, 212, 255, 0.65)) drop-shadow(0 0 75px rgba(0, 170, 255, 0.38));
  }
  15% {
    /* Brief bright peak */
    filter: drop-shadow(0 0 28px rgba(255, 255, 255, 0.92))
      drop-shadow(0 0 70px rgba(0, 228, 255, 0.82)) drop-shadow(0 0 80px rgba(0, 180, 255, 0.5));
  }
  28% {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.58))
      drop-shadow(0 0 34px rgba(0, 212, 255, 0.45)) drop-shadow(0 0 62px rgba(0, 110, 230, 0.28));
  }
}

/* ── 4b. TEXT LEGIBILITY during solar animation ──────────────────────────────
   A dark text-shadow immediately behind each character ensures the glyphs
   remain readable even at peak glow. Dark shadow listed first = rendered
   closest to the text (CSS text-shadow stacking order: first = on top).
   Cyan glows are carried over from .pe-orb-title in patch-112 so the overall
   style is consistent; the dark component is the new addition.
   Specificity (1,1,0) beats patch-112's (0,1,0) for .pe-orb-title.
   ─────────────────────────────────────────────────────────────────────────── */
#peOrbTitle.is-centered-sun {
  text-shadow:
    0 0 20px rgba(0, 0, 0, 0.8),
    0 0 10px rgba(0, 212, 255, 0.7),
    0 0 34px rgba(0, 212, 255, 0.4) !important;
}
`],[`home-patch-popup-fullscreen`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 66 — Video popup: fullscreen button
   Position: bottom-right corner inside .pe-popup-video-wrap.
   The tooltip uses ::before with attr(data-tooltip); it stays within the
   video container bounds (button is at bottom:12px, tooltip appears above
   it — comfortably inside the container's overflow:hidden boundary).
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── BUTTON BASE ─────────────────────────────────────────────────────────── */
.pe-popup-fullscreen {
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 4;
  width: 34px;
  height: 34px;
  padding: 0;
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(2, 8, 20, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: rgba(255, 255, 255, 0.82);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition:
    background 0.22s ease,
    border-color 0.22s ease,
    color 0.22s ease,
    transform 0.18s cubic-bezier(0.25, 1, 0.5, 1);
}

.pe-popup-fullscreen:hover {
  background: rgba(0, 212, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.45);
  color: #fff;
  transform: scale(1.1);
}

/* ── ICONS ───────────────────────────────────────────────────────────────── */
.pe-popup-fullscreen .fs-icon {
  width: 15px;
  height: 15px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  flex-shrink: 0;
  pointer-events: none;
}

/* Default: expand visible, compress hidden */
.pe-popup-fullscreen .fs-icon-expand {
  display: block;
}
.pe-popup-fullscreen .fs-icon-compress {
  display: none;
}

/* Fullscreen active (JS toggles .is-fullscreen): swap icons */
.pe-popup-fullscreen.is-fullscreen .fs-icon-expand {
  display: none;
}
.pe-popup-fullscreen.is-fullscreen .fs-icon-compress {
  display: block;
}

/* ── TOOLTIP ─────────────────────────────────────────────────────────────── */
/* Appears above the button on hover. Content pulled from data-tooltip attr
   so JS can update it ("Fullscreen" / "Exit fullscreen") without touching CSS. */
.pe-popup-fullscreen::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  padding: 5px 9px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(2, 8, 20, 0.88);
  color: rgba(255, 255, 255, 0.88);
  font-family: var(--font-d, sans-serif);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transform: translateY(5px);
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.pe-popup-fullscreen:hover::before {
  opacity: 1;
  transform: translateY(0);
}
`],[`home-patch-floating-cta-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 67 — Floating CTA: icon size, minimal pulse, first-hover blink fix.

   Three separate root causes, three targeted fixes.

   1. ICON SIZE — patch-46 has ".floating-contact .fc-main > svg { 26px }"
      at specificity (0,2,1), which loads AFTER patch-43's 30px and wins.
      Fix: use the ID selector — #floatingContact gives (1,1,1), beats (0,2,1).

   2. PULSATION — the .visible class is toggled on/off briefly in the planet
      section. Every toggle restarts the animation from 0%, so the 0%→50%
      ramp plays visibly each time. Also patch-15's redContactPulse includes
      transform:scale(1.08) which is jarring.
      Fix: replace with a near-imperceptible breath — only a tiny box-shadow
      delta, no scale, long duration (5s). Restart is invisible.

   3. FIRST-HOVER BLINK — patch-46's ::after has pointer-events:auto and
      extends -20px outside the button. Hover fires while .floating-contact
      is still mid opacity-transition (0→1, 0.5s). The browser creates a new
      GPU compositor layer at that moment → one-frame flash.
      Fix: will-change: transform, box-shadow pre-promotes the layer before
      any hover occurs. backface-visibility:hidden locks it on the compositor.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. ICON SIZE — specificity (1,1,1) beats patch-46's (0,2,1) ───────────
   Also covers the descendant selector ".fc-main svg" from patch-15.          */
#floatingContact .fc-main > svg,
#floatingContact .fc-main svg {
  width: 30px !important;
  height: 30px !important;
}

/* ── 2. NEAR-INVISIBLE PULSE — box-shadow only, 5s, tiny delta ─────────────
   0% and 100% are identical → restart is seamless even on rapid toggle.
   Box-shadow shifts by ~6px blur and ~0.15 alpha — visible up close but
   imperceptible during a brief scroll-through of the planet section.
   No transform, no scale.                                                     */
@keyframes fcGentleBreath {
  0%,
  100% {
    box-shadow: 0 0 12px rgba(255, 85, 0, 0.32);
  }
  50% {
    box-shadow:
      0 0 18px rgba(255, 85, 0, 0.48),
      0 0 5px rgba(255, 85, 0, 0.2);
  }
}

.floating-contact.visible .fc-main {
  animation: fcGentleBreath 5s ease-in-out infinite !important;
}

/* ── 3. FIRST-HOVER BLINK FIX — pre-promote GPU layer ──────────────────────
   will-change tells the browser to composite .fc-main onto its own GPU layer
   immediately, before any interaction. When hover fires (even from the 20px
   ::after hit-area during fade-in), no new layer is needed → no blink.
   backface-visibility:hidden is an additional WebKit signal to keep the
   element GPU-resident between interactions.                                  */
.floating-contact .fc-main {
  will-change: transform, box-shadow !important;
  backface-visibility: hidden !important;
  -webkit-backface-visibility: hidden !important;
}
`],[`home-patch-popup-nav-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 68 — Video popup nav: hug video edges, stronger blur, subtle close.

   Video half-width = min(25vw, calc(25vh * 16 / 9))  (from patch-56).
   Button width = 56px → half = 28px.
   "Center at video edge + 4px outside" = offset = 28px + 4px = 32px.
   → prev: left: calc(50% - min(25vw, …) - 32px)
   → next: right: same formula.
   This places the button centre 4px outside the video frame — visually
   flush while remaining fully outside, like Netflix's control placement.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── NAV BUTTONS — 4px gap from video boundary ──────────────────────────────
   Button width 56px → half = 28px.
   4px gap between button edge and video frame:
   left = video_left_edge - 4px_gap - 56px_button = 50% - video_half - 60px. */
.pe-popup-nav.prev {
  left: calc(50% - min(25vw, calc(25vh * 16 / 9)) - 60px) !important;
}
.pe-popup-nav.next {
  right: calc(50% - min(25vw, calc(25vh * 16 / 9)) - 60px) !important;
}

/* ── NAV BUTTONS — stronger blur for better legibility over video ─────────
   blur(10px) from patch-54 is too weak over bright video frames.
   blur(22px) makes the glass pill clearly readable against any content.   */
.pe-popup-nav {
  backdrop-filter: blur(22px) !important;
  -webkit-backdrop-filter: blur(22px) !important;
}

/* ── CLOSE BUTTON — near-invisible hover, no scale ───────────────────────
   scale(1.1) from patch-56 is too prominent for a corner utility button.
   scale(1.02) + subtle border brightening signals interactivity without
   drawing attention away from the video content.                          */
.pe-popup-close:hover {
  transform: scale(1.02) !important;
  background: rgba(255, 255, 255, 0.14) !important;
  border-color: rgba(255, 255, 255, 0.32) !important;
}

/* ── MOBILE (≤768px) — video 80%, nav buttons overlaid on video edges ────
   On mobile, 80vw video leaves no room outside for 40-56px buttons.
   Solution: buttons overlay the inner left/right edges of the video
   (standard YouTube/Vimeo mobile pattern). Half of 80vw = 40vw.
   offset = 10px inside the video edge (button edge touches video border).
   ─────────────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .pe-popup-video-wrap {
    width: min(80vw, calc(80svh * 16 / 9)) !important;
  }

  .pe-popup-nav {
    width: 40px !important;
    height: 40px !important;
    background: rgba(0, 0, 0, 0.5) !important;
  }

  .pe-popup-nav.prev {
    left: calc(50% - min(40vw, calc(40svh * 16 / 9)) + 10px) !important;
  }

  .pe-popup-nav.next {
    right: calc(50% - min(40vw, calc(40svh * 16 / 9)) + 10px) !important;
  }

  .pe-popup-close {
    top: 16px !important;
    right: 16px !important;
    width: 44px !important;
    height: 44px !important;
    font-size: 22px !important;
  }
}
`],[`home-patch-floating-cta-no-pulse`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 69 — Floating CTA: kill all pulse animation + fix Safari square border.

   ROOT CAUSES:
   · Four separate @keyframes (redContactPulse / fcGlassPulse / fcSolidPulse /
     fcGentleBreath) across patches 15, 43, 46, 67 all target the same element.
     Whichever loads last wins, so the button always has some animation running.
   · will-change: transform, box-shadow (patch-67) + isolation: isolate (patch-46)
     force Safari to composite .fc-main onto its own GPU tile. Safari renders the
     tile's full square bounding box before clipping to border-radius — visible as
     a rectangular artifact around the button.
   · backface-visibility: hidden (patch-67) is a second GPU-promotion trigger
     that worsens the bounding-box artifact in WebKit.

   FIXES:
   1. animation: none on both .fc-main and .fc-main.visible — covers every
      keyframe name regardless of which patch "wins" for the animation property.
   2. will-change: auto — removes forced GPU tile, eliminates square border.
   3. backface-visibility: visible — reverts the WebKit promotion hint.
   4. Static box-shadow replaces the animated glow: always-on depth, no restart
      artifacts, no Safari compositing layer boundary.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. KILL ALL ANIMATION ────────────────────────────────────────────────── */
/* Two selectors needed: base (patch-43 adds fcGlassPulse here) and
   .visible (patches 15/46/67 add their animations here).                      */
.floating-contact .fc-main,
.floating-contact.visible .fc-main {
  animation: none !important;
}

/* ── 2. REMOVE GPU PROMOTIONS THAT CAUSE SAFARI SQUARE BORDER ────────────── */
/* will-change:auto = browser default, no forced compositor tile.
   backface-visibility:visible = no WebKit GPU-layer hint.
   These two together eliminate the square artifact in Safari while keeping
   the hover transform smooth (transform still triggers GPU on demand).        */
.floating-contact .fc-main {
  will-change: auto !important;
  backface-visibility: visible !important;
  -webkit-backface-visibility: visible !important;
  /* Static ambient glow replaces the animated box-shadow: always present,
     no restart, identical in Chrome and Safari.                               */
  box-shadow: 0 0 16px rgba(255, 85, 0, 0.4) !important;
}

/* ── 3. HOVER — unchanged lift + brighter glow, no animation-play-state ──── */
.floating-contact .fc-main:hover,
.floating-contact .fc-main:focus-visible {
  box-shadow:
    0 6px 24px rgba(255, 85, 0, 0.68),
    0 2px 8px rgba(255, 85, 0, 0.3) !important;
}
`],[`home-patch-floating-cta-safari-safe`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 70 — Floating CTA: Safari-safe visual architecture.

   ROOT CAUSE OF SAFARI SQUARE BORDER:
   Patch 46 built a three-layer glass system:
     · .fc-main:          isolation:isolate  → forces a square stacking context
     · .fc-main::before:  backdrop-filter:blur(16px) + overflow:hidden
                          → Safari composites ::before as a separate square GPU tile;
                          the tile boundary renders as a visible rectangle
     · .fc-main::after:   position absolute, inset:-20px on all sides
                          → extends the compositing bounding box 20px beyond
                          the visual element; Safari clips GPU tiles to bounding box,
                          not to border-radius

   SAFARI-SAFE FIX:
   Apply backdrop-filter directly to .fc-main with overflow:hidden.
   When backdrop-filter and overflow:hidden are on the SAME element, WebKit
   clips the blur compositing layer to the element's own border-radius — the
   GPU tile edge is hidden inside the element, no square border visible.
   isolation:auto removes the forced stacking context.
   Killing ::before and ::after removes all secondary GPU tiles.

   ROOT CAUSE OF PULSATION / ONE-TIME BLINK:
   Base homeStyleBlock 30-floating-contact.css has animation:fcPulse (no !important)
   which fires on .visible. Additionally, when .visible is added, the wrapper
   transitions opacity 0→1 while ::before creates a new GPU compositor layer
   mid-transition → one-frame flash that looks like a pulse.
   FIX: animation:none !important + simplified architecture (no ::before layer
   creation during the fade-in).
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. RESET SAFARI-UNSAFE PROPERTIES ───────────────────────────────────── */
/* isolation:isolate (patch-46) → back to auto: removes forced stacking context */
.floating-contact .fc-main {
  isolation: auto !important;
  /* Direct backdrop-filter on the element + overflow:hidden = Safari clips the
     blur to border-radius. No square layer boundary is exposed.               */
  overflow: hidden !important;
  backdrop-filter: blur(14px) saturate(1.5) !important;
  -webkit-backdrop-filter: blur(14px) saturate(1.5) !important;
  background: rgba(255, 78, 0, 0.9) !important;
  /* Kill animation at this level too — belt-and-suspenders over patch-69     */
  animation: none !important;
}

/* ── 2. KILL ::before GLASS LAYER (patch-46) ─────────────────────────────── */
/* This was the source of the square GPU tile. With backdrop-filter now on the
   parent, this layer is redundant. Later source order beats patch-46's enable. */
.floating-contact .fc-main::before {
  content: none !important;
  display: none !important;
}

/* ── 3. KILL ::after HIT-AREA EXTENSION (patch-46) ──────────────────────── */
/* The -20px inset expanded the compositing bounding box. Also caused false
   hover triggers during the .visible opacity transition (the one-time blink). */
.floating-contact .fc-main::after {
  content: none !important;
  display: none !important;
}

/* ── 4. KILL ALL REMAINING ANIMATION ─────────────────────────────────────── */
/* Covers base fcPulse (no !important) from 30-floating-contact.css and any
   keyframe from earlier patches not covered by patch-69.                      */
.floating-contact.visible .fc-main {
  animation: none !important;
}
`],[`home-patch-safari-cta-final`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 71 — Safari floating CTA: nuclear fallback.

   \`hanging-punctuation\` is supported ONLY in Safari (not Chrome, Firefox,
   or Edge) — the most reliable CSS-only Safari detection available.

   Uses #floatingContact (ID selector → specificity 1,x,x) to guarantee
   this wins over every class-based rule regardless of load order or whether
   earlier patches were skipped by appendStyle's "skip if id exists" guard.
   ═══════════════════════════════════════════════════════════════════════════ */
@supports (hanging-punctuation: first) {
  /* Kill animation on the WRAPPER too — patches 69/70 only target .fc-main.
     bottomBtnPulse and floatingContactReveal run on #floatingContact itself.
     filter:none kills the forwards-fill filter:blur(0) from floatingContactReveal
     which otherwise keeps a square GPU compositor tile active permanently.     */
  #floatingContact,
  #floatingContact.visible {
    animation: none !important;
    filter: none !important;
    -webkit-filter: none !important;
  }

  /* Fully opaque solid background — no backdrop-filter, no GPU tile, no
     square border artifact. All compositing properties removed.            */
  #floatingContact .fc-main {
    background: rgb(220, 62, 0) !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    isolation: auto !important;
    will-change: auto !important;
    backface-visibility: visible !important;
    -webkit-backface-visibility: visible !important;
    overflow: hidden !important;
    animation: none !important;
    filter: none !important;
    -webkit-filter: none !important;
  }

  /* Kill every pseudo-element that could create a secondary GPU tile */
  #floatingContact .fc-main::before,
  #floatingContact .fc-main::after {
    display: none !important;
    content: none !important;
  }

  /* Kill animation on visible state too — covers all keyframe names */
  #floatingContact.visible .fc-main,
  #floatingContact .fc-main {
    animation: none !important;
  }

  /* Hover: simple lift, no compositor change */
  #floatingContact .fc-main:hover,
  #floatingContact .fc-main:focus-visible {
    background: rgb(240, 76, 10) !important;
    transform: translateY(-2px) scale(1.04) !important;
    animation: none !important;
  }
}
`],[`home-patch-planets-screen-blend-fix`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 72 — Planet blend mode fix: restore screen on video, normal on sphere.

   ROOT CAUSE OF DARK CIRCLES IN SAFARI (introduced by patch-64):
   Patch-64 moved mix-blend-mode:screen from .pe-orb-video to the
   .pe-orb-sphere wrapper. This creates a stacking context on the sphere.
   Inside that stacking context the video renders with mix-blend-mode:normal —
   its black circular background passes straight through into the sphere's
   intermediate compositing layer. That layer (with dark content) is then
   screen-blended against the section background. Safari composites the
   intermediate layer incorrectly, showing the dark circle.

   THE ORIGINAL DESIGN (112-perfect-event-sphere-styles.css) was correct:
   · .pe-orb-video: mix-blend-mode:screen — the video blends directly against
     the section background, eliminating its black areas (screen of black = transparent).
     No intermediate stacking context is involved when the sphere wrapper has
     mix-blend-mode:normal (default).
   · .pe-orb-sphere: no blend mode — the sphere wrapper does NOT create a
     stacking context, so the video's blend applies against the actual background.

   WHY patch-64's concern was over-applied:
   The original Safari "black box" bug (patches 57-58) was caused by
   filter:drop-shadow on the video — drop-shadow traces the pixel alpha boundary
   of the GPU-composited video layer, which Safari mis-reads. filter:grayscale
   is a simple color matrix that does NOT trace pixel boundaries and is safe
   on <video> in combination with mix-blend-mode:screen.

   SPECIFICITY:
   · .pe-orb-video at (0,1,0) — same as patch-63/64; later source order wins.
   · #peSecondRight .pe-orb-sphere at (1,1,0) — same as patch-62/64; later wins.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. VIDEO — screen blend direct against section background ─────────────
   With mix-blend-mode:screen on the video element directly, black pixels in
   the video frame become transparent (screen of black with any background = that
   background). The sphere wrapper has no blend mode, so no stacking context
   intercepts the blend. Works correctly in both Chrome and Safari.
   ─────────────────────────────────────────────────────────────────────────── */
.pe-orb-video {
  mix-blend-mode: screen !important;
}

/* ── 2. SPHERE WRAPPER — no blend mode, no stacking context ────────────────
   Removing mix-blend-mode:screen from the wrapper eliminates the intermediate
   compositing layer that was causing the dark-circle artifact in Safari.
   background:transparent is kept to ensure no accidental fill.
   ─────────────────────────────────────────────────────────────────────────── */
#peSecondRight .pe-orb-sphere {
  mix-blend-mode: normal !important;
  background: transparent !important;
}
`],[`home-patch-popup-button-tooltips`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 73 — Video popup: tooltips on close and nav buttons.
   Pattern mirrors patch-66 (fullscreen tooltip via ::before + data-tooltip).
   Close: tooltip below (button sits top-right — above would go off-screen).
   Prev / Next: tooltip above the button, horizontally centred.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── SHARED VISUAL STYLE ─────────────────────────────────────────────────── */
.pe-popup-close::before,
.pe-popup-nav::before {
  content: attr(data-tooltip);
  position: absolute;
  padding: 5px 9px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(2, 8, 20, 0.88);
  color: rgba(255, 255, 255, 0.88);
  font-family: var(--font-d, sans-serif);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
  z-index: 1;
}

/* ── CLOSE BUTTON — tooltip appears below ───────────────────────────────── */
.pe-popup-close::before {
  top: calc(100% + 8px);
  right: 0;
  transform: translateY(-5px);
}

.pe-popup-close:hover::before {
  opacity: 1;
  transform: translateY(0);
}

/* ── NAV BUTTONS — tooltip appears above, centred ───────────────────────── */
.pe-popup-nav::before {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(5px);
}

.pe-popup-nav:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
`],[`home-patch-orbit-animated-lines`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 74 — Orbit ring CSS + comet system.

   ORBIT RINGS (state / visibility):
     #peOrbitRing3   — inner solid ring, static (SMIL breathing only), blur
     #peOrbitRing2   — mid dashed ring, hidden (temporarily removed)
     #peOrbitAsteroidBelt — 16-layer belt, SMIL <animate> dashoffset per layer
                            populated by 32-asteroid-belt.js
     #peOrbitRing1   — outer gradient ring, static

   All rings start at opacity:0 and are revealed by 31-orbit-scroll-reveal.js
   which adds .orbit-ring-visible at scroll progress thresholds.

   ACTIVATION planet (.pe-orb-vr) lowered: desktop top 12%, tablet top 20%.

   COMET SYSTEM (JS: 29-orbit-meteor.js):
     6 CSS keyframe trajectories (3 LTR + 3 RTL), all top→bottom.
     3 size variants (sm/md/lg). z-index:3 — below planets (z:4) and title (z:8).
     Colors via CSS custom properties so JS can override for planet tints.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ══ ORBIT SVG DISPLAY FIX ═══════════════════════════════════════════════════
   112-perfect-event-sphere-styles.css sets:
     .pe-orb-svg { display: none !important; }
   — written to hide the OLD placeholder rings. Our animated rings need the SVG
   visible on tablet + desktop. Specificity (0,2,0) beats (0,1,0) → always wins.
   Patch-14 already handles opacity:0 / visibility:hidden before pe-active is
   set, so the orbits are invisible until the planets section is scrolled into.  */
@media (min-width: 769px) {
  .pe-second-right .pe-orb-svg {
    display: block !important;
  }
}

/* ── RING3 (inner) — closer to nucleus, saturated, with soft glow ────────── */
#peOrbitRing3 {
  opacity: 0;
  /* SVG geometry override: bring ring closer to the sun centre */
  rx: 88px;
  ry: 29px;
  stroke: rgba(72, 148, 255, 0.72) !important;
  stroke-width: 1px !important;
  /* blur gives diffuse edge; drop-shadow adds a soft neon corona ring */
  filter: blur(1.2px) drop-shadow(0 0 4px rgba(72, 148, 255, 0.48)) !important;
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── RING2 — temporarily removed ─────────────────────────────────────────── */
#peOrbitRing2 {
  display: none !important;
}

/* ── ASTEROID BELT — group opacity + scroll-synced reveal ──────────────────
   Content and CCW rotation injected by 32-asteroid-belt.js.                */
#peOrbitAsteroidBelt {
  opacity: 0;
  transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── RING1 (outer) — scroll-synced reveal, no rotation change ────────────── */
#peOrbitRing1 {
  opacity: 0;
  transition: opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── REVEALED STATES — JS (31-orbit-scroll-reveal.js) adds .orbit-ring-visible */
#peOrbitRing3.orbit-ring-visible {
  opacity: 0.75;
} /* boosted: closer+saturated ring needs less fade */
#peOrbitAsteroidBelt.orbit-ring-visible {
  opacity: 1;
}
#peOrbitRing1.orbit-ring-visible {
  opacity: 0.8;
}

/* ── 3D ORBITAL PLANE — perspective tilt on the SVG ──────────────────────────
   perspective on #peSecondRight sets the vanishing point for its children.
   rotateX on the SVG tilts the orbital plane: bottom comes toward the viewer,
   top recedes — mimics a solar system viewed from slightly above.
   perspective: 1100px → subtle depth (top/bottom ≈ ±7% size difference).
   Applied only on desktop where the pinned orbit is visible.
   NOTE: perspective property makes #peSecondRight a containing block for
   fixed-position descendants; verified that no fixed children exist inside it
   (comets are position:absolute, ghost/corona are in body/#peSecond).       */
@media (min-width: 769px) {
  #peSecondRight {
    perspective: 1100px;
  }
  .pe-second-right .pe-orb-svg {
    transform: translate(-50%, -50%) scale(0.96) rotateX(14deg) !important;
  }
}

/* ── SOLAR GLOW OVERFLOW FIX — high-specificity override ─────────────────
   patch-14 sets #heroSection.hero { overflow: hidden !important } (1,1,0).
   #pePinWrap #heroSection.hero has specificity (2,1,0) → always wins.
   overflow:clip replaces hidden without creating a Block Formatting Context,
   so position:sticky and layout remain intact.
   Drop-shadow radii are capped at 200 px in solarCoreGlow (60-solar-core-effect.css),
   so they never reach the container boundary — no overflow-clip-margin needed. */
#pePinWrap #heroSection.hero {
  overflow: clip !important;
}

/* ── ACTIVATION PLANET — lower position on desktop + tablet ──────────────── */
/* Desktop ≥901px: was top:2% (barely visible) → moved to 12% */
@media (min-width: 901px) {
  .pe-orb-vr {
    top: 12% !important;
    left: 50% !important;
  }
}
/* Tablet 769–900px: was top:14% → 20% */
@media (min-width: 769px) and (max-width: 900px) {
  .pe-orb-vr {
    top: 20% !important;
    left: 46% !important;
  }
}

/* ── PLANET LOOP FLASH — 33-planet-loop-smooth.js ───────────────────────────
   Applied when a planet video nears its loop point to mask the hard cut.
   Shows real planet colour + gentle glow ring, no scale change.
   Transitions in/out smoothly via the CSS transition on both properties.  */
.pe-loop-flash .pe-orb-video {
  filter: grayscale(0) contrast(1.05) brightness(0.95) !important;
  transition: filter 0.38s ease-in-out !important;
}
.pe-loop-flash {
  box-shadow:
    inset 0 0 30px rgba(0, 212, 255, 0.16),
    0 0 24px rgba(0, 212, 255, 0.7),
    0 0 56px rgba(0, 115, 255, 0.38),
    0 0 90px rgba(0, 212, 255, 0.14) !important;
  transition: box-shadow 0.38s ease-in-out !important;
}

/* ── PLANET SIZES +10% (desktop, all except STAND) ───────────────────────────
   STAND (.pe-orb-ideas) is unchanged — it is already the dominant focal planet.
   All other 7 planets scale uniformly × 1.10 on their clamp() values.
   Specificity (0,2,0) beats patch-111's (0,1,0) for the same class.        */
@media (min-width: 769px) {
  /* ACTIVATION: 76→84, 8.3vw→9.1vw, 108→119 */
  .pe-second-right .pe-orb-vr {
    width: clamp(84px, 9.1vw, 119px) !important;
    height: clamp(84px, 9.1vw, 119px) !important;
  }
  /* STAFF: 111→122, 12vw→13.2vw, 160→176 */
  .pe-second-right .pe-orb-staff {
    width: clamp(122px, 13.2vw, 176px) !important;
    height: clamp(122px, 13.2vw, 176px) !important;
  }
  /* SCREENS: 81→89, 9.1vw→10vw, 117→129 */
  .pe-second-right .pe-orb-led {
    width: clamp(89px, 10vw, 129px) !important;
    height: clamp(89px, 10vw, 129px) !important;
  }
  /* MERCH: 122→134, 13.2vw→14.5vw, 176→194 */
  .pe-second-right .pe-orb-materials {
    width: clamp(134px, 14.5vw, 194px) !important;
    height: clamp(134px, 14.5vw, 194px) !important;
  }
  /* CATERING: 74→81, 8.6vw→9.5vw, 109→120 */
  .pe-second-right .pe-orb-bar {
    width: clamp(81px, 9.5vw, 120px) !important;
    height: clamp(81px, 9.5vw, 120px) !important;
  }
  /* CONTENT: 97→107, 10.8vw→11.9vw, 144→158 */
  .pe-second-right .pe-orb-motion {
    width: clamp(107px, 11.9vw, 158px) !important;
    height: clamp(107px, 11.9vw, 158px) !important;
  }
  /* SUPPORT: 111→122, 12vw→13.2vw, 160→176 */
  .pe-second-right .pe-orb-activation {
    width: clamp(122px, 13.2vw, 176px) !important;
    height: clamp(122px, 13.2vw, 176px) !important;
  }
}

/* ── MOBILE / REDUCED MOTION ─────────────────────────────────────────────── */
@media (max-width: 768px) {
  #peOrbitRing3,
  #peOrbitAsteroidBelt,
  #peOrbitRing1 {
    display: none;
  }
  .pe-comet {
    display: none !important;
  }
}
@media (prefers-reduced-motion: reduce) {
  #peOrbitAsteroidBelt {
    animation: none !important;
  }
  .pe-comet {
    display: none !important;
  }
}

/* ══ COMET SYSTEM ════════════════════════════════════════════════════════════

   Elements created dynamically by 29-orbit-meteor.js and appended to
   #peSecondRight. z-index:3 keeps them above SVG orbits (z:1) and
   starfield (z:2), but below planets (z:4) and the title (z:8).

   All comets use transform-origin:left center. The tail is at the left end
   (transparent in gradient), head at the right end (bright). At any rotation
   angle the right end is the visual leading edge:
     LTR: rotate(27–54°)  → right end points down-right  ✓
     RTL: rotate(126–153°) → right end points down-left   ✓

   CSS custom properties allow JS to tint individual comets with planet colors:
     --comet-head  : head / core colour     (default neon cyan)
     --comet-glow1 : inner glow             (default cyan)
     --comet-glow2 : outer glow blur        (default cyan pale)
   JS also overrides \`background\` and \`box-shadow\` inline for coloured comets.
   ════════════════════════════════════════════════════════════════════════════ */

/* ── BASE COMET ──────────────────────────────────────────────────────────── */
.pe-comet {
  --comet-head: rgba(0, 212, 255, 0.92);
  --comet-glow1: rgba(0, 212, 255, 0.78);
  --comet-glow2: rgba(0, 175, 255, 0.36);

  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100px;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  transform-origin: left center;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 212, 255, 0.4) 28%,
    rgba(180, 232, 255, 0.82) 65%,
    #fff 100%
  );
  box-shadow:
    0 0 4px var(--comet-glow1),
    0 0 14px var(--comet-glow2);
}

/* Bright glowing head on the leading edge */
.pe-comet::after {
  content: '';
  position: absolute;
  right: -2px;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  background: radial-gradient(circle, #fff 0%, var(--comet-head) 50%, transparent 100%);
  box-shadow:
    0 0 5px 2px var(--comet-glow1),
    0 0 12px 3px var(--comet-glow2);
  animation: peCometHeadPulse 0.13s ease-in-out infinite;
}

@keyframes peCometHeadPulse {
  0%,
  100% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
  50% {
    opacity: 0.72;
    transform: translateY(-50%) scale(1.32);
  }
}

/* ── SIZE VARIANTS ───────────────────────────────────────────────────────── */
.pe-comet-sm {
  width: 52px;
  height: 2px;
}
.pe-comet-sm::after {
  width: 6px;
  height: 6px;
}

.pe-comet-md {
  width: 85px;
  height: 3px;
}
.pe-comet-md::after {
  width: 9px;
  height: 9px;
}

.pe-comet-lg {
  width: 118px;
  height: 4px;
}
.pe-comet-lg::after {
  width: 12px;
  height: 12px;
}

/* ── TRAJECTORIES ────────────────────────────────────────────────────────────
   Element anchored at top:0; left:0 of #peSecondRight.
   #peSecondRight is centered on the hero, so vw/vh translate guarantees
   off-screen start and end positions on any viewport.

   Rotation = angle of comet long axis aligned to direction of travel.
   LTR angles calculated from pixel displacement on 1440×900 reference:
     ltr1 ~27° | ltr2 ~41° | ltr3 ~54°
   RTL: mirror = 180° – LTR angle
     rtl1 153° | rtl2 139° | rtl3 126°

   CSS class provides base duration; JS overrides animationDuration inline.  */

@keyframes peCometLTR1 {
  0% {
    opacity: 0;
    transform: translate(-18vw, -28vh) rotate(27deg);
  }
  5% {
    opacity: 1;
  }
  88% {
    opacity: 0.52;
  }
  100% {
    opacity: 0;
    transform: translate(115vw, 106vh) rotate(27deg);
  }
}
@keyframes peCometLTR2 {
  0% {
    opacity: 0;
    transform: translate(-8vw, -28vh) rotate(41deg);
  }
  5% {
    opacity: 1;
  }
  88% {
    opacity: 0.48;
  }
  100% {
    opacity: 0;
    transform: translate(80vw, 98vh) rotate(41deg);
  }
}
@keyframes peCometLTR3 {
  0% {
    opacity: 0;
    transform: translate(15vw, -30vh) rotate(54deg);
  }
  5% {
    opacity: 1;
  }
  88% {
    opacity: 0.48;
  }
  100% {
    opacity: 0;
    transform: translate(74vw, 100vh) rotate(54deg);
  }
}
@keyframes peCometRTL1 {
  0% {
    opacity: 0;
    transform: translate(115vw, -28vh) rotate(153deg);
  }
  5% {
    opacity: 1;
  }
  88% {
    opacity: 0.52;
  }
  100% {
    opacity: 0;
    transform: translate(-18vw, 106vh) rotate(153deg);
  }
}
@keyframes peCometRTL2 {
  0% {
    opacity: 0;
    transform: translate(92vw, -28vh) rotate(139deg);
  }
  5% {
    opacity: 1;
  }
  88% {
    opacity: 0.48;
  }
  100% {
    opacity: 0;
    transform: translate(20vw, 98vh) rotate(139deg);
  }
}
@keyframes peCometRTL3 {
  0% {
    opacity: 0;
    transform: translate(78vw, -30vh) rotate(126deg);
  }
  5% {
    opacity: 1;
  }
  88% {
    opacity: 0.48;
  }
  100% {
    opacity: 0;
    transform: translate(26vw, 100vh) rotate(126deg);
  }
}

/* Animation applied by CSS class; JS can override animationDuration inline */
.pe-comet-ltr1 {
  animation: peCometLTR1 2s cubic-bezier(0.25, 0, 0.6, 1) forwards;
}
.pe-comet-ltr2 {
  animation: peCometLTR2 2.2s cubic-bezier(0.25, 0, 0.6, 1) forwards;
}
.pe-comet-ltr3 {
  animation: peCometLTR3 2.4s cubic-bezier(0.25, 0, 0.6, 1) forwards;
}
.pe-comet-rtl1 {
  animation: peCometRTL1 2s cubic-bezier(0.25, 0, 0.6, 1) forwards;
}
.pe-comet-rtl2 {
  animation: peCometRTL2 2.2s cubic-bezier(0.25, 0, 0.6, 1) forwards;
}
.pe-comet-rtl3 {
  animation: peCometRTL3 2.4s cubic-bezier(0.25, 0, 0.6, 1) forwards;
}
`],[`home-patch-starfield`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 75 — Starfield: sub-pixel point stars with opacity-only twinkling.

   Stars are SVG <circle> elements (r=0.35–1.0 CSS px) created by JS.
   viewBox = actual container pixel dimensions → 1 SVG unit = 1 CSS px.
   NO transform, NO scale, NO translate in keyframes — pure opacity fade.
   The star appears, glows, and fades. Nothing moves.

   6 animation variants with different timing so the overall effect feels
   organic: some stars barely flicker, others pulse between near-invisible
   and almost-bright, at various speeds (2.6 s – 7.5 s).
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── SHIMMER / FADE KEYFRAMES ────────────────────────────────────────────── */
/* All variants: opacity only. No transform. */

@keyframes peSt1 {
  0%,
  100% {
    opacity: 1;
  }
  48% {
    opacity: 0.04;
  }
}
@keyframes peSt2 {
  0%,
  100% {
    opacity: 0.78;
  }
  32% {
    opacity: 0.06;
  }
  68% {
    opacity: 0.52;
  }
}
@keyframes peSt3 {
  0%,
  100% {
    opacity: 0.92;
  }
  44% {
    opacity: 0.03;
  }
}
@keyframes peSt4 {
  0% {
    opacity: 0.62;
  }
  20% {
    opacity: 1;
  }
  56% {
    opacity: 0.07;
  }
  80% {
    opacity: 0.72;
  }
  100% {
    opacity: 0.62;
  }
}
@keyframes peSt5 {
  0%,
  100% {
    opacity: 1;
  }
  30% {
    opacity: 0.05;
  }
  65% {
    opacity: 0.42;
  }
}
@keyframes peSt6 {
  0%,
  100% {
    opacity: 0.52;
  }
  38% {
    opacity: 1;
  }
  70% {
    opacity: 0.03;
  }
}

/* ── CLASS ASSIGNMENTS ───────────────────────────────────────────────────── */
/* Duration spread ensures no visible "phase sync" across the starfield. */
.pe-st1 {
  animation: peSt1 3.2s ease-in-out infinite;
}
.pe-st2 {
  animation: peSt2 4.9s ease-in-out infinite;
}
.pe-st3 {
  animation: peSt3 2.6s ease-in-out infinite;
}
.pe-st4 {
  animation: peSt4 6.8s ease-in-out infinite;
}
.pe-st5 {
  animation: peSt5 5.3s ease-in-out infinite;
}
.pe-st6 {
  animation: peSt6 7.5s ease-in-out infinite;
}

/* ── MOBILE ───────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .pe-starfield {
    display: none !important;
  }
}

/* ── REDUCED MOTION ───────────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .pe-st1,
  .pe-st2,
  .pe-st3,
  .pe-st4,
  .pe-st5,
  .pe-st6 {
    animation: none !important;
  }
}
`],[`home-patch-projects-ui-and-pagination`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 76 — Projects UI: modal media slider, close button, pagination.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. REMOVE ARROWS FROM GRID CARDS — modal carries them now ───────────── */
.pc-nav {
  display: none !important;
}

/* ── 2. FORCE [hidden] TO WIN over display:grid !important on .pg ─────────── */
#portfolio .pg[hidden],
#portfolio .project-block-spacer[hidden] {
  display: none !important;
}

/* ── 3. MODAL MEDIA AREA — full-bleed cover ──────────────────────────────── */
.op-popup-img {
  position: relative !important;
  width: 100% !important;
  height: 58vh !important;
  max-height: none !important;
  display: block !important;
  overflow: hidden !important;
  background: #020d1a !important;
  /* remove the base-CSS flex centering that caused letterbox bars */
  align-items: unset !important;
  justify-content: unset !important;
}

/* Scroll-snap track inside modal */
.op-popup-slides {
  position: absolute;
  inset: 0;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.op-popup-slides::-webkit-scrollbar {
  display: none;
}

.op-popup-slide {
  flex: 0 0 100%;
  height: 100%;
  scroll-snap-align: start;
}
.op-popup-slide img,
.op-popup-slide video {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  display: block !important;
}

/* ── 4. CLOSE BUTTON — fixed on viewport, glassmorphism ─────────────────── */
.op-popup-close {
  position: fixed !important;
  top: 28px !important;
  right: 28px !important;
  left: auto !important;
  width: 56px !important;
  height: 56px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 999999 !important;
  font-size: 26px !important;
  font-weight: 300 !important;
  line-height: 1 !important;
  color: #fff !important;
  cursor: pointer !important;
  padding: 0 !important;
  box-shadow: none !important;
  transition:
    transform 0.22s cubic-bezier(0.25, 1, 0.5, 1),
    background 0.22s ease,
    border-color 0.22s ease !important;
}
.op-popup-close:hover {
  transform: scale(1.1) !important;
  background: rgba(255, 255, 255, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.38) !important;
  color: #fff !important;
}

/* ── 5. MODAL NAV ARROWS — float on the backdrop ─────────────────────────── */
.op-popup-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition:
    transform 0.22s cubic-bezier(0.25, 1, 0.5, 1),
    background 0.22s ease,
    border-color 0.22s ease;
}
.op-popup-nav svg {
  width: 20px;
  height: 20px;
  display: block;
  pointer-events: none;
  flex-shrink: 0;
}
.op-popup-nav--prev {
  left: 2vw;
}
.op-popup-nav--next {
  right: 2vw;
}
.op-popup-nav:hover {
  transform: translateY(-50%) scale(1.1);
  background: rgba(0, 212, 255, 0.14);
  border-color: rgba(0, 212, 255, 0.38);
}
.op-popup-nav:active {
  transform: translateY(-50%) scale(0.94);
  transition-duration: 0.08s;
}

/* ── 6. MOBILE ───────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .op-popup-close {
    top: 14px !important;
    right: 14px !important;
    width: 44px !important;
    height: 44px !important;
    font-size: 22px !important;
  }
  .op-popup-img {
    height: 46vw !important;
  }
  .op-popup-nav {
    width: 40px;
    height: 40px;
  }
  .op-popup-nav svg {
    width: 16px;
    height: 16px;
  }
  .op-popup-nav--prev {
    left: 6px;
  }
  .op-popup-nav--next {
    right: 6px;
  }
}
`],[`home-patch-projects-premium-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 77 — Projects: premium polish.
   Covers: loading spinner, card fade-up animation, global auto-advance dot
   sync, modal nav positioning (planet-formula), progress bar, fullscreen btn,
   tooltip parity with planet popup (patches 56 / 68 / 73).
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. LOADING SPINNER ───────────────────────────────────────────────────── */
.btn-spinner {
  display: inline-block;
  width: 13px;
  height: 13px;
  border: 1.5px solid rgba(0, 212, 255, 0.28);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: btnSpinnerRotate 0.65s linear infinite;
  vertical-align: middle;
  margin-right: 7px;
  flex-shrink: 0;
}

@keyframes btnSpinnerRotate {
  to {
    transform: rotate(360deg);
  }
}

/* ── 2. STAGGERED CARD FADE-UP ────────────────────────────────────────────── */
.fade-up-enter {
  animation: projectCardFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes projectCardFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── 3. MODAL NAV ARROWS — planet-formula positioning ─────────────────────── */
/* Card width = min(980px, 94vw). Half = min(490px, 47vw).
   Formula mirrors patch-68: 50vw − half_width − 60px (28px half-button + 4px gap + padding).
   max() clamps to ≥ 8px so arrows never go off-screen on mid-range viewports.  */
.op-popup-nav--prev {
  left: max(8px, calc(50vw - min(490px, 47vw) - 60px)) !important;
}
.op-popup-nav--next {
  right: max(8px, calc(50vw - min(490px, 47vw) - 60px)) !important;
}

/* Stronger blur — matches patch-68's upgrade from 10px → 22px */
.op-popup-nav {
  backdrop-filter: blur(22px) !important;
  -webkit-backdrop-filter: blur(22px) !important;
}

/* ── 4. TOOLTIP ON NAV + CLOSE — mirrors patch-73 ────────────────────────── */
.op-popup-close::before,
.op-popup-nav::before {
  content: attr(data-tooltip);
  position: absolute;
  padding: 5px 9px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(2, 8, 20, 0.88);
  color: rgba(255, 255, 255, 0.88);
  font-family: var(--font-d, sans-serif);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
  z-index: 1;
}

/* Close: tooltip below (button is top-right, tooltip above goes off-screen) */
.op-popup-close::before {
  top: calc(100% + 8px);
  right: 0;
  transform: translateY(-5px);
}
.op-popup-close:hover::before {
  opacity: 1;
  transform: translateY(0);
}

/* Nav: tooltip above, centred */
.op-popup-nav::before {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(5px);
}
.op-popup-nav:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Subtle close hover — matches patch-68 */
.op-popup-close:hover {
  transform: scale(1.04) !important;
  background: rgba(255, 255, 255, 0.16) !important;
  border-color: rgba(255, 255, 255, 0.32) !important;
}

/* ── 5. FULLSCREEN BUTTON — mirrors .pe-popup-fullscreen (patch-66) ───────── */
.op-popup-fs {
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 6;
  width: 34px;
  height: 34px;
  padding: 0;
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(2, 8, 20, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: rgba(255, 255, 255, 0.82);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.22s ease,
    border-color 0.22s ease,
    color 0.22s ease,
    transform 0.18s cubic-bezier(0.25, 1, 0.5, 1);
}

.op-popup-fs:hover {
  background: rgba(0, 212, 255, 0.15);
  border-color: rgba(0, 212, 255, 0.45);
  color: #fff;
  transform: scale(1.1);
}

.op-popup-fs .fs-icon {
  width: 15px;
  height: 15px;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  flex-shrink: 0;
  pointer-events: none;
  display: block;
}

.op-popup-fs .fs-icon-expand {
  display: block;
}
.op-popup-fs .fs-icon-compress {
  display: none;
}
.op-popup-fs.is-fullscreen .fs-icon-expand {
  display: none;
}
.op-popup-fs.is-fullscreen .fs-icon-compress {
  display: block;
}

/* Fullscreen tooltip — above, right-aligned (matches patch-66) */
.op-popup-fs::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  padding: 5px 9px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(2, 8, 20, 0.88);
  color: rgba(255, 255, 255, 0.88);
  font-family: var(--font-d, sans-serif);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transform: translateY(5px);
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}
.op-popup-fs:hover::before {
  opacity: 1;
  transform: translateY(0);
}

/* ── 6. PROGRESS BAR ─────────────────────────────────────────────────────── */
.op-popup-progress {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 0.5px solid rgba(255, 255, 255, 0.07);
}

.op-popup-progress-counter {
  font-family: var(--font-d);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--accent);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 44px;
}

.op-popup-progress-track {
  flex: 1;
  height: 2px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.op-popup-progress-fill {
  height: 100%;
  border-radius: 1px;
  background: linear-gradient(to right, var(--accent), rgba(0, 212, 255, 0.5));
  transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  width: 100%; /* default: 1/1 */
}

/* ── 7. MOBILE ───────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  /* On mobile, arrows sit at safe viewport edges (no room for formula) */
  .op-popup-nav--prev {
    left: 6px !important;
  }
  .op-popup-nav--next {
    right: 6px !important;
  }

  .op-popup-progress {
    margin-top: 10px;
    padding-top: 10px;
  }
}
`],[`home-patch-projects-final-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 78 — Projects: final UX polish.
   Close button anchored to viewport. Progress bar redesigned as a
   full-width 2 px accent line at the bottom of the image area.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. CLOSE BUTTON — viewport-fixed, top-right ─────────────────────────── */
/* position:fixed escapes .op-popup-card's overflow:hidden and positions
   relative to the viewport. Because .op-popup has no transform or filter,
   fixed children still anchor to the real viewport top-right corner.       */
.op-popup-close {
  position: fixed !important;
  top: 40px !important;
  right: 40px !important;
  left: auto !important;
  z-index: 10000 !important;
  transform: none !important;
  margin: 0 !important;
}

/* Re-enable the scale on hover (overrides the base transform: none above) */
.op-popup-close:hover {
  transform: scale(1.1) !important;
}

@media (max-width: 768px) {
  .op-popup-close {
    top: 16px !important;
    right: 16px !important;
  }
}

/* ── 2. PROGRESS BAR — 2 px accent line at bottom of image ──────────────── */
/* .op-popup-progress is now inside #opPopupImg (position: relative, overflow:
   hidden) so position: absolute; bottom: 0 snaps it to the image's lower
   edge. z-index: 7 keeps it above the slides (absolute, inset:0) and the
   fullscreen button (z-index: 6).                                          */
.op-popup-progress {
  position: absolute !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 7 !important;
  display: block !important;
  /* strip all layout styles inherited from patch-77 */
  padding: 0 !important;
  margin: 0 !important;
  border-top: none !important;
  gap: 0 !important;
  align-items: unset !important;
}

/* Numbers removed — bar speaks for itself */
.op-popup-progress-counter {
  display: none !important;
}

.op-popup-progress-track {
  height: 2px !important;
  width: 100% !important;
  border-radius: 0 !important;
  background: rgba(255, 255, 255, 0.12) !important;
  flex: none !important;
  overflow: hidden !important;
}

.op-popup-progress-fill {
  height: 100% !important;
  border-radius: 0 !important;
  background: var(--accent, #00d4ff) !important;
  box-shadow: 0 0 8px rgba(0, 212, 255, 0.55) !important;
  transition: width 0.4s ease !important;
}
`],[`home-patch-projects-ui-final`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 79 — Projects: close button escape fix + strict tablet grid.

   WHY position:absolute (not fixed):
   The close button is now a direct child of .op-popup, which is
   position:fixed; inset:0 (fills the viewport, no transform).
   Inside a full-viewport fixed ancestor, absolute and fixed give the same
   visual result — but absolute is immune to the stacking-context trap that
   .op-popup-card's backdrop-filter / opCardExpand transform creates.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. CLOSE BUTTON — absolute inside full-viewport backdrop ─────────────── */
.op-popup-close {
  position: absolute !important;
  top: 40px !important;
  right: 40px !important;
  left: auto !important;
  /* z-index relative to .op-popup siblings (.op-popup-card, nav buttons) */
  z-index: 10 !important;
  transform: none !important;
  margin: 0 !important;
}

.op-popup-close:hover {
  transform: scale(1.1) !important;
}

@media (max-width: 768px) {
  .op-popup-close {
    top: 16px !important;
    right: 16px !important;
  }
}

/* ── 2. TABLET GRID — strict 2-column uniform cards ──────────────────────── */
/* Covers 769 px – 991 px: desktop asymmetric large-card layout is replaced
   with two equal columns of fixed-height cards.
   Targets both initial grids and any chunk-revealed grids.               */
@media (min-width: 769px) and (max-width: 991px) {
  #portfolio .pg,
  #portfolio .pg.pg-alt,
  #moreCases .pg,
  #moreCases .pg.pg-alt {
    grid-template-columns: 1fr 1fr !important;
    grid-template-rows: auto !important;
    gap: 16px !important;
  }

  /* Every card — including the "hero" first card — becomes an identical block */
  #portfolio .pg .pc,
  #portfolio .pg .pc:first-child,
  #portfolio .pg.pg-alt .pc,
  #portfolio .pg.pg-alt .pc:first-child,
  #moreCases .pg .pc,
  #moreCases .pg.pg-alt .pc {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
    height: 320px !important;
    min-height: 320px !important;
    aspect-ratio: auto !important;
  }
}
`],[`home-patch-projects-fouc-and-tablet`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 80 — Projects: FOUC kill + nuclear tablet/mobile layout.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. KILL THE POPUP FOUC ───────────────────────────────────────────────── */
/* Patch-03 already sets opacity:0 on .op-popup, but the FOUC happens in the
   gap before deferred patches load. This rule covers that window:
   - visibility:hidden prevents sub-pixel flash even at opacity:0
   - z-index:-1 drops it behind the page so no accidental click capture
   - transition:none ensures no fade TOWARD the hidden state on first render
   The :not(.open) selector deactivates automatically when JS adds .open,
   restoring patch-03's opacity/transition/z-index for the open animation.   */
.op-popup:not(.open):not(.closing) {
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  transition: none !important;
  z-index: -1 !important;
}

/* ── 2. NUCLEAR TABLET + MOBILE LAYOUT (≤ 991 px) ────────────────────────── */
/* Use #portfolio/.pg selectors (specificity 1,1,0) to beat the desktop
   display:grid!important rules in 40-responsive-grid.css (same specificity,
   later cascade wins) and patch-79's grid attempt.
   Switching to flex completely sidesteps all grid-template-area / grid-span
   conflicts — there are no spanning concepts in a flex column.             */
@media (max-width: 991px) {
  #portfolio .pg,
  #portfolio .pg.pg-alt,
  #moreCases .pg,
  #moreCases .pg.pg-alt {
    display: flex !important;
    flex-direction: column !important;
    grid-template-columns: none !important; /* defensive — some browsers need this */
    gap: 16px !important;
  }

  /* Every card — including the hero first-child — becomes identical full-width blocks */
  #portfolio .pg .pc,
  #portfolio .pg .pc:first-child,
  #portfolio .pg.pg-alt .pc,
  #portfolio .pg.pg-alt .pc:first-child,
  #moreCases .pg .pc,
  #moreCases .pg.pg-alt .pc {
    width: 100% !important;
    height: 350px !important;
    min-height: 350px !important;
    max-width: 100% !important;
    /* Clear any grid placement that could bleed through */
    grid-column: auto !important;
    grid-row: auto !important;
    aspect-ratio: auto !important;
    flex-shrink: 0 !important;
  }
}
`],[`home-patch-projects-mobile-hidden-fix`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 81 — Restore [hidden] supremacy on tablet/mobile (≤ 991 px).
   Problem: patch-80's display:flex!important on .pg overrides the HTML
   [hidden] attribute (UA display:none has no !important), causing all
   pre-rendered chunks to appear at once on load.
   Fix: a single higher-specificity rule that forces display:none!important
   back onto any [hidden] grid or spacer element, applied last in cascade.
   ═══════════════════════════════════════════════════════════════════════════ */
@media (max-width: 991px) {
  #portfolio .pg[hidden],
  #portfolio .pg.pg-alt[hidden],
  #portfolio .project-block-spacer[hidden],
  #moreCases .pg[hidden],
  #moreCases .pg.pg-alt[hidden] {
    display: none !important;
  }
}
`],[`home-patch-projects-tablet-grid`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 82 — Projects: split tablet vs mobile layout.

   Cascade logic vs patch-80 (max-width:991px flex):
   • At 769–991 px: both patches match. Same specificity (1,1,0), patch-82
     loads later → display:grid wins here.
   • At ≤ 768 px:  patch-82's min-width:769px rule does NOT match, so
     patch-80's flex column keeps full control at mobile.
   • Patch-81 [hidden] rule (specificity 1,2,0) beats every display rule
     here, so pagination hiding still works at all viewport widths.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── TABLET: 2-column grid (769 px – 991 px) ─────────────────────────────── */
@media (min-width: 769px) and (max-width: 991px) {
  #portfolio .pg,
  #portfolio .pg.pg-alt {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    grid-template-rows: auto !important;
    gap: 16px !important;
  }

  /* All cards: uniform blocks, no span inheritance from desktop layout */
  #portfolio .pg .pc,
  #portfolio .pg .pc:first-child,
  #portfolio .pg.pg-alt .pc,
  #portfolio .pg.pg-alt .pc:first-child {
    width: 100% !important;
    height: 320px !important;
    min-height: 320px !important;
    grid-column: span 1 !important;
    grid-row: span 1 !important;
    aspect-ratio: auto !important;
  }

  /* 5th card fills the empty slot — spans both columns for a clean rectangle */
  #portfolio .pg .pc:last-child,
  #portfolio .pg.pg-alt .pc:last-child {
    grid-column: span 2 !important;
  }
}

/* ── MOBILE: single-column flex (≤ 768 px) ───────────────────────────────── */
/* Explicitly restates the mobile intent so it remains readable and
   independent of patch-80's broad max-width:991px rule.                    */
@media (max-width: 768px) {
  #portfolio .pg,
  #portfolio .pg.pg-alt {
    display: flex !important;
    flex-direction: column !important;
    gap: 16px !important;
  }

  #portfolio .pg .pc,
  #portfolio .pg .pc:first-child,
  #portfolio .pg.pg-alt .pc,
  #portfolio .pg.pg-alt .pc:first-child {
    width: 100% !important;
    height: 350px !important;
    min-height: 350px !important;
    grid-column: auto !important;
    grid-row: auto !important;
    aspect-ratio: auto !important;
  }
}
`],[`home-patch-projects-tablet-force`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 83 — Bulletproof tablet grid (769 px – 991 px).

   Why previous patches (79, 82) failed:
   40-responsive-grid.css sets the desktop first-child rule at specificity
   (1,4,0) — e.g. #portfolio .pg:not(.pg-alt) .pc:first-child (1+1+1+1+1).
   Any selector below (1,4,0) loses to it among !important declarations,
   regardless of source order.

   Fix: mirror the EXACT specificity of each desktop rule in this patch.
   Same specificity + later source order = this patch wins.

   Specificity map:
     #portfolio .pg                              → (1,1,0)
     #portfolio .pg.pg-alt                       → (1,2,0)
     #portfolio .pg:not(.pg-alt) .pc:first-child → (1,4,0)  ← key blocker
     #portfolio .pg.pg-alt      .pc:first-child  → (1,4,0)  ← key blocker
     #portfolio .pg:not(.pg-alt) .pc:not(:first) → (1,4,0)
     #portfolio .pg.pg-alt      .pc:not(:first)  → (1,4,0)
   ═══════════════════════════════════════════════════════════════════════════ */

@media (min-width: 769px) and (max-width: 991px) {
  /* ── Grid containers — (1,1,0) and (1,2,0): same as originals, later wins */
  #portfolio .pg,
  #portfolio .pg.pg-alt {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    grid-template-rows: auto !important;
    gap: 16px !important;
  }

  /* ── Reset the hero first-child span — (1,4,0): mirrors desktop selector  */
  /* Desktop locks .pc:first-child to grid-row: 1/span 2 and a fixed column.
     Using the identical :not(.pg-alt) / .pg.pg-alt patterns gives us the
     same (1,4,0) with later cascade → we win.                              */
  #portfolio .pg:not(.pg-alt) .pc:first-child,
  #portfolio .pg.pg-alt .pc:first-child {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
    height: 320px !important;
    min-height: 320px !important;
    aspect-ratio: auto !important;
  }

  /* ── All other cards — (1,4,0): mirrors desktop :not(:first-child) rule   */
  #portfolio .pg:not(.pg-alt) .pc:not(:first-child),
  #portfolio .pg.pg-alt .pc:not(:first-child) {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
    height: 320px !important;
    min-height: 320px !important;
    aspect-ratio: auto !important;
  }

  /* ── 5th card: panoramic full-width banner — (1,4,0), placed AFTER the    */
  /* :not(:first-child) reset so it wins grid-column and height for the      */
  /* last card (same specificity, later in this file = winner).              */
  #portfolio .pg:not(.pg-alt) .pc:last-child,
  #portfolio .pg.pg-alt .pc:last-child {
    grid-column: 1 / -1 !important;
    height: 460px !important;
    min-height: 460px !important;
  }
}

/* ── [hidden] guard — (1,2,0) beats the grid display rules above (1,1,0) ── */
/* Keeps pagination working: deferred chunks stay invisible until revealed.  */
@media (max-width: 991px) {
  #portfolio .pg[hidden],
  #portfolio .pg.pg-alt[hidden],
  #portfolio .project-block-spacer[hidden] {
    display: none !important;
  }
}
`],[`home-patch-projects-youtube`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 84 — YouTube iframes in project cards and modal slider.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── GRID CARD: fill slide, block pointer-events so swipe still works ─────── */
/* iframes don't support object-fit: cover — they fill via width/height 100% */
.pc-slide iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
  /* prevent the iframe from swallowing touch/click events on the card track */
  pointer-events: none;
}

/* ── MODAL: enable interaction so user can play the video ─────────────────── */
.op-popup-slide iframe {
  width: 100% !important;
  height: 100% !important;
  display: block !important;
  border: none !important;
  pointer-events: auto !important;
}
`],[`home-patch-reviews-polish-and-pagination`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 85 — Reviews: smart pagination grid, alternating video layout,
   responsive breakpoints, glassmorphism upgrade, buttery logo hover.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. EXTRA-CHUNK GRID (.vr-chunk) ─────────────────────────────────────── */
/* 3-column layout mirrors .vt-bento (video + 2 card columns).
   54-reviews.css already places .vt-cell-video at grid-column:1 grid-row:1/3
   globally — this rule applies to .vr-chunk children too.                   */
.vr-chunk {
  max-width: 1120px;
  margin: 14px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
}

/* Alternate layout: video moves to the right column.
   Cards auto-fill columns 1-2 (grid skips the explicitly placed col-3 cell). */
.vr-chunk-alt .vt-cell-video {
  grid-column: 3 !important;
}

/* [hidden] must beat display:grid !important — mirrors patch-76 pattern */
#reviews .vr-chunk[hidden] {
  display: none !important;
}

/* ── 2. TABLET (769px – 991px) ───────────────────────────────────────────── */
/* 2-column layout: video stays on its side (portrait), 1 card top + 1 bottom.
   Cards 3-4 overflow to a third row below the video — clean and balanced.   */
@media (min-width: 769px) and (max-width: 991px) {
  .vt-bento {
    grid-template-columns: 1fr 1fr !important;
  }
  /* Video: col 1, spans rows 1-2. Base rule from 54-reviews.css is already
     grid-column:1; grid-row:1/3 — explicitly reinforce it here.            */
  .vt-bento .vt-cell-video {
    grid-column: 1 !important;
    grid-row: 1 / 3 !important;
  }
  /* Keep portrait orientation; reduce min-height so it doesn't overpower
     the layout (55-reviews-video.css sets 560px which is too tall here).   */
  .video-testimonial .vt-video-wrap.clients-video-vertical {
    aspect-ratio: 9 / 16 !important;
    min-height: 360px !important;
  }
  .vr-chunk {
    grid-template-columns: 1fr 1fr !important;
  }
  /* Normal chunk: video stays left */
  .vr-chunk .vt-cell-video {
    grid-column: 1 !important;
    grid-row: 1 / 3 !important;
  }
  /* Alt chunk: video stays right — alternating preserved on tablet */
  .vr-chunk-alt .vt-cell-video {
    grid-column: 2 !important;
    grid-row: 1 / 3 !important;
  }
}

/* ── 3. MOBILE (≤ 768px): single-column stack ────────────────────────────── */
@media (max-width: 768px) {
  .vt-bento {
    display: flex !important;
    flex-direction: column !important;
  }
  .vr-chunk {
    display: flex !important;
    flex-direction: column !important;
  }
  /* [hidden] still wins — higher specificity beats both flex and grid !important */
}

/* ── 4. GLASSMORPHISM UPGRADE ────────────────────────────────────────────── */
.vt-cell {
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
}

/* ── 5. LOGO — buttery grayscale → color transition ─────────────────────── */
.vt-logo img,
.vt-logo svg {
  transition:
    filter 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.6s ease !important;
}

.vt-cell:hover .vt-logo img,
.vt-cell:hover .vt-logo svg {
  filter: grayscale(0) brightness(1) !important;
}
`],[`home-patch-ui-hover-polish`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 86 — Ultra-smooth card hover: correct specificity, GPU compositing,
   full-card scale, logo background suppression.

   Specificity map (all !important — winner = higher specificity OR later source):
     31-clients-reveal  .video-testimonial .vt-cell          (0,2,0)
     31-clients-reveal  .video-testimonial .vt-cell.vt-in    (0,3,0)
     patch-86 base      .video-testimonial .vt-cell          (0,2,0) ← same, later → wins
     patch-86 hover     .video-testimonial .vt-cell:hover    (0,3,0) ← same, later → wins
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── REVIEW CARDS — resting state ────────────────────────────────────────── */
/* Keep opacity/filter at 0.9s for the scroll-reveal animation.
   Shorten transform/shadow/border to 0.5s for hover responsiveness.         */
.video-testimonial .vt-cell {
  box-shadow: 0 4px 24px -4px rgba(0, 0, 0, 0.28) !important;
  transition:
    opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.9s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

/* ── REVIEW CARDS — hover: lift + scale the whole card ───────────────────── */
/* translate3d keeps the animation on the GPU compositor thread.
   scale(1.025) gives the premium "card pops out" feeling.
   vt-in base is translate3d(0,0,0) scale(1) — same layer count → smooth.   */
.video-testimonial .vt-cell:hover {
  transform: translate3d(0, -4px, 0) !important;
  border-color: rgba(0, 212, 255, 0.25) !important;
  box-shadow:
    0 12px 32px -8px rgba(0, 0, 0, 0.32),
    0 8px 24px -4px rgba(0, 212, 255, 0.2) !important;
}

/* ── LOGO — suppress the white hover-background from 54-reviews.css ─────── */
/* 54-reviews.css sets .vt-cell:hover .vt-logo img { background: rgba(255,255,255,0.92) }
   which creates a solid white box. With parent scale(1.025) active that box
   gets a subpixel border artifact. Keep background at the same subtle level
   as the resting state so no frame appears.                                  */
.video-testimonial .vt-cell:hover .vt-logo img {
  background: rgba(255, 255, 255, 0.08) !important;
}

/* ── LOGO CONTAINER: standardized area ──────────────────────────────────── */
/* Fixed-height container so layout is identical regardless of logo dimensions.
   !important overrides inline style="height: Xpx; width: auto" on <img>.    */
.vt-logo {
  height: 54px !important;
  min-height: 54px !important;
  display: flex !important;
  align-items: center !important;
  margin-bottom: 20px !important;
  overflow: hidden !important;
}

/* <img> logos: fixed height, natural width, capped at 154px.
   padding: 4px 8px + border-radius already set in 54-reviews.css are kept —
   they create the subtle pill bg for transparent-PNG logos.                 */
.vt-logo img {
  height: 44px !important;
  width: auto !important;
  max-width: 154px !important;
  object-fit: contain !important;
  flex-shrink: 0 !important;
}

/* <svg> logos (injected as HTML, no padding wrapper): slightly smaller      */
.vt-logo svg {
  height: 40px !important;
  width: auto !important;
  max-width: 132px !important;
  display: block !important;
  flex-shrink: 0 !important;
}

/* ── GLOBE CANVAS — soft radial edge fade ────────────────────────────────── */
/* mask-image fades the rectangular canvas boundary to transparent.
   Solid center (0→58%), smooth fade (58→82%), fully transparent beyond.     */
#globe {
  -webkit-mask-image: radial-gradient(ellipse 53% 56% at center, black 75%, transparent 86%);
  mask-image: radial-gradient(ellipse 53% 56% at center, black 75%, transparent 86%);
}

/* ── FLOATING CTA — fixed bottom-right, slightly inset from corner ──────── */
/* Overrides patch-15's dynamic formula which drifted too far from the edge
   on large viewports. Simple fixed values: clean, predictable on all widths. */
/* right is set by 16-floating-contact-align.js (10vw equivalent inline style).
   bottom has no JS override — CSS controls it here.                          */
@media (min-width: 769px) {
  .floating-contact,
  #floatingContact {
    bottom: 10vh !important;
  }
}

/* ── SHOWS LIST — rolling wave, top-to-bottom ────────────────────────────── */
/* Stagger = 0.7s. At each item's peak the previous is still at ~36% opacity
   → smooth handoff, not a flash. Quiet gap 4.2→5s before the next pass.
   Opacity-only on ::after = GPU-composited, zero repaint.                   */
.gshow-item {
  position: relative;
  overflow: hidden;
}
.gshow-item::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 13px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 212, 255, 0.05) 30%,
    rgba(0, 212, 255, 0.09) 50%,
    rgba(0, 212, 255, 0.05) 70%,
    transparent
  );
  opacity: 0;
  pointer-events: none;
}
.gshow-item:nth-child(1)::after {
  animation: gshowWave 5s ease-in-out 0s infinite;
}
.gshow-item:nth-child(2)::after {
  animation: gshowWave 5s ease-in-out 0.7s infinite;
}
.gshow-item:nth-child(3)::after {
  animation: gshowWave 5s ease-in-out 1.4s infinite;
}
.gshow-item:nth-child(4)::after {
  animation: gshowWave 5s ease-in-out 2.1s infinite;
}
.gshow-item:nth-child(5)::after {
  animation: gshowWave 5s ease-in-out 2.8s infinite;
}

@keyframes gshowWave {
  0%,
  100% {
    opacity: 0;
  }
  6% {
    opacity: 1;
  }
  28% {
    opacity: 0;
  }
}

/* ── PROJECT CARDS — enhanced info-block hover + neon shadow ─────────────── */

/* Card: GPU layer + box-shadow transition for the neon glow on hover */
.pc {
  transform: translate3d(0, 0, 0);
  will-change: transform;
  transition: box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Neon accent shadow — bottom-concentrated, mirrors .vt-cell:hover pattern */
.pc:hover {
  box-shadow:
    0 12px 36px -8px rgba(0, 0, 0, 0.45),
    0 8px 28px -4px rgba(0, 212, 255, 0.18) !important;
}

/* Info block: scale from the bottom edge, no translateY so the block stays
   flush with the card bottom — no gap, no visible content leak below.
   transform-origin:bottom anchors the bottom edge while the block grows up. */
.pc-info {
  transform-origin: bottom center !important;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.pc:hover .pc-info {
  transform: translateY(0) scale(1.06) !important;
}

/* Dots: push up on hover so they clear the top of the scaled text block.
   -18px gives enough breathing room above pc-info's scaled top edge.       */
.pc-dots {
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.pc:hover .pc-dots {
  transform: translateX(-50%) translateY(-18px) !important;
}
`],[`home-patch-buttons-and-messengers`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 87 — Premium glass buttons, messenger reorder + hover effects,
   global cursor: pointer on all interactive elements.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── CURSOR POINTER — all interactive elements ───────────────────────────── */
/* Several components had cursor:default which hides interactivity from users */
a[href],
a[href] *,
button,
button *,
[role='button'],
[role='button'] *,
input[type='submit'],
input[type='button'],
input[type='reset'],
.view-more-cases,
.view-more-cases *,
.fc-main,
.fc-main *,
.fc-btn,
.fc-btn *,
.pc,
.pc *,
.pc-nav,
.pc-nav *,
.pc-dot,
.gshow-item,
.btn-cta,
.btn-cta *,
.btn-liquid,
.btn-liquid *,
.port-back-main,
.port-back-main *,
.op-popup-close,
.op-popup-close *,
.op-popup-nav,
.op-popup-nav *,
.op-popup-fs,
.op-popup-fs * {
  cursor: pointer !important;
}

/* ── VIEW MORE (shared base) — premium liquid glass upgrade ─────────────── */
.view-more-cases {
  position: relative !important;
  overflow: hidden !important;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.03) 100%
  ) !important;
  backdrop-filter: blur(20px) saturate(1.3) !important;
  -webkit-backdrop-filter: blur(20px) saturate(1.3) !important;
  border: 0.5px solid rgba(255, 255, 255, 0.14) !important;
  border-top-color: rgba(255, 255, 255, 0.24) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    0 4px 20px rgba(0, 0, 0, 0.22),
    0 0 20px rgba(0, 212, 255, 0.08) !important;
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease !important;
}

/* Top specular shimmer — glass edge highlight */
.view-more-cases::before {
  content: '';
  position: absolute;
  top: 0;
  left: 14%;
  right: 14%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.28), transparent);
  pointer-events: none;
}

.view-more-cases:hover {
  transform: translateY(-2px) !important;
  background: linear-gradient(
    145deg,
    rgba(0, 212, 255, 0.1) 0%,
    rgba(0, 212, 255, 0.04) 100%
  ) !important;
  border-color: rgba(0, 212, 255, 0.28) !important;
  border-top-color: rgba(0, 212, 255, 0.42) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 8px 32px rgba(0, 0, 0, 0.28),
    0 0 28px rgba(0, 212, 255, 0.18) !important;
  color: #fff !important;
}

/* ── #moreReviewsBtn — blue tint for association with reviews section ─────── */
/* Same glass structure, slightly shifted hue: indigo-blue instead of pure cyan */
#moreReviewsBtn {
  color: rgba(110, 190, 255, 0.9) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    0 4px 20px rgba(0, 0, 0, 0.22),
    0 0 20px rgba(80, 150, 255, 0.1) !important;
}
#moreReviewsBtn:hover {
  background: linear-gradient(
    145deg,
    rgba(80, 150, 255, 0.1) 0%,
    rgba(80, 150, 255, 0.04) 100%
  ) !important;
  border-color: rgba(80, 150, 255, 0.28) !important;
  border-top-color: rgba(80, 150, 255, 0.42) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 8px 32px rgba(0, 0, 0, 0.28),
    0 0 28px rgba(80, 150, 255, 0.2) !important;
  color: #fff !important;
}

/* ── CTA MESSENGERS — more breathing room, slightly larger ───────────────── */
.cta-messengers {
  gap: 16px !important;
}
.cta-messengers .msg-btn,
.cta-messengers a.msg-btn {
  width: 50px !important;
  height: 50px !important;
}
.cta-messengers .msg-btn svg,
.cta-messengers a.msg-btn svg {
  width: 22px !important;
  height: 22px !important;
}

/* Email button — accent glass style + own pulse at 0.7s offset */
.cta-messengers .msg-btn.em,
.cta-messengers a.msg-btn.em {
  background: rgba(0, 212, 255, 0.1) !important;
  box-shadow:
    0 0 0 rgba(0, 212, 255, 0),
    0 0 16px rgba(0, 212, 255, 0.12);
  animation: emPulseCta 2.2s ease-in-out infinite !important;
  animation-delay: 0.7s !important;
}

/* ── PULSE ANIMATIONS — redefine to use CSS \`scale\` property ─────────────── */
/* Original keyframes used \`transform: scale()\` which conflicts with hover's
   \`transform: translateY\`. Switching to the individual \`scale\` property means
   hover can use \`translate\` independently — zero conflict, zero jump.       */
/* scale removed from all pulse keyframes — scale changes hit-area bounds
   which causes cursor flickering at button borders on every cycle.
   Box-shadow expansion gives the same "breathing" feel without hit-area change. */
@keyframes tgPulseOriginal {
  0%,
  100% {
    box-shadow:
      0 0 0 0 rgba(34, 158, 217, 0.45),
      0 0 18px rgba(34, 158, 217, 0.16);
  }
  50% {
    box-shadow:
      0 0 0 9px rgba(34, 158, 217, 0),
      0 0 28px rgba(34, 158, 217, 0.6);
  }
}
@keyframes waPulseOriginal {
  0%,
  100% {
    box-shadow:
      0 0 0 0 rgba(37, 211, 102, 0.45),
      0 0 18px rgba(37, 211, 102, 0.16);
  }
  50% {
    box-shadow:
      0 0 0 9px rgba(37, 211, 102, 0),
      0 0 28px rgba(37, 211, 102, 0.6);
  }
}
@keyframes emPulseCta {
  0%,
  100% {
    box-shadow:
      0 0 0 0 rgba(0, 212, 255, 0.4),
      0 0 16px rgba(0, 212, 255, 0.1);
  }
  50% {
    box-shadow:
      0 0 0 9px rgba(0, 212, 255, 0),
      0 0 28px rgba(0, 212, 255, 0.55);
  }
}

/* ── MESSENGER HOVER — smooth lift + ring burst, pulse unaffected ─────────── */
/* \`translate\` property is independent of \`scale\` — hover and animation
   run on separate axes with no cascade conflict.                            */
.cta-messengers .msg-btn,
.cta-messengers a.msg-btn {
  transition:
    translate 0.38s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.3s ease !important;
}

.cta-messengers .msg-btn:hover,
.cta-messengers a.msg-btn:hover {
  translate: 0 -4px !important;
  filter: brightness(1.15) !important;
  transform: translateZ(0) !important; /* cancel scale(1.08) from 20-messenger-buttons.css */
}

/* Radar-ring burst on hover via ::after */
.cta-messengers .msg-btn::after,
.cta-messengers a.msg-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.cta-messengers .msg-btn.wa::after {
  border: 1.5px solid rgba(37, 211, 102, 0.8);
}
.cta-messengers .msg-btn.tg::after {
  border: 1.5px solid rgba(34, 158, 217, 0.8);
}
.cta-messengers .msg-btn.em::after {
  border: 1.5px solid rgba(0, 212, 255, 0.8);
}

.cta-messengers .msg-btn:hover::after,
.cta-messengers a.msg-btn:hover::after {
  animation: msgRingBurst 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes msgRingBurst {
  0% {
    inset: 0;
    opacity: 0.85;
  }
  100% {
    inset: -14px;
    opacity: 0;
  }
}
`],[`home-patch-cta-responsive`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 88 — CTA responsive + global scale-from-hover/pulse removal.
   Scale in CSS transforms changes pointer-events hit-area, causing cursor
   flicker at button borders. All scale replaced with box-shadow/glow.
   Root causes:
     1. flex-wrap:wrap on .cta-actions → btn-cta jumps to a new row at border sizes
     2. width:100% on .btn-cta (patch-10) → too wide on large phones
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── GLOBAL: remove scale from base pulse animations & button hovers ────── */
/* msgPulseTelegram / msgPulseWhatsApp in 20-messenger-buttons.css still use
   transform:scale — override here to box-shadow only.                      */
@keyframes msgPulseTelegram {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.28);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(0, 212, 255, 0);
  }
}
@keyframes msgPulseWhatsApp {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.32);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(37, 211, 102, 0);
  }
}

/* fc-main hover: patch-15 uses scale(1.04) — remove */
.floating-contact .fc-main:hover {
  transform: translateY(-2px) !important;
}

/* pc-nav hover if any scale present */
.pc-nav:hover {
  transform: translateY(-50%) !important;
}

/* ── 460–900px: push messenger icons to the right of the actions row ───────
   btn-cta stays left, messengers get margin-left:auto → flush right.       */
@media (min-width: 461px) and (max-width: 900px) {
  .cta-messengers {
    margin-left: auto !important;
  }
}

/* ── TABLET 769–900px: cta-box goes column before the row gets cramped ─────
   .cta-actions stays as a row — btn + 3 messengers fit at ~370px width.    */
@media (min-width: 769px) and (max-width: 900px) {
  .cta-box {
    flex-direction: column !important;
    align-items: stretch !important; /* stretch so .cta-actions fills full width → margin-left:auto works */
    padding: 44px 40px !important;
    gap: 24px !important;
  }
  .cta-actions {
    justify-content: flex-start !important;
    flex-wrap: nowrap !important;
  }
}

/* ── MOBILE ≤768px: fix wrap jump + btn-cta oversized width ────────────────
   patch-10 already sets cta-box to column — we only fix cta-actions & btn.  */
@media (max-width: 768px) {
  .cta-actions {
    flex-wrap: nowrap !important; /* no more jump to second row */
    justify-content: flex-start !important;
    gap: 16px !important;
  }
  .btn-cta {
    width: auto !important; /* override patch-10's width:100% */
    flex-shrink: 0 !important;
    white-space: nowrap !important;
  }
}

/* ── SMALL MOBILE ≤460px: stack everything vertically ──────────────────────
   At this width btn + 3 icons side-by-side gets too tight.                  */
@media (max-width: 460px) {
  .cta-actions {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 14px !important;
  }
  .btn-cta {
    text-align: center !important;
    /* auto width in stretch column context = full column width — clean look */
  }
  .cta-messengers {
    justify-content: center !important;
  }
}
`],[`home-patch-popup-fullscreen-center`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 89 — Popup fullscreen: images fill the entire screen.

   Root cause: patch-76 sets height:58vh !important on .op-popup-img.
   In native fullscreen the browser renders #opPopupImg at full screen size
   visually, but CSS layout height stays at 58vh — children with height:100%
   compute against 58vh, leaving a 42vh gap at the bottom.

   Fix A (CSS): #opPopupImg:fullscreen has specificity (1,1,0+pseudo) which
   beats .op-popup-img specificity (0,1,0) — wins even with !important.

   Fix B (JS class): syncFsIcon in 10-project-popup.js adds .op-popup-fs-active
   and uses setProperty('height','100vh','important') — inline !important
   has the absolute highest priority.

   NOTE: JS changes in 10-project-popup.js require a full page reload
   (Cmd+Shift+R) because scripts are injected once at mount time via
   script.textContent (run-classic-scripts.js).
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Fix A: :fullscreen pseudo-class (higher specificity than patch-76) ──── */
#opPopupImg:fullscreen,
#opPopupImg:-webkit-full-screen,
#opPopupImg:-moz-full-screen {
  height: 100vh !important;
  max-height: none !important;
  overflow: hidden !important;
}

#opPopupImg:fullscreen .op-popup-slides,
#opPopupImg:-webkit-full-screen .op-popup-slides,
#opPopupImg:-moz-full-screen .op-popup-slides,
#opPopupImg.op-popup-fs-active .op-popup-slides {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  height: 100vh !important;
  width: 100vw !important;
}

#opPopupImg:fullscreen .op-popup-slide,
#opPopupImg:-webkit-full-screen .op-popup-slide,
#opPopupImg:-moz-full-screen .op-popup-slide,
#opPopupImg.op-popup-fs-active .op-popup-slide {
  height: 100vh !important;
}

#opPopupImg:fullscreen .op-popup-slide img,
#opPopupImg:-webkit-full-screen .op-popup-slide img,
#opPopupImg:-moz-full-screen .op-popup-slide img,
#opPopupImg.op-popup-fs-active .op-popup-slide img {
  width: 100vw !important;
  height: 100vh !important;
  max-height: none !important;
  object-fit: cover !important;
  object-position: center center !important;
  display: block !important;
}

#opPopupImg:fullscreen .op-popup-progress,
#opPopupImg:-webkit-full-screen .op-popup-progress,
#opPopupImg:-moz-full-screen .op-popup-progress {
  display: none !important;
}

.op-popup-img-info {
  display: none !important;
}

/* ── Fix B: JS class fallback ─────────────────────────────────────────────── */
#opPopupImg.op-popup-fs-active {
  height: 100vh !important;
  max-height: none !important;
  overflow: hidden !important;
}

#opPopupImg.op-popup-fs-active .op-popup-slide {
  height: 100% !important;
}

#opPopupImg.op-popup-fs-active .op-popup-slide img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center center !important;
  display: block !important;
}

#opPopupImg.op-popup-fs-active .op-popup-progress {
  display: none !important;
}
`],[`home-patch-hero-view-cases-glass`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 90 — Hero "View cases": visual upgrade to match .view-more-cases.

   Architecture note: patch-50 already put the glass on ::before to prevent
   backdrop-filter flicker. This patch only overrides the VISUAL values on
   that ::before (background, border, shadow, backdrop) — the structural
   layer (position, inset, z-index, overflow, border-radius) is untouched.

   Top specular shimmer is layered into ::before's background property
   (1px gradient at the top edge, 14%→86% width) since ::before is already
   occupied by the glass layer.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Resting glass — matches .view-more-cases ─────────────────────────────── */
#heroBtnsRow .btn-glass::before {
  background:
    /* top specular shimmer — glass edge highlight */
    linear-gradient(to right, transparent, rgba(255, 255, 255, 0.28), transparent) 14% 0 / 72% 1px
      no-repeat,
    /* main glass gradient */
    linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(20px) saturate(1.3) !important;
  -webkit-backdrop-filter: blur(20px) saturate(1.3) !important;
  border: 0.5px solid rgba(255, 255, 255, 0.14) !important;
  border-top-color: rgba(255, 255, 255, 0.24) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    0 4px 20px rgba(0, 0, 0, 0.22),
    0 0 20px rgba(0, 212, 255, 0.08) !important;
  transition:
    background 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.3s ease !important;
}

/* ── Hover lift — -2px matches .view-more-cases ───────────────────────────── */
#heroBtnsRow .btn-glass:hover {
  transform: translateY(-2px) !important;
}

/* ── Hover glass — cyan tint, stronger glow ───────────────────────────────── */
#heroBtnsRow .btn-glass:hover::before {
  background:
    linear-gradient(to right, transparent, rgba(255, 255, 255, 0.28), transparent) 14% 0 / 72% 1px
      no-repeat,
    linear-gradient(145deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 212, 255, 0.04) 100%) !important;
  border-color: rgba(0, 212, 255, 0.28) !important;
  border-top-color: rgba(0, 212, 255, 0.42) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 8px 32px rgba(0, 0, 0, 0.28),
    0 0 28px rgba(0, 212, 255, 0.18) !important;
}
`],[`home-patch-nav-contact-now-glass`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 91 — Header "CONTACT NOW": premium glass, accent2 (#ff5500) always.

   Text color stays var(--accent2) = #ff5500 in both rest and hover states.
   Glass is applied directly (overflow:hidden clips backdrop-filter).
   ::before = top specular shimmer + right-side warm blush.
   ::after  = bottom edge warm inner glow (depth layer).
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Resting glass ────────────────────────────────────────────────────────── */
#navContactBtn {
  position: relative !important;
  overflow: hidden !important;
  /* 3-stop gradient: warm tint at top, neutral mid, slight depth at bottom */
  background: linear-gradient(
    160deg,
    rgba(255, 100, 20, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 55%,
    rgba(0, 0, 0, 0.06) 100%
  ) !important;
  backdrop-filter: blur(28px) saturate(1.6) brightness(1.08) !important;
  -webkit-backdrop-filter: blur(28px) saturate(1.6) brightness(1.08) !important;
  border: 0.5px solid rgba(255, 255, 255, 0.14) !important;
  border-top-color: rgba(255, 255, 255, 0.24) !important;
  box-shadow:
    /* top inner highlight */
    inset 0 1px 0 rgba(255, 160, 80, 0.18),
    /* bottom inner shadow — depth */ inset 0 -1px 0 rgba(0, 0, 0, 0.14),
    /* outer drop */ 0 4px 18px rgba(0, 0, 0, 0.28),
    /* ambient warm glow */ 0 0 22px rgba(255, 85, 0, 0.1),
    /* subtle outer rim */ 0 0 0 0.5px rgba(255, 85, 0, 0.08) !important;
  transition:
    transform 0.32s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.32s ease,
    background 0.32s ease,
    border-color 0.32s ease !important;
}

/* Top specular shimmer + right-edge warm blush */
#navContactBtn::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 10% !important;
  right: 10% !important;
  height: 1px !important;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 160, 80, 0.45) 40%,
    rgba(255, 255, 255, 0.32) 50%,
    rgba(255, 160, 80, 0.45) 60%,
    transparent
  ) !important;
  pointer-events: none !important;
}

/* Bottom inner depth line */
#navContactBtn::after {
  content: '' !important;
  position: absolute !important;
  bottom: 0 !important;
  left: 20% !important;
  right: 20% !important;
  height: 1px !important;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 85, 0, 0.14),
    transparent
  ) !important;
  pointer-events: none !important;
}

/* ── Hover ────────────────────────────────────────────────────────────────── */
#navContactBtn:hover {
  transform: translateY(-2px) !important;
  background: linear-gradient(
    160deg,
    rgba(255, 85, 0, 0.15) 0%,
    rgba(255, 120, 40, 0.07) 55%,
    rgba(0, 0, 0, 0.04) 100%
  ) !important;
  border-color: rgba(255, 85, 0, 0.28) !important;
  border-top-color: rgba(255, 85, 0, 0.42) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 160, 80, 0.28),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1),
    0 8px 32px rgba(0, 0, 0, 0.32),
    0 0 32px rgba(255, 85, 0, 0.22),
    0 0 0 0.5px rgba(255, 85, 0, 0.16) !important;
  /* text color intentionally NOT set — var(--accent2) stays */
}
`],[`home-patch-planets-top-three-lower`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 92 — STAND / ACTIVATION / STAFF: shift down ~7 percentage points.

   Previous top values (winners in the cascade before this patch):
     Desktop  ≥901px: STAND 18%, ACTIVATION 12%, STAFF 18%  (patch-57/74)
     Tablet 769–900px: STAND 15%, ACTIVATION 20%, STAFF 19% (section-111/74)
   ═══════════════════════════════════════════════════════════════════════════ */

@media (min-width: 901px) {
  .pe-orb-ideas {
    top: 22% !important;
  } /* STAND      18 → 22 */
  .pe-orb-vr {
    top: 16% !important;
  } /* ACTIVATION 12 → 16 */
  .pe-orb-staff {
    top: 22% !important;
  } /* STAFF      18 → 22 */
}

@media (min-width: 769px) and (max-width: 900px) {
  .pe-orb-ideas {
    top: 19% !important;
  } /* STAND      15 → 19 */
  .pe-orb-vr {
    top: 24% !important;
  } /* ACTIVATION 20 → 24 */
  .pe-orb-staff {
    top: 23% !important;
  } /* STAFF      19 → 23 */
}
`],[`home-patch-planets-solar-crescent`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 93 — Planet solar crescent: directional cyan glow on the inner face
   of each planet (the side facing the "perfect event" sun at orbit center).

   Architecture:
   · .pe-orb-sphere::before is a circle (inset:12%, border-radius:50%) that
     patch-62 re-enabled and patch-63 calibrated. It currently sits at
     opacity:0 in the resting state.
   · This patch makes it visible (opacity:0.75) and adds a directional
     box-shadow whose offset vector points TOWARD the orbit center (50%,50%).
     An inset offset in that direction creates the crescent on the lit face.
     An outer shadow with the same direction adds a soft ambient halo.
   · On hover patch-63 already fires: opacity:1 + symmetric full glow.
     The box-shadow transition (0.4s ease-out from patch-62) handles the
     smooth crescent → full-glow reveal automatically.

   Direction table  (planet top%, left% → offset to center → inset dx/dy):
     STAND      22% 20% → (+30,+28) → inset +10px +10px
     ACTIVATION 16% 50% → ( 0,+34) → inset   0   +14px
     STAFF      22% 80% → (-30,+28) → inset -10px +10px
     SCREENS    50% 90% → (-40,  0) → inset -14px   0
     MERCH      82% 78% → (-28,-32) → inset  -9px -11px
     CONTENT    82% 22% → (+28,-32) → inset  +9px -11px
     CATERING   94% 54% → (  0,-44) → inset    0  -14px
     SUPPORT    55% 10% → (+40, -5) → inset +14px  -2px
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Shared resting opacity — override patch-62's opacity:0 ───────────────── */
#peSecondRight .pe-orb-ideas::before,
#peSecondRight .pe-orb-vr::before,
#peSecondRight .pe-orb-staff::before,
#peSecondRight .pe-orb-led::before,
#peSecondRight .pe-orb-materials::before,
#peSecondRight .pe-orb-motion::before,
#peSecondRight .pe-orb-bar::before,
#peSecondRight .pe-orb-activation::before {
  opacity: 0.75 !important;
}

/* ── Per-planet directional crescent ─────────────────────────────────────── */

/* STAND */
#peSecondRight .pe-orb-ideas::before {
  box-shadow: inset -7px -7px 8px -1px rgba(150, 245, 255, 0.95) !important;
}

/* ACTIVATION */
#peSecondRight .pe-orb-vr::before {
  box-shadow: inset 0 -8px 8px -1px rgba(150, 245, 255, 0.95) !important;
}

/* STAFF */
#peSecondRight .pe-orb-staff::before {
  box-shadow: inset 7px -7px 8px -1px rgba(150, 245, 255, 0.95) !important;
}

/* SCREENS */
#peSecondRight .pe-orb-led::before {
  box-shadow: inset 8px 0 8px -1px rgba(150, 245, 255, 0.95) !important;
}

/* MERCH */
#peSecondRight .pe-orb-materials::before {
  box-shadow: inset 7px 7px 8px -1px rgba(150, 245, 255, 0.95) !important;
}

/* CONTENT */
#peSecondRight .pe-orb-motion::before {
  box-shadow: inset -7px 7px 8px -1px rgba(150, 245, 255, 0.95) !important;
}

/* CATERING */
#peSecondRight .pe-orb-bar::before {
  box-shadow: inset 0 8px 8px -1px rgba(150, 245, 255, 0.95) !important;
}

/* SUPPORT */
#peSecondRight .pe-orb-activation::before {
  box-shadow: inset -8px 1px 8px -1px rgba(150, 245, 255, 0.95) !important;
}

/* hover handled by patch-94 */
`],[`home-patch-planets-hover-smooth`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 94 — Planet hover: flicker-free smooth entry.

   Root causes fixed:
   1. scale() on wrapper changes bounding box → cursor exits/re-enters at edge.
      Fix: move scale to .pe-orb-video child; wrapper only lifts (translateY).
   2. ::after was killed (display:none) — no hit-area cushion around sphere.
      Fix: re-enable as a 26px transparent ring, extends hover zone beyond edge.
   3. .pe-sphere-label has pointer-events:none — gap between label and sphere
      caused rapid hover break when cursor crossed downward.
      Fix: pointer-events:auto on label so it's part of the hover chain.
   4. No transition on wrapper transform — scale/lift snapped on instantly.
      Fix: 0.38s ease on transform.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. Sphere wrapper: transition + lift only (no border-radius/box-shadow) */
#peSecondRight .pe-orb-sphere {
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

#peSecondRight .pe-orb-sphere:hover,
body.is-popup-active #peSecondRight .pe-orb-sphere.is-playing-video {
  transform: translate3d(-50%, calc(-50% - 5px), 0) !important;
}

/* ── 2. Scale + color-reveal on the video child ───────────────────────────── */
#peSecondRight .pe-orb-sphere .pe-orb-video {
  transition:
    filter 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

#peSecondRight .pe-orb-sphere:hover .pe-orb-video,
body.is-popup-active #peSecondRight .pe-orb-sphere.is-playing-video .pe-orb-video {
  transform: scale(1.06) !important;
  filter: grayscale(0) !important;
}

/* ── 3. ::after — killed ──────────────────────────────────────────────────── */
/* #peSecondRight .pe-orb-sphere::after {
  display: none !important;
  content: none !important;
} */

#peSecondRight .pe-orb-sphere::after {
  content: '' !important;
  display: block !important;
  position: absolute !important;

  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;

  transform: none !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  z-index: 6 !important;
  opacity: 1 !important;
  mix-blend-mode: normal !important;
}

/* ── 4. Label: enable pointer-events so cursor on label = sphere hovered ──── */
#peSecondRight .pe-orb-sphere .pe-sphere-label {
  pointer-events: auto !important;
}
/* Children of label: keep non-interactive themselves (label <a> is separate) */
#peSecondRight .pe-orb-sphere .pe-sphere-label .pe-play-icon {
  pointer-events: none !important;
}

/* ── 5. ::before: restore z-index:0 + original hover glow (patch-62/63) ──── */
#peSecondRight .pe-orb-sphere::before {
  inset: 9% !important;
  z-index: 0 !important;
  mix-blend-mode: normal !important;
  transform: scale(1) !important;
  transition:
    opacity 0.38s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.38s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

#peSecondRight .pe-orb-sphere:hover::before,
body.is-popup-active #peSecondRight .pe-orb-sphere.is-playing-video::before {
  opacity: 1 !important;
  box-shadow:
    0 0 15px 2px var(--planet-glow),
    inset 0 0 10px 2px var(--planet-glow) !important;
  transform: scale(1) !important;
}

/* ── 6. Per-group inset correction — two groups, not 8 individual rules ───── */
/* Each planet video has a different silhouette-to-frame ratio, so a single
   inset% doesn't fit all. Two groups cover all outliers cleanly:
   · MERCH / CATERING / CONTENT — ::before protruded beyond planet edge → more inset
   · SCREENS / STAND / STAFF   — ::before too small inside planet     → less inset */
#peSecondRight .pe-orb-materials::before,
#peSecondRight .pe-orb-bar::before {
  inset: 17% !important;
}

#peSecondRight .pe-orb-motion::before {
  inset: 12% !important;
}

#peSecondRight .pe-orb-staff::before {
  inset: 9% !important;
}

#peSecondRight .pe-orb-led::before,
#peSecondRight .pe-orb-ideas::before {
  inset: 7% !important;
  transform: translate(3px, 3px) scale(1) !important;
  z-index: 3 !important;
}

#peSecondRight .pe-orb-vr::before {
  transform: translate(1px, 1px) scale(1) !important;
}

#peSecondRight .pe-orb-motion::before {
  inset: 13% !important;
  z-index: 3 !important;
  transform: translate(1px, -1px) scale(1) !important;
}

#peSecondRight .pe-orb-bar::before {
  inset: 17% !important;
  z-index: 3 !important;
  transform: translate(0, -2px) scale(1) !important;
}

#peSecondRight .pe-orb-materials::before {
  inset: 18% !important;
  z-index: 3 !important;
  transform: translate(-1px, -1px) scale(1) !important;
}

#peSecondRight .pe-orb-led::before {
  inset: 7% !important;
  z-index: 3 !important;
  transform: translate(0px, 0) scale(1) !important;
}

/* ── ::after — темная тень на самой планете ─────────────────────────────── */
#peSecondRight .pe-orb-sphere::after {
  content: '' !important;
  display: block !important;
  position: absolute !important;

  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;

  transform: none !important;
  border-radius: 50% !important;
  pointer-events: none !important;

  z-index: 2 !important;
  opacity: 1 !important;
  mix-blend-mode: normal !important;

  box-shadow: none !important;
  filter: none !important;

  transition: opacity 0.35s ease !important;
}

/* При hover тень убирается, чтобы планета светилась */
#peSecondRight .pe-orb-sphere:hover::after,
body.is-popup-active #peSecondRight .pe-orb-sphere.is-playing-video::after {
  opacity: 0 !important;
}

/* STAND */
#peSecondRight .pe-orb-ideas::after {
  top: 7% !important;
  left: 7% !important;
  right: 7% !important;
  bottom: 7% !important;
  width: auto !important;
  height: auto !important;
  transform: translate(3px, 3px) scale(1) !important;

  background: radial-gradient(
    circle at 50% 82%,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.74) 48%,
    #000 100%
  ) !important;
}

/* ACTIVATION */
#peSecondRight .pe-orb-vr::after {
  top: 8% !important;
  left: 8% !important;
  right: 8% !important;
  bottom: 8% !important;
  width: auto !important;
  height: auto !important;
  transform: translate(1px, 0px) scale(0.96) !important;

  background: radial-gradient(
    circle at 50% 82%,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.74) 48%,
    #000 100%
  ) !important;
}

/* STAFF */
#peSecondRight .pe-orb-staff::after {
  top: 7% !important;
  left: 7% !important;
  right: 7% !important;
  bottom: 7% !important;
  width: auto !important;
  height: auto !important;
  transform: translate(2px, -2px) scale(0.98) !important;

  background: radial-gradient(
    circle at 24% 76%,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.74) 48%,
    #000 100%
  ) !important;
}

/* SCREENS */
#peSecondRight .pe-orb-led::after {
  top: 7% !important;
  left: 7% !important;
  right: 7% !important;
  bottom: 7% !important;
  width: auto !important;
  height: auto !important;
  transform: translate(-1px, 0) scale(1) !important;

  background: radial-gradient(
    circle at 18% 50%,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.74) 48%,
    #000 100%
  ) !important;
}

/* MERCH */
#peSecondRight .pe-orb-materials::after {
  top: 18% !important;
  left: 18% !important;
  right: 18% !important;
  bottom: 18% !important;
  width: auto !important;
  height: auto !important;
  transform: translate(0px, 0px) scale(1) !important;

  background: radial-gradient(
    circle at 24% 24%,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.74) 48%,
    #000 100%
  ) !important;
}

/* CONTENT */
#peSecondRight .pe-orb-motion::after {
  top: 13% !important;
  left: 13% !important;
  right: 13% !important;
  bottom: 13% !important;
  width: auto !important;
  height: auto !important;
  transform: translate(0px, 0px) scale(1) !important;

  background: radial-gradient(
    circle at 76% 24%,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.74) 48%,
    #000 100%
  ) !important;
}

/* CATERING */
#peSecondRight .pe-orb-bar::after {
  top: 17% !important;
  left: 17% !important;
  right: 17% !important;
  bottom: 17% !important;
  width: auto !important;
  height: auto !important;
  transform: translate(0px, -2px) scale(1) !important;

  background: radial-gradient(
    circle at 50% 18%,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.74) 48%,
    #000 100%
  ) !important;
}

/* SUPPORT */
#peSecondRight .pe-orb-activation::after {
  top: 9% !important;
  left: 9% !important;
  right: 9% !important;
  bottom: 9% !important;
  width: auto !important;
  height: auto !important;
  transform: translate(1px, 0) scale(1) !important;

  background: radial-gradient(
    circle at 82% 50%,
    transparent 0%,
    transparent 18%,
    rgba(0, 0, 0, 0.74) 48%,
    #000 100%
  ) !important;
}
`],[`home-patch-planets-responsive`,`/* ═══════════════════════════════════════════════════════════════════════════
   Patch 95 — Planet section responsive: mobile sickle arc + tablet
   vertical orbit.

   Mobile  ≤768px : STAND as hero planet, 7 others in rightward sickle arc.
                    No sun title, no corona, no labels, no subtitle.
                    pe-second flows as a separate block below the hero.
   Tablet 769–991px : Vertical ellipse orbit (taller than wide),
                      reduced planet sizes, correct center-anchoring.
   Desktop ≥992px  : Untouched — all existing desktop rules remain.

   Cascade notes (all !important-aware):
   · patch-14 (\`14-perfect-event-layer-isolation.css\`) uses
     \`#peSecond:not(.pe-active) .xxx { opacity:0 !important }\` with
     specificity (1,2,0). Mobile overrides must match/exceed that.
   · This patch loads LAST → same-specificity ties resolved in our favor.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────────────────────
   MOBILE — ≤ 768px
   ────────────────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  /* 1. Remove 260vh scroll driver — sections flow naturally */
  #pePinWrap.pe-pin-wrap {
    height: auto !important;
  }

  /* 2. Hero: static block. overflow:hidden keeps hero content inside.
     Height auto so pe-second (below in flow) expands the container. */
  #heroSection.hero,
  .pe-pin-wrap .hero {
    position: relative !important;
    height: auto !important;
    min-height: 100svh !important;
    overflow: hidden !important;
  }

  /* Separator line — matches hero's vertical border (rgba 0.1 white).
     Placed on heroSection bottom so it appears between planets and WHY CHOOSE US. */
  #heroSection.hero {
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1) !important;
  }

  /* 3. Planet section: flows as a separate block immediately below hero.
     padding-top: 56px clears the nav bar (≈56px) without wasting vertical space.
     CSS !important overrides JS inline styles from all classic scripts. */
  #peSecond.pe-second {
    position: relative !important;
    inset: auto !important;
    display: block !important;
    width: 100% !important;
    height: auto !important;
    min-height: 0 !important;
    padding-top: 56px !important;
    padding-bottom: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    background: #020d1a !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    transform: none !important;
    z-index: 2 !important;
    overflow: visible !important;
  }

  /* Reduce padding further when planet section is active and scrolled into view */
  #peSecond.pe-second.pe-active,
  #peSecond.pe-second.is-centered-sun {
    padding-top: 48px !important;
  }

  /* Disable viewport-fill solar corona pseudo-elements on mobile */
  #peSecond::before,
  #peSecond::after {
    display: none !important;
    content: none !important;
  }

  /* 4. Left spacer: unused on mobile */
  #peSecondLeft,
  .pe-second-left {
    display: none !important;
  }

  /* 5. Planet container: fills pe-second, explicit height so %-positions resolve */
  #peSecondRight,
  .pe-second-right {
    position: relative !important;
    width: 100% !important;
    height: 95svh !important;
    min-height: 520px !important;
    left: auto !important;
    top: auto !important;
    transform: none !important;
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    overflow: visible !important;
  }

  /* ── Override patch-14 layer-isolation :not(.pe-active) rules ─────────────
     patch-14 targets: #peSecond:not(.pe-active) .xxx { opacity:0 !important }
     Specificity: (1,2,0). Must match to win by source order (this patch loads later).
     ────────────────────────────────────────────────────────────────────────── */
  #peSecond:not(.pe-active) .pe-second-right,
  #peSecond.pe-second .pe-second-right {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }

  #peSecond:not(.pe-active) .pe-orb-sphere,
  #peSecond.pe-second .pe-orb-sphere {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }

  /* 6. Hide sun title — use two-ID specificity (2,0,0) to beat all cascade */
  #peSecond #peOrbTitle,
  #peSecond .pe-orb-title {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }

  /* 7. Hide subtitle — same high-specificity approach */
  #peSecond #peOrbSubtitle,
  #peSecond .pe-orb-subtitle-bottom {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }

  /* Also suppress JS-added inline subtitle from layer-isolation at pe-active */
  #peSecond:not(.pe-active) #peOrbSubtitle,
  #peSecond.pe-active #peOrbSubtitle,
  #peSecond.pe-active .pe-orb-subtitle-bottom {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
  }

  /* 8. Hide solar flare */
  #peSecond .pe-solar-flare,
  .pe-solar-flare {
    display: none !important;
    opacity: 0 !important;
  }

  /* 9. All spheres: absolute, center-anchored.
     CSS !important overrides JS inline \`transform: translate3d(0,0,0) scale(1)\`.
     Both :not(.pe-active) and .pe-active states handled here. */
  #peSecond:not(.pe-active) .pe-orb-sphere,
  #peSecond.pe-active .pe-orb-sphere,
  .pe-orb-sphere {
    position: absolute !important;
    transform: translate(-50%, -50%) !important;
    opacity: 1 !important;
    visibility: visible !important;
    filter: none !important;
    margin-bottom: 0 !important;
    /* Smooth transitions for the auto-cycle glow effect */
    transition:
      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
      filter 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  /* Video: smooth grayscale crossfade on cycle */
  .pe-orb-sphere .pe-orb-video {
    transition: filter 0.5s ease !important;
  }

  /* ── AUTO-CYCLE GLOW — class added by 36-mobile-planet-cycle.js ───────────
     Mimics the popup-active / hover effect: scale + colored drop-shadow.
     Specificity (0,2,0) > base (0,1,0) so it wins over filter:none above.
     ─────────────────────────────────────────────────────────────────────── */
  .pe-orb-sphere.is-mobile-focus {
    transform: translate(-50%, -50%) scale(1.08) !important;
    filter: drop-shadow(0 0 20px var(--planet-glow)) drop-shadow(0 0 40px var(--planet-glow)) !important;
    z-index: 10 !important;
  }
  .pe-orb-sphere.is-mobile-focus .pe-orb-video {
    filter: grayscale(0) !important;
  }
  .pe-orb-sphere.is-mobile-focus .pe-label-text {
    color: rgba(255, 255, 255, 0.92) !important;
    transition: color 0.5s ease !important;
  }

  /* 10. Labels — show planet names, positioned left or right of sphere.
     Specificity uses #peSecondRight prefix to beat existing transforms from
     patch-112 (0,2,0) and patch-94 (1,2,0). Our (1,3,0) wins. */
  #peSecondRight .pe-orb-sphere .pe-sphere-label {
    display: flex !important;
    flex-direction: column !important;
    position: absolute !important;
    bottom: auto !important;
    white-space: nowrap !important;
    pointer-events: none !important;
    align-items: flex-start !important;
    gap: 0 !important;
  }

  /* Hide the circular play icon inside label — sphere itself has the triangle */
  #peSecondRight .pe-orb-sphere .pe-sphere-label .pe-play-icon {
    display: none !important;
  }

  /* Label text sizing on mobile */
  #peSecondRight .pe-orb-sphere .pe-sphere-label .pe-label-text {
    font-size: clamp(10px, 2.4vw, 13px) !important;
    letter-spacing: 0.14em !important;
    color: rgba(255, 255, 255, 0.42) !important;
    transition: color 0.5s ease !important;
    text-transform: uppercase !important;
  }

  /* ── LABEL SIDES: RIGHT for planets 1-3 and 7-8 in sickle order ───────────
     STAND, ACTIVATION, STAFF, CONTENT, SUPPORT → label to the RIGHT.
     Selector specificity: (1,3,0) beats patch-112/94 rules. */
  #peSecondRight .pe-orb-ideas .pe-sphere-label,
  #peSecondRight .pe-orb-vr .pe-sphere-label,
  #peSecondRight .pe-orb-staff .pe-sphere-label,
  #peSecondRight .pe-orb-motion .pe-sphere-label,
  #peSecondRight .pe-orb-activation .pe-sphere-label {
    top: 50% !important;
    left: calc(100% + 10px) !important;
    right: auto !important;
    transform: translateY(-50%) !important;
    text-align: left !important;
    align-items: flex-start !important;
  }

  /* ── LABEL SIDES: LEFT for planets 4-6 in sickle order ─────────────────────
     SCREENS, MERCH, CATERING → label to the LEFT. */
  #peSecondRight .pe-orb-led .pe-sphere-label,
  #peSecondRight .pe-orb-materials .pe-sphere-label,
  #peSecondRight .pe-orb-bar .pe-sphere-label {
    top: 50% !important;
    left: auto !important;
    right: calc(100% + 10px) !important;
    transform: translateY(-50%) !important;
    text-align: right !important;
    align-items: flex-end !important;
  }

  /* ── SICKLE ARC POSITIONS (+10% sizes) ────────────────────────────────────
     Origin: top-left of pe-second-right (100% × 95svh + 72px top padding).
     All top/left = CENTER; translate(-50%,-50%) centers each sphere.
     ────────────────────────────────────────────────────────────────────────── */

  /* ── SICKLE ARC POSITIONS (+10% sizes, +2-3% vertical spacing) ─────────────
     Extra spacing ("трішки місця") added: each step increased 2-3%.
     Slight overlap still intentional (sickle effect), just more breathing room.
     ────────────────────────────────────────────────────────────────────────── */

  /* STAND — largest, anchors arc. label RIGHT */
  .pe-orb-ideas {
    width: clamp(154px, 44vw, 205px) !important;
    height: clamp(154px, 44vw, 205px) !important;
    top: 12% !important;
    left: 38% !important;
  }

  /* ACTIVATION — first arc planet. label RIGHT */
  .pe-orb-vr {
    width: clamp(70px, 20vw, 92px) !important;
    height: clamp(70px, 20vw, 92px) !important;
    top: 28% !important;
    left: 50% !important;
  }

  /* STAFF — arc bows right. label RIGHT */
  .pe-orb-staff {
    width: clamp(79px, 22vw, 101px) !important;
    height: clamp(79px, 22vw, 101px) !important;
    top: 38% !important;
    left: 60% !important;
  }

  /* SCREENS — further right. label LEFT */
  .pe-orb-led {
    width: clamp(66px, 19vw, 86px) !important;
    height: clamp(66px, 19vw, 86px) !important;
    top: 47% !important;
    left: 67% !important;
  }

  /* MERCH — rightmost. label LEFT */
  .pe-orb-materials {
    width: clamp(79px, 22vw, 101px) !important;
    height: clamp(79px, 22vw, 101px) !important;
    top: 56% !important;
    left: 70% !important;
  }

  /* CATERING — arc returns left. label LEFT */
  .pe-orb-bar {
    width: clamp(64px, 18vw, 81px) !important;
    height: clamp(64px, 18vw, 81px) !important;
    top: 65% !important;
    left: 65% !important;
  }

  /* CONTENT — back toward center. label RIGHT */
  .pe-orb-motion {
    width: clamp(73px, 20vw, 92px) !important;
    height: clamp(73px, 20vw, 92px) !important;
    top: 74% !important;
    left: 57% !important;
  }

  /* SUPPORT — arc closes near center-bottom. label RIGHT */
  .pe-orb-activation {
    width: clamp(73px, 20vw, 92px) !important;
    height: clamp(73px, 20vw, 92px) !important;
    top: 83% !important;
    left: 46% !important;
  }

  /* Hover lift — keeps desktop behavior on mobile touch long-press */
  #peSecondRight .pe-orb-sphere:hover,
  #peSecondRight .pe-orb-sphere:focus-visible {
    transform: translate3d(-50%, calc(-50% - 4px), 0) !important;
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   TABLET — 769px–991px  (vertical ellipse orbit, full-width container)

   Root issue: patch-39 makes pe-second position:relative, which places it
   inside the hero's CSS grid cell (~50% wide), so pe-second-right is only
   ~310px wide instead of the full 738px needed for the orbit.

   Fix: keep pe-second as position:absolute (like desktop), positioned at
   top:100svh — the planet section "slides in" from below as the user scrolls.
   HeroSection min-height:200svh creates the scroll space. pe-second-right
   then spans the full viewport width and the orbit displays correctly.

   Ellipse: center (50%, 50%), semi-axes a=28% H × b=40% V.
   8 planets at 45° steps (θ CCW from right). Center-anchored positions.
   ────────────────────────────────────────────────────────────────────────── */
@media (min-width: 769px) and (max-width: 991px) {
  /* Give heroSection room for hero (100svh) + planet section (100svh).
     Must beat patch-13's \`.pe-pin-wrap #heroSection.hero\` (specificity 1,2,0)
     so we use \`.pe-pin-wrap\` prefix to match that specificity, then load order wins.
     grid-template-rows: 100svh fixes row to one screen height so hero-left/right
     do not stretch into the pe-second space (200svh minus explicit row). */
  .pe-pin-wrap #heroSection.hero,
  #heroSection.hero {
    min-height: 200svh !important;
    height: auto !important;
    overflow: hidden !important;
    grid-template-rows: 100svh !important;
    align-content: start !important;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1) !important;
  }

  /* Pe-second: absolute block positioned in the second screen below hero */
  #peSecond.pe-second {
    position: absolute !important;
    top: 100svh !important;
    left: 0 !important;
    right: 0 !important;
    bottom: auto !important;
    width: 100% !important;
    height: 100svh !important;
    min-height: 640px !important;
    padding: 0 !important;
    background: #020d1a !important;
    z-index: 8 !important;
    isolation: isolate !important;
    overflow: visible !important;
  }

  /* Pe-second-right: absolutely centered in full-width pe-second.
     position:absolute + left/top 50% + translate(-50%,-50%) is the canonical
     centering technique — unambiguous regardless of flow position. */
  #peSecondRight,
  .pe-second-right {
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    width: 90% !important;
    max-width: 860px !important;
    height: 72svh !important;
    min-height: 480px !important;
    transform: translate(-50%, -50%) !important;
    display: block !important;
    overflow: visible !important;
  }

  /* Center-anchored transform for all spheres */
  .pe-orb-sphere {
    transform: translate(-50%, -50%) !important;
  }

  /* ── VERTICAL ELLIPSE POSITIONS ─────────────────────────────────────────
     All center-anchored. Containing block = pe-second-right (~738px × ~72svh).
     ─────────────────────────────────────────────────────────────────────── */

  /* STAND — θ=225° → top-left  (x=30%, y=22%) */
  .pe-orb-ideas {
    top: 22% !important;
    left: 30% !important;
    width: clamp(115px, 13vw, 172px) !important;
    height: clamp(115px, 13vw, 172px) !important;
  }
  .pe-orb-ideas .pe-sphere-label {
    top: calc(100% + 12px) !important;
  }

  /* ACTIVATION — θ=270° → top-center  (x=50%, y=10%) */
  .pe-orb-vr {
    top: 10% !important;
    left: 50% !important;
    width: clamp(64px, 7.2vw, 92px) !important;
    height: clamp(64px, 7.2vw, 92px) !important;
  }

  /* STAFF — θ=315° → top-right  (x=70%, y=22%) */
  .pe-orb-staff {
    top: 22% !important;
    left: 70% !important;
    width: clamp(92px, 10.5vw, 135px) !important;
    height: clamp(92px, 10.5vw, 135px) !important;
  }

  /* SCREENS — θ=0° → right-center  (x=78%, y=50%) */
  .pe-orb-led {
    top: 50% !important;
    left: 78% !important;
    width: clamp(66px, 7.8vw, 100px) !important;
    height: clamp(66px, 7.8vw, 100px) !important;
  }

  /* MERCH — θ=45° → bottom-right  (x=70%, y=78%) */
  .pe-orb-materials {
    top: 78% !important;
    left: 70% !important;
    width: clamp(100px, 11.5vw, 148px) !important;
    height: clamp(100px, 11.5vw, 148px) !important;
  }

  /* CATERING — θ=90° → bottom-center  (x=50%, y=90%) */
  .pe-orb-bar {
    top: 90% !important;
    left: 50% !important;
    width: clamp(60px, 7vw, 88px) !important;
    height: clamp(60px, 7vw, 88px) !important;
  }

  /* CONTENT — θ=135° → bottom-left  (x=30%, y=78%) */
  .pe-orb-motion {
    top: 78% !important;
    left: 30% !important;
    width: clamp(78px, 9.5vw, 122px) !important;
    height: clamp(78px, 9.5vw, 122px) !important;
  }

  /* SUPPORT — θ=180° → left-center  (x=22%, y=50%) */
  .pe-orb-activation {
    top: 50% !important;
    left: 22% !important;
    width: clamp(90px, 10.5vw, 135px) !important;
    height: clamp(90px, 10.5vw, 135px) !important;
  }

  /* Solar flare: matches STAND position (30%, 22%), scaled down for tablet */
  .pe-solar-flare {
    top: 22% !important;
    left: 30% !important;
    width: 28% !important;
  }

  /* Sun title: slightly smaller for tablet viewport */
  #peOrbTitle,
  .pe-orb-title {
    font-size: clamp(26px, 4vw, 50px) !important;
  }

  /* Label text: tighter on tablet */
  .pe-orb-sphere .pe-label-text {
    font-size: clamp(10px, 1.1vw, 14px) !important;
  }

  /* ── COMET TRAJECTORY FIX — tablet portrait aspect ratio ──────────────────
     Desktop keyframes use angles calibrated for 1440×900 (landscape).
     On tablet portrait 820×1180 the actual travel direction is much steeper:
       LTR1: Δx=1091px, Δy=1581px → atan2 ≈ 55°  (was 27°)
       LTR2: Δx=722px,  Δy=1487px → atan2 ≈ 64°  (was 41°)
       LTR3: Δx=484px,  Δy=1534px → atan2 ≈ 72°  (was 54°)
     RTL = 180° – LTR angle.
     New keyframes override animation-name for tablet only.
     ────────────────────────────────────────────────────────────────────────── */
  @keyframes peCometLTR1Tab {
    0% {
      opacity: 0;
      transform: translate(-18vw, -28vh) rotate(55deg);
    }
    5% {
      opacity: 1;
    }
    88% {
      opacity: 0.52;
    }
    100% {
      opacity: 0;
      transform: translate(115vw, 106vh) rotate(55deg);
    }
  }
  @keyframes peCometLTR2Tab {
    0% {
      opacity: 0;
      transform: translate(-8vw, -28vh) rotate(64deg);
    }
    5% {
      opacity: 1;
    }
    88% {
      opacity: 0.48;
    }
    100% {
      opacity: 0;
      transform: translate(80vw, 98vh) rotate(64deg);
    }
  }
  @keyframes peCometLTR3Tab {
    0% {
      opacity: 0;
      transform: translate(15vw, -30vh) rotate(72deg);
    }
    5% {
      opacity: 1;
    }
    88% {
      opacity: 0.48;
    }
    100% {
      opacity: 0;
      transform: translate(74vw, 100vh) rotate(72deg);
    }
  }
  @keyframes peCometRTL1Tab {
    0% {
      opacity: 0;
      transform: translate(115vw, -28vh) rotate(125deg);
    }
    5% {
      opacity: 1;
    }
    88% {
      opacity: 0.52;
    }
    100% {
      opacity: 0;
      transform: translate(-18vw, 106vh) rotate(125deg);
    }
  }
  @keyframes peCometRTL2Tab {
    0% {
      opacity: 0;
      transform: translate(92vw, -28vh) rotate(116deg);
    }
    5% {
      opacity: 1;
    }
    88% {
      opacity: 0.48;
    }
    100% {
      opacity: 0;
      transform: translate(20vw, 98vh) rotate(116deg);
    }
  }
  @keyframes peCometRTL3Tab {
    0% {
      opacity: 0;
      transform: translate(78vw, -30vh) rotate(108deg);
    }
    5% {
      opacity: 1;
    }
    88% {
      opacity: 0.48;
    }
    100% {
      opacity: 0;
      transform: translate(26vw, 100vh) rotate(108deg);
    }
  }

  .pe-comet-ltr1 {
    animation-name: peCometLTR1Tab !important;
  }
  .pe-comet-ltr2 {
    animation-name: peCometLTR2Tab !important;
  }
  .pe-comet-ltr3 {
    animation-name: peCometLTR3Tab !important;
  }
  .pe-comet-rtl1 {
    animation-name: peCometRTL1Tab !important;
  }
  .pe-comet-rtl2 {
    animation-name: peCometRTL2Tab !important;
  }
  .pe-comet-rtl3 {
    animation-name: peCometRTL3Tab !important;
  }
}
`]];export{e as legacyPatchStyleBlocks};