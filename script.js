/* Centro de Treinamento NewLife — small progressive enhancements */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Heartbeat / ECG divider ---------------------------------------- */
  // One repeating waveform unit, tiled a few times so it fills wide screens.
  var UNIT = "h120 l8 -5 l6 11 l7 -34 l7 52 l7 -30 l6 6 h44 l10 -4 l5 9 l4 -14 l4 8 h96";
  var d = "M0 46";
  for (var i = 0; i < 6; i++) d += " " + UNIT;

  document.querySelectorAll("[data-ecg]").forEach(function (host) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 1900 92");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("aria-hidden", "true");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("class", "trace");
    path.setAttribute("d", d);
    svg.appendChild(path);
    host.appendChild(svg);
  });

  /* ---- Reveal on scroll --------------------------------------------- */
  var revealables = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ---- Pause background videos when off-screen (saves battery) ------- */
  if ("IntersectionObserver" in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) { v.play && v.play().catch(function () {}); }
        else { v.pause && v.pause(); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll("video").forEach(function (v) { vio.observe(v); });
  }
})();
