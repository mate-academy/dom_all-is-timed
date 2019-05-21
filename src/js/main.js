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
   //timer.innerHTML = `${hour}:${minute}:${seconds}`;
   timer.innerHTML = (hour+'').padStart(2, '0') + ':' + (minute + '').padStart(2, '0') + ':' + (seconds + '').padStart(2, '0');
}

timer.style.display = 'inline-block';
timer.style.background = 'red';
timer.style.border = '3px solid green';
timer.style.padding = '5px';
timer.style.borderRadius = '10px';
timer.style.position = 'absolute';
timer.style.right = '20px';
timer.style.top = '10px';
timer.style.color = 'yellow';
timer.style.fontSize = '100px';



