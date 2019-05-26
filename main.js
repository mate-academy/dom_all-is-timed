const p = document.querySelector("#sec");
const storage = sessionStorage;
 
let counter = storage.getItem("timeinsec");
if(!counter) {
    counter = 0;
    storage.setItem("timeinsec", 0);
}
 
p.innerHTML = counter;
setInterval(() => {
    counter++;
    p.innerHTML = counter;
    storage.setItem("timeinsec", counter);
}, 1000);