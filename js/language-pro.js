/* =========================================================
   LANGUAGE PRO SCRIPT
   File : language-pro.js
   Site : newpedia.github.io
   ========================================================= */

(function () {
  "use strict";

  /* ===============================
     CONFIG
     =============================== */
  var DEFAULT_LANG = "id";
  var STORAGE_KEY = "newpedia_lang";

  /* ===============================
     TRANSLATIONS
     =============================== */
  var LANG = {
    id: {
      home: "Beranda",
      trending: "Trending",
      contact: "Kontak",
      search: "Cari",
      weather: "Cuaca Hari Ini",
      time: "Waktu Sekarang",
      read_more: "Baca Selengkapnya"
    },
    en: {
      home: "Home",
      trending: "Trending",
      contact: "Contact",
      search: "Search",
      weather: "Today's Weather",
      time: "Current Time",
      read_more: "Read More"
    },
    ar: {
      home: "الرئيسية",
      trending: "الشائع",
      contact: "اتصل بنا",
      search: "بحث",
      weather: "الطقس اليوم",
      time: "الوقت الحالي",
      read_more: "اقرأ المزيد"
    }
  };

  /* ===============================
     HELPER
     =============================== */
  function getLang() {
    return (
      sessionStorage.getItem(STORAGE_KEY) ||
      localStorage.getItem(STORAGE_KEY) ||
      navigator.language.slice(0, 2) ||
      DEFAULT_LANG
    );
  }

  function setLang(lang) {
    sessionStorage.setItem(STORAGE_KEY, lang);
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    if (!LANG[lang]) lang = DEFAULT_LANG;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang]").forEach(function (el) {
      var key = el.getAttribute("data-lang");
      if (LANG[lang][key]) {
        el.textContent = LANG[lang][key];
      }
    });

    // RTL support
    if (la
