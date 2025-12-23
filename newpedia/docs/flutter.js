// flutter.js stub loader for Flutter web
var _flutter = (_flutter || {});

(function() {
  // Minimal stub runner - Flutter CLI will generate actual contents
  _flutter.loader = {
    loadEntrypoint: function(config) {
      return new Promise(function(resolve, reject) {
        // Wait for main.dart.js to load
        var script = document.createElement('script');
        script.src = "main.dart.js";
        script.type = "application/javascript";
        script.onload = function() {
          resolve(window.flutterWebEntrypoint);
        };
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }
  };
})();
