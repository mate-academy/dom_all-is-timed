'use strict';

window.addEventListener('load', main);

const number = document.getElementById('count');

function main(){
  numberSet();
  numberIncrement();
}
function numberSet() {
  if (!localStorage.count) {
    localStorage.setItem('count', 0);
  }
  number.textContent = localStorage.count;
}

function numberIncrement() {
  setInterval(() => { 
    localStorage.count++;
    number.textContent = localStorage.count;
    }, 1000);
}
