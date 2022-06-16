// GSAP Animation
const arrow = gsap.timeline({ repeat: -1, duration: 3 });

arrow
  .fromTo(".arrow-down", { y: 0 }, { y: 10 }, "-=3")
  .fromTo(".arrow-down", { y: 10 }, { y: 0 });

// Burger Animation
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("nav-appear");
  burger.classList.toggle("toggle");
});

// Smooth Scroll Animation
const arroDown = document.querySelector(".arrow-down");
const contactBtn = document.querySelector("[data-contact]");
const servicesBtn = document.querySelector("[data-services]");
const galleryBtn = document.querySelector("[data-gallery]");
const contactBtnMobile = document.querySelector("[data-contact-mobile]");
const servicesBtnMobile = document.querySelector("[data-services-mobile]");
const galleryBtnMobile = document.querySelector("[data-gallery-mobile]");

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

arroDown.addEventListener("click", () => {
  smoothScroll("#services-section", 1000);
});

contactBtn.addEventListener("click", () => {
  smoothScroll("#contact-section", 1000);
});

servicesBtn.addEventListener("click", () => {
  smoothScroll("#services-section", 1000);
});

galleryBtn.addEventListener("click", () => {
  smoothScroll("#gallery-section", 1000);
});

contactBtnMobile.addEventListener("click", () => {
  smoothScroll("#contact-section", 1000);
  mobileNav.classList.remove("nav-appear");
  burger.classList.remove("toggle");
});

servicesBtnMobile.addEventListener("click", () => {
  smoothScroll("#services-section", 1000);
  mobileNav.classList.remove("nav-appear");
  burger.classList.remove("toggle");
});

galleryBtnMobile.addEventListener("click", () => {
  smoothScroll("#gallery-section", 1000);
  mobileNav.classList.remove("nav-appear");
  burger.classList.remove("toggle");
});
