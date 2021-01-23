// Challenge 1

function sayHello() {
  setTimeout(() => console.log("Hello"), 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms

// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000);
});

// Challenge 3

promise = new Promise(function (resolve, reject) {
  reject("Rejected!");
});

// Should print out "Reject!"
promise.catch((error) => console.log(error));

// Challenge 4

promise = new Promise(function (resolve, reject) {
  resolve();
});

// Uncomment the lines below when ready
promise.then(() => console.log("Promise has been resolved!"));
console.log("I'm not the promise!");

// Challenge 5
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);

// Challenge 6
//
// ADD CODE BELOW
var secondPromise = new Promise((resolve) => resolve("Second!"));
var firstPromise = new Promise((resolve) => resolve(secondPromise));
firstPromise.then((value) => console.log("Challenge 6", value));
