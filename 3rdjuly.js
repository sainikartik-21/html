//1.

function flattenDeep(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenDeep(item)); // Recursive call
    } else {
      result.push(item);
    }
  }
  return result;
}

//2.

function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

//3.output

const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a); // [1, 2, 3, 4]

//4.Find Second Largest Number Without Sorting

function secondLargest(arr) {
  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num < max) {
      second = num;
    }
  }
  return second;
}

//5. Count Occurrences in an Array

function countOccurrences(arr) {
  const counts = {};
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
  return counts;
}

//6.Custom .map() Polyfill

Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

//7.Sort Array of Objects by Multiple Properties

const data = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 22 }
];

data.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return a.age - b.age; // If names equal, compare by age
});

console.log(data);

// 8. Filter Prime Numbers from an Array

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function getPrimes(arr) {
  return arr.filter(isPrime);
}

//12.Find All Pairs with Target Sum

function findPairs(arr, target) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

//13. Chunk an Array into N-Sized Groups

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

