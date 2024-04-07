// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returnslet counter = 0;

let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) {
    return "done!";
  }
  counter++;
  return inception();
}

console.log(inception());

// Factorial

function factorialRecursive(num) {
  // O(n)
  if (num <= 2) {
    return num;
  }
  return num * factorialRecursive(num - 1);
}

function factorialIterative(num) {
  // O(n)
  let fact = 1;
  if (num === 2) {
    return console.log((fact = 2));
  }
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
}

console.log(factorialRecursive(5));
factorialIterative(2);

// Fibonacci

function fibonacciRecursive(n) {
  // O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(n) {
  // O(n)
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr);
}

console.log(fibonacciRecursive(3));
fibonacciIterative(5);
