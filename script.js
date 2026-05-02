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
      timeline.scrollBy({
        left: evt.deltaY * 2,
        behavior: "auto",
      });
    }
  });
}

window.addEventListener("scroll", () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-progress").style.width = scrolled + "%";
});

const container = document.querySelector(".timeline-container");
if (container) {
  container.style.setProperty("--line-width", `${container.scrollWidth}px`);
}

function initializeScatterField() {
  const field = document.getElementById("donor-field");
  if (!field) return;

  const names = field.querySelectorAll(".float-name");
  const fieldWidth = field.offsetWidth;
  const fieldHeight = field.offsetHeight;

  names.forEach((name) => {
    const randomX = Math.random() * (fieldWidth - 150);
    const randomY = Math.random() * (fieldHeight - 50);

    const randomDelay = Math.random() * -20;
    const randomDuration = 5 + Math.random() * 10;
    const randomRotation = -5 + Math.random() * 10;

    name.style.left = `${randomX}px`;
    name.style.top = `${randomY}px`;

    name.style.animation = `underwaterFloat ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;

    name.style.setProperty("--drift-rotation", `${randomRotation}deg`);
  });
}

window.addEventListener("load", initializeScatterField);
window.addEventListener("resize", initializeScatterField);
