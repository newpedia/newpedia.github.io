<script>
const links = [
  "/trending.html",
  "/windows.html",
  "/starlink.html",
  "/spotlight",
  "/news/perkembangan-ai-di-indonesia.html",
  "/news/mbg.html",
  "/articles/article2.html"
];

const day = new Date().getDay();
window.location.replace(links[day % links.length]);
</script>
