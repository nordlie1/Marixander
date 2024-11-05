// Scroll-animasjon for seksjoner
document.addEventListener('scroll', handleScrollAnimation);
document.addEventListener('DOMContentLoaded', function() {
    handleScrollAnimation(); // Initialiserer animasjoner for synlige seksjoner
    setupHamburgerMenu(); // Setter opp hamburger-menyen
    showCookieModal(); // Viser informasjonskapsel-modal ved første innlasting
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

// Funksjon for å vise informasjonskapsel-modal
function showCookieModal() {
    if (!localStorage.getItem("cookieModalClosed")) {
        const modal = document.getElementById("cookie-info-modal");
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Hindrer scrolling i bakgrunnen
        modal.focus(); // Setter fokus til modalen
    }
}

// Funksjon for å lukke informasjonskapsel-modal og lagre preferansen i localStorage
function closeCookieInfo() {
    document.getElementById("cookie-info-modal").style.display = "none";
    localStorage.setItem("cookieModalClosed", "true");
    document.body.style.overflow = "auto"; // Tillater scrolling igjen
}

// Lightbox-funksjoner
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const images = document.querySelectorAll(".gallery-item img");
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.style.display = "flex";
    document.addEventListener("keydown", handleKeyNavigation);
}

function updateLightboxImage() {
    const imageSrc = images[currentIndex].src;
    lightboxImg.src = imageSrc;
}

function closeLightbox() {
    lightbox.style.display = "none";
    document.removeEventListener("keydown", handleKeyNavigation);
}

function handleKeyNavigation(event) {
    if (event.key === "ArrowRight") {
        showNextImage();
    } else if (event.key === "ArrowLeft") {
        showPreviousImage();
    } else if (event.key === "Escape") {
        closeLightbox();
    }
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
}

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
});

console.log("Nettsiden har lastet!");


const positions = {};

function scrollGallery(galleryId, direction) {
    const gallery = document.getElementById(galleryId);
    const track = gallery.querySelector('.gallery-track');
    const itemWidth = gallery.clientWidth;

    // Lagre posisjon om ikke eksisterer
    if (!positions[galleryId]) {
        positions[galleryId] = 0;
    }

    // Oppdater posisjon
    positions[galleryId] += direction * itemWidth;

    // Begrens til start og slutt
    const maxTranslateX = -(track.scrollWidth - gallery.clientWidth);
    positions[galleryId] = Math.min(0, Math.max(positions[galleryId], maxTranslateX));

    // Bruk transform for å flytte sporet
    track.style.transform = `translateX(${positions[galleryId]}px)`;
}


