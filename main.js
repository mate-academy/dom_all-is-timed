const timer = document.getElementById('timer');

window.onload = () => {
    let timerCount = localStorage.getItem('timerCount') || 0;
    timer.textContent = timerCount;
       
    setInterval(function(){
        timerCount++;
        timer.textContent = timerCount;
        localStorage.setItem('timerCount', `${timerCount}`);
    },1000);    
}
