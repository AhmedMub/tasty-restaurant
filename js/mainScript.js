/*eslint-disable*/
/*jslint plusplus: true, evil: true*/
/*global alert, confirm, console, prompt*/
/*jshint esversion: 6 */

//Slider height
(function slideH() {
  let windowH = window.innerHeight,
      slides = document.getElementById('slides'),
      slidesH = slides.clientHeight;
      slide = slidesH = windowH;
  slides.style.height = slide + "px";
})();

//slider
const slides = Array.from(document.querySelectorAll('#slides li'));

let  slidesLength = slides.length,

    activeSlide = 1,

    prev = document.getElementById('prev'),

    next = document.getElementById('next'),

    indicators = document.getElementById('indicators');

// create ul
let theIndicators = document.createElement('ul');

indicators.appendChild(theIndicators);

theIndicators.setAttribute('id', 'ulId');

//loop li
for (let i = 1; i <= slidesLength; i++) {

  let theLi = document.createElement('li');

  theIndicators.appendChild(theLi);

  theLi.setAttribute('data-slide', i);
}

const ulArray = Array.from(document.querySelectorAll('#ulId li'));

// add active class fn
function AddActive() {
  'use strict';

//remove then add
RemoveActive();

  slides[activeSlide - 1].classList.add('active-slide');

  ulArray[activeSlide - 1].classList.add('active');

}

AddActive();

//remove active fn
function RemoveActive() {
  "use strict";

  slides.forEach(function (e) {

    e.classList.remove('active-slide');
  });

  ulArray.forEach(function (e) {

    e.classList.remove('active');
  });

  // add disabled class
  if (activeSlide == 1) {

    prev.classList.add('disabled');
  } else {

    prev.classList.remove('disabled');
  }

  if (activeSlide == slidesLength) {

    next.classList.add('disabled');
  } else {

    next.classList.remove('disabled');
  }
}

//click prev and next

next.onclick = function () {
  "use strict";

  if (next.classList.contains('disabled')) {

    return false;
  } else {

    activeSlide++;
    AddActive();
  }
};

prev.onclick = function () {
  "use strict";

  if (prev.classList.contains('disabled')) {

    return false;
  } else {

    activeSlide--;
    AddActive();
  }
};

//click indicators
for (let i = 0; i < ulArray.length; i++) {

  ulArray[i].onclick = function () {

    activeSlide = parseInt(this.getAttribute('data-slide'));
    AddActive();
  };
}

//set time interval fn
setInterval( () => {

  activeSlide += 1;
  AddActive();

  if (activeSlide == slidesLength) {

    activeSlide = 0;
  }

}, 8000);

// slider text

const sliderTexts = Array.from(document.querySelectorAll('#sliderText h2'));

let   activeTitle = 1;

function ClasshasRemoved() {
  'use strict';

  sliderTexts[activeTitle - 1].classList.remove('remove-title');
}

function AddRemoveClass() {
  'use strict';

  sliderTexts.forEach(function (e) {

    e.classList.add('remove-title');

ClasshasRemoved();
  });
}
AddRemoveClass();

setInterval( () => {

  activeTitle += 1;
  AddRemoveClass();

  if (activeTitle == sliderTexts.length) {

    activeTitle = 0;
  }

}, 8000);


// nav bar btn
const navBtn = document.getElementById('navBtn');
const navUl = document.getElementById('navUl');

navBtn.onclick = function () {

  this.classList.toggle('activate-btn');

  navUl.classList.toggle('active-ul');
};

//toggle menu btns
const menuBtnsArray = Array.from(document.querySelectorAll('#menuBtns button'));

for (let i = 0; i <= menuBtnsArray.length; i++) {

  menuBtnsArray[i].onclick = function () {

    Removebtnclass();

    this.classList.add('active-btn');
  };
}

function Removebtnclass() {
  "use strict";

  menuBtnsArray.forEach(function (e) {

    e.classList.remove('active-btn');
  });
}
