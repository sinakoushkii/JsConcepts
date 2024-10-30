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
const timesFour=carriedMultiply(4)
console.log(timesFour(5))