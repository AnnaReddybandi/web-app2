document.getElementById('contactBtn').addEventListener('click', () => {
    const msg = document.getElementById('contactMsg');
    msg.textContent = "Thank you for reaching out! We'll contact you soon.";
    msg.style.color = "#4a90e2";
});
