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
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
const addS = (word) => {
  return word + "s";
};

// Uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
const map = (array, callback) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

console.log(map([1, 2, 3], addTwo));

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
console.log(alphabet); //prints 'abcd'

// Challenge 5
const arrayForMapWith = [1, 2, 3, 4];
const mapWith = (array, callback) => {
  const output = [];
  array.forEach((item) => {
    output.push(callback(item));
  });
  return output;
};

console.log(mapWith(arrayForMapWith, addTwo));

// Challenge 6
const reduce = (array, reducer, initialValue) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = reducer(initialValue, array[i]);
  }
  return initialValue;
};

const nums = [4, 1, 3];
const add = (a, b) => a + b;
console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
const intersection = (...arrays) => {
  const comparisonFunc = arrays.reduce((acc, curr) => {
    return acc.length === 0
      ? [...curr]
      : curr.filter((item) => acc.includes(item)).sort((a, b) => a - b);
  }, []);
  return comparisonFunc;
};

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);

// should log: [5, 15]

// Challenge 8
const union = (...arrays) => {
  const solutionFuncWithoutDuplicate = arrays.reduce((acc, curr) => {
    return acc.length === 0
      ? [...curr]
      : [...acc, ...curr.filter((item) => !acc.includes(item))];
  }, []);
  return solutionFuncWithoutDuplicate;
};

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9

const objOfMatches = (array1, array2, callback) => {
  const matchedElement = array1.reduce((acc, curr, i) => {
    if (callback(curr) === array2[i]) {
      acc[curr] = array2[i];
    }
    return acc;
  }, {});

  return matchedElement;
};

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    (str) => str.toUpperCase()
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {
  const result = arrCallbacks.reduce((acc, curr, i) => {
    let objectKey = arrVals[i];
    if (objectKey) {
      acc[arrVals[i]] = arrCallbacks.map((callback) => callback(arrVals[i]));
    }
    return acc;
  }, {});

  return result;
};

// console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
