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
