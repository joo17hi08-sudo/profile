/**
 * app.js
 * PRD Section 6.1 FR-01: 정적 데이터 렌더링 시스템 (No-DB Engine)
 *
 * portfolio-data.js 의 PORTFOLIO_DATA 객체를 읽어
 * document.createElement + 템플릿 리터럴로 카드 컴포넌트를 동적 생성.
 *
 * 의존: portfolio-data.js (전역 PORTFOLIO_DATA 상수)
 */

/* ─── 유틸: HTML 이스케이프 ─── */
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ─── 썸네일 영역 HTML 생성 ─── */
function buildThumbnail(project) {
  if (project.thumbnail) {
    return `
      <div class="project-preview-box">
        <img src="${esc(project.thumbnail)}" alt="${esc(project.thumbnailAlt || project.title)}">
      </div>`;
  }

  const p = project.thumbnailPlaceholder;
  if (p) {
    return `
      <div class="project-preview-box"
           style="display:flex;align-items:center;justify-content:center;
                  background:linear-gradient(135deg,#1E293B,#0F172A);">
        <div style="text-align:center;padding:1.5rem;">
          <i class="${esc(p.icon)}"
             style="font-size:3rem;color:#6366F1;margin-bottom:0.75rem;"></i>
          <div style="font-family:var(--font-heading);font-weight:800;
                      font-size:1.1rem;color:#F8FAFC;">${esc(p.title)}</div>
          <div style="font-size:0.75rem;color:#94A3B8;margin-top:0.25rem;">
            ${esc(p.subtitle)}
          </div>
        </div>
      </div>`;
  }

  return '<div class="project-preview-box"></div>';
}

/* ─── 하이라이트 목록 HTML 생성 ─── */
function buildHighlights(highlights) {
  return highlights
    .map(item => `<li>${esc(item)}</li>`)
    .join('\n');
}

/* ─── 태그 배지 HTML 생성 ─── */
function buildTags(tags) {
  return tags
    .map(tag => `<span class="badge-pill">${esc(tag)}</span>`)
    .join('\n');
}

/* ─── 푸터 액션 버튼 HTML 생성 ─── */
function buildFooter(project) {
  let pdfBtn = '';
  if (project.pdfPath) {
    pdfBtn = `
      <a href="${esc(project.pdfPath)}" target="_blank"
         onclick="event.stopPropagation();"
         class="btn btn-secondary btn-sm">
        <i class="fa-solid fa-file-lines"></i> PDF 기획안
      </a>`;
  } else {
    pdfBtn = `<span class="badge badge-pill">DB 없는 순수 클라이언트 앱</span>`;
  }

  return `
    <div class="project-footer">
      <span style="font-size:0.8rem;font-weight:700;color:${esc(project.footerColor)};">
        ${esc(project.footerLabel)}
        <i class="${esc(project.footerIcon)}"></i>
      </span>
      ${pdfBtn}
    </div>`;
}

/* ─── 프로젝트 카드 <article> DOM 엘리먼트 생성 ─── */
function createProjectCard(project) {
  const article = document.createElement('article');
  article.className = 'project-card glass-panel card-interactive';
  article.setAttribute('data-id',       project.id);
  article.setAttribute('data-category', project.category);

  // 카드 클릭 → 새 탭으로 라이브 웹 열기
  article.addEventListener('click', () => {
    window.open(project.liveWebPath, '_blank');
  });

  article.innerHTML = `
    <div>
      <!-- 카드 헤더 -->
      <div class="project-card-header">
        <span class="badge ${esc(project.badgeClass)}">
          <i class="${esc(project.badgeIcon)}"></i>
          ${esc(project.badge)}
        </span>
        <span class="badge-pill">${esc(project.period)}</span>
      </div>

      <!-- 제목 & 부제 -->
      <h4 class="project-title">${esc(project.title)}</h4>
      <p  class="project-subtitle">${esc(project.subtitle)}</p>

      <!-- 썸네일 -->
      ${buildThumbnail(project)}

      <!-- 핵심 하이라이트 -->
      <ul class="project-highlights">
        ${buildHighlights(project.highlights)}
      </ul>
    </div>

    <div>
      <!-- 태그 -->
      <div class="project-tags">
        ${buildTags(project.tags)}
      </div>

      <!-- 푸터 액션 -->
      ${buildFooter(project)}
    </div>
  `;

  return article;
}

/* ─── 프로젝트 그리드 렌더링 (메인 진입점) ─── */
function renderProjects(filterCategory = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  // 기존 카드 초기화
  grid.innerHTML = '';

  const filtered = PORTFOLIO_DATA.projects.filter(p =>
    filterCategory === 'all' || p.category === filterCategory
  );

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:2rem;">표시할 프로젝트가 없습니다.</p>';
    return;
  }

  filtered.forEach(project => {
    const card = createProjectCard(project);
    // 페이드인 효과용 미세 딜레이
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    grid.appendChild(card);

    // requestAnimationFrame으로 스무스 진입 애니메이션
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.style.transition = 'opacity 0.4s var(--ease-spring), transform 0.4s var(--ease-spring)';
        card.style.opacity    = '1';
        card.style.transform  = 'translateY(0)';
      });
    });
  });
}

/* ─── 필터 탭 바인딩 ─── */
function initFilterTabs() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });
}

/* ─── DOM 준비 후 초기화 ─── */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  initFilterTabs();
});
