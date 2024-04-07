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
    return (fact = 2);
  }
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
}

console.log(factorialRecursive(5));
factorialIterative(5);
