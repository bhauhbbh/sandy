document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.gallery img');
    const overlay = document.getElementById('fullscreenOverlay');
    const overlayImg = document.getElementById('overlayImg');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentImageIndex;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            overlay.style.display = "flex";
            overlayImg.src = img.src;
            currentImageIndex = index;
        });
    });

    close.addEventListener('click', () => {
        overlay.style.display = "none";
    });

    prev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        overlayImg.src = images[currentImageIndex].src;
    });

    next.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        overlayImg.src = images[currentImageIndex].src;
    });
    
    document.addEventListener('keydown', function(event) {
        if (overlay.style.display === "flex") {
            if (event.key === "ArrowLeft") {
                prev.click();
            } else if (event.key === "ArrowRight") {
                next.click();
            } else if (event.key === "Escape") {
                close.click();
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
});