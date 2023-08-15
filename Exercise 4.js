// Exercise ---4
// Question 1
//Write a program in JavaScript to define function that takes input and returns template string in below expected output format Call
// the function later and store result in result variable and print it, the function should be returning template string as shown below in the expected output
//function convert (product)
// Example input
// (naze: "samsung", price: 3000)
// Example output
// Name of product is samsung and the price of product is 30000


function convert(product) {
    const { name, price } = product;
    return `Name of product is ${name} and the price of product is ${price}`;
}

const productName = prompt("Enter the name of the product:");
const productPrice = parseFloat(prompt("Enter the price of the product:"));

const userProduct = { name: productName, price: productPrice };

const result = convert(userProduct);

console.log(result);

// Question 2
// Write a program in JavaScript to define function that takes employee object and returns template string in below
// expected output format, Call the function later and store result in result variable and print it, the function should be returning template string as
// shown below in the expected output
// function convert (employee)
// Example input
// (username: "aditya", age: 21)
//Example output
//Name of user is aditya and the age is 21


function convert(employee) {
    return `Name of user is ${employee.username} and the age is ${employee.age}`;
}

const username = prompt("Enter username:");
const age = prompt("Enter age:");

const employee = {
    username: username,
    age: age
};

const result1 = convert(employee);

console.log(result1);






