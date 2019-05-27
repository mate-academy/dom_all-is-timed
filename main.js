const timer = document.getElementById('timer');

window.addEventListener('load', () => {
    const writeTextContent = (elem, content) => elem.textContent = content;
    let timerCount = localStorage.getItem('timerCount') || 0;
    writeTextContent(timer, timerCount)
       
    setInterval(function(){
        timerCount++;
        writeTextContent(timer, timerCount);
        localStorage.setItem('timerCount', `${timerCount}`);
    },1000);    
})
