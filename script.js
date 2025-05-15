// Form handling

const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');
let currentIndex = 0;
let interval = setInterval(showNextTestimonial, 5000);

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

function showNextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function showPrevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

nextBtn.addEventListener('click', () => {
  showNextTestimonial();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  showPrevTestimonial();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(showNextTestimonial, 5000);
}
let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-slide");
let dots = document.getElementsByClassName("dot");
let timer = null;

function showSlides(n) {
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

function nextSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function startTimer() {
  timer = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

// Initialize
showSlides(slideIndex);
startTimer();

// Event listeners
document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetTimer();
});

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetTimer();
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function() {
    currentSlide(parseInt(this.getAttribute('data-slide')));
    resetTimer();
  });
}
