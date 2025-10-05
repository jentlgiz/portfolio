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
    // no-scroll behind the open menu activation
    document.body.classList.toggle('no-scroll');
});

    // click on overlay around navigation
    mediaOverlay.addEventListener('click', function () {
        turnOffMediaNav()
    });

    mediaBarNav.addEventListener('click', function () {
        turnOffMediaNav()
    });

    // turn off mobile navigation on link click
    mediaBarNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            turnOffMediaNav()
        });
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

        // turn off no-scroll
        if (document.body.classList.contains('no-scroll')) {
            document.body.classList.remove('no-scroll');
        }
};

// accordion

const accordionBoxHeader = document.querySelectorAll('[data-box]');
const accordionBoxAnswer = document.querySelectorAll('[data-box-content]');

accordionBoxHeader.forEach(function (item) {
    item.addEventListener('click', function () {
        accordionBoxAnswer.forEach(function (item) {
            item.classList.add('panel-answer__active');
        });
        const accordionBox = document.querySelector('#' + this.dataset.box);
        accordionBox.classList.remove('panel-answer__active');
    })
})

// accordionBoxHeader.forEach(function (item) {
//     item.addEventListener('click', function () {
//         accordionBoxAnswer.forEach(function (item) {
//             item.classList.contains('panel-answer__active');
//         });
//         const accordionBox = document.querySelector('#' + this.dataset.box);
//         accordionBox.classList.remove('panel-answer__active');
//     })
// })

// not finished


// modal

const modalButton = document.querySelectorAll('[data-modal]');
// console.log(modalButton);
const modalButtonWindow = document.querySelector('[data-modal-button]');
const modalCloseButton = document.querySelector('[data-close]');

modalButton.forEach(function (item) {
    item.addEventListener('click', function () {
        modalButtonWindow.classList.remove('price-card__modal-active');
        document.body.classList.add('no-scroll');
    });
})

modalCloseButton.addEventListener('click', function () {
    modalButtonWindow.classList.add('price-card__modal-active');
    document.body.classList.remove('no-scroll');
})

modalButtonWindow.addEventListener('click', function () {
    modalButtonWindow.classList.add('price-card__modal-active');
    document.body.classList.remove('no-scroll');
})

// modal - invisible to clicks inside window

modalButtonWindow.querySelector('.price-card__modal-window').addEventListener('click', function (event) {
    event.stopPropagation();
})


// slider

const slider = document.querySelector('.slider');
const slideLeft = document.querySelector('.slider-left');
const slideRight = document.querySelector('.slider-right');
let slideIndex = 0;

slideLeft.addEventListener('mousemove', slideLeftSide);
slideRight.addEventListener('mousemove', slideRightSide);

function slideLeftSide() {
    slideIndex = (slideIndex - 1 + slider.scrollBy(250, 0));
}

function slideRightSide() {
    slideIndex = (slideIndex - 1 + slider.scrollBy(-250, 0));
}
