'use strict';

window.addEventListener('load', main);

const number = document.getElementById('count');

function main(){
  numberSet();
  numberIncrement();
}

function numberIncrement() {
  setInterval(() => { 
    localStorage.count++;
    number.textContent = localStorage.count;
    }, 1000);
}

function numberSet() {
  if (!localStorage.count) {
    localStorage.count = 0;
  }
  number.textContent = localStorage.count;
}



