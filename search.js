/* AWS SAP-C02 备考站 — Pagefind 全站搜索入口
 * 自动根据当前页面深度计算 pagefind/ 资源的相对路径，
 * 注入右下角悬浮按钮 + 模态搜索框，支持 Ctrl/Cmd + K 唤起、Esc 关闭。
 */
(function () {
  'use strict';
  if (window.__pfSearchLoaded) return;
  window.__pfSearchLoaded = true;

  /* 指向站点根目录的相对前缀，由各 HTML 页面在注入时按文件静态深度写入
   * window.__PF_ROOT_REL（根页面为 "./"，compute/lambda.html 为 "../" 等）。
   * 用静态深度而非运行时 pathname 计算，可同时兼容根部署与子路径部署
   * （如 GitHub Pages 项目页 /<repo>/）。
   */
  var ROOT_REL = window.__PF_ROOT_REL || './';
  if (ROOT_REL.charAt(ROOT_REL.length - 1) !== '/') ROOT_REL += '/';
  var PF_BASE = ROOT_REL + 'pagefind/';

  /* 计算 pagefind 目录的绝对路径（从域名根开始），
   * 用于 bundlePath（加载 pagefind.js）与 pagefind_options.basePath（加载索引/元数据）。
   * 例如本地根部署 → /pagefind/；GitLab Pages 子路径 → /aws-sap-exam/pagefind/
   */
  function resolveAbsBase() {
    try {
      var p = new URL(PF_BASE, location.href).pathname;
      if (p.charAt(p.length - 1) !== '/') p += '/';
      return p;
    } catch (e) {
      return '/pagefind/';
    }
  }
  var PF_ABS = resolveAbsBase();

  /* 计算站点基路径（兼容 GitLab Pages 子路径部署，如 /aws-sap-exam/）。
   * Pagefind 索引里的 URL 是站点根相对路径（/compute/lambda.html），
   * 若站点部署在子路径下，需要补上基路径前缀。
   * 做法：解析 pagefind-ui.js 的绝对 URL，回推出 pagefind/ 所在的站点根。
   */
  function resolveSiteBase() {
    try {
      var abs = new URL(PF_BASE + 'pagefind-ui.js', location.href).href;
      var marker = '/pagefind/';
      var i = abs.indexOf(marker);
      if (i < 0) return '/';
      var origin = location.origin;
      return abs.substring(origin.length, i + 1); // 含尾部 /
    } catch (e) {
      return '/';
    }
  }
  var SITE_BASE = resolveSiteBase();

  function rewriteUrl(u) {
    if (!u) return u;
    if (u.charAt(0) !== '/') return u;           // 非根相对路径，不动
    if (SITE_BASE === '/') return u;              // 根部署，无需前缀
    if (u.indexOf(SITE_BASE) === 0) return u;     // 已带前缀，跳过
    return SITE_BASE + u.slice(1);
  }

  // ── 注入本组件样式（悬浮按钮 + 模态层）──
  var style = document.createElement('style');
  style.textContent = [
    '#pf-search-fab{position:fixed;right:22px;bottom:22px;z-index:99990;',
    'display:inline-flex;align-items:center;gap:8px;padding:11px 18px;',
    'border:0;border-radius:999px;background:linear-gradient(125deg,#0f2b54,#2877c7);',
    'color:#fff;font-size:14px;font-weight:600;cursor:pointer;box-shadow:0 10px 30px rgba(15,43,84,.35);',
    'font-family:inherit;transition:transform .15s ease,box-shadow .15s ease;}',
    '#pf-search-fab:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(15,43,84,.45);}',
    '#pf-search-fab svg{width:18px;height:18px;flex-shrink:0;}',
    '#pf-search-fab .pf-kbd{font-size:11px;opacity:.78;background:rgba(255,255,255,.2);',
    'padding:1px 7px;border-radius:5px;margin-left:2px;font-family:ui-monospace,Consolas,monospace;}',
    '@media(max-width:560px){#pf-search-fab .pf-lbl,#pf-search-fab .pf-kbd{display:none}',
    '#pf-search-fab{padding:13px;border-radius:50%;}}',
    '',
    '#pf-search-modal{position:fixed;inset:0;z-index:99991;display:none;',
    'background:rgba(15,23,42,.55);backdrop-filter:blur(3px);align-items:flex-start;justify-content:center;',
    'padding:12vh 16px 0;}',
    '#pf-search-modal.pf-open{display:flex;}',
    '.pf-modal-card{width:min(720px,100%);background:#fff;border-radius:16px;',
    'box-shadow:0 30px 80px rgba(0,0,0,.3);overflow:hidden;}',
    '.pf-modal-head{display:flex;align-items:center;justify-content:space-between;',
    'padding:14px 18px;border-bottom:1px solid #e2e8f0;background:#f8fafc;}',
    '.pf-modal-head .pf-title{font-weight:700;color:#0f172a;font-size:14px;letter-spacing:.02em;}',
    '.pf-close{border:0;background:transparent;font-size:18px;line-height:1;cursor:pointer;color:#64748b;',
    'width:30px;height:30px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;}',
    '.pf-close:hover{background:#e2e8f0;color:#0f172a;}',
    '#pf-search-box{padding:16px;max-height:62vh;overflow:auto;}',
    '#pf-search-box .pagefind-ui{--pagefind-ui-scale:1;}',
    ''
  ].join('\n');
  document.head.appendChild(style);

  // ── 加载 Pagefind UI 资源 ──
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = PF_BASE + 'pagefind-ui.css';
  document.head.appendChild(css);

  var js = document.createElement('script');
  js.src = PF_BASE + 'pagefind-ui.js';
  js.onload = boot;
  js.onerror = function () {
    console.warn('[pagefind] 搜索资源加载失败: ' + js.src);
  };
  document.head.appendChild(js);

  function boot() {
    if (typeof PagefindUI === 'undefined') {
      console.warn('[pagefind] PagefindUI 未定义');
      return;
    }

    // 悬浮搜索按钮
    var btn = document.createElement('button');
    btn.id = 'pf-search-fab';
    btn.type = 'button';
    btn.setAttribute('aria-label', '搜索本站');
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>' +
      '<span class="pf-lbl">搜索</span><span class="pf-kbd">Ctrl K</span>';
    document.body.appendChild(btn);

    // 模态搜索层
    var modal = document.createElement('div');
    modal.id = 'pf-search-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', '全站搜索');
    modal.innerHTML =
      '<div class="pf-modal-card">' +
        '<div class="pf-modal-head">' +
          '<span class="pf-title">全站搜索</span>' +
          '<button class="pf-close" type="button" aria-label="关闭">✕</button>' +
        '</div>' +
        '<div id="pf-search-box"></div>' +
      '</div>';
    document.body.appendChild(modal);

    new PagefindUI({
      element: '#pf-search-box',
      bundlePath: PF_ABS,
      pagefind_options: { basePath: PF_ABS },
      showSubResults: true,
      showImages: false,
      excerptLength: 28,
      processResult: function (result) {
        if (result) {
          result.url = rewriteUrl(result.url);
          if (Array.isArray(result.sub_results)) {
            result.sub_results.forEach(function (sub) { sub.url = rewriteUrl(sub.url); });
          }
        }
        return result;
      }
    });

    function open() {
      modal.classList.add('pf-open');
      setTimeout(function () {
        var input = modal.querySelector('.pagefind-ui__search-input');
        if (input) { input.focus(); input.select(); }
      }, 30);
    }
    function close() { modal.classList.remove('pf-open'); }

    btn.addEventListener('click', open);
    modal.querySelector('.pf-close').addEventListener('click', close);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('pf-open')) close();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        open();
      }
    });
  }
})();
