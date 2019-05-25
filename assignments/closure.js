// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const writer = () => {
  const mySentence = ["Daisy", "give", "me", "your", "answer", "true!"];
  // let aNewString = [];
  let indexer = 0;
  let newWord = function aNewWord(){
    return mySentence[indexer++];
  }

  return newWord;
}

const newSentence = writer();
console.log(newSentence()); //Daisy
console.log(newSentence()); //give
console.log(newSentence());
console.log(newSentence());
console.log(newSentence());
console.log(newSentence());
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  let aNewNumberToReturn = 0;
  
  let newNumber = function aNewNumber(){
    aNewNumberToReturn++;
    return aNewNumberToReturn;
  }

  return newNumber;
};
  const newCounter = counter();
  console.log(newCounter()); // 1
  console.log(newCounter()); // 2
  console.log(newCounter()); // 3

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let aNewNumberToReturn = 0;
  let anObjectToReturn = {};


  anObjectToReturn.increment = function aNewNumber(){
    return ++aNewNumberToReturn;
  }

  anObjectToReturn.decrement = function aNewNumber(){
    return --aNewNumberToReturn;
  }

  
  return anObjectToReturn;
};

const factory = counterFactory();
const manufacuary = counterFactory();
console.log(manufacuary.increment());//1
console.log(manufacuary.increment());//2
console.log(manufacuary.increment());//3
console.log(factory.increment());// 1
console.log(factory.increment());// 2
console.log(factory.decrement());// 1
console.log(manufacuary.increment());//4