const PubSub = require('../helpers/pub_sub.js');


const FormView = function(){
};

FormView.prototype.bindEvents = function (){
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('event:', event);
    const inputtedText = event.target.number.value;
    // const inputtedText = event.target.input.value;
    PubSub.publish('FormVew:text-submitted', inputtedText);
  });
};


module.exports = FormView;
