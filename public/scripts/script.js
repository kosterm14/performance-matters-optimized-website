const track = document.querySelector(".carousel-list");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button-right");
const prevButton = document.querySelector(".carousel-button-left");

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
});

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
});

// Minicursus basisvormen
const track2 = document.querySelector('.carousel__track');
const slides2 = Array.from(track.children);
const nextButton2 = document.querySelector('.carousel__button--right');
const prevButton2 = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides2[0].getBoundingClientRect().width;

slides2.forEach(setSlidePosition);

const moveToSlide2 = (track2, currentSlide, targetSlide) => {
  track2.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

prevButton.addEventListener("click", (e) => {
  const currentSlide = track2.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide2(track2, currentSlide, prevSlide);
});

nextButton.addEventListener("click", (e) => {
  const currentSlide = track2.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide2(track2, currentSlide, nextSlide);
});

//load more button : tekenmethodes
