// 1. Loop Basics

// 1. Print numbers from 1 to 10 using a for loop
console.log("Numbers from 1 to 10 (for loop):");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print numbers from 10 down to 1 using a while loop
console.log("Numbers from 10 to 1 (while loop):");
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// 3. Print numbers from 1 to 5 using a do...while loop
console.log("Numbers from 1 to 5 (do...while loop):");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// 1. Even numbers from 1 to 50
console.log("Even numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) console.log(i);
}

// 2. Odd numbers between 20 and 50
console.log("Odd numbers between 20 and 50:");
for (let i = 21; i < 50; i += 2) {
  console.log(i);
}

// 3. Numbers divisible by 3 from 1 to 30
console.log("Numbers divisible by 3 from 1 to 30:");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) console.log(i);
}
// 3. Summation & Product

// 1. Sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100:", sum);

// 2. Product of numbers from 1 to 10
let product = 1;
for (let i = 1; i <= 10; i++) {
  product *= i;
}
console.log("Product from 1 to 10:", product);

// 3. Sum of all even numbers between 1 and 50
let evenSum = 0;
for (let i = 2; i <= 50; i += 2) {
  evenSum += i;
}
console.log("Sum of even numbers from 1 to 50:", evenSum);

// 4. Sum of squares from 1 to 10
let squareSum = 0;
for (let i = 1; i <= 10; i++) {
  squareSum += i * i;
}
console.log("Sum of squares from 1 to 10:", squareSum);

// 4. Conditionals Inside Loops

// 1. Print 1 to 20, skip multiples of 4
console.log("Numbers 1 to 20, skipping multiples of 4:");
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) continue;
  console.log(i);
}

// 2. Print 1 to 10, stop at 7
console.log("Numbers 1 to 10, stop at 7:");
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}

// 3. Count numbers divisible by both 3 and 5 from 1 to 100
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) count++;
}
console.log("Count divisible by 3 and 5 between 1 and 100:", count);

// 5. Nested Loops (No Patterns)

// 1. All pairs (i, j) where i, j go from 1 to 3
console.log("Pairs (i, j) where i, j from 1 to 3:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`(${i}, ${j})`);
  }
}

// 2. All combinations (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4)
console.log("Combinations (a, b) where a + b = 5 and 1 <= a,b <= 4:");
for (let a = 1; a <= 4; a++) {
  for (let b = 1; b <= 4; b++) {
    if (a + b === 5) {
      console.log(`(${a}, ${b})`);
    }
  }
}

// 6. Logic-Based Tasks

// 1. Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Is 17 a prime number?", isPrime(17)); // Example

// 2. Print factorial of a number (e.g., 6)
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log("Factorial of 6:", factorial(6));

// 3. Reverse a number using a loop (e.g., 123 → 321)
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log("Reverse of 123 is:", reverseNumber(123));

// 4. Count digits in a number using loop
function countDigits(num) {
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}
console.log("Number of digits in 4567:", countDigits(4567));

// 5. Check if number is a palindrome
function isPalindrome(num) {
  let original = num;
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev === original;
}
console.log("Is 1331 a palindrome?", isPalindrome(1331));
