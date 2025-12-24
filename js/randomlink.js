<script>
const links = [
  "https://newpedia.github.io/trending.html",
  "https://newpedia.github.io/windows.html",
  "https://newpedia.github.io/starlink.html",
  "https://newpedia.github.io/spotlight",
  "https://newpedia.github.io/news/perkembangan-ai-di-indonesia.html",
  "https://newpedia.github.io/news/mbg.html",
  "https://newpedia.github.io/articles/article1.html"
];

const randomLink = links[Math.floor(Math.random() * links.length)];
window.location.replace(randomLink);
</script>
