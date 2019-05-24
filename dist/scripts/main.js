'use strict';

const counter = document.querySelector('.counter');
let i = 0;

document.addEventListener('DOMContentLoaded', function() {
  const num = localStorage.getItem('count');
  if (num) {
    i = num;
  }
  counter.innerHTML = i;
});

setInterval(function() {
  i++;
  localStorage.setItem('count', i);
  counter.innerHTML = i;
}, 1000);
