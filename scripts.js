'use strict';

window.addEventListener('load', (event) => {
  const number = document.querySelector('#count');
  if(!localStorage.count) {
    localStorage.count = 0;
  }
  number.textContent = localStorage.count;

  setInterval(function() {
    localStorage.count++;
    number.textContent = localStorage.count;
  }, 1000)
});