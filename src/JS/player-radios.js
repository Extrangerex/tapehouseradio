// MenuMobile

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.menu1').toggleClass('isOpen')
    });
});

// Déroulant favorites

const favoritesBtn = document.querySelector('.favorites-btn');
let favoritesOpen = false;
favoritesBtn.addEventListener('click', () => {
    if(!favoritesOpen) {
        favoritesBtn.classList.add('open');
        favoritesOpen = false;
    } else {
        favoritesBtn.classList.remove('open');
        favoritesOpen = true;
    }
});

$(document).ready(function(){
    $('.favorites-btn').click(function(){
        $('.favorites-radios').toggleClass('isOpen')
    });
});

// Déroulant last

const lastBtn = document.querySelector('.last-btn');
let lastOpen = false;
lastBtn.addEventListener('click', () => {
    if(!lastOpen) {
        lastBtn.classList.add('open');
        lastOpen = false;
    } else {
        lastBtn.classList.remove('open');
        lastOpen = true;
    }
});

$(document).ready(function(){
    $('.last-btn').click(function(){
        $('.last-radios').toggleClass('isOpen')
    });
});

// Déroulant radios

const radiosBtn = document.querySelector('.radios-btn');
let radiosOpen = false;
radiosBtn.addEventListener('click', () => {
    if(!radiosOpen) {
        radiosBtn.classList.add('open');
        radiosOpen = true;
    } else {
        radiosBtn.classList.remove('open');
        radiosOpen = false;
    }
});

$(document).ready(function(){
    $('.radios-btn').click(function(){
        $('.deroulant-radios').toggleClass('isOpen')
    });
});

// QuitMenu

/* QuitLastBtn */
const btnOne = document.querySelector('.btn-one');
let openOne = false;
btnOne.addEventListener('click', () => {
    if(!openOne) {
        favoritesBtn.classList.add('open');
        openOne = true;
    } else {
        btnOne.classList.remove('open');
        favoritesOpen = false;
    }
});

$(document).ready(function(){
    $('.btn-one').click(function(){
        $('.favorites-radios').toggleClass('isOpen')
    });
});

/* QuitFavoritesBtn */
const btnTwo = document.querySelector('.btn-two');
let openTwo = false;
btnTwo.addEventListener('click', () => {
    if(!openTwo) {
        lastBtn.classList.add('open');
        openTwo = true;
    } else {
        btnTwo.classList.remove('open');
        lastOpen = false;
    }
});

$(document).ready(function(){
    $('.btn-two').click(function(){
        $('.last-radios').toggleClass('isOpen')
    });
});

/* QuitRadioBtn */
const btnThree = document.querySelector('.btn-three');
let openThree = false;
btnThree.addEventListener('click', () => {
    if(!openThree) {
        radiosBtn.classList.add('openThree');
        openThree = true;
    } else {
        btn.classList.remove('openThree');
        radiosOpen = false;
    }
});

$(document).ready(function(){
    $('.btn-three').click(function(){
        $('.deroulant-radios').toggleClass('isOpen')
    });
});