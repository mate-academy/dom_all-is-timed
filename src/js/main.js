let timerVar = setInterval(countTimer, 1000);
let timer = document.getElementById("timer");
let totalinitSeconds = localStorage.getItem('totalSeconds') || 0;
totalinitSeconds = Number(totalinitSeconds);

function countTimer() {
  localStorage.setItem('totalSeconds', totalinitSeconds);
    ++totalinitSeconds;
   let hour = Math.floor(totalinitSeconds /3600);
   let minute = Math.floor((totalinitSeconds - hour*3600)/60);
   let seconds = totalinitSeconds - (hour*3600 + minute*60);
   timer.innerHTML = (hour+'').padStart(2, '0') + ':' + (minute + '').padStart(2, '0') + ':' + (seconds + '').padStart(2, '0');
   timer.classList.add('counterStyles');
}
