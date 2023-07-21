// JavaScript for the first slider
let currentSlide1 = 0;
const slides1 = document.querySelectorAll('#slider1 img');
const totalSlides1 = slides1.length;

function showSlide1(slideIndex) {
  slides1.forEach((slide) => (slide.style.display = 'none'));
  slides1[slideIndex].style.display = 'block';

  // Remove active class from all boxes
  for (let i = 0; i < totalSlides1; i++) {
    const box = document.getElementById(`box1-${i}`);
    box.classList.remove('active');
  }

  // Add active class to the clicked box
  const box = document.getElementById(`box1-${slideIndex}`);
  box.classList.add('active');
}

function changeSlide1(n) {
  currentSlide1 = n;
  if (currentSlide1 >= totalSlides1) {
    currentSlide1 = 0;
  } else if (currentSlide1 < 0) {
    currentSlide1 = totalSlides1 - 1;
  }
  showSlide1(currentSlide1);
}

showSlide1(currentSlide1);

// JavaScript for the second slider
let currentSlide2 = 0;
const slides2 = document.querySelectorAll('#slider2 img');
const totalSlides2 = slides2.length;

function showSlide2(slideIndex) {
  slides2.forEach((slide) => (slide.style.display = 'none'));
  slides2[slideIndex].style.display = 'block';

  // Remove active class from all boxes
  for (let i = 0; i < totalSlides2; i++) {
    const box = document.getElementById(`box2-${i}`);
    box.classList.remove('active');
  }

  // Add active class to the clicked box
  const box = document.getElementById(`box2-${slideIndex}`);
  box.classList.add('active');
}

function changeSlide2(n) {
  currentSlide2 = n;
  if (currentSlide2 >= totalSlides2) {
    currentSlide2 = 0;
  } else if (currentSlide2 < 0) {
    currentSlide2 = totalSlides2 - 1;
  }
  showSlide2(currentSlide2);
}

showSlide2(currentSlide2);

// JavaScript for the third slider
let currentSlide3 = 0;
const slides3 = document.querySelectorAll('#slider3 img');
const totalSlides3 = slides3.length;

function showSlide3(slideIndex) {
slides3.forEach((slide) => (slide.style.display = 'none'));
slides3[slideIndex].style.display = 'block';

// Remove active class from all boxes
for (let i = 0; i < totalSlides3; i++) {
  const box = document.getElementById(`box3-${i}`);
  box.classList.remove('active');
}

// Add active class to the clicked box
const box = document.getElementById(`box3-${slideIndex}`);
box.classList.add('active');
}

function changeSlide3(n) {
currentSlide3 = n;
if (currentSlide3 >= totalSlides3) {
  currentSlide3 = 0;
} else if (currentSlide3 < 0) {
  currentSlide3 = totalSlides3 - 1;
}
showSlide3(currentSlide3);
}

showSlide3(currentSlide3);

// JavaScript for the fourth slider
let currentSlide4 = 0;
const slides4 = document.querySelectorAll('#slider4 img');
const totalSlides4 = slides4.length;

function showSlide4(slideIndex) {
slides4.forEach((slide) => (slide.style.display = 'none'));
slides4[slideIndex].style.display = 'block';

// Remove active class from all boxes
for (let i = 0; i < totalSlides4; i++) {
  const box = document.getElementById(`box4-${i}`);
  box.classList.remove('active');
}

// Add active class to the clicked box
const box = document.getElementById(`box4-${slideIndex}`);
box.classList.add('active');
}

function changeSlide4(n) {
currentSlide4 = n;
if (currentSlide4 >= totalSlides4) {
  currentSlide4 = 0;
} else if (currentSlide4 < 0) {
  currentSlide4 = totalSlides4 - 1;
}
showSlide4(currentSlide4);
}

showSlide4(currentSlide4);

// JavaScript for the fifth slider
let currentSlide5 = 0;
const slides5 = document.querySelectorAll('#slider5 img');
const totalSlides5 = slides5.length;

function showSlide5(slideIndex) {
slides5.forEach((slide) => (slide.style.display = 'none'));
slides5[slideIndex].style.display = 'block';

// Remove active class from all boxes
for (let i = 0; i < totalSlides5; i++) {
  const box = document.getElementById(`box5-${i}`);
  box.classList.remove('active');
}

// Add active class to the clicked box
const box = document.getElementById(`box5-${slideIndex}`);
box.classList.add('active');
}

function changeSlide5(n) {
currentSlide5 = n;
if (currentSlide5 >= totalSlides5) {
  currentSlide5 = 0;
} else if (currentSlide5 < 0) {
  currentSlide5 = totalSlides5 - 1;
}
showSlide5(currentSlide5);
}

showSlide5(currentSlide5);

// JavaScript for the sixth slider
let currentSlide6 = 0;
const slides6 = document.querySelectorAll('#slider6 img');
const totalSlides6 = slides6.length;

function showSlide6(slideIndex) {
slides6.forEach((slide) => (slide.style.display = 'none'));
slides6[slideIndex].style.display = 'block';

// Remove active class from all boxes
for (let i = 0; i < totalSlides6; i++) {
  const box = document.getElementById(`box6-${i}`);
  box.classList.remove('active');
}

// Add active class to the clicked box
const box = document.getElementById(`box6-${slideIndex}`);
box.classList.add('active');
}

function changeSlide6(n) {
currentSlide6 = n;
if (currentSlide6 >= totalSlides6) {
  currentSlide6 = 0;
} else if (currentSlide6 < 0) {
  currentSlide6 = totalSlides6 - 1;
}
showSlide6(currentSlide6);
}

showSlide6(currentSlide6);


// JavaScript for the seven slider
let currentSlide7 = 0;
const slides7 = document.querySelectorAll('#slider7 img');
const totalSlides7 = slides7.length;

function showSlide7(slideIndex) {
slides7.forEach((slide) => (slide.style.display = 'none'));
slides7[slideIndex].style.display = 'block';

// Remove active class from all boxes
for (let i = 0; i < totalSlides7; i++) {
  const box = document.getElementById(`box7-${i}`);
  box.classList.remove('active');
}

// Add active class to the clicked box
const box = document.getElementById(`box7-${slideIndex}`);
box.classList.add('active');
}

function changeSlide7(n) {
currentSlide7 = n;
if (currentSlide7 >= totalSlides7) {
  currentSlide7 = 0;
} else if (currentSlide7 < 0) {
  currentSlide7 = totalSlides7 - 1;
}
showSlide7(currentSlide7);
}

showSlide7(currentSlide7);

// JavaScript for the eight slider
let currentSlide8 = 0;
const slides8 = document.querySelectorAll('#slider8 img');
const totalSlides8 = slides8.length;

function showSlide8(slideIndex) {
slides8.forEach((slide) => (slide.style.display = 'none'));
slides8[slideIndex].style.display = 'block';

// Remove active class from all boxes
for (let i = 0; i < totalSlides8; i++) {
  const box = document.getElementById(`box8-${i}`);
  box.classList.remove('active');
}

// Add active class to the clicked box
const box = document.getElementById(`box8-${slideIndex}`);
box.classList.add('active');
}

function changeSlide8(n) {
currentSlide8 = n;
if (currentSlide8 >= totalSlides8) {
  currentSlide8 = 0;
} else if (currentSlide8 < 0) {
  currentSlide8 = totalSlides8 - 1;
}
showSlide8(currentSlide8);
}

showSlide8(currentSlide8);


// JavaScript for the nine slider
let currentSlide9 = 0;
const slides9 = document.querySelectorAll('#slider9 img');
const totalSlides9 = slides9.length;

function showSlide9(slideIndex) {
slides9.forEach((slide) => (slide.style.display = 'none'));
slides9[slideIndex].style.display = 'block';

// Remove active class from all boxes
for (let i = 0; i < totalSlides9; i++) {
  const box = document.getElementById(`box9-${i}`);
  box.classList.remove('active');
}

// Add active class to the clicked box
const box = document.getElementById(`box9-${slideIndex}`);
box.classList.add('active');
}

function changeSlide9(n) {
currentSlide9 = n;
if (currentSlide9 >= totalSlides9) {
  currentSlide9 = 0;
} else if (currentSlide9 < 0) {
  currentSlide9 = totalSlides9 - 1;
}
showSlide9(currentSlide9);
}

showSlide9(currentSlide9);