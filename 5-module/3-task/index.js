function initCarousel() {
  // код карусели
  let carouselInner = document.querySelector('.carousel__inner');
  let slides = document.querySelectorAll('.carousel__slide');
  let prevButton = document.querySelector('.carousel__arrow_left');
  let nextButton = document.querySelector('.carousel__arrow_right');
  let slideWidth = slides[0].offsetWidth;
  let currentSlide = 0;

  function checkButtons() {
    if (currentSlide === 0) {
      prevButton.style.display = 'none';
    } else {
      prevButton.style.display = '';
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = '';
    }
  }

  prevButton.addEventListener('click', function() {
    if (currentSlide > 0) {
      currentSlide--;
      carouselInner.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
      checkButtons();
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      carouselInner.style.transform = 'translateX(' + (-slideWidth * currentSlide) + 'px)';
      checkButtons();
    }
  });

  checkButtons();
}
