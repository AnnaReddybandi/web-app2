// Button click in Module 4
document.getElementById('contactBtn').addEventListener('click', () => {
    document.getElementById('contactMsg').textContent = "Thank you! We will get back to you soon.";
});

// Smooth scrolling for navbar links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
