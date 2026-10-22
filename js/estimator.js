/* ==========================================================================
   REACH ORION - INTERACTIVE PROJECT SCOPE & BUDGET ESTIMATOR
   Calculates realistic project investment, timeline, deliverables, and tech stack
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initEstimatorWidget();
});

function initEstimatorWidget() {
  const widget = document.getElementById('project-estimator');
  if (!widget) return;

  // State
  const state = {
    projectType: 'headless-cms', // 'headless-cms', 'saas-portal', 'design-system', 'full-rebuild'
    timeline: 'standard',        // 'express', 'standard', 'comprehensive'
    capabilities: new Set(['seo', 'cms']), // 'seo', 'cms', 'custom-animations', 'i18n', 'crm', 'compliance'
    pagesCount: 15
  };

  // Base pricing models
  const TYPE_CONFIG = {
    'headless-cms': {
      baseMin: 14000,
      baseMax: 20000,
      baseWeeks: '6–8 weeks',
      name: 'Headless CMS Architecture',
      stack: 'Next.js 14 + Sanity Studio + Vercel'
    },
    'saas-portal': {
      baseMin: 18000,
      baseMax: 26000,
      baseWeeks: '8–10 weeks',
      name: 'B2B SaaS Web & Product Platform',
      stack: 'Next.js + TypeScript + Supabase + Tailwind'
    },
    'design-system': {
      baseMin: 12000,
      baseMax: 18000,
      baseWeeks: '5–7 weeks',
      name: 'Enterprise Design System & Tokens',
      stack: 'React + Storybook + Figma Tokens + CSS'
    },
    'full-rebuild': {
      baseMin: 28000,
      baseMax: 42000,
      baseWeeks: '12–16 weeks',
      name: 'Full Enterprise Rebrand & Web Suite',
      stack: 'Next.js + Headless CMS + Global CDN + CI/CD'
    }
  };

  const TIMELINE_MULTIPLIER = {
    'express': { mult: 1.25, label: 'Express Delivery (Priority)' },
    'standard': { mult: 1.0, label: 'Standard Cadence (Optimal)' },
    'comprehensive': { mult: 1.1, label: 'Enterprise Multi-Phase' }
  };

  const CAPABILITY_ADDONS = {
    'seo': { min: 1800, max: 2800, name: '100/100 Core Web Vitals & SEO' },
    'cms': { min: 2500, max: 4000, name: 'Custom Visual CMS Studio' },
    'custom-animations': { min: 2000, max: 3500, name: 'Interactive Micro-animations' },
    'i18n': { min: 3200, max: 5000, name: 'Multi-Region Localization (i18n)' },
    'crm': { min: 1500, max: 2500, name: 'HubSpot / Salesforce Sync' },
    'compliance': { min: 2200, max: 3800, name: 'SOC2 & WCAG AAA Accessibility' }
  };

  // Select project type buttons
  const typeButtons = widget.querySelectorAll('[data-estimator-type]');
  typeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      typeButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.projectType = btn.getAttribute('data-estimator-type');
      updateCalculations();
    });
  });

  // Select timeline buttons
  const timelineButtons = widget.querySelectorAll('[data-estimator-timeline]');
  timelineButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      timelineButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.timeline = btn.getAttribute('data-estimator-timeline');
      updateCalculations();
    });
  });

  // Capabilities checkboxes
  const featureCheckboxes = widget.querySelectorAll('input[type="checkbox"][data-estimator-cap]');
  featureCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const parentPill = cb.closest('.checkbox-pill');
      const capKey = cb.getAttribute('data-estimator-cap');
      if (cb.checked) {
        state.capabilities.add(capKey);
        if (parentPill) parentPill.classList.add('checked');
      } else {
        state.capabilities.delete(capKey);
        if (parentPill) parentPill.classList.remove('checked');
      }
      updateCalculations();
    });
  });

  // Calculate & update display
  function updateCalculations() {
    const typeInfo = TYPE_CONFIG[state.projectType] || TYPE_CONFIG['headless-cms'];
    const timeInfo = TIMELINE_MULTIPLIER[state.timeline] || TIMELINE_MULTIPLIER['standard'];

    let minPrice = typeInfo.baseMin;
    let maxPrice = typeInfo.baseMax;

    // Add capabilities
    state.capabilities.forEach(capKey => {
      if (CAPABILITY_ADDONS[capKey]) {
        minPrice += CAPABILITY_ADDONS[capKey].min;
        maxPrice += CAPABILITY_ADDONS[capKey].max;
      }
    });

    // Apply timeline factor
    minPrice = Math.round((minPrice * timeInfo.mult) / 500) * 500;
    maxPrice = Math.round((maxPrice * timeInfo.mult) / 500) * 500;

    // Format currency
    const formatCurrency = (num) => '$' + num.toLocaleString();

    // DOM updates
    const priceDisplay = widget.querySelector('#est-price-display');
    const timelineDisplay = widget.querySelector('#est-timeline-display');
    const typeDisplay = widget.querySelector('#est-type-display');
    const stackDisplay = widget.querySelector('#est-stack-display');
    const deliverableCountDisplay = widget.querySelector('#est-deliv-count');

    if (priceDisplay) {
      priceDisplay.textContent = `${formatCurrency(minPrice)} – ${formatCurrency(maxPrice)}`;
    }
    if (timelineDisplay) {
      timelineDisplay.textContent = typeInfo.baseWeeks;
    }
    if (typeDisplay) {
      typeDisplay.textContent = typeInfo.name;
    }
    if (stackDisplay) {
      stackDisplay.textContent = typeInfo.stack;
    }
    if (deliverableCountDisplay) {
      deliverableCountDisplay.textContent = `${state.capabilities.size + 3} core modules`;
    }

    // Update CTA link button with current parameters
    const applyCta = widget.querySelector('#apply-estimator-cta');
    if (applyCta) {
      const capsArray = Array.from(state.capabilities).join(',');
      const queryParams = new URLSearchParams({
        type: state.projectType,
        timeline: state.timeline,
        estimate: `${formatCurrency(minPrice)}-${formatCurrency(maxPrice)}`,
        caps: capsArray
      });
      applyCta.href = `contact.html?${queryParams.toString()}#inquiry-form`;
    }
  }

  // Initial calculation run
  updateCalculations();
}

// In contact.html, check if URL has estimator parameters and auto-fill
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('inquiry-form');
  if (!contactForm) return;

  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const estimate = params.get('estimate');
  const timeline = params.get('timeline');
  const caps = params.get('caps');

  if (type || estimate) {
    const scopeBanner = document.getElementById('estimator-attached-banner');
    const scopeDetailsText = document.getElementById('attached-scope-text');
    const projectTypeSelect = document.getElementById('contact-project-type');
    const budgetSelect = document.getElementById('contact-budget');
    const briefTextarea = document.getElementById('contact-brief');

    if (scopeBanner) scopeBanner.style.display = 'block';

    if (scopeDetailsText && estimate) {
      scopeDetailsText.textContent = `Estimated Investment: ${estimate} | Tier: ${type || 'Headless CMS'}`;
    }

    if (projectTypeSelect && type) {
      projectTypeSelect.value = type;
    }

    if (budgetSelect && estimate) {
      // Find closest matching budget tier
      budgetSelect.value = 'tier-custom';
    }

    if (briefTextarea && !briefTextarea.value && caps) {
      const capsList = caps.split(',').join(', ');
      briefTextarea.value = `Selected Scope Capabilities: ${capsList}.\nEstimated project investment range: ${estimate}.\nTarget timeline: ${timeline || 'standard'}.`;
    }

    if (window.showToast) {
      window.showToast('Scope & Budget parameters imported from Estimator!', 'info');
    }
  }

  // Form submit simulated handler
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Inquiry...';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Inquiry';
      }
      contactForm.reset();
      
      const successModal = document.getElementById('contact-success-dialog');
      if (successModal) {
        successModal.showModal();
      } else if (window.showToast) {
        window.showToast('Thank you! Our engineering director will review your inquiry within 24 business hours.', 'success');
      }
    }, 800);
  });
});
