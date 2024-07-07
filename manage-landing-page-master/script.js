document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.getElementById('next-btn');
    const prevButton = document.getElementById('previous-btn');
    const testimonyContainer = document.getElementById('testimony-container');
    const testimonies = document.querySelectorAll('.testimony-box');

    let currentIndex = 0;

    function updateTestimoniesPerView() {
        return window.innerWidth <= 700 ? 1 : 1;
    }

    function showTestimonials(index) {
        const testimoniesPerView = updateTestimoniesPerView();
        const offset = -index * (300 / testimoniesPerView); // Adjust offset for the number of testimonies per view
        testimonyContainer.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => {
        const testimoniesPerView = updateTestimoniesPerView();
        currentIndex = (currentIndex + 1) % Math.ceil(testimonies.length / testimoniesPerView);
        showTestimonials(currentIndex * testimoniesPerView);
    });

    prevButton.addEventListener('click', () => {
        const testimoniesPerView = updateTestimoniesPerView();
        currentIndex = (currentIndex - 1 + Math.ceil(testimonies.length / testimoniesPerView)) % Math.ceil(testimonies.length / testimoniesPerView);
        showTestimonials(currentIndex * testimoniesPerView);
    });

    window.addEventListener('resize', () => {
        showTestimonials(currentIndex * updateTestimoniesPerView()); // Adjust the view when window is resized
    });

    // Show the first set of testimonials initially
    showTestimonials(currentIndex * updateTestimoniesPerView());
});

const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".hamburger");

const overflow = document.querySelector(".overflow");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("close-menu");

  navLinks.classList.toggle("active");
  overflow.classList.toggle("active");
});
