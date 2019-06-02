'use strict';
function countTimeOnPage(elem) {
  let timeOnPage = localStorage.getItem('timeOnPage');
  let counterContainer = document.createElement('p');
  elem.append(counterContainer);
  counterContainer.textContent = timeOnPage;
  
  setInterval(() => {
    timeOnPage++;
    localStorage.setItem('timeOnPage', timeOnPage);
    counterContainer.textContent = timeOnPage;
  }, 1000);
  }
  countTimeOnPage(document.querySelector('body'));  
