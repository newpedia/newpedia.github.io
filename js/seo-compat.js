/* =========================================================
   SEO + COMPATIBILITY SCRIPT
   File : seo-compat.js
   Site : newpedia.github.io
   ========================================================= */

(function () {
  try {

    /* ===============================
       1. DOM READY (SAFE ALL BROWSER)
       =============================== */
    function ready(fn) {
      if (document.readyState !== "loading") {
        fn();
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", fn);
      } else {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState !== "loading") fn();
        });
      }
    }

    ready(function () {

      /* ===============================
         2. DETECT LEGACY BROWSER
         =============================== */
      var isLegacy = false;
      try {
        new Function("(a = 0) => a");
      } catch (e) {
        isLegacy = true;
        document.documentElement.className += " legacy-browser";
      }

      /* ===============================
         3. SEO META ROBOTS
         =============================== */
      if (!document.querySelector('meta[name="robots"]')) {
        var metaRobots = document.createElement("meta");
        metaRobots.name = "robots";
        metaRobots.content = "index, follow";
        document.head.appendChild(metaRobots);
      }

      /* ===============================
         4. CANONICAL URL
         =============================== */
      if (!document.querySelector('link[rel="canonical"]')) {
        var canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = location.origin + location.pathname;
        document.head.appendChild(canonical);
      }

      /* ===============================
         5. INTERNAL LINK BOOST (SEO)
         =============================== */
      var internalLinks = [
        "/trending.html",
        "/windows.html",
        "/starlink.html",
        "/spotlight",
        "/news/perkembangan-ai-di-indonesia.html",
        "/news/mbg.html",
        "/articles/article1.html",
        "/articles/article2.html"
      ];

      var nav = document.createElement("nav");
      nav.style.display = "none";

      for (var i = 0; i < internalLinks.length; i++) {
        var a = document.createElement("a");
        a.href = internalLinks[i];
        a.textContent = internalLinks[i];
        nav.appendChild(a);
      }

      document.body.appendChild(nav);

      /* ===============================
         6. FORCE CONTENT RENDER
         =============================== */
      document.body.style.visibility = "visible";

      /* ===============================
         7. NOSCRIPT FALLBACK
         =============================== */
      var noscript = document.createElement("noscript");
      noscript.innerHTML =
        "<p>Website ini bekerja optimal dengan JavaScript aktif.</p>";
      document.body.appendChild(noscript);

      /* ===============================
         8. CONSOLE INFO (SAFE)
         =============================== */
      if (window.console) {
        console.
