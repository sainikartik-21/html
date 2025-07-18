const prompt = require('prompt-sync')();

// 🟢 Beginner Questions 1-10

// 1. Take a number and check if it's even or odd.
const number1 = parseInt(prompt("Enter a number to check even or odd:"));
if (number1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 2. Input a number and check if it is positive, negative, or zero.

const number2 = parseInt(prompt("Enter another number to check if it's positive, negative, or zero:"));
if (number2 > 0) {
    console.log("Positive");
} else if (number2 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 3. Take two numbers and print the greater one.

console.log("Enter two numbers to find the greater one:");
const number3 = parseInt(prompt("Enter a first number:"));
const number4 = parseInt(prompt("Enter a second number:"));
if (number3 > number4) {
    console.log("Greater number is:", number3);
} else {
    console.log("Greater number is:", number4);
}

// 4. Input a number and check if it's divisible by 3 or not.

const number5 = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
if (number5 % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not divisible by 3");
}


// 5. Input a number and check if it’s a multiple of 7 or not.

const number6 = parseInt(prompt("Enter a number to check if it's a multiple of 7:"));
if (number6 % 7 === 0) {
    console.log("Multiple of 7");
} else {
    console.log("Not a multiple of 7");
}

// 6. Input a character and check whether it's a vowel or consonant (assume lowercase).

const char = prompt("Enter a character to check if it's a vowel or consonant:").toLowerCase();
if ("aeiou".includes(char)) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// 7. Input a number and check if it is between 10 and 50.

const number7 = parseInt(prompt("Enter a number to check if it's between 10 and 50:"));
if (number7 > 10 && number7 < 50) {
    console.log("Between 10 and 50");
} else {
    console.log("Not between 10 and 50");
}

// 8. Input a number and check if it is a 3-digit number.

const number8 = parseInt(prompt("Enter a number to check if it's a 3-digit number:"));
if (number8 >= 100 && number8 < 1000) {
    console.log("3-digit number");
} else {
    console.log("Not a 3-digit number");
}

// 9. Input age and check if the person is eligible for voting (≥18).

const age = parseInt(prompt("Enter your age to check if you're eligible for voting:"));
if (age >= 18) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible for voting");
}

// 10. Input a temperature and print if it's Hot (>30), Moderate (15–30), or Cold (<15).

const temperature = parseInt(prompt("Enter the temperature to check if it's Hot, Moderate, or Cold:"));
if (temperature > 30) {
    console.log("Hot");
} else if (temperature >= 15 && temperature <= 30) {
    console.log("Moderate");
} else {
    console.log("Cold");
}


// 🟡 Intermediate Level (11–20)

// 11. Input three numbers and find the greatest among them.

const num1 = parseInt(prompt("Enter first number:"));
const num2 = parseInt(prompt("Enter second number:"));
const num3 = parseInt(prompt("Enter third number:"));
if (num1 > num2 && num1 > num3) {
    console.log("Greatest number is:", num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("Greatest number is:", num2);
} else {
    console.log("Greatest number is:", num3);
}

// 12. Input a year and check if it is a leap year.

const num4 = parseInt(prompt("Enter a year to check if it's a leap year:"));
if(num4 % 4 === 0 && (num4 % 100 !== 0 || num4 % 400 === 0)) {
    console.log("Leap year");
}else{
    console.log("It is not a leap year")
}

// 13. Input a character and check if it's uppercase, lowercase, digit, or special character.

const num5 = prompt("Enter the character to check if it is a uppercase, lowercase, digit or special character")
if(num5.match(/[A-Z]/)) {
    console.log("Uppercase");
}else if(num5.match(/[a-z]/)) {
    console.log("Lowercase");
}else if(num5.match(/[0-9]/)) {
    console.log("Digit");
}else{
    console.log("Special Character");
}

// 14. Input marks of a student (out of 100) and print the grade:

const marks = parseInt(prompt("Enter marks of the student (out of 100):"));
if(marks >= 90){
    console.log("Grade A");
}else if(marks >= 75){
    console.log("Grade B");
}else if(marks >= 60){
    console.log("Grade C");
}else if(marks >= 40){
    console.log("Grade D");
}else{
    console.log("Grade F");
}

// 15. Input the day number (1–7) and print the corresponding weekday.

const dayNumber = parseInt(prompt("Enter the day number (1-7) : 1 = Monday and 7 = Sunday:"));
if (dayNumber === 1) {
    console.log("Monday");
} else if (dayNumber === 2) {
    console.log("Tuesday");
} else if (dayNumber === 3) {
    console.log("Wednesday");
} else if (dayNumber === 4) {
    console.log("Thursday");
} else if (dayNumber === 5) {
    console.log("Friday");
} else if (dayNumber === 6) {
    console.log("Saturday");
} else if (dayNumber === 7) {
    console.log("Sunday");
} else {
    console.log("Invalid day number");
}

// 16. Take a number and check whether it is divisible by both 5 and 11.

const number9 = parseInt(prompt("Enter a number to check if it's divisible by both 5 and 11:"));
if (number9 % 5 === 0 && number9 % 11 === 0) {
    console.log("Divisible by both 5 and 11");
} else {
    console.log("Not divisible by both 5 and 11");
}

// 17. Input a number and check if it is a prime number (basic logic).

const number10 = parseInt(prompt("Enter a number to check if it's a prime number:"));

if (number10 <= 1) {
    console.log(number10 + " is not a prime number.");
} else if( number10 >= 2) {
    for (let i = 2; i < number10; i++) {
        if (number10 % i === 0) {
            console.log(number10 + " is not a prime number.");
            break;
        }
    }
} else {
    console.log(number10 + " is a prime number.");
}

