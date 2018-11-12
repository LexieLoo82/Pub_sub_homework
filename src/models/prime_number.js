const PubSub = require('../helpers/pub_sub.js');
const PrimeNumber = function (){
};

PrimeNumber.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};


PrimeNumber.prototype.bindEvents = function(){
  PubSub.subscribe('FormVew:text-submitted', (event) => {
    const inputtedText = event.detail;
    console.log('payload received in primenumber:', inputtedText);
    const result = this.numberIsPrime(inputtedText);
    console.log('prime calc', result);
    PubSub.publish('PrimeNumber:result-calculated', result);
  });
};

module.exports = PrimeNumber;
