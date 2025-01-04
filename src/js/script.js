/* menu */
const toggle = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__menu");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        toggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}

/* carrousel */
const carousel = document.querySelector(".film-gallery__carousel");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".film-gallery__card");

if (carousel && prevButton && nextButton && premierItem) {
    prevButton.addEventListener("click", () => {
        const scrollAmount = premierItem.clientWidth + 20;
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        const scrollAmount = premierItem.clientWidth + 20;
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}
