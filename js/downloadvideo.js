<script>
function downloadVideo() {
  const url = document.getElementById("videoUrl").value.trim();

  if (!url) {
    alert("Masukkan URL video!");
    return;
  }

  let target = "";

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    target = "https://yt1s.com/en?q=" + encodeURIComponent(url);
  } 
  else if (url.includes("tiktok.com")) {
    target = "https://snaptik.app/?url=" + encodeURIComponent(url);
  } 
  else if (url.includes("instagram.com")) {
    target = "https://snapinsta.app/?url=" + encodeURIComponent(url);
  } 
  else if (url.includes("facebook.com") || url.includes("fb.watch")) {
    target = "https://fdown.net/?url=" + encodeURIComponent(url);
  } 
  else if (url.includes("twitter.com") || url.includes("x.com")) {
    target = "https://ssstwitter.com/?url=" + encodeURIComponent(url);
  } 
  else {
    target = "https://www.savefrom.net/?url=" + encodeURIComponent(url);
  }

  window.open(target, "_blank");
}
</script>
