let counter;

if (!localStorage.getItem('time')) {
  counter = 0;
  document.querySelector('.time').innerHTML = counter;

} else {
  counter = localStorage.getItem('time');
}

setInterval(function() {
  counter++;  
  document.querySelector('.time').innerHTML = counter;
}, 1000);

window.onunload = () => localStorage.setItem('time', counter);