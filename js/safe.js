<script>
(function () {
  try {
    document.addEventListener("DOMContentLoaded", function () {
      var supportsES6 = (function () {
        try {
          new Function("(a = 0) => a");
          return true;
        } catch (e) {
          return false;
        }
      })();

      if (!supportsES6) {
        document.body.className += " legacy-browser";
      }
    });
  } catch (e) {}
})();
</script>
