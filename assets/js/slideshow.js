// Object to store slide indexes and intervals for each slideshow
const slideIndexes = {};
const slideIntervals = {};  // To store intervals for each slideshow

function initSlideshow(containerClass, slideClass, counterId, prevClass, nextClass) {
  slideIndexes[containerClass] = 1;
  showSlides(slideIndexes[containerClass], containerClass, slideClass, counterId);

  // Previous/Next navigation
  document.querySelector(`.${prevClass}`).addEventListener('click', () => {
    slideIndexes[containerClass] = plusSlides(slideIndexes[containerClass], -1, containerClass, slideClass, counterId);
  });
  document.querySelector(`.${nextClass}`).addEventListener('click', () => {
    slideIndexes[containerClass] = plusSlides(slideIndexes[containerClass], 1, containerClass, slideClass, counterId);
  });

  // Set interval to change slide every 2 seconds
  slideIntervals[containerClass] = setInterval(() => {
    slideIndexes[containerClass] = plusSlides(slideIndexes[containerClass], 1, containerClass, slideClass, counterId);
  }, 3000);
}

function plusSlides(currentIndex, n, containerClass, slideClass, counterId) {
  let newIndex = currentIndex + n;
  return showSlides(newIndex, containerClass, slideClass, counterId);
}

function showSlides(n, containerClass, slideClass, counterId) {
  let slides = document.querySelectorAll(`.${containerClass} .${slideClass}`);
  let totalSlides = slides.length;
  let imageCounter = document.getElementById(counterId);

  if (n > totalSlides) {n = 1}
  if (n < 1) {n = totalSlides}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[n-1].style.display = "block";
  imageCounter.innerHTML = `${n} of ${totalSlides}`;
  return n;
}

document.addEventListener('DOMContentLoaded', () => {
  initSlideshow('slideshow1', 'mySlides1', 'image-counter1', 'prev1', 'next1');
  initSlideshow('slideshow2', 'mySlides2', 'image-counter2', 'prev2', 'next2')
});
