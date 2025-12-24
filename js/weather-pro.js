/* =========================================================
   WEATHER PRO SCRIPT
   File : weather-pro.js
   Site : newpedia.github.io
   ========================================================= */

(function () {
  "use strict";

  /* ===============================
     CONFIG
     =============================== */
  var API_KEY = "YOUR_API_KEY"; // GANTI DENGAN API KEY
  var CACHE_KEY = "newpedia_weather_cache";
  var CACHE_TTL = 30 * 60 * 1000; // 30 menit

  /* ===============================
     HELPER
     =============================== */
  function $(id) {
    return document.getElementById(id);
  }

  function saveCache(data) {
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ time: Date.now(), data: data })
      );
    } catch (e) {}
  }

  function loadCache() {
    try {
      var cache = JSON.parse(localStorage.getItem(CACHE_KEY));
      if (!cache) return null;
      if (Date.now() - cache.time > CACHE_TTL) return null;
      return cache.data;
    } catch (e) {
      return null;
    }
  }

  function dayName(ts) {
    return new Date(ts * 1000).toLocaleDateString("id-ID", {
      weekday: "short"
    });
  }

  function round(n) {
    return Math.round(n);
  }

  /* ===============================
     RENDER
     =============================== */
  function renderCurrent(data) {
    $("currentWeather").innerHTML =
      "<h3>" + data.name + ", " + data.sys.country + "</h3>" +
      "<h1>" + round(data.main.temp) + "°C</h1>" +
      "<p>" + data.weather[0].description + "</p>" +
      "<p>💧 " + data.main.humidity + "% | 💨 " + data.wind.speed + " m/s</p>";
  }

  function renderForecast(days) {
    var html = "";
    for (var i = 1; i <= 7; i++) {
      html +=
        "<div>" +
        "<div>" + dayName(days[i].dt) + "</div>" +
        "<img src='https://openweathermap.org/img/wn/" +
        days[i].weather[0].icon +
        ".png'>" +
        "<div>" + round(days[i].temp.day) + "°</div>" +
        "</div>";
    }
    $("forecast").innerHTML = html;
  }

  /* ===============================
     FETCH DATA
     =============================== */
  function fetchForecast(lat, lon, current) {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=hourly,minutely&units=metric&lang=id&appid=" +
        API_KEY
    )
      .then(function (r) {
        return r.json();
      })
      .then(function (fc) {
        renderCurrent(current);
        renderForecast(fc.daily);
        saveCache({ current: current, forecast: fc.daily });
      });
  }

  function fetchWeather(url) {
    var cached = loadCache();
    if (cached) {
      renderCurrent(cached.current);
      renderForecast(cached.forecast);
      return;
    }

    fetch(url)
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        if (!data.coord) return;
        fetchForecast(data.coord.lat, data.coord.lon, data);
      });
  }

  /* ===============================
     PUBLIC FUNCTIONS
     =============================== */
  window.searchWeather = function () {
    var city = $("cityInput").value || "Jakarta";
    fetchWeather(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&lang=id&appid=" +
        API_KEY
    );
  };

  window.getLocationWeather = function () {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(function (pos) {
      fetchWeather(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          pos.coords.latitude +
          "&lon=" +
          pos.coords.longitude +
          "&units=metric&lang=id&appid=" +
          API_KEY
      );
    });
  };

  /* ===============================
     AUTO LOAD DEFAULT
     =============================== */
  document.addEventListener("DOMContentLoaded", function () {
    if ($("currentWeather") && $("forecast")) {
      searchWeather();
    }
  });
})();
