const timer = document.querySelector('.timer');
const storage = window.localStorage;

document.addEventListener('DOMContentLoaded', (e) => {
  let second = storage.getItem('second') || 0;  
  timer.innerHTML = second;
  
  setInterval( () => {
    second++;
    storage.setItem('second', `${second}`)
    timer.innerHTML = second;
  }, 1000)

})
