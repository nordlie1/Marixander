// Scroll-animasjon for seksjoner
document.addEventListener('scroll', handleScrollAnimation);

document.addEventListener('DOMContentLoaded', function() {
    handleScrollAnimation(); // Initialiserer animasjoner for synlige seksjoner
    setupHamburgerMenu(); // Setter opp hamburger-menyen

    // Lightbox-funksjoner
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const images = document.querySelectorAll(".gallery-item img");
    let currentIndex = 0;

    if (lightbox && lightboxImg && images.length) {
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
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        if (prevButton) prevButton.addEventListener('click', showPreviousImage);
        if (nextButton) nextButton.addEventListener('click', showNextImage);

        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        images.forEach((img, index) => {
            img.addEventListener("click", () => openLightbox(index));
        });
    }
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
    const menu = document.getElementById("mobileMenu");

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }
}

// Funksjon for å veksle menyvisningen ved klikk på hamburger-ikonet
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
        menu.classList.toggle("show");
    }
}

// Konsollutskrift for å bekrefte innlasting
console.log("Nettsiden har lastet!");

// Funksjon for å lukke lightbox, kun definert om det finnes en lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    // Legg til funksjonalitet for å tilpasse etter skjermbredden hvis nødvendig
});

document.addEventListener('DOMContentLoaded', function() {
    // Setter opp hamburger-menyen
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
        });
    }
});

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
        menu.classList.toggle("show");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll("#mobileMenu ul.menu li.dropdown > span");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function() {
            const parentLi = this.parentElement;
            parentLi.classList.toggle("active");
        });
    });
});
// Funksjon for å vise dropdown på mobil
document.querySelectorAll('.dropdown > span').forEach(item => {
    item.addEventListener('click', () => {
        const dropdownMenu = item.nextElementSibling;
        dropdownMenu.classList.toggle('show');
    });
});
// Funksjon for å vise dropdown på mobil
document.querySelectorAll('.dropdown > span').forEach(item => {
    item.addEventListener('click', event => {
        event.stopPropagation(); // Hindre at klikk utenfor menyen lukker den umiddelbart
        const dropdownMenu = item.nextElementSibling;
        dropdownMenu.classList.toggle('show');
    });
});

// Lukk dropdown og mobilmeny når du klikker utenfor
document.addEventListener('click', event => {
    const mobileMenu = document.getElementById("mobileMenu");
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isHamburger = document.querySelector('.hamburger').contains(event.target);

    if (!isClickInsideMenu && !isHamburger) {
        document.querySelectorAll('.dropdown .dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
        mobileMenu.classList.remove("show");
    }
});

