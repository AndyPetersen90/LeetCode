// ==========================
// JavaScript Cheat Sheet
// ==========================

// ===== 1. Array Functions =====
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(x => x * 2)); // [2, 4, 6, 8, 10]
console.log(arr.filter(x => x % 2 === 0)); // [2, 4]
console.log(arr.reduce((sum, x) => sum + x, 0)); // 15
console.log(arr.find(x => x > 3)); // 4
console.log(arr.findIndex(x => x > 3)); // 3
console.log(arr.some(x => x > 3)); // true
console.log(arr.every(x => x > 0)); // true
console.log(arr.includes(3)); // true
console.log(arr.sort((a, b) => b - a)); // [5, 4, 3, 2, 1]
console.log(arr.reverse()); // [1, 2, 3, 4, 5]

// ===== 2. String Functions =====
const str = "Hello, World!";
console.log(str.length); // 13
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.trim()); // "Hello, World!"
console.log(str.split(", ")); // ["Hello", "World!"]
console.log(str.replace("World", "JS")); // "Hello, JS!"
console.log(str.includes("Hello")); // true
console.log(str.indexOf("o")); // 4
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
console.log(str.match(/o/g)); // ["o", "o"]
console.log(str.repeat(3)); // "Hello, World!Hello, World!Hello, World!"

// ===== 3. Object Functions =====
const obj = { name: "Alice", age: 25 };
console.log(Object.keys(obj)); // ["name", "age"]
console.log(Object.values(obj)); // ["Alice", 25]
console.log(Object.entries(obj)); // [["name", "Alice"], ["age", 25]]
console.log(Object.assign({}, obj, { age: 30 })); // { name: "Alice", age: 30 }
console.log({ ...obj, age: 30 }); // { name: "Alice", age: 30 }
console.log(Object.freeze(obj)); // Prevents modification
console.log(Object.seal(obj)); // Prevents adding/removing properties

// ===== 4. Math Functions =====
console.log(Math.abs(-5)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.max(1, 5, 10)); // 10
console.log(Math.min(1, 5, 10)); // 1
console.log(Math.random()); // Random number (0 to 1)
console.log(Math.pow(2, 3)); // 8 (2^3)
console.log(Math.sqrt(16)); // 4
console.log(Math.trunc(4.9)); // 4

// ===== 5. Date Functions =====
const now = new Date();
console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // 2 (March, 0-based)
console.log(now.getDate()); // Day of the month
console.log(now.toISOString()); // '2025-03-28T12:00:00.000Z'

// ===== 6. Set & Map =====
const mySet = new Set([1, 2, 2, 3]);
mySet.add(4);
console.log(mySet.has(2)); // true
console.log([...mySet]); // Convert Set to Array

const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.get('a')); // 1

// ===== 7. JSON Functions =====
const jsonString = JSON.stringify(obj);
console.log(JSON.parse(jsonString)); // { name: 'Alice', age: 25 }

// ===== 8. Utility Functions =====
console.log(parseInt("42")); // 42
console.log(parseFloat("3.14")); // 3.14
console.log(isNaN("hello")); // true
console.log(typeof 123); // "number"
console.log(typeof []); // "object"
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"

// ===== 9. Copying Objects & Arrays =====
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original }; // Shallow copy
const deepCopy = JSON.parse(JSON.stringify(original)); // Deep copy

// ===== 10. Promises & Async Handling =====
const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(console.log);

async function fetchData() {
  return "Hello";
}
fetchData().then(console.log);

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}
getData();

// ===== 11. Error Handling =====
try {
  JSON.parse("INVALID_JSON");
} catch (error) {
  console.error("Error parsing JSON:", error.message);
}

// ===== 12. Bitwise Operators =====
console.log(5 & 1); // Bitwise AND
console.log(5 | 1); // Bitwise OR
console.log(5 ^ 1); // Bitwise XOR
console.log(~5); // Bitwise NOT
console.log(5 << 1); // Left shift
console.log(5 >> 1); // Right shift

// ===== 13. Event Loop & Async Execution =====
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise resolved"));
console.log("Sync log"); // Logs first due to event loop

// ===== 14. Functional Programming =====
const compose = (f, g) => x => f(g(x));
const double = x => x * 2;
const addOne = x => x + 1;
const composedFunc = compose(double, addOne);
console.log(composedFunc(2)); // 6 (2+1=3, then 3*2=6)

// ===== 15. Data Structures =====
class Stack {
  constructor() { this.items = []; }
  push(element) { this.items.push(element); }
  pop() { return this.items.pop(); }
}

class Queue {
  constructor() { this.items = []; }
  enqueue(element) { this.items.push(element); }
  dequeue() { return this.items.shift(); }
}

// ===== 16. Event Listeners =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("Document fully loaded");
});

const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

button.addEventListener("click", () => {
  alert("Button clicked!");
});
