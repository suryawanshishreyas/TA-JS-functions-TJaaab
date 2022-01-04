// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

// function calculateDogAge(dogAge,humanYear) {
//   humanYear=Number(prompt(`Enter human age in years`));
//   dogAge= humanYear / 7;
//   console.log(dogAge);
//   return `dogAge is ${dogAge} years`;
// }
// let msg=calculateDogAge(undefined,undefined);
// alert(`${msg}`);




/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

// function calculateMoviesToWatch(age,moviesToWatch) {
//   const maxAge=100;
//   age= prompt(`Enter your age`);
//   moviesToWatch = (maxAge - age) * 12 * 4;
//   return moviesToWatch;
// }
// let msg =calculateMoviesToWatch();
// alert(`You will watch ${msg} movies till you die`);

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

// function celsiusToFahrenheit(tempInC, tempInF) {
//   tempInC = Number(prompt(`Enter temp in degree Celsius`));
//   tempInF = (tempInC * 9/5) + 32;
//   return `${tempInF}°F is ${tempInC}°C`;
// }
// let msg=celsiusToFahrenheit();
// alert(msg);

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

// function fahrenheitToCelsius(tempInC, tempInF) {
//   tempInF = Number(prompt(`Enter temp in degree Fahrenheit`));
//   tempInC = (tempInF - 32) * 5/9;
//   return `${tempInF}°F is ${tempInC}°C`
// }
// let msg=fahrenheitToCelsius();
// alert(msg);

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

// function pow(x, n) {
//   x= +prompt(`Enter value of x`);
//   n= +prompt(`Enter value of n`);
//   if(n<0 || x<0){
//     return `The number below 1 is not allowed`;
//   }
//   else{
//     // alert(x**n);
//     return x**n;
    
//   }
// }
// let msg = pow(undefined,undefined);
// alert(`${msg}`);

// Test
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

// const n= +prompt(`Enter a number`);
// userInput =prompt(`sum or product?`);
// function sumOrProductOfN(n, userInput,sumOfInput, productOfInput) {
//   console.log(userInput);
//   sumOfInput=0;
//   productOfInput=1;
//   let i;
//   for(i=1; i<=n; i++){
//     sumOfInput+= i;
//     productOfInput= productOfInput * i;
//     console.log(i);
//     if(userInput == 'sum'){
//       console.log(sumOfInput);
//       return sumOfInput ;
//     }
//     else if(userInput == 'product'){
//       return productOfInput;
//     }
//     else{
//       return `Enter valid input`;
//     }
//   }
// }
// let msg= sumOrProductOfN(2,'sum');
// alert(`${msg}`);

// sumOrProductOfN(4, 'sum'); // 10
// sumOrProductOfN(4, 'product'); // 24
// sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

// function sumOfN(n) {
//   let sum=0;
//   n=+prompt("enter number");
//   for(i=0; i<=n;i++){
//     sum+=i;
//   }
//   return sum;
// }
// let msg=sumOfN();
// alert(`${msg}`);
/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/
// function sumOfN(n) {
//   let sum=0;
//   n=+prompt("enter number");
//   for(i=0; i<=n; i++){
//     if(i%5==0 || i%7==0){
//       sum+=i;
//     }
//     else{
//       alert(`no multiples of 5 or 7 found`);
//     }
//   }
//   return sum;
// }
// let msg=sumOfN();
// alert(`${msg}`);


/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

// function min(a,b) {
//   a= +prompt(`Enter a`);
//   b= +prompt(`Enter b`);
//   if (a<b){
//     return `a is minimum`;
//   }
//   else if(a>b){
//     return `b is minimum`;
//   }
//   else{
//     return `a and b are equal`;
//   }
// }
//   let msg=min();
//   alert(msg);


// min(0, 10);
// min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(x) {
  if(x === ""){
    return "";
  }
  else if(x === "true" || x=== "false"){
    return "boolean";
  }
  else if(!Number.isNaN(Number(x))){
    return "number";
  }
  else{
    return typeof x;
  }
}
let msg=typeCheck("true");
alert(msg);