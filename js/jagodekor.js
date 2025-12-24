<script>
var blogUrl = "https://jagodekor.blogspot.com";
var maxResults = 500;

function loadLabels() {
  var url = blogUrl + "/feeds/posts/default?alt=json&max-results=" + maxResults;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      var posts = data.feed.entry;
      var labels = {};

      posts.forEach(post => {
        if (post.category) {
          post.category.forEach(cat => {
            var label = cat.term;
            if (!labels[label]) labels[label] = [];
            labels[label].push(post);
          });
        }
      });

      renderSitemap(labels);
    });
}

function renderSitemap(labels) {
  var html = "";
  for (var label in labels) {
    html += `<h2 class="label-title">${label}</h2>`;
    html += `<ul class="post-list">`;

    labels[label].forEach(post => {
      var title = post.title.$t;
      var link = post.link.find(l => l.rel === "alternate").href;
      var date = new Date(post.published.$t).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });

      html += `
        <li>
          <a href="${link}">${title}</a>
          <span class="post-date">🗓 ${date}</span>
        </li>`;
    });

    html += `</ul>`;
  }
  document.getElementById("sitemap-content").innerHTML = html;
}

loadLabels();
</script>
