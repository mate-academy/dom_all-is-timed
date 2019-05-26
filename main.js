'use strict';
function makeSortable (elem) {
  var timeOnPage = localStorage.getItem("timeOnPage");
  let append = document.createElement('p');

  setInterval(function() {
    append.remove();
    timeOnPage++;
    
    localStorage.setItem("timeOnPage", timeOnPage);
    append.innerHTML = timeOnPage;
    elem.append(append);
    console.log(timeOnPage);
  }, 1000);
 
  }
makeSortable (
  document.querySelector('body')
);  
