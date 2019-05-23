'use strict';
const body = document.querySelector('body');
const store = window.localStorage;
const output = document.querySelector('.counter');
let counter = store.getItem('seconds on page') || 0;

function record() {
    counter++;
    output.innerHTML = `${counter}`;
    store.setItem('seconds on page', counter);
}
record();
setInterval(record, 1000);
