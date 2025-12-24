/* =========================================================
   CALENDAR PRO SCRIPT (ALL-IN-ONE)
   File : calendar-pro.js
   Site : newpedia.github.io
   ========================================================= */

(function () {
  "use strict";

  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();
  var LOCALE = "id-ID";

  var monthNames = [
    "Januari","Februari","Maret","April","Mei","Juni",
    "Juli","Agustus","September","Oktober","November","Desember"
  ];

  /* ===============================
     HELPERS
     =============================== */
  function $(id) {
    return document.getElementById(id);
  }

  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  function firstDay(month, year) {
    return new Date(year, month, 1).getDay();
  }

  function hijriDate(date) {
    return new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  }

  /* ===============================
     RENDER CALENDAR
     =============================== */
  function renderCalendar(month, year) {
    $("monthYear").textContent = monthNames[month] + " " + year;
    $("hijriDate").textContent = hijriDate(new Date(year, month, 1));

    var tbl = $("calendarBody");
    tbl.innerHTML = "";

    var start = firstDay(month, year);
    var totalDays = daysInMonth(month, year);

    var date = 1;
    for (var i = 0; i < 6; i++) {
      var row = document.createElement("tr");

      for (var j = 0; j < 7; j++) {
        var cell = document.createElement("td");

        if (i === 0 && j < start) {
          cell.innerHTML = "";
        } else if (date > totalDays) {
          break;
        } else {
          cell.innerHTML = date;

          if (
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            cell.className = "today";
          }
          date++;
        }
        row.appendChild(cell);
      }
      tbl.appendChild(row);
    }
  }

  /* ===============================
     PUBLIC API
     =============================== */
  window.CalendarPro = {
    next: function () {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentMonth, currentYear);
    },

    prev: function () {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentMonth, currentYear);
    },

    today: function () {
      currentMonth = today.getMonth();
      currentYear = today.getFullYear();
      renderCalendar(currentMonth, currentYear);
    }
  };

  /* ===============================
     AUTO INIT
     =============================== */
  document.addEventListener("DOMContentLoaded", function () {
    if ($("calendarBody")) {
      renderCalendar(currentMonth, currentYear);
    }
  });
})();
