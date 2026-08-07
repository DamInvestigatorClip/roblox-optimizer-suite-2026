/**
 * RobloxPerformanceSuite — Pages helper (UI only).
 * Keyword: roblox fps unlocker
 */
(function (global) {
  'use strict';

  var Product = {
    name: 'RobloxPerformanceSuite',
    keyword: 'roblox fps unlocker',
    channel: 'github-pages'
  };

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function bindDownload(btn, url) {
    if (!btn || !url) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = url;
    });
  }

  global.RobloxPerformanceSuiteUI = { Product: Product, ready: ready, bindDownload: bindDownload };
})(typeof window !== 'undefined' ? window : globalThis);
