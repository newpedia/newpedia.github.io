/* =========================================================
   QUR'AN PRO SCRIPT
   File : quran-pro.js
   Site : newpedia.github.io
   API  : equran.id (gratis)
   ========================================================= */

(function () {
  "use strict";

  var API_BASE = "https://equran.id/api/v2";

  function $(id) {
    return document.getElementById(id);
  }

  /* ===============================
     LOAD SURAH LIST
     =============================== */
  function loadSurahList() {
    fetch(API_BASE + "/surat")
      .then(r => r.json())
      .then(res => {
        var html = "";
        res.data.forEach(s => {
          html += `
            <li onclick="QuranPro.loadSurah(${s.nomor})">
              ${s.nomor}. ${s.namaLatin}
              <small>(${s.arti})</small>
            </li>`;
        });
        $("surahList").innerHTML = html;
      });
  }

  /* ===============================
     LOAD SURAH
     =============================== */
  function loadSurah(nomor) {
    fetch(API_BASE + "/surat/" + nomor)
      .then(r => r.json())
      .then(res => {
        var s = res.data;
        $("surahTitle").innerHTML =
          s.namaLatin + " (" + s.nama + ")";

        var ayatHTML = "";
        s.ayat.forEach(a => {
          ayatHTML += `
            <div class="ayat">
              <div class="arab">${a.teksArab}</div>
              <div class="latin">${a.teksLatin}</div>
              <div class="arti">${a.teksIndonesia}</div>
              <audio controls src="${a.audio['05']}"></audio>
            </div>`;
        });
        $("ayatBox").innerHTML = ayatHTML;
      });
  }

  /* ===============================
     PUBLIC API
     =============================== */
  window.QuranPro = {
    init: function () {
      loadSurahList();
    },
    loadSurah: function (n) {
      loadSurah(n);
    }
  };

  /* ===============================
     AUTO INIT
     =============================== */
  document.addEventListener("DOMContentLoaded", function () {
    if ($("surahList")) {
      QuranPro.init();
    }
  });
})();
