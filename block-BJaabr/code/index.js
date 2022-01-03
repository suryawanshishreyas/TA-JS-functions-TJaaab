// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(number){
  return `${number} + 1`;
}

// - Write a Function Expression
let add= function (number){
  return number + 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let add= (number) => number + 1;

// - Write an Arrow Function with curly brackets
let add = (number) => {
  return number + 1;
}
// - Execute the function
addOne(20);
// - Execute the function and store the return value in a variable.
storedValue= addone(20);
// - What is the typeof returnValue
//number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne (num){
  return num - 1;
}
// - Write a Function Expression
let sub = function (num) {
  return num - 1;
}
// - Write an Arrow Function without curly brackets(if possible)
let sub = (num) => num - 1;
// - Write an Arrow Function with curly brackets
let sub = (num) => {
  return num - 1;
}
// - Execute the function
substractOne(2);
// - Execute the function and store the return value in a variable.
substractOne();
res=substractOne(2);
// - What is the typeof returnValue
//number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function addNumbers(numA,numB){
  return sum= numA + numB;
}
// - Write a Function Expression
let sum= function (numA, numB){
  return sum = numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA, numB) => numA + numB;
// - Write an Arrow Function with curly brackets
let sum = (numA, numB) =>{
  return numA + numB;
}
// - Execute the function
addNumbers(2,3);
// - Execute the function and store the return value in a variable
let addition = addNumbers();
// - What is the typeof returnValue
//number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(n){
  return n*n;
}
// - Write a Function Expression
let sq= function(n){
  return n*n;
}
// - Write an Arrow Function without curly brackets(if possible)
let sq = (n) => n*n;
// - Write an Arrow Function with curly brackets
let sq = (n) =>{
  return n*n;
}
// - Execute the function
square(4);
// - Execute the function and store the return value in a variable
double = square(4);
// - What is the typeof returnValue
//number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y){
  if(x>y){
    return true;
  }
  else{
    return false;
  }
}
// - Write a Function Expression
let large= function(x,y){
  if(x>y){
    return true;
  }
  else {
    return false;
  }
}

// - Write an Arrow Function without curly brackets(if possible)
let large=(x,y) => x>y ? true: false;
// - Write an Arrow Function with curly brackets
let large=(x,y) => {
  return x>y ? true: false;
}
// - Execute the function
isGreater(4,5);
// - Execute the function and store the return value in a variable
let greater=isGreater(4,5);
// - What is the typeof returnValue
//Boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number){
  if(number %2==1){
    return `Number is odd`;
  }
  else{
    return 'Number is even';
  }
}
// - Write an anonymous Function Expression
let oddeven= function(number){
  if(number %2==1){
    return `Number is odd`;
  }
  else{
    return 'Number is even';
  }
}
// - Write an named Function Expression
let oddeven= function oddOrEven(number){
  if(number %2==1){
    return `Number is odd`;
  }
  else{
    return 'Number is even';
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddeven = (number) => number%2==1? odd : even;
// - Write an Arrow Function with curly brackets
let oddeven = (number) => {
  return number%2==1? odd : even;
}
// - Execute the function
oddOrEven(5);
// - Execute the function and store the return value in a variable
evenOrOdd= oddOrEven();
// - What is the typeof returnValue
//string