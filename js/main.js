(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_KEY = 'portfolio-theme';

  // ---- Theme toggle (persisted) ----
  var themeToggle = document.getElementById('themeToggle');
  var themeIcon = document.getElementById('themeIcon');

  function currentTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }
  function syncIcon() {
    // Show the icon for the theme you would switch TO.
    if (themeIcon) themeIcon.innerHTML = currentTheme() === 'dark' ? '&#9728;' : '&#9790;';
    if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to ' + (currentTheme() === 'dark' ? 'light' : 'dark') + ' theme');
  }
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    syncIcon();
  }
  syncIcon();
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  // ---- Mobile menu ----
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('hidden');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('hidden') === false;
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('.menu-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---- Render dynamic sections from data ----
  var data = window.RESUME_DATA || { skills: [], experience: [], projects: [] };

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Skills
  var skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid) {
    data.skills.forEach(function (cat) {
      if (!cat.items || cat.items.length === 0) return;
      var card = el('div', 'bg-surface border border-border rounded-xl p-6');
      card.appendChild(el('h3', 'text-lg font-semibold', escapeHtml(cat.name)));
      var chips = el('div', 'mt-4 flex flex-wrap gap-2');
      cat.items.forEach(function (item) {
        chips.appendChild(el('span', 'bg-surface2 border border-border rounded-full px-3 py-1 text-sm text-muted', escapeHtml(item)));
      });
      card.appendChild(chips);
      skillsGrid.appendChild(card);
    });
  }

  // Experience
  var expList = document.getElementById('experienceList');
  if (expList) {
    data.experience.forEach(function (e) {
      var li = el('li', 'bg-surface border border-border rounded-xl p-6');
      var header = el('div', 'flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1');
      header.appendChild(el('h3', 'text-xl font-semibold', escapeHtml(e.role)));
      header.appendChild(el('span', 'text-sm text-muted', escapeHtml(e.dateRangeLabel)));
      li.appendChild(header);
      var employer = e.client ? e.employer + ' &mdash; ' + e.client : e.employer;
      li.appendChild(el('p', 'mt-1 text-sm text-muted', escapeHtml(employer) + ' &middot; ' + escapeHtml(e.location)));
      var techs = el('ul', 'mt-4 flex flex-wrap gap-2');
      (e.technologies || []).forEach(function (t) {
        techs.appendChild(el('li', 'bg-surface2 border border-border rounded-full px-3 py-1 text-xs text-muted', escapeHtml(t)));
      });
      li.appendChild(techs);
      expList.appendChild(li);
    });
  }

  // Projects
  var projGrid = document.getElementById('projectsGrid');
  if (projGrid) {
    if (!data.projects || data.projects.length === 0) {
      projGrid.appendChild(el('p', 'text-muted', 'No projects available.'));
    } else {
      data.projects.forEach(function (p) {
        var li = el('li', 'bg-surface border border-border rounded-xl p-6 flex flex-col');
        li.appendChild(el('h3', 'text-xl font-semibold', escapeHtml(p.name)));
        if (p.employer && p.employer.trim()) {
          li.appendChild(el('p', 'mt-1 text-sm text-accent', escapeHtml(p.employer)));
        }
        li.appendChild(el('p', 'mt-3 text-muted leading-relaxed', escapeHtml(p.description)));
        projGrid.appendChild(li);
      });
    }
  }
})();