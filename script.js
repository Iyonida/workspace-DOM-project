"use strict";

// sticky navigation
const navEl = document.querySelector("nav");
const heroSectionEl = document.querySelector(".hero_section");
const navElheight = navEl.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navEl.classList.add("sticky");
  } else {
    navEl.classList.remove("sticky");
  }
};

const heroSectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navElheight}px`,
});
heroSectionObserver.observe(heroSectionEl);

// smooth scrolling
navEl.addEventListener("click", function (e) {
  e.preventDefault();

  if (!e.target.classList.contains("nav_link")) return;
  else {
    document
      .querySelector(`${e.target.getAttribute("href")}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});

// scroll back to top
const toTopBtnEl = document.querySelector(".to_top_btn");
const section4El = document.querySelector("#section4");

toTopBtnEl.addEventListener("click", () => {
  heroSectionEl.scrollIntoView({ behavior: "smooth" });
});

// show scroll to top button
const showToTopBtn = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    toTopBtnEl.classList.remove("hidden");
  } else {
    toTopBtnEl.classList.add("hidden");
  }
};

const sectionObsever = new IntersectionObserver(showToTopBtn, {
  root: null,
  threshold: 0,
});
sectionObsever.observe(section4El);

// modal form
const formContainerEl = document.querySelector(".modal_form_container");
const overlayEl = document.querySelector(".overlay");
const signUpBtn = document.querySelector(".sign_up_btn");
const closeBtn = document.querySelector(".close_btn");

const toggleModal = function (action) {};

signUpBtn.addEventListener("click", function () {
  overlayEl.classList.remove("hidden");
  formContainerEl.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  overlayEl.classList.add("hidden");
  formContainerEl.classList.add("hidden");
});
