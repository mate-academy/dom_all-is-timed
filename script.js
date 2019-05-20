let count = localStorage.getItem('time') ? localStorage.getItem('time') : 0;
const htmlCount = document.createElement('p')
let timeout = setInterval(() => {
  count++;
  localStorage.setItem('time', `${count}`);
  htmlCount.innerHTML = `General time at this site is: ${Math.floor(count / 60)}:${count % 60}`;
  document.querySelector('body').append(htmlCount);
  console.log(count);
}, 1000);
