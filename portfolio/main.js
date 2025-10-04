// closing and opening burger menu

const mediaNavButton = document.querySelector('.media-nav-button');
const mediaNavButtonLine = document.querySelector('.burger-button__line');
const mediaOverlay = document.querySelector('.media-nav__overlay');
const mediaBar = document.querySelector('.media-nav__bar');

// activating mobile navigation
mediaNavButton.addEventListener('click', function () {
    // click on line
    mediaNavButtonLine.classList.toggle('active');
    // overlay active
    mediaOverlay.classList.toggle('active');
    // media navigation bar activation
    mediaBar.classList.toggle('active');
});
