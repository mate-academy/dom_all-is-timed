'use strict';

window.addEventListener('load', timer);
const container = document.querySelector('.container');
const STORAGE_TIME = 'time';
let time = localStorage.getItem(STORAGE_TIME) || 0;

function timer() {
  return setInterval(function () {
    updateStorage(time)
    timeHandler(time);
    time++;
  }, 1000)
}

function updateStorage(time) {
  localStorage.setItem(STORAGE_TIME, time);
}

function timeHandler(time) {
  let seconds = time % 60 < 10 ? `0${time % 60}` : time % 60;
  let minutes = parseInt(time / 60) % 60 < 10 ? `0${parseInt(time / 60) % 60}` : parseInt(time / 60) % 60;
  let hours = Math.floor(time / 21600) < 10 ? `0${Math.floor(time / 21600)}` : Math.floor(time / 21600);
  let timeHMS = `${hours} : ${minutes} : ${seconds}`;
  container.textContent = timeHMS;
}
