let store = Redux.createStore(reducer);

let counter = store.getState();

let h2 = document.querySelector('.counter-value');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');

let step5 = document.querySelector('.step-5');
let step10 = document.querySelector('.step-10');
let step15 = document.querySelector('.step-15');

let max15 = document.querySelector(".max-15");
let max100 = document.querySelector(".max-100");
let max200 = document.querySelector(".max-200");


let stepSelected = 1;
let maxValue = Infinity;

step5.addEventListener('click', () => {
  stepSelected = 5;
  step10.classList.remove('active');
  step15.classList.remove('active');
  step5.classList.add('active');
});
step10.addEventListener('click', () => {
  stepSelected = 10;
  step5.classList.remove('active');
  step15.classList.remove('active');
  step10.classList.add('active');
});
step15.addEventListener('click', () => {
  stepSelected = 15;
  step5.classList.remove('active');
  step10.classList.remove('active');
  step15.classList.add('active');
});

max15.addEventListener("click", () => {
  maxValue = 15;
  max100.classList.remove('active');
  max200.classList.remove('active');
  max15.classList.add('active');
});
max100.addEventListener("click", () => {
  maxValue = 100;
  max15.classList.remove('active');
  max200.classList.remove('active');
  max100.classList.add('active');
});
max200.addEventListener("click", () => {
  maxValue = 200;
  max15.classList.remove('active');
  max100.classList.remove('active');
  max200.classList.add('active');
});

increment.addEventListener('click', () => {
  counter = store.getState();
  if(counter + stepSelected <= maxValue) {
    store.dispatch({ type: 'increment', step: stepSelected });
  }
});
decrement.addEventListener('click', () => {
  store.dispatch({ type: 'decrement', step: stepSelected });
});
reset.addEventListener('click', () => {
  store.dispatch({ type: 'reset' });
  stepSelected = 1;
  maxValue = Infinity;
  step5.classList.remove('active');
  step10.classList.remove('active');
  step15.classList.remove('active');
  max15.classList.remove('active');
  max100.classList.remove('active');
  max200.classList.remove('active');
});

store.subscribe(() => {
  counter = store.getState();
  h2.innerText = counter;
});

function reducer(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + (action.step || 1);
      break;
    case 'decrement':
      if (state > 0) {
        return state - (action.step || 1);
      } else {
        return 0;
      }
      break;
    case 'reset':
      return 0;
      break;
    default:
      return state;
      break;
  }
}
