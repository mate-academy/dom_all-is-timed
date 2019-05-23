'use strict';

const body = document.querySelector('body');
const storage = window.localStorage;

let counter = storage.getItem('counter') || 0;

const bodyClick = () => {
  counter++;
  updateCounter();
}

const updateCounter = () => {
  body.innerHTML = `${counter}`;
  storage.setItem('counter', counter);
}

setInterval(bodyClick, 1000);
updateCounter(); 