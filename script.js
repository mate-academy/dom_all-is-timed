window.addEventListener('load', () => {
    const secondsElem = document.getElementById('seconds');
    let second = localStorage.getItem('secondsElem') || 0;
    secondsElem.textContent = second;
    setInterval(() => {
        second++;
        localStorage.setItem('secondsElem', second);
        secondsElem.textContent = second;
    }, 1000);
});

