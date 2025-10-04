// closing and opening burger menu

const mediaNavButton = document.querySelector('.media-nav-button');
const mediaNavButtonLine = document.querySelector('.burger-button__line');
const mediaOverlay = document.querySelector('.media-nav__overlay');
const mediaBar = document.querySelector('.media-nav__bar');
const mediaBarNav = document.querySelector('.media-nav__bar-content');

// activating mobile navigation
mediaNavButton.addEventListener('click', function () {
    // click on line
    mediaNavButtonLine.classList.toggle('active');
    // overlay active
    mediaOverlay.classList.toggle('active');
    // media navigation bar activation
    mediaBar.classList.toggle('active');
});

    // click on overlay around navigation
    mediaOverlay.addEventListener('click', function () {
        turnOffMediaNav()
    });

    mediaBarNav .addEventListener('click', function () {
        turnOffMediaNav()
    });

function turnOffMediaNav() {
        // turn off a burger button
        if (mediaNavButtonLine.classList.contains('active')) {
            mediaNavButtonLine.classList.remove('active');
        }

        // turn off overlay
        if (mediaOverlay.classList.contains('active')){
            mediaOverlay.classList.remove('active');
        }

        // turn off media navigation bar
        if (mediaBar.classList.contains('active')){
            mediaBar.classList.remove('active');
        }
};



