<button onclick="randomGo()">Buka Artikel Acak</button>

<script>
function randomGo() {
  const links = [
    "/news/mbg.html",
    "/news/buku.html",
    "/news/liburan.html",
    "/articles/article3.html"
  ];
  const random = links[Math.floor(Math.random() * links.length)];
  window.location.href = random;
}
</script>
