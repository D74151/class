

console.log("Step 1:  Number of Seats on a Plane");
var availableFlightSeats = 7;
console.log(availableFlightSeats);
console.log("The number of seats left on this plane are " + availableFlightSeats)

console.log("Step 2:  Cost of Groceries");
var costOfGroceries = 52.35;
console.log("The cost of the groceries is $" + costOfGroceries);


console.log("Step 3:  Middle Initial");
var middleInitial = "M";
console.log("Your middle initial is " + middleInitial);

console.log("Step 4:  Is it Hot Outside?");
var isItHotOutside = false;
console.log("Is it hot outside " + isItHotOutside);

console.log("Step 5:  First Name");
var firstName = "Chris"
console.log(firstName);
console.log(" Your first name is " + firstName);
;
console.log("Step 6:  Street Address");
var streetAddress = "112 Vincent Drive Verona, Pa 15147";
console.log("My street address is " + streetAddress);







/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓

console.log("There has been 2 seats booked, current seat available are " + ( availableFlightSeats - 2) + " seats left" );

    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
var candyBar = 2.15
console.log("Someoen added a candy bar in my cart, the new total is " +  (costOfGroceries + 2.15)) ;

    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
middleInitial = "J";
console.log("Oops! Middle initial is now "+ middleInitial);


    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
isItHotOutside = !isItHotOutside;
console.log(isItHotOutside) ;   

    console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
var fullName = firstName + middleInitial + "Jacobs"
console.log("My full name is " + fullName);

    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓

console.log("Welcome our new customer" + fullName + " Who lives at: " + streetAddress);




  

var isHotOutside = false;

var firstDigit = 10;
var secondDigit = 10;
var thirdDigit = 10
var lotteryChances = (firstDigit * secondDigit * thirdDigit);
console.log("You have a one in a " + lotteryChances + " of winnning the lottery");

var ageRequiredToDrive = 16;
var currentAge = 16;
var canPersonDrive = currentAge >= ageRequiredToDrive
if (currentAge >= ageRequiredToDrive){
    console.log("This person can drive");
 }       else 
            console.log("This person cannot drive");
        


    console.log(canPersonDrive);





var firstName = "same"

if (firstName == "sam"){
    console.log("Hello, sam!");
} else {
    console.log("Hey, " + firstName);
}


var costOfMilk = 1.99

if (costOfMilk < 2 ) {
    console.log("We will buy 2 gallons");
} else if (costOfMilk < 3 ) {
    console.log("We will buy only 1 gallon");
} else {
    console.log("We don't want any milk");
}

 var grade = "A";

 switch (grade) {
    case "A":
        console.log ("90-100");
        break;
    case "B":
        console.log("80-89");
        break;
    case "C":
        console.log("70-79");
        break
    default:
        console.log("0-69");
 }

 var a = 5;
 var b = 6;

 if (a==5) {
    if (b==7) {
        console.log("a is 5 and b is 6");
            } else {
                console.log("a is 5 but b is not 6");
            }
 }

if (a==5 && b==6) {
    console.log("a is 5 and b is 6");
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let i =0; i < 20; i++) {
    if (i % 2 ==0) {
        console.log(i);
    }
}



/*     if (condition1) {
       // code to execute if condition1 is true, then condition 2 is checked
          if (nestedCondition) {
             // code to execute if both condition1 and nestedCondition2 are true
          } else {
             // code to execute if condition1 is true but nestedCondition2 is false
          }
     } else {
       // code to execute if condition1 is false
     } */

     let num = 10;

     if (num > 0) {
          if (num % 2 == 0) {
              console.log(num + " is a positive even number");
          } else {
              console.log(num + " is a positive odd number");
          }
     } else if (num == 0) {
          console.log("Zero is neither positive nor negative");
     } else {
          console.log(num + " is a negative number");
     }   
    
     let age = 21;
     let isAdult = false;
    
     if (age >= 13) {
         if (age >= 65) {
            isAdult = true;
            console.log("You pay the Senior Citizen price of $25!");
         } else {
            isAdult = true;
            console.log("You pay the full ticket price of $35!");
         }
     } else {
        console.log("You pay the Child ticket price of $15!");
     }

     /*let age = 21;
     let status;

     switch (true) {
        case (age < 18):
          status = "a minor";
          break;
        case (age >= 18 && age <= 65):
          status = "an adult";
          break;
        default:
          status = "a senior";
     }

     console.log("You are " + status);

     Output: "You are an adult"   */
    /* while Loop:

Write a while loop using the already declared variable userNumber.
Check if userNumber is between 1 and 100.
If it is, create a while loop that prints all integers starting with userNumber and ending with 100.
If not, print "Your number was not between 1 and 100." to the console.*/
     
/*   var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var userNumber = parseInt(input[0]);
/*** DO NOT CHANGE THE CODE ABOVE THIS LINE ***/
 
// WRITE YOUR CODE HERE
/*  var counter = userNumber;
if ( userNumber <= 100 && userNumber >= 1 ) {
    while ( counter <= 100 ) {
        console.log(counter++);
    }
} else {
    console.log("Your number was not between 1 and 100."); 
}
*/

console.log('-----------Finished------------')