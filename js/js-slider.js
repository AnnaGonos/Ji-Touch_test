let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = document.querySelectorAll('.why-me__slide').length;

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}
