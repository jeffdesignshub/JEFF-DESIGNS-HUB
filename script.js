// Welcome message
window.onload = function() {
    alert("Welcome to JEFF DESIGNS HUB! Where Creativity Meets Perfection.");
}

// Animate services on scroll
const serviceElements = document.querySelectorAll('.service');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    serviceElements.forEach(service => {
        const serviceTop = service.getBoundingClientRect().top;

        if (serviceTop < triggerBottom) {
            service.classList.add('show');
        }
    });
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form alert
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
});
