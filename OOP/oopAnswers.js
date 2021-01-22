/*** CHALLENGE 1 ***/

function makePerson(name, age) {
  const personCreator = Object.create(null);
  personCreator.name = name;
  personCreator.age = age;
  return personCreator;
}

const vicky = makePerson("Vicky", 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/*** CHALLENGE 2 ***/

const personStore = {
  greet: function () {
    console.log("hello");
  },
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'
