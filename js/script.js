function render() {
  const counter = document.querySelector('.clockIsTimed');
  const clear = document.querySelector('.clear');
  let time = localStorage.getItem('counter') || 0;

  function storageCount() {
    counter.textContent = time;
    localStorage.setItem('counter', time);
  }

  setInterval( () => {
    time++;
    storageCount();
  }, 1000);

  storageCount()
  clear.addEventListener('click', (event) => {
    time = -1;
  });
}

window.addEventListener('load', render);