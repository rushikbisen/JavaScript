// Exercise---3
// Question 1
// Write a program in javascript to define a function that accept a natural no in argument and give the some of the numbers till arguments.(use let)

function calculateSum(n) {
    if (n <= 0) {
      return 0; // Return 0 for non-positive numbers
    }
  
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  const userInput = parseInt(prompt("Enter a natural number:"));
  if (isNaN(userInput) || userInput < 0) {
    console.log("Please enter a valid natural number.");
  } else {
    const result = calculateSum(userInput);
    console.log(`Sum of numbers up to ${userInput} is: ${result}`);
  }
 // Question--- 2
//  write a program in JavaScript to define a function that accepts a natural number argument and gives the sum of number till arguments. (Use Var)

function sumOfNumbers(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

var number = 4; // Replace 5 with the desired natural number
var result = sumOfNumbers(number);
console.log("Sum of natural numbers up to", number, "is:", result);

// Question ---3
// Create global constants G, R, B to store colors. For eg. G for Green, B for Blue, and R for Red
//Create function displayValue() accepting an argument:                         //If argument is equal to G return "green garden"
     //If argument is equal to R return "red rose"
      // If argument is equal to B return "blue rose"               
                     //Else return "unsupported color 

                     const G = 'Green';
                     const R = 'Red';
                     const B = 'Blue';
                     
                     function displayValue(color) {
                         if (color === G) {
                             return "green garden";
                         } else if (color === R) {
                             return "red rose";
                         } else if (color === B) {
                             return "blue rose";
                         } else {
                             return "unsupported color";
                         }
                     }
                     
                     // Example usage
                     const inputColor = R;
                     const result = displayValue(inputColor);
                     console.log(result); // Output: "red rose"
                     