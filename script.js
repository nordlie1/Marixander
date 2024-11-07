document.addEventListener("DOMContentLoaded", function() {
    // Håndter hamburger-menyen
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", function(event) {
            event.stopPropagation();
            mobileMenu.classList.toggle("show");
        });
    }

    // Funksjon for å lukke alle åpne dropdown-menyene
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown .dropdown-menu').forEach(menu => menu.classList.remove('show'));
    }

    // Lukk mobilmeny og dropdowns når du klikker utenfor dem
    document.addEventListener("click", function(event) {
        if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
            mobileMenu.classList.remove("show");
            closeAllDropdowns(); // Lukk alle åpne dropdowns
        }
    });

    // Håndter dropdown-menyene for "Portfolio" og "Tjenester"
    const dropdownLinks = document.querySelectorAll(".menu .dropdown > .non-clickable");

    dropdownLinks.forEach(dropdownLink => {
        dropdownLink.addEventListener("click", function(event) {
            event.preventDefault(); // Forhindrer standard klikk-handling for lenken
            event.stopPropagation();

            const dropdownMenu = this.nextElementSibling;
            const isDropdownVisible = dropdownMenu.classList.contains("show");

            closeAllDropdowns(); // Lukk alle dropdowns først

            // Åpne dropdown bare hvis den ikke allerede er åpen
            if (!isDropdownVisible) {
                dropdownMenu.classList.add("show");
            }
        });
    });

    // Lightbox-funksjonalitet for galleribilder
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
            lightboxImg.src = images[currentIndex].src;
        }

        function closeLightbox() {
            lightbox.style.display = "none";
            document.removeEventListener("keydown", handleKeyNavigation);
        }

        function handleKeyNavigation(event) {
            if (event.key === "ArrowRight") showNextImage();
            else if (event.key === "ArrowLeft") showPreviousImage();
            else if (event.key === "Escape") closeLightbox();
        }

        function showNextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateLightboxImage();
        }

        function showPreviousImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateLightboxImage();
        }

        document.querySelector('.prev').addEventListener('click', showPreviousImage);
        document.querySelector('.next').addEventListener('click', showNextImage);

        lightbox.addEventListener("click", event => {
            if (event.target === lightbox) closeLightbox();
        });

        images.forEach((img, index) => img.addEventListener("click", () => openLightbox(index)));
    }
});
