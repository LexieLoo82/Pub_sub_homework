const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

};

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `${result}`;
};

ResultView.prototype.bindEvents = function(){
PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
  const primeCalc = event.detail;
  console.log('payload received in result view:', primeCalc);
  this.displayResult(primeCalc);
});

};
module.exports = ResultView;
