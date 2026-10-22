/* ==========================================================================
   REACH ORION - INTERACTIVE CLIENT PROOF & IMPACT SHOWCASE
   Handles interactive Before/After comparison toggles and animated stat counters
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initImpactComparison();
  initMetricCounterAnimation();
});

function initImpactComparison() {
  const container = document.getElementById('interactive-impact-showcase');
  if (!container) return;

  const toggleButtons = container.querySelectorAll('.comparison-toggle-btn');
  const panels = container.querySelectorAll('.comparison-panel');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target-panel');

      // Update button state
      toggleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update panel visibility
      panels.forEach(p => {
        if (p.id === targetId) {
          p.style.display = 'grid';
          p.classList.add('fade-in');
        } else {
          p.style.display = 'none';
          p.classList.remove('fade-in');
        }
      });
    });
  });
}

function initMetricCounterAnimation() {
  const statNumbers = document.querySelectorAll('.animate-stat');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(stat => observer.observe(stat));
}

function animateValue(el) {
  const targetStr = el.getAttribute('data-target-val');
  if (!targetStr) return;

  // Extract prefix, suffix, and numerical value
  const numMatch = targetStr.match(/[\d.]+/);
  if (!numMatch) return;

  const targetNum = parseFloat(numMatch[0]);
  const prefix = targetStr.substring(0, targetStr.indexOf(numMatch[0]));
  const suffix = targetStr.substring(targetStr.indexOf(numMatch[0]) + numMatch[0].length);
  const isFloat = targetStr.includes('.');

  const duration = 1200;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    const currentNum = ease * targetNum;

    el.textContent = `${prefix}${isFloat ? currentNum.toFixed(2) : Math.round(currentNum)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = targetStr;
    }
  }

  requestAnimationFrame(update);
}
