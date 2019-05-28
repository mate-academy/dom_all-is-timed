const timer = document.getElementById('timer');

window.addEventListener('load', () => {
    function addContent(elem, content) {
        elem.textContent = content;
    };
    let sec = localStorage.getItem('sec') || 0;
    addContent(timer, sec)
    setInterval(function(){
        sec++;
        addContent(timer, sec);
        localStorage.setItem('sec', `${sec}`);
    },1000);    
})