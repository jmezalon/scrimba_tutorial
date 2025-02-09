// IIFEs
/**
 * 
(async function (country) {
  const weather = await fetch('some api');
  const weatherObj = await weather.json();
  console.log(`The weather in the ${country} tooday is ${weatherObj[country]}`);
})("uk");
*/

// Recursion
function countUp(start, end) {
  console.log(start);
  if (start >= end) {
    return start;
  }
  countUp(start + 1, end);
}

// countUp(15, 19);

function sumToN(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sumToN(n - 1);
}

// console.log(sumToN(5));

let str = "SCRIMBA";

function reverseStr(str) {
  if (str.length === 0) {
    return str;
  }

  return reverseStr(str.slice(1)) + str.slice(0, 1);
}

console.log(reverseStr(str));

// Currying
const calculateVolume = (l) => (w) => (h) => l * w * h;

console.log(calculateVolume(2)(3)(4));

const createLogger = (level) => (message) =>
  `[${level.toUpperCase()}] ${message}`;

const warnLogger = createLogger("warn");
const infoLogger = createLogger("info");
const errorLogger = createLogger("error");

console.log(warnLogger("Low disk space"));
console.log(infoLogger("Application started"));
console.log(errorLogger("Failed to save file"));
