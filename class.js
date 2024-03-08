//Boolean Operators, conditionals and if statements
//***AND Operator (&&) Examples***
//1. Checking if a user is both logged in and has admin privileges:
const isLoggedIn = true;
const isAdmin = false;
if (isLoggedIn && isAdmin) {
  console.log("User has admin privileges.");
} else {
  console.log("User does not have admin privileges.");
}
//2. Verifying if a number is both positive and even:
const number = 7;
console.log('number grater than 0 and even', number > 0 && number % 2 === 0)
if (number > 0 && number % 2 === 0) {
  console.log("The number is positive and even.");
} else {
  console.log("The number is not positive and even.");
}
//***OR Operator (||) Examples***
//1. Checking if a user is both logged in and has admin privileges:
const customerAge = 40;
const hasLoyaltyCard = false;
// if (customerAge < 30 || hasLoyaltyCard) {
//   console.log("Customer is eligible for a discount.");
// } else {
//   console.log("Customer is not eligible for a discount.");
// }
//2. Verifying if a vehicle is either a car or a motorcycle:
const vehicleType = "bike";
// if (vehicleType === "car" || vehicleType === "motorcycle") {
//   console.log("This is a car or a motorcycle.");
// } else {
//   console.log("This is not a car or a motorcycle.");
// }
//3. Deciding if a user can access a premium feature based on subscription or high reputation:
const hasSubscription = false;
const reputationScore = 500;
if (hasSubscription || reputationScore > 1000) {
  //console.log("User can access premium feature.");
} else {
  //console.log("User cannot access premium feature.");
}
//***NOT Operator (!) Examples***
//1. Checking if a user is not logged in:
//const userIsLoggedIn = false;
 //console.log('Not user Logged In boolean: ', !userIsLoggedIn)
// if (!userIsLoggedIn) {
//   console.log("User is not logged in.");
//} else {
  console.log("User is logged in.");
// }
// if (useIsLoggedIn) {
//     console.log("User is logged in.");
// } else {
//   console.log("User is not logged in.");
// }
//2. Verifying if a variable is not equal to a specific value:
const dayOfWeek = "Sunday";
// if (dayOfWeek !== "Saturday") {
//   console.log("It's not a Saturday.");
// } else {
//   console.log("It's a Saturday.");
// }
//3. Reversing a condition about weather being sunny:
const isSunny = false;
if (!isSunny) {
  //console.log("It's not sunny outside.");
} else {
  //console.log("It's sunny outside.");
}
//***if statement Examples***
//example 1.
const temperature = 25; // Suppose it's 25°C
if (temperature > 30) {
  //console.log("It's hot outside!"); // Won't be executed because temperature is not greater than 30
} else {
  //console.log("It's not too hot."); // This will be executed because temperature is not greater than 30
}
//example 2. - check if person is old enough/has permission to access
const age = 17;
const hasPermission = true;
if (age >= 18 || hasPermission) {
  //console.log("You can access the website.");
} else {
  //console.log("You are not allowed to access the website.");
}
//example 3. chaining if statements to evaluate multiple conditions
const score = 60; //student score on test
// if (score >= 90) {
//   console.log("You got an A!");
// } else if (score >= 80) {
//   console.log("You got a B.");
// } else if (score >= 70) {
//   console.log("You got a C.");
// } else if (score >= 60) {
//   console.log("You got a D.");
// } else {
//   console.log("You got an F.");
// }
//example 4. same example as above using a switch statement
const score2 = 50;
const score3 = 120;
// switch (score2) {
//   case score2 > score3:
//     console.log("You got an A!");
//     break;
//   case score2 >= 80:
//     console.log("You got a B.");
//     break;
//   case score2 >= 70:
//     console.log("You got a C.");
//     break;
//   case score2 >= 60:
//     console.log("You got a D.");
//     break;
//   default:
//     console.log("You got an F.");
// }
//***Modulus Operator Examples***
// exmaple 1. find remainder
const dividend = 17;
const divisor = 5;
const remainder = dividend % divisor;
// console.log('remainder: ', remainder); // Output: 2
//example 2. checking for even or odd numbers
// const myNumber = 7;
// if (myNumber % 2 === 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// }
//***Loops Examples***
//for loop
//example 1. basic for loop
for (let i = 0; i <= 5; i+=2) {//initialization(declare i as index); condition(how many times to loop); update(what to increase index by after each iteration)
  // console.log("Iteration " + i);
}
//example 2. print all even numbers from 1 - 10 to the console
// for (let i = 0; i <= 10; i++) {
//   if (i === 0) {
//     // continue; //continue skips the current iteration if hte condition is met
//     continue;
//   }
//   if (i % 2 === 0) { //modulus
//     console.log(i)
//     console.log('even number: ', i)
//   }
// }
//while loop
//example 1. basic while lop
// let count = 0;
// while (count <= 3) {
//   console.log("Count is " + count);
//   count++;
// }
//example 2. countdown
// let countdown = 10;
// while (countdown >= 5) {
//   console.log('countdown: ', countdown);
//   countdown--;
// }
//example 3. generate a sequence of powers of 2 until the power exceeds a certain limit.
// const limit = 1000;
// let powerOfTwo = 1;
// let exponent = 0;
// while (powerOfTwo <= limit) {
//   console.log(`2^${exponent} = ${powerOfTwo}`);
//   console.log('2^' + exponent + '=' + powerOfTwo);
//   powerOfTwo *= 2;
//   exponent++;
// }
//do while loop
//example 1. basic do while loop
// let num = 8;
// do {
//   console.log("Number is " + num);
//   num++;
// } while (num <= 3);
//example 2. prompt the user to guess a number. The loop continues until the user guesses the correct number.
// const secretNumber = 7;
// let guess;
// let attempts = 0;
// do {
//   guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
//   attempts++;
//   if (attempts > 2) {
//     console.log(`Sorry! You did not buess the secret number within 3 guesses.`);
//     return
//   }
// } while (guess !== secretNumber);
// console.log(`Congratulations! You guessed the secret number ${secretNumber} in ${attempts} attempts.`);