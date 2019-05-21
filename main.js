const p = document.querySelector("#sec");
const storage = window.localStorage;

let i = storage.getItem("timeinsec");
if(!i) {
	i = 0;
	storage.setItem("timeinsec", 0);
}

p.innerHTML = i;
setInterval(() => {
	i++;
	p.innerHTML = i;
	storage.setItem("timeinsec", i);
}, 1000);