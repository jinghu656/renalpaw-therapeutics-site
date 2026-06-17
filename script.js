const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const revealTargets = document.querySelectorAll(
  ".section-heading, .problem-card, .pipeline-step, .map-card, .revenue-card, .funding-bars div, .roadmap article, .contact-card"
);

revealTargets.forEach((target) => target.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.1,
  }
);

revealTargets.forEach((target) => revealObserver.observe(target));

const header = document.querySelector(".site-header");

window.addEventListener(
  "scroll",
  () => {
    if (!header) return;
    header.style.transform = window.scrollY > 12 ? "translateY(-4px)" : "translateY(0)";
  },
  { passive: true }
);
