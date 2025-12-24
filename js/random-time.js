<script>
const links = [
  "/trending.html",
  "/windows.html",
  "/starlink.html",
  "/spotlight",
  "/news/mbg.html"
];

setTimeout(() => {
  const random = links[Math.floor(Math.random() * links.length)];
  window.location.href = random;
}, 3000);
</script>
