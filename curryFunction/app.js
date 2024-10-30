// In JavaScript, currying is a technique where a function with multiple arguments is transformed into a series of functions that each take a single argument.

function makeSandwich(ingredient1) {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} - ${ingredient2} - ${ingredient3}`;
    };
  };
}

const mySandwich = makeSandwich("onion")("burger")("tomato");
// console.log(mySandwich)

const makeSan = (ingredient1) => (ingredient2) => (ingredient3) =>
  `${ingredient1} - ${ingredient2} - ${ingredient3}`;

const mySan = makeSan("in 1")("in 2")("in 3");
// console.log(mySan)

// Partialy apllied functions are a common use of curring
const carriedMultiply = (x) => (y) => x * y;
const timesFour = carriedMultiply(4);
console.log(timesFour(5));

function add(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function curriedFn(...args) {
    if (fn.length !== args.length) {
      return curriedFn.bind(null, ...args);
    }
    
    return fn.apply(null, args);
  };
}
const result = curry(add);
console.log(result(10,20)(30))
