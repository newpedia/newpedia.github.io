<script>
document.addEventListener("DOMContentLoaded", function () {
  var links = [
    "/trending.html",
    "/windows.html",
    "/starlink.html",
    "/spotlight",
    "/news/perkembangan-ai-di-indonesia.html"
  ];

  var nav = document.createElement("nav");
  nav.style.display = "none";

  links.forEach(function (url) {
    var a = document.createElement("a");
    a.href = url;
    a.textContent = url;
    nav.appendChild(a);
  });

  document.body.appendChild(nav);
});
</script>
