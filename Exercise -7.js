// Exercise --7
// Question 1
// write a program in JavaScript to define all the functions to find all the vowels in string and convert into b in all the vowels
function convertVowelsToB(inputString) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
  
      if (vowels.includes(char.toLowerCase())) {
        result += 'b';
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  const input = "mumbai";
  const convertedString = convertVowelsToB(input);
  console.log(convertedString);

  // Question 2
// Write a program in JavaScript to define function to check if input is panagram
//Hint: Check if input contains all 26 alphabets if yes return true else return false, alphabets can be repeated and can
// be in any order but the input text should contain all 26 alphabets

  function isPangram(input) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    const cleanInput = input.toLowerCase().replace(/[^a-z]/g, '');
    
    const uniqueLetters = new Set(cleanInput.split(''));
    
    for (const letter of alphabet) {
      if (!uniqueLetters.has(letter)) {
        return false;
      }
    }
    
    return true;
  }
  
  // Test the function
  const input1 = "aaaabbbcdefghijklmnopqrstuvwxyzzzz";
  console.log(isPangram(input1));  // Output: true

  const input2 = "Hi , How are you?";
console.log(isPangram(input2));  // Output: false
  
  // Question 3
// Write a program in JavaScript to define a function countUnique Consonants(inputs) which 
// retuns count of unique letters which are not vowels occurring in input

  function isConsonant(letter) {
    return /[bcdfghjklmnpqrstvwxyz]/i.test(letter);
}

function countUniqueConsonants(input) {
    const consonantSet = new Set();

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        if (isConsonant(letter)) {
            consonantSet.add(letter.toLowerCase());
        }
    }

    return consonantSet.size;
}

// Test the function
const input3 = "kolkata";
const uniqueConsonantCount = countUniqueConsonants(input);

console.log(`Number of unique consonants: ${uniqueConsonantCount}`);

  