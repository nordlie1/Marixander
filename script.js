// Scroll-animasjon for seksjoner
document.addEventListener('scroll', handleScrollAnimation);
document.addEventListener('DOMContentLoaded', function() {
    handleScrollAnimation(); // Initialiserer animasjoner for synlige seksjoner
    setupHamburgerMenu(); // Setter opp hamburger-menyen
    showCookieModal(); // Viser informasjonskapsel-modal ved første innlasting

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

    // Klikkhendelser for lysbokspilene
    document.querySelector('.prev').addEventListener('click', showPreviousImage);
    document.querySelector('.next').addEventListener('click', showNextImage);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    images.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index));
    });
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



// Konsollutskrift for å bekrefte innlasting
console.log("Nettsiden har lastet!");

// Velg lightbox og bildeelementer
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const galleryItems = document.querySelectorAll('.gallery-item img');

// Funksjon for å åpne lightbox med valgt bilde
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
    });
});

// Lukk lightbox ved klikk på X-knappen eller utenfor bildet
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Navigasjonspiler for å bla mellom bilder
function showNextImage() {
    const currentIndex = Array.from(galleryItems).indexOf(document.querySelector(`img[src="${lightboxImg.src}"]`));
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[nextIndex].src;
}

function showPreviousImage() {
    const currentIndex = Array.from(galleryItems).indexOf(document.querySelector(`img[src="${lightboxImg.src}"]`));
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[prevIndex].src;
}

// Lytter på piltastene for navigasjon
document.addEventListener('keydown', (event) => {
    if (lightbox.style.display === 'flex') {
        if (event.key === 'ArrowRight') showNextImage();
        if (event.key === 'ArrowLeft') showPreviousImage();
        if (event.key === 'Escape') closeLightbox();
    }
});
// Funksjon for å lukke lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Klikk på bakgrunnen i lightbox for å lukke
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) { // Sjekk at man klikker på bakgrunnen, ikke bildet
        closeLightbox();
    }
});
