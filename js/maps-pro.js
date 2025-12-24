/* =========================================================
   MAPS PRO SCRIPT
   File : maps-pro.js
   Engine : Leaflet + OpenStreetMap
   ========================================================= */

(function () {
  "use strict";

  var map, marker;

  /* ===============================
     INIT MAP
     =============================== */
  function initMap(lat, lon, zoom) {
    map = L.map("mapPro").setView([lat, lon], zoom || 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);

    marker = L.marker([lat, lon]).addTo(map);
  }

  /* ===============================
     UPDATE MARKER
     =============================== */
  function updateMarker(lat, lon, text) {
    if (!map) return;

    marker.setLatLng([lat, lon]);
    map.setView([lat, lon], 14);

    if (text) marker.bindPopup(text).openPopup();
  }

  /* ===============================
     GEOLOCATION
     =============================== */
  function locateUser() {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      function (pos) {
        updateMarker(
          pos.coords.latitude,
          pos.coords.longitude,
          "📍 Lokasi Anda"
        );
      },
      function () {
        console.warn("Lokasi tidak diizinkan");
      }
    );
  }

  /* ===============================
     SEARCH LOCATION (NOMINATIM)
     =============================== */
  function searchLocation(query) {
    fetch(
      "https://nominatim.openstreetmap.org/search?format=json&q=" +
        encodeURIComponent(query)
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (!data.length) return;

        updateMarker(
          data[0].lat,
          data[0].lon,
          "📌 " + data[0].display_name
        );
      });
  }

  /* ===============================
     PUBLIC API
     =============================== */
  window.MapsPro = {
    init: function (lat, lon, zoom) {
      initMap(lat || -6.1751, lon || 106.865, zoom || 12);
    },

    locate: function () {
      locateUser();
    },

    search: function (inputId) {
      var q = document.getElementById(inputId).value;
      if (q) searchLocation(q);
    }
  };

  /* ===============================
     AUTO INIT
     =============================== */
  document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("mapPro")) {
      MapsPro.init();
    }
  });
})();
