const timer = document.querySelector('.timer');
const storage = window.localStorage;

document.addEventListener('DOMContentLoaded', () => {
    let second = storage.getItem('second') || 0;
    timer.innerHTML = second;
    
    setInterval(() => {
        second++;
        timer.innerHTML = second;
        storage.setItem('second', second);
    }, 1000);
})


