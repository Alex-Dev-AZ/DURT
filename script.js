const link2025 = document.getElementById("link-2025");
const link2026 = document.getElementById("link-2026");
const currentPath = window.location.pathname;

if (currentPath.includes("2025")) {
  link2025.classList.add("nav-active-state");
  link2026.classList.remove("nav-active-state");
} else {
  link2026.classList.add("nav-active-state");
  link2025.classList.remove("nav-active-state");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const timeline = document.querySelector(".timeline-container");
if (timeline) {
  timeline.addEventListener("wheel", (evt) => {
    if (evt.deltaY !== 0) {
      evt.preventDefault();
      timeline.scrollLeft += evt.deltaY;
    }
  });
}
