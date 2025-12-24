/* =========================================================
   TIME PRO SCRIPT
   File : time-country.js
   Site : newpedia.github.io
   ========================================================= */

(function () {
  "use strict";

  /* ===============================
     COUNTRY → TIMEZONE MAP
     =============================== */
  var COUNTRY_TZ = {
    ID: "Asia/Jakarta",
    JP: "Asia/Tokyo",
    CN: "Asia/Shanghai",
    KR: "Asia/Seoul",
    IN: "Asia/Kolkata",
    SA: "Asia/Riyadh",
    AE: "Asia/Dubai",
    GB: "Europe/London",
    FR: "Europe/Paris",
    DE: "Europe/Berlin",
    RU: "Europe/Moscow",
    US: "America/New_York",
    CA: "America/Toronto",
    BR: "America/Sao_Paulo",
    AU: "Australia/Sydney",
    NZ: "Pacific/Auckland",
    UTC: "UTC"
  };

  var LOCALE = "id-ID";
  var DEFAULT_COUNTRY = "ID";
  var timer = null;

  /* ===============================
     HELPERS
     =============================== */
  function $(id) {
    return document.getElementById(id);
  }

  function formatTime(date, tz) {
    return new Intl.DateTimeFormat(LOCALE, {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(date);
  }

  function formatDate(date, tz) {
    return new Intl.DateTimeFormat(LOCALE, {
      timeZone: tz,
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  }

  /* ===============================
     RENDER
     =============================== */
  function render(country) {
    var tz = COUNTRY_TZ[country] || COUNTRY_TZ[DEFAULT_COUNTRY];
    var now = new Date();

    if ($("countryTime")) {
      $("countryTime").textContent = formatTime(now, tz);
    }

    if ($("countryDate")) {
      $("countryDate").textContent = formatDate(now, tz);
    }

    if ($("countryZone")) {
      $("countryZone").textContent = country + " - " + tz;
    }
  }

  /* ===============================
     PUBLIC API
     =============================== */
  window.CountryTime = {
    start: function (countryCode) {
      var c = countryCode || DEFAULT_COUNTRY;
      render(c);

      if (timer) clearInterval(timer);
      timer = setInterval(function () {
        render(c);
      }, 1000);
    },

    setCountry: function (countryCode) {
      this.start(countryCode);
    },

    auto: function () {
      try {
        var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        for (var c in COUNTRY_TZ) {
          if (COUNTRY_TZ[c] === tz) {
            this.start(c);
            return;
          }
        }
        this.start(DEFAULT_COUNTRY);
      } catch (e) {
        this.start(DEFAULT_COUNTRY);
      }
    }
  };

  /* ===============================
     AUTO INIT
     =============================== */
  document.addEventListener("DOMContentLoaded", function () {
    if ($("countryTime")) {
      CountryTime.auto();
    }
  });
})();
