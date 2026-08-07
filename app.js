/**
 * HanWha IT Service Knowledge Wiki Platform - High-Density Application Logic
 * Adheres strictly to Enterprise System Development Standards Charter
 * - Rule 3.1: Dry & Professional UI Labels
 * - Rule 3.2: No-Wrap & Flex-Shrink-0 Standard (First Column Action Button)
 * - Rule 3.4: Vertical Header-Label Layout Standard (flex-direction: column; gap: 2px)
 * - Rule 5.2: Zero Silent Failures
 */

(function () {
  'use strict';

  // State Management
  const STORAGE_KEY = 'hanwha_wiki_knowledge_base_v1';
  const HISTORY_KEY = 'hanwha_wiki_visit_history';
  
  let knowledgeStore = [];
  let fuseInstance = null;

  // View & Pagination State
  let currentViewMode = 'table'; // 'table' | 'card' | 'article'
  let currentPage = 1;
  let pageSize = 25;

  let activeFilter = {
    query: '',
    categoryLarge: '',
    categoryMedium: '',
    source: '',
    sidebarTag: '',
    sidebarCategory: 'all'
  };

  let currentArticleId = null;
  let visitHistory = [];

  // =========================================================================
  // 1. Storage & Seeding Initialization
  // =========================================================================
  function initDataStore() {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      let parsed = null;
      if (savedData) {
        try { parsed = JSON.parse(savedData); } catch (e) {}
      }

      // Automatically update if seed data has more items
      if (typeof SEED_KNOWLEDGE_DATA !== 'undefined' && Array.isArray(SEED_KNOWLEDGE_DATA)) {
        if (!parsed || parsed.length < SEED_KNOWLEDGE_DATA.length) {
          knowledgeStore = [...SEED_KNOWLEDGE_DATA];
          saveDataStore();
        } else {
          knowledgeStore = parsed;
        }
      } else if (parsed) {
        knowledgeStore = parsed;
      } else {
        knowledgeStore = [];
      }
      
      const savedHistory = localStorage.getItem(HISTORY_KEY);
      if (savedHistory) {
        visitHistory = JSON.parse(savedHistory);
      }
    } catch (err) {
      if (typeof SEED_KNOWLEDGE_DATA !== 'undefined' && Array.isArray(SEED_KNOWLEDGE_DATA)) {
        knowledgeStore = [...SEED_KNOWLEDGE_DATA];
      } else {
        knowledgeStore = [];
      }
    }

    rebuildSearchEngine();
    updateBacklinks();
  }

  function resetToSeedData() {
    if (typeof SEED_KNOWLEDGE_DATA !== 'undefined' && Array.isArray(SEED_KNOWLEDGE_DATA)) {
      if (confirm(`현재 저장소 데이터를 최신 시드 데이터(${SEED_KNOWLEDGE_DATA.length}건)로 전체 동기화하시겠습니까?`)) {
        knowledgeStore = [...SEED_KNOWLEDGE_DATA];
        saveDataStore();
        currentPage = 1;
        renderApp();
        alert(`성공적으로 ${SEED_KNOWLEDGE_DATA.length}건의 시드 데이터가 동기화되었습니다!`);
      }
    } else {
      showErrorAlert('시드 데이터가 로드되지 않았습니다.');
    }
  }

  function saveDataStore() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(knowledgeStore));
      rebuildSearchEngine();
      updateBacklinks();
    } catch (err) {
      showErrorAlert('데이터 저장 중 오류가 발생했습니다: ' + err.message);
    }
  }

  // =========================================================================
  // 2. Fuzzy Search Engine (Fuse.js)
  // =========================================================================
  function rebuildSearchEngine() {
    const options = {
      includeScore: true,
      threshold: 0.4,
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'symptom', weight: 0.25 },
        { name: 'actionTaken', weight: 0.15 },
        { name: 'sbar.recommendation', weight: 0.1 },
        { name: 'tags', weight: 0.1 }
      ]
    };
    fuseInstance = new Fuse(knowledgeStore, options);
  }

  // =========================================================================
  // 3. WikiLink Parser & Backlink Registry
  // =========================================================================
  function updateBacklinks() {
    knowledgeStore.forEach(item => item.backlinks = []);

    const titleMap = new Map();
    knowledgeStore.forEach(item => {
      titleMap.set(item.title.trim().toLowerCase(), item.id);
    });

    knowledgeStore.forEach(sourceItem => {
      const links = extractWikiLinks(sourceItem);
      sourceItem.wikilinks = links;

      links.forEach(linkTitle => {
        const targetId = titleMap.get(linkTitle.trim().toLowerCase());
        if (targetId) {
          const targetItem = knowledgeStore.find(i => i.id === targetId);
          if (targetItem && !targetItem.backlinks.includes(sourceItem.id)) {
            targetItem.backlinks.push(sourceItem.id);
          }
        }
      });
    });
  }

  function extractWikiLinks(item) {
    const textToScan = [
      item.title,
      item.symptom,
      item.actionTaken,
      item.sbar ? (item.sbar.situation + item.sbar.background + item.sbar.assessment + item.sbar.recommendation) : ''
    ].join(' ');

    const wikiRegex = /\[\[(.*?)\]\]/g;
    const matches = [];
    let match;
    while ((match = wikiRegex.exec(textToScan)) !== null) {
      let rawLink = match[1];
      if (rawLink.includes('|')) {
        rawLink = rawLink.split('|')[0];
      }
      if (rawLink.trim() && !matches.includes(rawLink.trim())) {
        matches.push(rawLink.trim());
      }
    }
    return matches;
  }

  function renderWikiMarkdown(text) {
    if (!text) return '';
    
    const wikiRegex = /\[\[(.*?)\]\]/g;
    const processedText = text.replace(wikiRegex, (match, p1) => {
      let targetTitle = p1.trim();
      let displayTitle = targetTitle;
      
      if (targetTitle.includes('|')) {
        const parts = targetTitle.split('|');
        targetTitle = parts[0].trim();
        displayTitle = parts[1].trim();
      }

      const existingItem = knowledgeStore.find(
        item => item.title.trim().toLowerCase() === targetTitle.toLowerCase()
      );

      if (existingItem) {
        return `<a class="wiki-link" data-wiki-id="${existingItem.id}">${escapeHtml(displayTitle)}</a>`;
      } else {
        return `<a class="wiki-link-missing" data-wiki-title="${escapeHtml(targetTitle)}">${escapeHtml(displayTitle)}</a>`;
      }
    });

    return typeof marked !== 'undefined' ? marked.parse(processedText) : processedText;
  }

  // =========================================================================
  // 4. UI Rendering & Views
  // =========================================================================
  function renderApp() {
    renderSidebar();
    renderFilterDropdowns();
    
    if (currentViewMode === 'table') {
      renderKnowledgeTable();
    } else if (currentViewMode === 'card') {
      renderKnowledgeGrid();
    } else if (currentViewMode === 'article' && currentArticleId) {
      openArticleViewer(currentArticleId);
    }
    
    renderHistoryCrumbs();
  }

  function getFilteredItems() {
    let results = knowledgeStore;

    if (activeFilter.sidebarCategory && activeFilter.sidebarCategory !== 'all') {
      results = results.filter(item => item.categoryLarge === activeFilter.sidebarCategory);
    }

    if (activeFilter.sidebarTag) {
      results = results.filter(item => item.tags && item.tags.includes(activeFilter.sidebarTag));
    }

    if (activeFilter.categoryLarge) {
      results = results.filter(item => item.categoryLarge === activeFilter.categoryLarge);
    }

    if (activeFilter.categoryMedium) {
      results = results.filter(item => item.categoryMedium === activeFilter.categoryMedium);
    }

    if (activeFilter.source) {
      results = results.filter(item => item.sourceFile === activeFilter.source);
    }

    if (activeFilter.query.trim() && fuseInstance) {
      const fuseResults = fuseInstance.search(activeFilter.query.trim());
      const searchIds = new Set(fuseResults.map(r => r.item.id));
      results = results.filter(item => searchIds.has(item.id));
    }

    return results;
  }

  function getPaginatedItems(filteredItems) {
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / pageSize) || 1;

    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);

    return {
      items: filteredItems.slice(startIndex, endIndex),
      totalItems,
      totalPages,
      startIndex: totalItems > 0 ? startIndex + 1 : 0,
      endIndex
    };
  }

  function renderSidebar() {
    const categoryLargeContainer = document.getElementById('sidebar-category-large');
    const tagsContainer = document.getElementById('sidebar-tags');
    const countAllEl = document.getElementById('count-all');

    if (countAllEl) countAllEl.textContent = knowledgeStore.length;

    const categoryCounts = {};
    knowledgeStore.forEach(item => {
      if (item.categoryLarge) {
        categoryCounts[item.categoryLarge] = (categoryCounts[item.categoryLarge] || 0) + 1;
      }
    });

    categoryLargeContainer.innerHTML = Object.entries(categoryCounts).map(([cat, count]) => `
      <li class="filter-item ${activeFilter.sidebarCategory === cat ? 'active' : ''}" data-filter-type="category" data-filter-value="${escapeHtml(cat)}">
        <span>${escapeHtml(cat)}</span>
        <span class="filter-count">${count}</span>
      </li>
    `).join('');

    // Curated Top 8 Tags to prevent endless sidebar clutter
    const tagCounts = {};
    knowledgeStore.forEach(item => {
      if (Array.isArray(item.tags)) {
        item.tags.forEach(tag => {
          if (tag.trim() && !categoryCounts[tag.trim()]) {
            tagCounts[tag.trim()] = (tagCounts[tag.trim()] || 0) + 1;
          }
        });
      }
    });

    tagsContainer.innerHTML = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([tag, count]) => `
        <li class="filter-item ${activeFilter.sidebarTag === tag ? 'active' : ''}" data-filter-type="tag" data-filter-value="${escapeHtml(tag)}">
          <span>🏷️ ${escapeHtml(tag)}</span>
          <span class="filter-count">${count}</span>
        </li>
      `).join('');
  }

  function renderFilterDropdowns() {
    const catLargeSelect = document.getElementById('select-filter-category-large');
    const catMediumSelect = document.getElementById('select-filter-category-medium');

    const catLargeSet = new Set();
    const catMediumSet = new Set();

    knowledgeStore.forEach(item => {
      if (item.categoryLarge) catLargeSet.add(item.categoryLarge);
      if (item.categoryMedium) catMediumSet.add(item.categoryMedium);
    });

    catLargeSelect.innerHTML = '<option value="">전체 대분류</option>' + 
      Array.from(catLargeSet).map(c => `<option value="${escapeHtml(c)}" ${activeFilter.categoryLarge === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('');

    catMediumSelect.innerHTML = '<option value="">전체 중분류</option>' + 
      Array.from(catMediumSet).map(c => `<option value="${escapeHtml(c)}" ${activeFilter.categoryMedium === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('');
  }

  // =========================================================================
  // High-Density Data Table Rendering (Default Maximized Screen View)
  // =========================================================================
  function renderKnowledgeTable() {
    const filteredItems = getFilteredItems();
    const pagination = getPaginatedItems(filteredItems);

    updatePaginationUI(pagination);

    const tbody = document.getElementById('table-body-knowledge');
    if (!tbody) return;

    if (pagination.items.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 40px; color: var(--text-muted);">
            조회된 지식 데이터가 없습니다.
          </td>
        </tr>
      `;
      return;
    }

    // Rule 3.2: First Column Action Button [상세 ➔], No-Wrap Table Cells
    tbody.innerHTML = pagination.items.map(item => `
      <tr data-article-id="${item.id}">
        <td style="text-align: center; white-space: nowrap;">
          <button class="btn-action-cell" data-article-id="${item.id}">상세 ➔</button>
        </td>
        <td class="table-cell-title" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</td>
        <td style="white-space: nowrap;"><span class="badge-tag">${escapeHtml(item.categoryLarge || '기타')}</span></td>
        <td style="white-space: nowrap;">${escapeHtml(item.categoryMedium || '일반')}</td>
        <td style="white-space: nowrap;">${escapeHtml(item.department || '전사')}</td>
        <td class="table-cell-symptom" title="${escapeHtml(item.symptom)}">${escapeHtml(item.symptom)}</td>
        <td class="table-cell-action" title="${escapeHtml(item.actionTaken)}">${escapeHtml(item.actionTaken)}</td>
        <td style="white-space: nowrap; font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(item.date || '')}</td>
      </tr>
    `).join('');
  }

  function renderKnowledgeGrid() {
    const listContainer = document.getElementById('view-container-list');
    const filteredItems = getFilteredItems();
    const pagination = getPaginatedItems(filteredItems);

    updatePaginationUI(pagination);

    if (pagination.items.length === 0) {
      listContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <p style="font-size: 0.95rem; font-weight: 600;">조회된 지식 데이터가 없습니다.</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = pagination.items.map(item => `
      <div class="knowledge-card" data-article-id="${item.id}">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div class="card-title">${escapeHtml(item.title)}</div>
          <span class="badge-tag" style="flex-shrink: 0;">${escapeHtml(item.categoryLarge || '기타')}</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${escapeHtml(item.symptom)}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.73rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 6px;">
          <span>🏢 ${escapeHtml(item.department || '전사')}</span>
          <span>📅 ${escapeHtml(item.date || '')}</span>
        </div>
      </div>
    `).join('');
  }

  function updatePaginationUI(pagination) {
    const textInfo = document.getElementById('text-pagination-info');
    const textPageCurrent = document.getElementById('text-page-current');
    const btnPrev = document.getElementById('btn-prev-page');
    const btnNext = document.getElementById('btn-next-page');

    if (textInfo) {
      textInfo.textContent = `총 ${pagination.totalItems.toLocaleString()}건 중 ${pagination.startIndex}-${pagination.endIndex} 표시`;
    }

    if (textPageCurrent) {
      textPageCurrent.textContent = `${currentPage} / ${pagination.totalPages}`;
    }

    if (btnPrev) btnPrev.disabled = (currentPage <= 1);
    if (btnNext) btnNext.disabled = (currentPage >= pagination.totalPages);
  }

  function openArticleViewer(articleId) {
    const item = knowledgeStore.find(i => i.id === articleId);
    if (!item) return;

    currentArticleId = articleId;
    currentViewMode = 'article';
    addToHistory(item);

    const articleContainer = document.getElementById('view-container-article');
    const listContainer = document.getElementById('view-container-list');
    const tableContainer = document.getElementById('view-container-table');

    const tabBtnTable = document.getElementById('tab-btn-table');
    const tabBtnCard = document.getElementById('tab-btn-card');
    const tabBtnArticle = document.getElementById('tab-btn-article');

    tableContainer.style.display = 'none';
    listContainer.style.display = 'none';
    articleContainer.style.display = 'flex';

    tabBtnArticle.style.display = 'inline-flex';
    tabBtnArticle.classList.add('active');
    tabBtnTable.classList.remove('active');
    tabBtnCard.classList.remove('active');

    const backlinksHtml = (item.backlinks || []).map(bId => {
      const bItem = knowledgeStore.find(i => i.id === bId);
      if (!bItem) return '';
      return `<li class="backlink-chip" data-article-id="${bItem.id}">🔗 ${escapeHtml(bItem.title)}</li>`;
    }).join('');

    articleContainer.innerHTML = `
      <div class="article-header">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;">
          <div>
            <h1 style="font-size: 1.35rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">${escapeHtml(item.title)}</h1>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; font-size: 0.8rem; color: var(--text-secondary); white-space: nowrap;">
              <span>📁 대분류: <strong>${escapeHtml(item.categoryLarge || '미지정')}</strong></span>
              <span>🏷️ 중분류: <strong>${escapeHtml(item.categoryMedium || '미지정')}</strong></span>
              <span>🏢 관련 부서: <strong>${escapeHtml(item.department || '전사')}</strong></span>
              <span>📄 출처: <strong>${escapeHtml(item.sourceFile || '수동등록')}</strong></span>
              <span>📅 등록일: <strong>${escapeHtml(item.date || '')}</strong></span>
            </div>
          </div>

          <div style="display: flex; gap: 6px; flex-shrink: 0;">
            <button id="btn-edit-article" class="btn btn-secondary btn-sm" data-article-id="${item.id}">
              <i data-lucide="edit"></i>
              <span>지식 수정</span>
            </button>
            <button id="btn-delete-article" class="btn btn-danger btn-sm" data-article-id="${item.id}">
              <i data-lucide="trash-2"></i>
              <span>삭제</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Raw Symptom & Action -->
      <div style="display: flex; flex-direction: column; gap: 8px; background-color: var(--bg-primary); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <div>
          <h4 style="font-size: 0.8rem; color: var(--accent-warning); font-weight: 700;">🚨 접수 증상 (Symptom)</h4>
          <p style="font-size: 0.88rem; color: var(--text-primary); margin-top: 2px;">${escapeHtml(item.symptom)}</p>
        </div>
        <div style="border-top: 1px dashed var(--border-color); padding-top: 6px;">
          <h4 style="font-size: 0.8rem; color: var(--accent-success); font-weight: 700;">✅ 원문 조치 내역 (Action Taken)</h4>
          <p style="font-size: 0.88rem; color: var(--text-primary); margin-top: 2px;">${escapeHtml(item.actionTaken || '조치 내역 없음')}</p>
        </div>
      </div>

      <!-- KCS SBAR Guidance -->
      <div>
        <h3 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">📋 KCS SBAR 정형 지식 가이드</h3>
        <div class="sbar-container">
          <div class="sbar-box">
            <span class="sbar-title">📌 [S] 상황 개요 (Situation)</span>
            <div class="sbar-content">${renderWikiMarkdown(item.sbar?.situation || item.symptom)}</div>
          </div>
          <div class="sbar-box">
            <span class="sbar-title">🏢 [B] 발생 배경 (Background)</span>
            <div class="sbar-content">${renderWikiMarkdown(item.sbar?.background || `부서: ${item.department} / 시스템: ${item.categoryMedium}`)}</div>
          </div>
          <div class="sbar-box">
            <span class="sbar-title">🔍 [A] 원인 분석 (Assessment)</span>
            <div class="sbar-content">${renderWikiMarkdown(item.sbar?.assessment || '원인 분석 데이터 미입력')}</div>
          </div>
          <div class="sbar-box">
            <span class="sbar-title">💡 [R] 표준 조치 가이드 (Recommendation)</span>
            <div class="sbar-content">${renderWikiMarkdown(item.sbar?.recommendation || item.actionTaken)}</div>
          </div>
        </div>
      </div>

      <!-- Backlinks -->
      <div class="backlinks-panel">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 6px;">🔗 이 지식을 참조하는 문서 (Backlinks - 총 ${item.backlinks?.length || 0}건)</div>
        ${(item.backlinks && item.backlinks.length > 0) 
          ? `<ul class="backlinks-list">${backlinksHtml}</ul>`
          : `<p style="font-size: 0.8rem; color: var(--text-muted);">이 지식을 참조하는 다른 문서가 없습니다.</p>`}
      </div>
    `;

    if (window.lucide) lucide.createIcons();
  }

  function addToHistory(item) {
    visitHistory = visitHistory.filter(h => h.id !== item.id);
    visitHistory.unshift({ id: item.id, title: item.title });
    if (visitHistory.length > 8) visitHistory.pop();
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(visitHistory));
    } catch (e) {}
    renderHistoryCrumbs();
  }

  function renderHistoryCrumbs() {
    const crumbsContainer = document.getElementById('history-crumbs-container');
    if (!crumbsContainer) return;

    if (visitHistory.length === 0) {
      crumbsContainer.innerHTML = '<span style="color: var(--text-muted);">방문 기록이 없습니다.</span>';
      return;
    }

    crumbsContainer.innerHTML = visitHistory.map((h, idx) => `
      <span class="history-crumb" data-article-id="${h.id}">${escapeHtml(h.title)}</span>
      ${idx < visitHistory.length - 1 ? '<span style="color: var(--text-muted); font-size: 0.7em;">></span>' : ''}
    `).join('');
  }

  // =========================================================================
  // 5. CUD Modal Forms & Handlers
  // =========================================================================
  function openCreateModal(defaultTitle = '') {
    document.getElementById('modal-form-title').textContent = '신규 지식 등록';
    document.getElementById('knowledge-crud-form').reset();
    document.getElementById('form-field-id').value = '';
    
    if (defaultTitle) {
      document.getElementById('form-field-title').value = defaultTitle;
    }

    document.getElementById('modal-knowledge-form').classList.remove('hidden');
  }

  function openEditModal(articleId) {
    const item = knowledgeStore.find(i => i.id === articleId);
    if (!item) return;

    document.getElementById('modal-form-title').textContent = '지식 정보 수정';
    document.getElementById('form-field-id').value = item.id;
    document.getElementById('form-field-title').value = item.title || '';
    document.getElementById('form-field-category-large').value = item.categoryLarge || '';
    document.getElementById('form-field-category-medium').value = item.categoryMedium || '';
    document.getElementById('form-field-department').value = item.department || '';
    document.getElementById('form-field-source').value = item.sourceFile || '';
    document.getElementById('form-field-symptom').value = item.symptom || '';
    document.getElementById('form-field-action').value = item.actionTaken || '';
    document.getElementById('form-field-tags').value = Array.isArray(item.tags) ? item.tags.join(', ') : '';

    document.getElementById('form-field-sbar-s').value = item.sbar?.situation || '';
    document.getElementById('form-field-sbar-b').value = item.sbar?.background || '';
    document.getElementById('form-field-sbar-a').value = item.sbar?.assessment || '';
    document.getElementById('form-field-sbar-r').value = item.sbar?.recommendation || '';

    document.getElementById('modal-knowledge-form').classList.remove('hidden');
  }

  function handleSaveForm(e) {
    e.preventDefault();

    const id = document.getElementById('form-field-id').value;
    const title = document.getElementById('form-field-title').value.trim();
    const categoryLarge = document.getElementById('form-field-category-large').value.trim();
    const categoryMedium = document.getElementById('form-field-category-medium').value.trim();
    const department = document.getElementById('form-field-department').value.trim();
    const sourceFile = document.getElementById('form-field-source').value.trim() || '수동등록';
    const symptom = document.getElementById('form-field-symptom').value.trim();
    const actionTaken = document.getElementById('form-field-action').value.trim();
    const tagsRaw = document.getElementById('form-field-tags').value;
    
    const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);

    if (!title || !categoryLarge || !symptom) {
      showErrorAlert('필수 입력 항목(항목명, 대분류, 증상)을 작성해 주세요.');
      return;
    }

    const sbar = {
      situation: document.getElementById('form-field-sbar-s').value.trim() || symptom,
      background: document.getElementById('form-field-sbar-b').value.trim() || `관련부서: ${department}`,
      assessment: document.getElementById('form-field-sbar-a').value.trim() || '원인 분석 미입력',
      recommendation: document.getElementById('form-field-sbar-r').value.trim() || actionTaken
    };

    const nowIso = new Date().toISOString();

    if (id) {
      const item = knowledgeStore.find(i => i.id === id);
      if (item) {
        item.title = title;
        item.categoryLarge = categoryLarge;
        item.categoryMedium = categoryMedium;
        item.department = department;
        item.sourceFile = sourceFile;
        item.symptom = symptom;
        item.actionTaken = actionTaken;
        item.tags = tags;
        item.sbar = sbar;
        item.updatedAt = nowIso;
      }
    } else {
      const newItem = {
        id: 'user-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        title,
        categoryLarge,
        categoryMedium,
        department,
        sourceFile,
        date: new Date().toISOString().slice(0, 10),
        symptom,
        actionTaken,
        tags,
        sbar,
        wikilinks: [],
        backlinks: [],
        createdAt: nowIso,
        updatedAt: nowIso
      };
      knowledgeStore.unshift(newItem);
    }

    saveDataStore();
    document.getElementById('modal-knowledge-form').classList.add('hidden');
    renderApp();

    if (id && currentArticleId === id) {
      openArticleViewer(id);
    }
  }

  function handleDeleteArticle(articleId) {
    if (!confirm('정말로 이 지식 항목을 삭제하시겠습니까?')) return;

    knowledgeStore = knowledgeStore.filter(i => i.id !== articleId);
    saveDataStore();

    switchViewMode('table');
    renderApp();
  }

  function handleCSVImport(file) {
    const statusEl = document.getElementById('import-status-message');
    statusEl.style.display = 'block';
    statusEl.style.backgroundColor = 'var(--bg-card-hover)';
    statusEl.textContent = 'CSV 데이터를 파싱하고 있습니다...';

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        if (results.errors && results.errors.length > 0) {
          statusEl.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
          statusEl.textContent = 'CSV 파싱 중 오류가 발생했습니다: ' + results.errors[0].message;
          return;
        }

        let importedCount = 0;
        const rows = results.data;

        rows.forEach(row => {
          const titleCandidate = row.Symptom ? (row.Category_Medium ? `${row.Category_Medium} - ${row.Symptom.slice(0, 20)}` : row.Symptom.slice(0, 25)) : '신규 인입 지식';
          const newItem = {
            id: 'csv-' + Date.now() + '-' + Math.floor(Math.random() * 10000),
            title: row.Title || titleCandidate,
            sourceFile: row.Source_File || file.name,
            date: row.Date || new Date().toISOString().slice(0, 10),
            department: row.Department || '미지정 부서',
            categoryLarge: row.Category_Large || '기타',
            categoryMedium: row.Category_Medium || '일반',
            symptom: row.Symptom || '',
            actionTaken: row.Action_Taken || '',
            tags: [row.Category_Large, row.Category_Medium].filter(Boolean),
            sbar: {
              situation: row.Symptom || '',
              background: `출처: ${row.Source_File || file.name} / 부서: ${row.Department || ''}`,
              assessment: 'CSV 인입 데이터 자동 생성',
              recommendation: row.Action_Taken || ''
            },
            wikilinks: [],
            backlinks: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          knowledgeStore.unshift(newItem);
          importedCount++;
        });

        saveDataStore();
        statusEl.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
        statusEl.textContent = `성공적으로 ${importedCount}건의 지식 데이터를 인입했습니다.`;

        setTimeout(() => {
          document.getElementById('modal-import-csv').classList.add('hidden');
          statusEl.style.display = 'none';
          renderApp();
        }, 1200);
      }
    });
  }

  function exportBackupData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(knowledgeStore, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `hanwha_wiki_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  function switchViewMode(mode) {
    currentViewMode = mode;

    const tableContainer = document.getElementById('view-container-table');
    const gridContainer = document.getElementById('view-container-list');
    const articleContainer = document.getElementById('view-container-article');

    const tabBtnTable = document.getElementById('tab-btn-table');
    const tabBtnCard = document.getElementById('tab-btn-card');
    const tabBtnArticle = document.getElementById('tab-btn-article');

    tableContainer.style.display = 'none';
    gridContainer.style.display = 'none';
    articleContainer.style.display = 'none';

    tabBtnTable.classList.remove('active');
    tabBtnCard.classList.remove('active');
    tabBtnArticle.classList.remove('active');

    if (mode === 'table') {
      tableContainer.style.display = 'block';
      tabBtnTable.classList.add('active');
      renderKnowledgeTable();
    } else if (mode === 'card') {
      gridContainer.style.display = 'grid';
      tabBtnCard.classList.add('active');
      renderKnowledgeGrid();
    } else if (mode === 'article' && currentArticleId) {
      articleContainer.style.display = 'flex';
      tabBtnArticle.style.display = 'inline-flex';
      tabBtnArticle.classList.add('active');
      openArticleViewer(currentArticleId);
    }
  }

  function showErrorAlert(msg) {
    alert(msg);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // =========================================================================
  // 6. Event Listeners
  // =========================================================================
  function initEventListeners() {
    // Sidebar Toggle
    document.getElementById('btn-toggle-sidebar').addEventListener('click', () => {
      const sidebar = document.getElementById('app-sidebar');
      sidebar.classList.toggle('collapsed');
    });

    // Theme Toggle
    document.getElementById('btn-toggle-theme').addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
    });

    // Search Query Input
    document.getElementById('input-search-query').addEventListener('input', (e) => {
      activeFilter.query = e.target.value;
      currentPage = 1;
      renderApp();
    });

    document.getElementById('btn-execute-search').addEventListener('click', () => {
      currentPage = 1;
      renderApp();
    });

    // Filter Dropdowns
    document.getElementById('select-filter-category-large').addEventListener('change', (e) => {
      activeFilter.categoryLarge = e.target.value;
      currentPage = 1;
      renderApp();
    });

    document.getElementById('select-filter-category-medium').addEventListener('change', (e) => {
      activeFilter.categoryMedium = e.target.value;
      currentPage = 1;
      renderApp();
    });

    document.getElementById('select-filter-source').addEventListener('change', (e) => {
      activeFilter.source = e.target.value;
      currentPage = 1;
      renderApp();
    });

    document.getElementById('btn-reset-filters').addEventListener('click', () => {
      activeFilter = {
        query: '',
        categoryLarge: '',
        categoryMedium: '',
        source: '',
        sidebarTag: '',
        sidebarCategory: 'all'
      };
      currentPage = 1;
      document.getElementById('input-search-query').value = '';
      renderApp();
    });

    // Pagination
    document.getElementById('btn-prev-page').addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderApp();
      }
    });

    document.getElementById('btn-next-page').addEventListener('click', () => {
      currentPage++;
      renderApp();
    });

    document.getElementById('select-page-size').addEventListener('change', (e) => {
      pageSize = parseInt(e.target.value, 10) || 25;
      currentPage = 1;
      renderApp();
    });

    // Sidebar Category/Tag Delegation
    document.addEventListener('click', (e) => {
      const filterItem = e.target.closest('.filter-item');
      if (filterItem) {
        const filterType = filterItem.getAttribute('data-filter-type');
        const filterValue = filterItem.getAttribute('data-filter-value');

        if (filterType === 'all') {
          activeFilter.sidebarCategory = 'all';
          activeFilter.sidebarTag = '';
        } else if (filterType === 'category') {
          activeFilter.sidebarCategory = filterValue;
        } else if (filterType === 'tag') {
          activeFilter.sidebarTag = filterValue;
        }
        currentPage = 1;
        renderApp();
      }
    });

    // Table & Card Click Delegation
    document.addEventListener('click', (e) => {
      // Table Row or Action Button Click
      const actionBtn = e.target.closest('.btn-action-cell');
      if (actionBtn) {
        const articleId = actionBtn.getAttribute('data-article-id');
        openArticleViewer(articleId);
        return;
      }

      const tableRow = e.target.closest('#table-body-knowledge tr');
      if (tableRow && !e.target.closest('button')) {
        const articleId = tableRow.getAttribute('data-article-id');
        if (articleId) openArticleViewer(articleId);
        return;
      }

      const card = e.target.closest('.knowledge-card');
      if (card) {
        const articleId = card.getAttribute('data-article-id');
        openArticleViewer(articleId);
        return;
      }

      // WikiLink Click
      const wikiLink = e.target.closest('.wiki-link');
      if (wikiLink) {
        const wikiId = wikiLink.getAttribute('data-wiki-id');
        openArticleViewer(wikiId);
        return;
      }

      // Missing WikiLink Click
      const wikiLinkMissing = e.target.closest('.wiki-link-missing');
      if (wikiLinkMissing) {
        const missingTitle = wikiLinkMissing.getAttribute('data-wiki-title');
        if (confirm(`'${missingTitle}' 지식 항목이 존재하지 않습니다. 신규로 등록하시겠습니까?`)) {
          openCreateModal(missingTitle);
        }
        return;
      }

      // Backlink Chip Click
      const backlinkChip = e.target.closest('.backlink-chip');
      if (backlinkChip) {
        const articleId = backlinkChip.getAttribute('data-article-id');
        openArticleViewer(articleId);
        return;
      }

      // History Crumb Click
      const crumb = e.target.closest('.history-crumb');
      if (crumb) {
        const articleId = crumb.getAttribute('data-article-id');
        openArticleViewer(articleId);
        return;
      }
    });

    // View Switcher Tabs
    document.getElementById('tab-btn-table').addEventListener('click', () => switchViewMode('table'));
    document.getElementById('tab-btn-card').addEventListener('click', () => switchViewMode('card'));
    document.getElementById('tab-btn-article').addEventListener('click', () => {
      if (currentArticleId) switchViewMode('article');
    });

    // Modals
    document.getElementById('btn-open-create-modal').addEventListener('click', () => openCreateModal());
    document.getElementById('btn-close-form-modal').addEventListener('click', () => document.getElementById('modal-knowledge-form').classList.add('hidden'));
    document.getElementById('btn-cancel-form').addEventListener('click', () => document.getElementById('modal-knowledge-form').classList.add('hidden'));
    document.getElementById('btn-save-form').addEventListener('click', handleSaveForm);

    document.addEventListener('click', (e) => {
      const editBtn = e.target.closest('#btn-edit-article');
      if (editBtn) {
        const id = editBtn.getAttribute('data-article-id');
        openEditModal(id);
      }

      const deleteBtn = e.target.closest('#btn-delete-article');
      if (deleteBtn) {
        const id = deleteBtn.getAttribute('data-article-id');
        handleDeleteArticle(id);
      }
    });

    // Import Modal
    const importModal = document.getElementById('modal-import-csv');
    const dropzone = document.getElementById('dropzone-csv');
    const csvFileInput = document.getElementById('input-csv-file');

    document.getElementById('btn-open-import-modal').addEventListener('click', () => importModal.classList.remove('hidden'));
    document.getElementById('btn-close-import-modal').addEventListener('click', () => importModal.classList.add('hidden'));
    document.getElementById('btn-cancel-import').addEventListener('click', () => importModal.classList.add('hidden'));

    dropzone.addEventListener('click', () => csvFileInput.click());
    csvFileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) handleCSVImport(e.target.files[0]);
    });

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--accent-primary)';
    });

    dropzone.addEventListener('dragleave', () => dropzone.style.borderColor = 'var(--border-color)');
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--border-color)';
      if (e.dataTransfer.files.length > 0) handleCSVImport(e.dataTransfer.files[0]);
    });

    // Sync & Export
    const syncSeedBtn = document.getElementById('btn-sync-seed');
    if (syncSeedBtn) syncSeedBtn.addEventListener('click', resetToSeedData);

    document.getElementById('btn-export-data').addEventListener('click', exportBackupData);
  }

  // Bootstrap Application
  document.addEventListener('DOMContentLoaded', () => {
    initDataStore();
    initEventListeners();
    renderApp();
  });

})();
