/* ==========================================================================
   REACH ORION - MAIN GLOBAL SCRIPT
   Handles Navigation, Modal Drawers, Hash Routing, and Micro-interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initCaseStudyDrawer();
  checkUrlHashForModal();
});

/* Sticky Header on scroll */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  // Close when clicking a link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });
}

/* Case Study Slide-Over Drawer Controller */
function initCaseStudyDrawer() {
  const dialog = document.getElementById('case-study-drawer');
  if (!dialog) return;

  const closeBtn = dialog.querySelector('.drawer-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeDrawer());
  }

  // Backdrop click closes dialog
  dialog.addEventListener('click', (e) => {
    const container = dialog.querySelector('.drawer-container');
    if (container && !container.contains(e.target)) {
      closeDrawer();
    }
  });

  // Handle escape key
  dialog.addEventListener('cancel', () => {
    closeDrawer();
  });

  // Attach click listener for any element with data-open-case
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-case]');
    if (trigger) {
      e.preventDefault();
      const caseId = trigger.getAttribute('data-open-case');
      openCaseStudyDrawer(caseId);
    }
  });
}

function openCaseStudyDrawer(caseId) {
  const dialog = document.getElementById('case-study-drawer');
  if (!dialog || typeof CASE_STUDIES === 'undefined') return;

  const item = CASE_STUDIES.find(c => c.id === caseId);
  if (!item) return;

  // Populate drawer content
  const titleEl = dialog.querySelector('#drawer-title');
  const catEl = dialog.querySelector('#drawer-category');
  const clientEl = dialog.querySelector('#drawer-client');
  const imgEl = dialog.querySelector('#drawer-hero-img');
  const summaryEl = dialog.querySelector('#drawer-summary');
  const challengeEl = dialog.querySelector('#drawer-challenge');
  const solutionEl = dialog.querySelector('#drawer-solution');
  const metricsStrip = dialog.querySelector('#drawer-metrics-strip');
  const techStackEl = dialog.querySelector('#drawer-tech-stack');
  const quoteTextEl = dialog.querySelector('#drawer-quote-text');
  const quoteAuthorEl = dialog.querySelector('#drawer-quote-author');

  if (titleEl) titleEl.textContent = item.title;
  if (catEl) catEl.textContent = item.categoryLabel;
  if (clientEl) clientEl.textContent = item.client;
  if (imgEl) {
    imgEl.src = item.heroImage;
    imgEl.alt = item.title;
  }
  if (summaryEl) summaryEl.textContent = item.summary;
  if (challengeEl) challengeEl.textContent = item.challenge;
  if (solutionEl) solutionEl.textContent = item.solution;

  if (metricsStrip) {
    metricsStrip.innerHTML = item.metrics.map(m => `
      <div class="drawer-metric-col">
        <div class="drawer-metric-num">${m.value}</div>
        <div class="drawer-metric-label">${m.label}</div>
        <div style="font-size: 0.7rem; color: #888; margin-top: 2px;">Prev: ${m.before}</div>
      </div>
    `).join('');
  }

  if (techStackEl) {
    techStackEl.innerHTML = item.techStack.map(t => `
      <span class="tech-tag">${t}</span>
    `).join('');
  }

  if (quoteTextEl && item.quote) {
    quoteTextEl.textContent = `“${item.quote.text}”`;
    quoteAuthorEl.textContent = `${item.quote.author} — ${item.quote.role}`;
  }

  if (!dialog.open) {
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  }

  // Update hash without jump
  history.replaceState(null, '', `#case-${caseId}`);
}

function closeDrawer() {
  const dialog = document.getElementById('case-study-drawer');
  if (!dialog) return;

  dialog.close();
  document.body.style.overflow = '';

  // Clean URL hash
  if (window.location.hash.startsWith('#case-')) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

function checkUrlHashForModal() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#case-')) {
    const caseId = hash.replace('#case-', '');
    setTimeout(() => {
      openCaseStudyDrawer(caseId);
    }, 150);
  }
}

// Global Toast helper
window.showToast = function(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      pointer-events: none;
    `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: #1D1D1F;
    color: #FFFFFF;
    padding: 14px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    gap: 10px;
    border-left: 4px solid ${type === 'success' ? '#0F766E' : '#0071E3'};
    transform: translateY(10px);
    opacity: 0;
    transition: all 0.25s ease;
    pointer-events: auto;
  `;
  toast.innerHTML = `
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateY(10px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 250);
  }, 4000);
};
