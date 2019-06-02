'use strict';
function makeSortable(elem) {
  let timeOnPage = localStorage.getItem('timeOnPage');
  let counterContainer = document.createElement('p');
  elem.append(counterContainer);
  
  setInterval(() => {
    timeOnPage++;
    localStorage.setItem('timeOnPage', timeOnPage);
    counterContainer.textContent = timeOnPage;
  }, 1000);
  }
makeSortable(document.querySelector('body'));  
