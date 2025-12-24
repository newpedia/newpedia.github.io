<script>
function watchFree() {
  const q = document.getElementById("videoQuery").value.trim();

  if (!q) {
    alert("Masukkan judul atau topik video");
    return;
  }

  const sources = [
    "https://www.youtube.com/results?search_query=",
    "https://archive.org/search.php?query=",
    "https://www.dailymotion.com/search/",
    "https://www.vimeo.com/search?q=",
    "https://www.twitch.tv/search?term="
  ];

  const randomSource = sources[Math.floor(Math.random() * sources.length)];
  window.open(randomSource + encodeURIComponent(q), "_blank");
}
</script>
