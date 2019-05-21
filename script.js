let count = localStorage.getItem('time');
if(!count) {
  count = 0;
}

const htmlCount = document.createElement('p')

setInterval(() => {
  count++;
  let seconds = count % 60;
  if(seconds < 10) {
    seconds = '0' + seconds;
  }
  htmlCount.innerHTML = `General time at this site is: ${Math.floor(count / 60)}:${seconds}`;
  document.querySelector('body').prepend(htmlCount);
}, 1000);

window.addEventListener('beforeunload', () => {
  localStorage.setItem('time', `${count}`);
});

document.querySelector('button').addEventListener('click', () => {
  localStorage.setItem('time', 0);
  count = 0;
});
