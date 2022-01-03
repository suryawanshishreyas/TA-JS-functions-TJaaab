/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name){
  alert(`Hello ${name}`);
}
sayHello("Shreyas");
sayHello("Rahul");
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName, lastName){
  return `${firstName} ${lastName}`;
}
let fullname=getFullName("Shreyas","Suryawanshi");
alert(fullname);

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

function addTwoNumbers(firstNum, secondNum){
  if(firstNum>secondNum && firstNum<secondNum){
    alert(`enter a valid input`);
  }
  else{
    return firstNum + secondNum;
  }
}
let msg=addTwoNumbers(10,"20");
alert(msg);
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
var add,sub,div,mul;
function calc(numA, numB, operation){
  if(operation == 'add'){
    alert(`addition is  ${numA + numB}`);
  }
  else if(operation == `sub`){
    alert(`sub is: ${numA - numB}`);
  }
  else if(operation == `div`){
    alert(`div is: ${numA / numB}`);
  }
  else if(operation == `mul`){
    alert(`mul is: ${numA * numB}`);
  }
  else {
    alert(`invalid input`);
  }
}
let msg1=calc(1,2,`add`);
let msg2=calc(1,2,`sub`);
let msg3=calc(2,1,`mul`);
let msg4=calc(4,5,`div`);
alert(msg4);
alert(msg3);
alert(msg2);
alert(msg1);

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(number){
  if (number%4 == 0){
    return true;
  }
  else {
    return false;
  }
}
msg=isLeapYear(2004);
alert(msg1);
/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
let fact,i;
function getFactorial(number){
  for(i=1; i<number; i++){
    fact=number * i;
  }    
  return fact;
}
msg=getFactorial(4);
alert(msg);
