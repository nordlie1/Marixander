// Scroll-animasjon for seksjoner
document.addEventListener('scroll', handleScrollAnimation);
document.addEventListener('DOMContentLoaded', function() {
    handleScrollAnimation(); // Initialiserer animasjoner for synlige seksjoner
    setupHamburgerMenu(); // Setter opp hamburger-menyen
});

// Håndterer scroll-animasjoner
function handleScrollAnimation() {
    const animatedSections = document.querySelectorAll('.animate-on-scroll');
    const triggerPoint = window.innerHeight - 100;

    animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
}

// Setter opp hamburger-menyen
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const images = document.querySelectorAll(".gallery-item img");
let currentIndex = 0;

// Åpne lysboksen og sett riktig bilde
function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.style.display = "flex";
    document.addEventListener("keydown", handleKeyNavigation);
}

// Oppdater bilde i lysboksen
function updateLightboxImage() {
    const imageSrc = images[currentIndex].src;
    lightboxImg.src = imageSrc;
}

// Lukk lysboksen
function closeLightbox() {
    lightbox.style.display = "none";
    document.removeEventListener("keydown", handleKeyNavigation);
}

// Håndter tastatur for navigasjon
function handleKeyNavigation(event) {
    if (event.key === "ArrowRight") {
        showNextImage();
    } else if (event.key === "ArrowLeft") {
        showPreviousImage();
    } else if (event.key === "Escape") {
        closeLightbox();
    }
}

// Vis neste og forrige bilde
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
}

// Klikk utenfor bildet lukker lysboksen
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Legg til event listeners på bilder
images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
});
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    // Lagre brukerens samtykke i localStorage
    localStorage.setItem('cookiesAccepted', 'true');
}

function showCookieInfo() {
    document.getElementById('cookie-info-modal').style.display = 'block';
}

function closeCookieInfo() {
    document.getElementById('cookie-info-modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
});
localStorage.setItem('cookiesAccepted', 'true');
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
});

