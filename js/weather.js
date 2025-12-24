<script>
const API_KEY = "YOUR_API_KEY";
const CACHE_KEY = "newpedia_weather_cache";
const CACHE_TIME = 30 * 60 * 1000; // 30 menit

function kelvinToC(k) {
  return Math.round(k);
}

function saveCache(data) {
  localStorage.setItem(CACHE_KEY, JSON.stringify({
    time: Date.now(),
    data
  }));
}

function loadCache() {
  const cache = JSON.parse(localStorage.getItem(CACHE_KEY));
  if (!cache) return null;
  if (Date.now() - cache.time > CACHE_TIME) return null;
  return cache.data;
}

function renderCurrent(data) {
  document.getElementById("currentWeather").innerHTML = `
    <h3>${data.name}, ${data.sys.country}</h3>
    <h1>${kelvinToC(data.main.temp)}°C</h1>
    <p>${data.weather[0].description}</p>
    <p>💧 ${data.main.humidity}% | 💨 ${data.wind.speed} m/s</p>
  `;
}

function renderForecast(days) {
  document.getElementById("forecast").innerHTML = days.map(d => `
    <div>
      <div>${new Date(d.dt * 1000).toLocaleDateString("id-ID", { weekday: "short" })}</div>
      <img src="https://openweathermap.org/img/wn/${d.weather[0].icon}.png">
      <div>${kelvinToC(d.temp.day)}°</div>
    </div>
  `).join("");
}

function fetchWeather(url) {
  const cached = loadCache();
  if (cached) {
    renderCurrent(cached.current);
    renderForecast(cached.forecast);
    return;
  }

  fetch(url)
    .then(r => r.json())
    .then(data => {
      const { lat, lon } = data.coord;

      renderCurrent(data);

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&lang=id&appid=${API_KEY}`)
        .then(r => r.json())
        .then(fc => {
          renderForecast(fc.daily.slice(1, 8));
          saveCache({ current: data, forecast: fc.daily });
        });
    });
}

function searchWeather() {
  const city = document.getElementById("cityInput").value || "Jakarta";
  fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=id&appid=${API_KEY}`);
}

function getLocationWeather() {
  navigator.geolocation.getCurrentPosition(pos => {
    fetchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&lang=id&appid=${API_KEY}`);
  });
}

// auto load (Jakarta)
searchWeather();
</script>
