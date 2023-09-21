#!/usr/bin/env node
document.addEventListener('mousemove', function(event) {
  let glowInner = document.querySelector('.glow-effect');
  let glowWidth = glowInner.offsetWidth;
  let glowHeight = glowInner.offsetHeight;
  let glowX = event.pageX - glowWidth / 2;
  let glowY = event.pageY - glowHeight / 2;
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;
  let offsetX = glowX - centerX;
  let offsetY = glowY - centerY;
  let moveX = -offsetX * 0.05; // Скорость движения по горизонтали
  let moveY = -offsetY * 0.05; // Скорость движения по вертикали
  glowInner.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
});

document.addEventListener('mousemove', function(event) {
  let glowInner = document.querySelector('.glow-effect2');
  let glowWidth = glowInner.offsetWidth;
  let glowHeight = glowInner.offsetHeight;
  let glowX = event.pageX - glowWidth / 2;
  let glowY = event.pageY - glowHeight / 2;
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;
  let offsetX = glowX - centerX;
  let offsetY = glowY - centerY;
  let moveX = -offsetX * 0.05; // Скорость движения по горизонтали
  let moveY = -offsetY * 0.05; // Скорость движения по вертикали
  glowInner.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
});


const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const items = document.getElementsByClassName('item');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
 items[currentIndex].classList.remove('active')
 currentIndex++
 if (currentIndex >= 3){
  currentIndex = 0

 }
 items[currentIndex].classList.add('active')
 
});

prevButton.addEventListener('click', () => {
  items[currentIndex].classList.remove('active')
  currentIndex--
  if (currentIndex < 0){
   currentIndex = items.length - 1
 
  }
  items[currentIndex].classList.add('active')
  
 });


