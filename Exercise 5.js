// Exercise ---5
// Question 1
// write a program in JavaScript to print fibonacci series of n terms where n is the input by user. Assume variable input contains inputs by user

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  const n = parseInt(input);

  function fibonacciSeries(n) {
    const series = [0, 1];

    for (let i = 2; i < n; i++) {
      const nextNumber = series[i - 1] + series[i - 2];
      series.push(nextNumber);
    }

    return series;
  }

  const fibSeries = fibonacciSeries(n);

  console.log(`Fibonacci series of ${n} terms:`);
  for (const num of fibSeries) {
    console.log(num);
  }

  rl.close();
});

// Question 2
// write a JavaScript that check  whether the input number is  Armstrong number or not.  Assume variable input contains input by user

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

function isArmstrongNumber(number) {
    const numStr = number.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let digit of numStr) {
        sum += power(parseInt(digit), numDigits);
    }

    return sum === number;
}

const input = parseInt(prompt("Enter a number:"));


if (isArmstrongNumber(input)) {
    console.log(`True`);
} else {
    console.log(`False`);
}
