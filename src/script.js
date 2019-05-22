'use strict';
   
const body = document.body;
const save = window.sessionStorage;
let timer = save.getItem('timer') || 0;

const time = () => {
  timer++;
  getTime();
}

const getTime = () => {
  body.querySelector('.container').innerHTML = `${timer}`;
  save.setItem('timer', timer);
}

getTime();
setInterval(time, 1000);
