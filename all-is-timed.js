const store = window.localStorage;
const counterEl = document.querySelector('.counter');
let counter = store.getItem('seconds on page') || 0;

function timing() {
    counter++;
    counterEl.textContent = counter;
    store.setItem('seconds on page', counter);
}
timing();
setInterval(timing, 1000);
