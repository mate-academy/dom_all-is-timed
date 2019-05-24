let count = localStorage.getItem('time') || 0;
const timeValue = document.querySelector('#timeValue')

render(count)

setInterval(() => {
  render(count++); 
}, 1000);

function render (count, el = timeValue) {
  el.innerHTML = `${Math.floor(count / 60)}:${String(count % 60).padStart(2, '0')}`
}

window.addEventListener('beforeunload', () => {
  localStorage.setItem('time', `${count}`);
});

document.querySelector('button').addEventListener('click', () => {
  count = 0;
});
