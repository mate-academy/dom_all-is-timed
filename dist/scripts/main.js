'use strict';

const counter = document.querySelector('.counter');
let seconds = 0;

document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('count')) {
    seconds = localStorage.getItem('count');
  }
  render(seconds);
});

setInterval(function() {
  seconds++;
  localStorage.setItem('count', seconds);
  render();
}, 1000);

function render() {
  counter.innerHTML = seconds;
}
