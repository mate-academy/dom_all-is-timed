'use strict';
const content =  document.querySelector('.content');
const storage = window.localStorage;

let timer = storage.getItem('timer') || 0;

function time() {
  timer++;
  getTime();
}

function getTime() {
  content.textContent = `${timer}`;
  storage.setItem('timer', timer);
}

getTime();
setInterval(time, 1000);
