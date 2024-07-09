//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
// 5 true tests
//equality test
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //true
//strict equality test
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //true
//inequality test
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); //true
//strict inequality test
console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota'); //true
//equality test
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //true
// 5 false tests
//equality test
console.log("Is car == undefined? I predict false.");
console.log(car == undefined); //false
//strict equality test
console.log("Is car === 'toyota'? I predict falsee.");
console.log(car === 'toyota'); //false
//strict equality test
console.log("Is car === null? I predict false.");
console.log(car === null); //false
//strict equality test
console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaro'); //false
//equality test
console.log("Is car == 'Subaru'? I predict false.");
console.log(car == 'Subaru'); //false
