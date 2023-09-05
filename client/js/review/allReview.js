import { getNode, getNodes } from "/lib/dom/getNode.js";

import { createReviewMap } from "/lib/index.js";

createReviewMap("#reviewMap", 37.558048589925534, 126.91122939941944);

const bar = getNode(".bar");

console.log(bar);
bar.classList.add("hidden");

function handleScroll() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollPosition > windowHeight * 0.1) {
    bar.classList.remove("hidden");
  } else {
    bar.classList.add("hidden");
  }
}

window.addEventListener("scroll", handleScroll);

const slide = new Swiper(".swiper", {
  slidesPerView: "1",
  loop: false,
  pagination: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    //반응형
    320: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
  },
});

const nav = getNode("nav");
const list = getNodes("nav ul li");

function onHandleActive(e) {
  let target = e.target.closest("li");

  if (!target || !list) return;

  target.classList.add("is-activeNav");
}
nav.addEventListener("click", onHandleActive);
