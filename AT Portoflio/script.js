// ========================================
// SMOOTH SCROLLING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ========================================
// NAVBAR SCROLL EFFECT (Optimized with throttling)
// ========================================
const navbar = document.getElementById("navbar");
let lastScroll = 0;
let ticking = false;

function updateNavbar() {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateNavbar);
    ticking = true;
  }
});

// ========================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// ========================================
// TYPING ANIMATION (Optional Enhancement)
// ========================================
const typingText = document.querySelector(".typing-text");
if (typingText) {
  const text = "Machine Learning Engineer | AI Solutions";
  let index = 0;

  // Clear initial text
  typingText.textContent = "";

  function typeWriter() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 60);
    }
  }

  // Start typing animation after a short delay
  setTimeout(typeWriter, 500);
}

// ========================================
// STATS COUNTER ANIMATION
// ========================================
const statNumbers = document.querySelectorAll(".stat-number");

const animateCounter = (element) => {
  const target = element.textContent;
  const isPercentage = target.includes("%");
  const isPlus = target.includes("+");

  // Extract number
  let number = parseInt(target.replace(/[^0-9]/g, ""));

  if (isNaN(number)) return;

  const duration = 2000; // 2 seconds
  const steps = 50;
  const stepValue = number / steps;
  const stepDuration = duration / steps;

  let current = 0;
  element.textContent = "0" + (isPercentage ? "%" : "") + (isPlus ? "+" : "");

  const counter = setInterval(() => {
    current += stepValue;
    if (current >= number) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent =
        Math.floor(current) + (isPercentage ? "%" : "") + (isPlus ? "+" : "");
    }
  }, stepDuration);
};

// Create observer for stats animation
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector(".stat-number");
        if (statNumber && !statNumber.classList.contains("animated")) {
          statNumber.classList.add("animated");
          animateCounter(statNumber);
        }
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".stat-card").forEach((card) => {
  statsObserver.observe(card);
});

// ========================================
// DYNAMIC YEAR IN FOOTER
// ========================================
const yearElement = document.querySelector(".footer p");
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = yearElement.textContent.replace(
    "2026",
    currentYear,
  );
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log(
  "%c👋 Welcome to Ahmed Tantawi's Portfolio!",
  "color: #2563eb; font-size: 20px; font-weight: bold;",
);
console.log(
  "%cInterested in working together? Let's connect!",
  "color: #64748b; font-size: 14px;",
);
