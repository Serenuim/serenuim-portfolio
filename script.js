const typewriterText = document.getElementById("typewriter");
const phrases = [
  "Backend Engineer",
  "Data Analyst",
  "Python Developer",
  "FastAPI & AWS"
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting && letterIndex <= currentPhrase.length) {
    typewriterText.textContent = currentPhrase.slice(0, letterIndex);
    letterIndex++;
    setTimeout(typeLoop, 95);
    return;
  }

  if (!isDeleting && letterIndex > currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeLoop, 1200);
    return;
  }

  if (isDeleting && letterIndex >= 0) {
    typewriterText.textContent = currentPhrase.slice(0, letterIndex);
    letterIndex--;
    setTimeout(typeLoop, 55);
    return;
  }

  if (isDeleting && letterIndex < 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeLoop, 150);
  }
}

typeLoop();

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
