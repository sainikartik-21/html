// STRING QUESTIONS

// 1. Reverse a String
function reverseString(str) {
  // Split the string into characters, reverse them, and join back
  return str.split('').reverse().join('');
}

// 2. Check Palindrome (case-insensitive)
function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

// 3. Count Vowels
function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// 4. Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// 5. Character Frequency
function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

// ARRAY QUESTIONS

// 1. Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 2. Flatten an Array (1 level deep)
function flattenArray(arr) {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}

// 3. Find Max and Min
function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
}

// 4. Sum of Even Numbers
function sumEven(arr) {
  return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

// 5. Group by Type
function groupByType(arr) {
  const grouped = {};
  for (let item of arr) {
    const type = typeof item;
    if (!grouped[type]) {
      grouped[type] = [];
    }
    grouped[type].push(item);
  }
  return grouped;
}