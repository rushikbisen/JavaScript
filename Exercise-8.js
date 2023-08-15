//Exercise-2(Functions in Javascript)
//1.Write a program in javascript to define a function named displayDetails that accepts argument and display its details in comma separated value.
/*
function displayDetails(name, age, salary) {
  console.log(`${name},${age},${salary}`);
}

const employeeName = "mohan";
const employeeAge = 21;
const employeeSalary = 50000;

displayDetails(employeeName, employeeAge, employeeSalary);
*/

//2.Write a program in Javascript to define Arrow fuuction that accepts array of employees .

/*
const displayEmployeeDetails = (employees) => {
  employees.forEach((employee) => {
      const details = `${employee.name}:${employee.age}:${employee.salary}`;
      console.log(details);
      
  });
};




const employees = [
  { name: "mohan", age: 21, salary: 50000 },
  { name: "pankaj", age: 22, salary: 60000 }
];

displayEmployeeDetails(employees);
*/

//3.Member function in Javascript
/*
const employee = {
  displayDetails: function(name, age, salary) {
      console.log(`${name},${age},${salary}`);
  }
};

// Example usage
const employeeName = "mohan";
const employeeAge = 21;
const employeeSalary = 50000;

employee.displayDetails(employeeName, employeeAge, employeeSalary);

  */
