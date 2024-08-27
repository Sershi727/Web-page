let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Убираем активный класс у всех слайдов
    if (i === index) {
      slide.classList.add('active'); // Добавляем активный класс только к текущему слайду
    }
  });
  document.getElementById('current').textContent = index + 1;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Инициализация первого слайда
showSlide(currentSlide);

