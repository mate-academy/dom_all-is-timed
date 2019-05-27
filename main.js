const p = document.querySelector("#sec");
const storage = window.localStorage;
 
let counter = storage.getItem("counter") || 0;
 
const counting =() => {
    counter++;
	renderCounter();
}
 
 function renderCounter() {
	 p.innerHTML = counter;
	 storage.setItem("counter", counter);
 }
 
setInterval(counting, 1000);
renderCounter();
