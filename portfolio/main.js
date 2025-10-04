// closing and opening burger menu

let mediaNavButton = document.querySelector('.media-nav-button');
let mediaNavButtonLine = document.querySelector('.burger-button__line');
let mediaOverlay = document.querySelector('.media-nav__overlay');

// activating mobile navigation
mediaNavButton.addEventListener('click', function () {
    // click on line
    mediaNavButtonLine.classList.toggle('active');
    //overlay active
    mediaOverlay.classList.toggle('active');


});
