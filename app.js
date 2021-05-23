// jshint esversion:6

const body = document.body;
const slides = document.querySelectorAll('.slide');
const lArrow = document.getElementById('left');
const rArrow = document.getElementById('right');

let slideCount = 0;

const bcSlideChange = () => {
	body.style.backgroundImage = slides[slideCount].style.backgroundImage;
};

const slideChange = () => {
	slides.forEach((slide) => slide.classList.remove('active'));

	slides[slideCount].classList.add('active');
};

bcSlideChange();
slideChange();

rArrow.addEventListener('click', () => {
	slideCount++;
	if (slideCount > slides.length - 1) {
		slideCount = 0;
	}

	bcSlideChange();
	slideChange();
});

lArrow.addEventListener('click', () => {
	slideCount--;
	if (slideCount < 0) {
		slideCount = slides.length - 1;
	}

	bcSlideChange();
	slideChange();
});
