import { getNode, getNodes } from "/lib/dom/getNode.js";

// const swiperContainer = getNode(".swiper");
const swiperWrapper = getNode(".swiper-wrapper");
const swiperSlide = getNodes(".swiper-slide");

// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  freeMode: true,
  // sticky: false,
  breakpoints: {
    520: {
      slidesPerView: 2.3,
    },
    490: {
      slidesPerView: 2.2,
    },

    480: {
      slidesPerView: 2.1,
    },
    463: {
      slidesPerView: 2,
    },
    433: {
      slidesPerView: 1.8,
    },
    400: {
      slidesPerView: 1.7,
    },
    390: {
      slidesPerView: 1.6,
    },
    360: {
      slidesPerView: 1.5,
    },
    320: {
      slidesPerView: 1.3,
    },
  },
  setWrapperSize: true,
});

swiperSlide.forEach((element) => {
  element.style.marginRight = "0";
});

// function handleActive(e) {
//   e.preventDefault();

//   let target = e.target;
//   let button = e.target.closest("button");
//   if (!button || button.classList.contains("arrow")) return;

//   let primary = getNodes("button.bg-primary");
//   console.log(primary);

//   if (!(primary.length - 1 >= 6)) {
//     button.classList.toggle("bg-primary");
//     const spans = button.querySelectorAll("span");

//     if (spans[1]) {
//       spans[1].classList.toggle("text-white");
//     }
//   } else {
//     button.classList.removeClass("bg-primary");
//   }
// }

// swiperWrapper.addEventListener("click", handleActive);

const nav = getNode("nav");
const list = getNodes("nav ul li");

function onHandleActive(e) {
  let target = e.target.closest("li");

  if (!target || !list) return;

  target.classList.add("is-activeNav");
}
nav.addEventListener("click", onHandleActive);

let count = 0;

function handleActive(e) {
  e.preventDefault();

  let target = e.target;
  let button = e.target.closest("button");
  if (!button || button.classList.contains("arrow")) return;

  let primary = getNodes("button.bg-primary");

  let keywords = button.querySelectorAll("span");

  if (!button.classList.contains("bg-primary")) {
    if (count < 5) {
      button.classList.add("bg-primary");
      keywords[1].classList.add("text-white");
      ++count;
    }
  } else {
    button.classList.remove("bg-primary");
    keywords[1].classList.remove("text-white");
    --count;
  }
}
swiperWrapper.addEventListener("click", handleActive);

const likeBtn = getNode(".like");
console.log(likeBtn);

function handleButtonActive(e) {
  let target = e.target;
  let button = e.target.closest("button");
  let likeKeyword = button.querySelectorAll("span");
  console.log(likeKeyword[1]);

  if (!target || !likeBtn) return;
  if (
    button.classList.contains("bg-primary") ||
    likeKeyword[1].classList.contains("text-white")
  ) {
    button.classList.toggle("bg-primary");
    button.classList.add("bg-gray/50");
    likeKeyword[1].classList.toggle("text-white");
    likeKeyword[1].classList.add("text-gray/500");
  } else {
    button.classList.toggle("bg-gray/50");
    button.classList.add("bg-primary");
    likeKeyword[1].classList.toggle("text-gray/500");
    likeKeyword[1].classList.add("text-white");
  }
}

likeBtn.addEventListener("click", handleButtonActive);
