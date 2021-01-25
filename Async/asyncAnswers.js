/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}

// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => console.log("welcome"), 3000);
}

// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  setTimeout(() => console.log("good bye"), 2000);
  console.log("hello");
}

// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 2 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  setInterval(() => console.log("hi again"), 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  const interval = setInterval(() => console.log("hi for now"), 1000);
  setTimeout(() => clearInterval(interval), 5000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now
