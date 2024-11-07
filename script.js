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
            event.preventDefault();
            event.stopPropagation();

            const dropdownMenu = this.nextElementSibling;
            const isDropdownVisible = dropdownMenu.classList.contains("show");

            closeAllDropdowns(); // Lukk alle dropdowns først

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

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightbox.style.display = "flex";
        document.addEventListener("keydown", handleKeyNavigation);
    }

    function closeLightbox() {
        lightbox.style.display = "none";
        document.removeEventListener("keydown", handleKeyNavigation);
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    function handleKeyNavigation(event) {
        if (event.key === "ArrowRight") showNextImage();
        else if (event.key === "ArrowLeft") showPreviousImage();
        else if (event.key === "Escape") closeLightbox();
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index));
    });

    document.querySelector(".close").addEventListener("click", closeLightbox);
    document.querySelector(".next").addEventListener("click", showNextImage);
    document.querySelector(".prev").addEventListener("click", showPreviousImage);

    // Swipe-funksjonalitet for mobil
    lightbox.addEventListener("touchstart", startTouch, false);
    lightbox.addEventListener("touchmove", moveTouch, false);

    let initialX = null;

    function startTouch(e) {
        initialX = e.touches[0].clientX;
    }

    function moveTouch(e) {
        if (initialX === null) return;

        let currentX = e.touches[0].clientX;
        let diffX = initialX - currentX;

        if (diffX > 0) {
            showNextImage();
        } else {
            showPreviousImage();
        }
        initialX = null;
    }
});
