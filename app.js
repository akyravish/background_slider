// jshint esversion:6

const body = document.body;
const slides = document.querySelectorAll('.slide');
const lArrow = document.getElementById('left');
const RArrow = document.getElementById('right');

let slideCount = 0;

const bcSlideChange = () => {
	body.style.backgroundImage = slides[slideCount].style.backgroundImage;
};

bcSlideChange();
