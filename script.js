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
if (timeline && window.innerWidth > 768) {
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

  const rect = field.getBoundingClientRect();
  const fieldWidth = rect.width;
  const fieldHeight = rect.height;

  names.forEach((name) => {
    const isMobile = window.innerWidth < 768;
    const maxX = isMobile ? fieldWidth - 80 : fieldWidth - 150;
    const maxY = isMobile ? fieldHeight - 40 : fieldHeight - 60;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    name.style.left = `${randomX}px`;
    name.style.top = `${randomY}px`;

    const duration = 6 + Math.random() * 8;
    const delay = Math.random() * -10;
    const rotation = -5 + Math.random() * 10;

    name.style.animation = `underwaterFloat ${duration}s ease-in-out ${delay}s infinite alternate`;
    name.style.setProperty("--drift-rotation", `${rotation}deg`);
  });
}

window.addEventListener("load", initializeScatterField);
window.addEventListener("resize", initializeScatterField);
