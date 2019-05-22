'use strict';

const body = document.querySelector('body');
const storage = window.sessionStorage;

let counter = storage.getItem('counter') || 0;

const timed = setInterval(function() {
  counter++
  body.innerHTML = `${counter}`;
  storage.setItem('counter', counter);
}, 1000);
