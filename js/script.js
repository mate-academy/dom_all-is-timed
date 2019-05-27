const clock = document.querySelector('.clockIsTimed');
const clear = document.querySelector('.clear');

let count;

if (!localStorage.getItem('time')) {
  count = 0;
  clock.innerHTML = count;

} else {
  count = localStorage.getItem('time');
}

setInterval(() => {
  count++;
  clock.innerHTML = count;
}, 1000);


clear.addEventListener('click', (event) => {
  event.preventDefault();
  count = 0;
});

window.onunload = () => localStorage.setItem('time', count);