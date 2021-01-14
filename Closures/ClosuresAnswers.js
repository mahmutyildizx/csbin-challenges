function createFunction() {
  return () => console.log("Hello, world");
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
// function1();

//////////////////////////////////
// CHALLENGE 2
function createFunctionPrinter(input) {
  let valueForInnerFunc = input;
  function innerFunc() {
    console.log(valueForInnerFunc);
  }
  return innerFunc;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter("sample");
// printSample();
const printHello = createFunctionPrinter("hello");
// printHello();

//////////////////////////////////
// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

//////////////////////////////////
function addByX(x) {
  function add(num) {
    return num + x;
  }
  return add;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3

const addByThree = addByX(3);
// addByThree(1); // => should return 4

const addByFour = addByX(4);
// addByFour(4); // => should return 8

//////////////////////////////////
