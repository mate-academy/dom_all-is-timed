const time = document.querySelector('#timeSpent');
let count = +localStorage.getItem('time') || 0;

window.addEventListener('load', function () {
    setInterval(function () {
        count += 1;
        time.textContent = count;
    }, 1000);
});

window.addEventListener('unload', function () {
    localStorage.setItem('time',  `${count}`);
});
