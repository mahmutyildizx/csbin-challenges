// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// ##########################
// # Higher-Order Functions #
// ##########################

// Challenge 1
const addTwo = (num) => {
  return num + 2;
};

// To check if you've completed this function, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
const addS = (word) => {
  return word + "s";
};

// Uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
const map = (array, callback) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// See for yourself if your forEach works!
let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, (char) => (alphabet += char));
// console.log(alphabet);   //prints 'abcd'

// Challenge 5
const arrayForMapWith = [1, 2, 3, 4];
const mapWith = (array, callback) => {
  const output = [];
  array.forEach((item) => {
    output.push(callback(item));
  });
  return output;
};

// console.log(mapWith(arrayForMapWith, addTwo))

// Challenge 6
const reduce = (array, reducer, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = reducer(initialValue, array[i]);
  }
  return initialValue;
};

const nums = [4, 1, 3];
const add = (a, b) => a + b;
// console.log(reduce(nums, add, 0));   //-> 8
