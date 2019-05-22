'use strict';

const amount = document.querySelector('.amount');
const timeOnPage = localStorage.getItem('amountTimeOnPage');

function putAmountOnPage() {
  const resetAnimation = function() {
    amount.style.animation = 'none';
  };
  const nextAmount = (+localStorage.getItem('amountTimeOnPage') + 1).toString();
  localStorage.setItem(
    'amountTimeOnPage',
    nextAmount
  );
  amount.innerText = nextAmount;
  amount.style.fontSize = '6em';
  amount.style.animation = '0.9s onTimerAnimation';
  setTimeout(resetAnimation, 900);
}

function initializeHTMLAmount() {
  amount.style.fontSize = '6em';
  amount.style.transformOrigin = 'center';
}

function initializeAmountInStorage() {
  sessionStorage.clear();
  sessionStorage.setItem('amountTimeOnPage', '0');
}

window.onstorage = (event) => {
  if (event.key !== 'amountTimeOnPage') return;
  const amountHTML = amount.innerHTML;
  const amountStorage = localStorage.getItem('amountTimeOnPage');
  if (amountHTML !== amountStorage) {
    putAmountOnPage();
  }
};

if (!timeOnPage) {
  initializeAmountInStorage();
  initializeHTMLAmount();
}
setInterval(putAmountOnPage, 1000);

console.log('Thank You, mate academy!');
