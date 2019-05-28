function countSec() {
    let spentTime = document.querySelector('.spent_time');
    let counter = localStorage.getItem('sec') || 0;
    function changeSec() {
        spentTime.textContent = counter;
        localStorage.setItem('sec', counter);
    }
    setInterval( () => {
        counter++;
        changeSec();
    }, 1000);
    changeSec();
}
window.addEventListener('load', countSec);