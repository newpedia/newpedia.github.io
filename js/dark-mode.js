<script>
(function () {
  const key = "newpedia_dark_mode";
  const btn = document.getElementById("darkToggle");

  // detect system preference
  const systemDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // load saved mode
  const saved = localStorage.getItem(key);

  if (saved === "dark" || (!saved && systemDark)) {
    document.body.classList.add("dark");
    if (btn) btn.textContent = "☀️ Light Mode";
  }

  if (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark");

      const isDark = document.body.classList.contains("dark");
      localStorage.setItem(key, isDark ? "dark" : "light");

      btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
  }
})();
</script>
