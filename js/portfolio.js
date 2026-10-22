/* ==========================================================================
   REACH ORION - PORTFOLIO FILTER & SEARCH LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioGrid();
});

function initPortfolioGrid() {
  const grid = document.getElementById('portfolio-grid');
  const filterPills = document.querySelectorAll('[data-portfolio-filter]');
  const searchInput = document.getElementById('portfolio-search-input');
  const countDisplay = document.getElementById('portfolio-count-display');

  if (!grid) return;

  let currentCategory = 'all';
  let currentSearchQuery = '';

  // Render projects
  function renderProjects() {
    if (typeof CASE_STUDIES === 'undefined') return;

    const filtered = CASE_STUDIES.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const q = currentSearchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.techStack.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${CASE_STUDIES.length} projects`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #F5F5F7; border: 1px dashed #D9D9D9; border-radius: 12px;">
          <h4 style="margin-bottom: 8px;">No projects match your criteria</h4>
          <p class="text-muted" style="margin-bottom: 16px;">Try clearing filters or search terms.</p>
          <button id="reset-filters-btn" class="btn btn-secondary btn-sm">Reset Filters</button>
        </div>
      `;
      const resetBtn = grid.querySelector('#reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          currentSearchQuery = '';
          if (searchInput) searchInput.value = '';
          filterPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-portfolio-filter') === 'all'));
          renderProjects();
        });
      }
      return;
    }

    grid.innerHTML = filtered.map(item => `
      <article class="project-card" data-category="${item.category}">
        <div class="project-thumb-wrap">
          <img src="${item.heroImage}" alt="${item.title}" loading="lazy" />
          <div class="project-metric-tag">${item.metricBadge}</div>
        </div>
        <div class="project-body">
          <div class="project-meta-line">
            <span class="project-category">${item.categoryLabel}</span>
            <span style="font-size: 0.75rem; color: #666; font-weight: 600;">${item.client}</span>
          </div>
          <h3 class="project-title">${item.title}</h3>
          <p class="project-summary">${item.summary}</p>
          
          <div class="project-tech-tags">
            ${item.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="project-actions">
            <button class="btn btn-secondary btn-sm" data-open-case="${item.id}">
              <span>View Deep Dive</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <a href="case-studies.html#${item.id}" class="project-link-btn">
              <span>Full Narrative</span> &rarr;
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Filter click handlers
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-portfolio-filter');
      renderProjects();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderProjects();
    });
  }

  // Initial render
  renderProjects();
}
