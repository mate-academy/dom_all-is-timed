'use strict';

const clock = document.querySelector('#timer');

let timer = localStorage.getItem('timer') | 0;

setInterval(() => {
  clock.textContent = timer;
  timer++;
}, 1000);

window.addEventListener('unload', () => {
  localStorage.setItem('timer', timer.toString())
})
