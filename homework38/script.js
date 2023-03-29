const sliderContainer = document.querySelector('.slider-container');
const prevButton = sliderContainer.querySelector('.prev-button');
const nextButton = sliderContainer.querySelector('.next-button');
const sliderImages = sliderContainer.querySelectorAll('.slider-image');
let currentImageIndex = 0;

function showImage(index) {
  sliderImages.forEach(image => image.style.display = 'none');
  sliderImages[index].style.display = 'block';

  if (index === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (index === sliderImages.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

showImage(currentImageIndex);

prevButton.addEventListener('click', () => {
  currentImageIndex--;
  showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
  currentImageIndex++;
  showImage(currentImageIndex);
});
