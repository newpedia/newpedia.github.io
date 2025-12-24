/* =========================================================
   TIME PRO SCRIPT
   File : time-pro.js
   Site : newpedia.github.io
   ========================================================= */

(function () {
  "use strict";

  /* ===============================
     CONFIG
     =============================== */
  var DEFAULT_TIMEZONE = "Asia/Jakarta"; // default WIB
  var LOCALE_ID = "id-ID";

  /* ===============================
     HELPER
     =============================== */
  function $(id) {
    return document.getElementById(id);
  }

  function formatTime(date, tz) {
    return new Intl.DateTimeFormat(LOCALE_ID, {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(date);
  }

  function formatDate(date, tz) {
    return new Intl.DateTimeFormat(LOCALE_ID, {
      timeZone: tz,
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  }

  function getOffsetLabel(tz) {
    try {
      var now = new Date();
      var local = now.toLocaleString("en-US", { timeZone: tz });
      var diff =
        (new Date(local).getTime() - now.getTime()) / 3600000;
      return diff >= 0 ? "GMT+" + diff : "GMT" + diff;
    } catch (e) {
      return "";
    }
  }

  /* ===============================
     RENDER
     =============================== */
  function renderTime(tz) {
    var now = new Date();

    if ($("timeClock")) {
      $("timeClock").textContent = formatTime(now, tz);
    }

    if ($("timeDate")) {
      $("timeDate").textContent = formatDate(now, tz);
    }

    if ($("timeZone")) {
      $("timeZone").textContent = tz + " (" + getOffsetLabel(tz) + ")";
    }
  }

  /* ===============================
     PUBLIC API
     =============================== */
  window.TimePro = {
    start: function (tz) {
      var timezone = tz || DEFAULT_TIMEZONE;
      renderTime(timezone);

      if (this._timer) clearInterval(this._timer);
      this._timer = setInterval(function () {
        renderTime(timezone);
      }, 1000);
    },

    setTimezone: function (tz) {
      this.start(tz);
    },

    autoTimezone: function () {
      try {
        var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.start(tz || DEFAULT_TIMEZONE);
      } catch (e) {
        this.start(DEFAULT_TIMEZONE);
      }
    }
  };

  /* ===============================
     AUTO INIT
     =============================== */
  document.addEventListener("DOMContentLoaded", function () {
    if ($("timeClock")) {
      TimePro.autoTimezone();
    }
  });
})();
