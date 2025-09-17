// script.js
document.addEventListener("DOMContentLoaded", function () {
  // only internal anchors like #education, #skills, etc.
  const links = document.querySelectorAll('nav ul li a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
