// pre increment
function myAge() {
  let age = 20;
  return ++age;
}
console.log(myAge()); // return 21
// return 21

// if the plus was after the age, it would return 20
// bigInt constructor
// can sepereate numbers with underscores 0_029_092_092_134_000 for better readibility
// we can use n after the number to make it a bigInt

// to get a menu, we use <p className='card-menu'>...</p> and use this styling
/**
 * 
.card-menu {
  font-size: 21px;
  color: #888888;
  transform: rotate(90deg);
  width: 21px;
  cursor: pointer;
}

.card-menu:hover {
    color: #ffffff;
}

*/

// an example for loop break and continue
const expensesAndRefunds = [
  { description: "Groceries", amount: 50, year: 2023 },
  { description: "Electronics", amount: -30, year: 2023 },
  { description: "Dinner", amount: 40, year: 2023 },
  { description: "Clothing", amount: 60, year: 2023 },
  { description: "Entertainment", amount: 25, year: 2023 },
  { description: "Rent", amount: -500, year: 2024 },
  { description: "Utilities", amount: 100, year: 2024 },
  { description: "Books", amount: 20, year: 2024 },
  { description: "Fitness", amount: 30, year: 2024 },
  { description: "Gifts", amount: 15, year: 2024 },
];

let totalSpent = 0;
const cutoffDate = 2024;

for (let i = 0; i < expensesAndRefunds.length; i++) {
  const currentExpenseOrRefund = expensesAndRefunds[i];

  if (currentExpenseOrRefund.year >= cutoffDate) {
    console.log(`Reached cutoff date, exiting loop`);
    break;
  }

  if (currentExpenseOrRefund.amount < 0) {
    console.log(`Skipping ${currentExpenseOrRefund.description} due to refund`);
    continue;
  }

  totalSpent += currentExpenseOrRefund.amount;
}

console.log(`Total amount spent on items in 2023: $${totalSpent}`);

const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76];

// .find() returns the value of the first item that passes the test.
const invoiceOver1k = invoicesUSDArr.find(function (invoice) {
  return invoice > 1000;
});

// .findIndex() returns the index of the first item that passes the test.
const invoiceIndexOver1k = invoicesUSDArr.findIndex(function (invoice) {
  return invoice > 1000;
});

// .indexOf() gives us the index of a given item in the array.
// console.log(invoicesUSDArr.indexOf(26))

// .at() takes a positive or negative integer and returns the item at that index.
// Negative integers count back from the end of the array.
console.log(invoicesUSDArr.at(-2));

// hasOwn and hasOwnProperty method
const user1 = {
  username: "rpchan",
  subscriptionLevel: "bronze",
  accessPremiumFeature: true,
};

const user2 = {
  username: "bcstevens",
  subscriptionLevel: "silver",
  accessPremiumFeature: false,
};

const user3 = Object.create(null); // this is a pure object, it doesn't have any prototype
// user3.username = 'Tom'

// console.log(user3.hasOwnProperty('username')) // this will throw an error
console.log(Object.hasOwn(user3, "username"));

function canAccessPremiumFeature(userObj, prop) {
  // return userObj.hasOwnProperty(prop) && userObj[prop]
  return Object.hasOwn(userObj, prop) && userObj[prop];
}

// console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'))
// console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature'))

// Shallow copies with the spread operator
const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4];
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3];
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8];
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7];

function findPriceExtremes(arr) {
  /*
Challenge:
2. Find the highest number from the array 
   and store it in the const 'highest'. 
3. Find the lowest number from the array 
   and store it in the const 'lowest'. 
*/
  const highest = Math.max(...arr);
  const lowest = Math.min(...arr);
  console.log(`The highest average share price was ${highest}`);
  console.log(`The lowest average share price was ${lowest}`);
}

/*
Challenge:
1. Call this function with one array holding 
   all of the data from the 4 arrays above.
*/
findPriceExtremes([
  ...averageSharePriceByMonthQ1,
  ...averageSharePriceByMonthQ2,
  ...averageSharePriceByMonthQ3,
  ...averageSharePriceByMonthQ4,
]);

// deep clone objects
const studentDetails = {
  firstName: "janaka",
  lastName: "siriwardena",
  age: 28,
  country: "sri lanka",
  email: "j.siri@totalinternet.com",
  discordUsername: "JS1",
  modulesCompleted: ["html", "js", "css"],
};

const deepClonedStudentDetails = structuredClone(studentDetails);
deepClonedStudentDetails.modulesCompleted[0] = "TS";
console.log(studentDetails);
console.log(deepClonedStudentDetails);

// the bind 'this' method
const product = {
  name: "Vanilla Lip Gloss",
  sku: "w234fg",
  stock: 276,
  getProductInfo: function () {
    console.log(this);
    // console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
  },
};

// product.getProductInfo()

const productDetails = product.getProductInfo.bind(product); // without the bind(product) - 'this' would be undefined

productDetails();

// Private Fields

class Holiday {
  #destination;
  #price;
  constructor(destination, price) {
    this.#destination = destination;
    this.#price = price;
  }

  get destination() {
    return this.#destination;
  }

  set destination(newDestination) {
    if (typeof newDestination !== "string" || newDestination.length <= 0) {
      throw new Error("Destination not valid");
    }
    this.#destination = newDestination;
  }

  get price() {
    return `$${this.#price}`;
  }

  set price(newPrice) {
    return (this.#price = newPrice);
  }
}

const safari = new Holiday("Haiti", 500);
safari.destination = "new destination"; // can't access because it is private, unless a setter is provided
console.log(safari.destination);
safari.price = 132.293;
console.log(safari.price);

// .call method
function displayPolitician(currentSituation) {
  // console.log(this)
  console.log(
    `${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`
  );
}

const politician1 = {
  name: "Carly Fowler",
  age: 40,
};

displayPolitician.call(politician1, "In jail for corruption");

// .apply method
function displayPolitician(currentSituation) {
  // console.log(this)
  console.log(
    `${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`
  );
}

const politician3 = {
  name: "Carly Fowler",
  age: 40,
};

const politician2 = {
  name: "Dave Bland",
  age: 55,
};

displayPolitician.apply(politician3, ["In jail for corruption"]); // simular to .call except the second argument is an array

// inheritance

class Event {
  constructor(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;
  }

  getDetails() {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
  }
}

class TennisMatch extends Event {
  constructor(name, location, date, player1, player2) {
    super(name, location, date);
    this.player1 = player1;
    this.player2 = player2;
  }

  getDetails() {
    return `${super.getDetails()}, Players: ${this.player1} vs ${this.player2}`;
  }
}

const tennisMatch1 = new TennisMatch(
  "Wimbledon",
  "London",
  "July 2023",
  "Serena Williams",
  "Maria Sharapova"
);

console.log(tennisMatch1.getDetails());

// Symbols

const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
};

const note = Symbol("librarian note");

book[note] = "This book is a must-read!";

console.log(book[note]);

// Symbols are unique, even if they have the same description

// the Map Object
const athlete1 = { name: "Usain Bolt", sport: "Athletics" };
const athlete2 = { name: "Serena Williams", sport: "Tennis" };
const athlete3 = { name: "Michael Phelps", sport: "Swimming" };

const athleteMedals = new Map();
athleteMedals.set(athlete1, 8);

console.log(athleteMedals.get(athlete1)); // 8

athleteMedals.set(athlete2, 23);
athleteMedals.set(athlete3, 28);

athleteMedals.delete(athlete1); // removes the key-value pair
athleteMedals.has(athlete1); // false

console.log(athleteMedals.size); // 2

athleteMedals.forEach((value, key) => {
  console.log(`${key.name} has won ${value} medals`);
});

// insertion order is maintained in the Map Object
/* 
Challenge:

  1. Create a map object 'athletes' to store the athletes.
  2. Create a addAthlete function that takes an athlete object and the number of medals they have won. it should add the athlete to the map object.
  3. Create a getSummary function that logs the name of each athlete and the number of medals they have won.
*/

const athletes = new Map();

function addAthlete(athlete, medals) {
  athletes.set(athlete, medals);
}

function getSummary() {
  athletes.forEach((value, key) => {
    console.log(`${key.name} has won ${value} medals`);
  });
}

addAthlete(athlete1, 8);
addAthlete(athlete2, 23);
addAthlete(athlete3, 28);

getSummary();

// the Set Object
const starAthletes = new Set();
starAthletes.add("Usain Bolt");
starAthletes.add("Serena Williams");
starAthletes.add("Michael Phelps");

console.log(starAthletes.size); // 3

starAthletes.forEach((athlete) => {
  console.log(athlete);
});
// the clear method removes all elements from the set
// set has no keys or values, only values
// set has no get method, only has has method
// set has no duplicate values
// set has the forEach method but not map method
// set can transform to an array
const starAthletesArr = Array.from(starAthletes);

// Closures
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

function scorePoint(playerName) {
  let score = 0;

  return {
    increaseScore: function () {
      score++;
      return score;
    },
    decreaseScore: function () {
      score--;
      return score;
    },
    displayScore: function () {
      return `${playerName} has ${score} points`;
    },
  };
}

const player1 = scorePoint("Max");
const player2 = scorePoint("Tom");

console.log(player1.increaseScore()); // 1
console.log(player1.increaseScore()); // 2
console.log(player1.displayScore()); // Max has 2 points
console.log(player2.decreaseScore()); // -1
console.log(player2.displayScore()); // Tom has -1 points

/* 
Final Closure Challenge:

1. Write a function that simulates a simple bank account.
   the function should store the balance and enable users to deposit, withdraw and view their balance.


requirements:
- The account balance should start at zero.
- The function should return an object containing 3 functions. one for depositing money, one for withdrawing money and one for getBalance function which logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract from the balance.
*/

function createBankAccount(name) {
  let balance = 0;

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      balance -= amount;
      return balance;
    },
    getBalance: function () {
      return `${name} has a balance of $${balance}`;
    },
  };
}

const daveAccount = createBankAccount("Dave");
const wendyAccount = createBankAccount("Weendy");

console.log(daveAccount.deposit(100)); // 100
console.log(daveAccount.withdraw(50)); // 50
console.log(daveAccount.getBalance()); // Dave has a balance of $50

console.log(wendyAccount.deposit(200)); // 200
console.log(wendyAccount.withdraw(100)); // 100
console.log(wendyAccount.getBalance()); // Wendy has a balance of $100

// Debouncing

function debounce(callback, delay) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, arguments);
    }, delay);
  };
}

function saveInput() {
  console.log("Saving data");
}

const processChange = debounce(saveInput, 2000);

// Debouncing with arrow function

const debounce = (callback, delay) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

function handleDebouncingInput(e) {
  console.log("Input dected from", e.target.value);
}

document
  .getElementById("name-input")
  .addEventListener("input", debounce(handleDebouncingInput, 500));

// Throttling
function throttle(callback, limit) {
  let waiting = false;

  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

function saveInput() {
  console.log("Saving data");
}

const processChangeThrottling = throttle(saveInput, 2000);

// Throttling with arrow function

const throttle = (callback, limit) => {
  let waiting = false;

  return (...args) => {
    if (!waiting) {
      callback(...args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
};

function handleThrottlingInput(e) {
  console.log("Input dected from", e.target.value);
}

document
  .getElementById("name-input")
  .addEventListener("input", throttle(handleThrottlingInput, 500));

// Generators
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const sequence = generateSequence();

function* colorGenerator() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomHex = Math.floor(Math.random() * 16);
    color += "0123456789ABCDEF"[randomHex];
  }
  yield color;
}
