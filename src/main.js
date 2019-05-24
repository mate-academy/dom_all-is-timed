'use strict';

window.addEventListener('load', main);

const number = document.getElementById('count');
const COUNT = 'count';

function main(){
  numberSet();
  numberIncrement(1000);
}
function numberSet() {
  if (!localStorage.getItem(COUNT)) {
    localStorage.setItem(COUNT, 0);
  }
  number.textContent = localStorage.getItem(COUNT);
}

function numberIncrement(time) {
  let count = localStorage.getItem(COUNT);
  setInterval(() => { 
    count++;
    localStorage.setItem(COUNT, count);
    number.textContent = count;
  }, time);
}
