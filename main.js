'use strict';

 const timer = document.getElementById("timer");
 const init = () => {
  let sec =  localStorage.getItem('sec') || 0;
  const tick = () => { 
    sec++;
    timer.textContent = `${sec}`;
    };
  timer.textContent = `${sec}`;
  setInterval(tick, 1000);
  window.addEventListener('unload', () => {
    localStorage.setItem('sec', sec);});
    };

 init();