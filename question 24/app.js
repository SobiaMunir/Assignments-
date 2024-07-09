//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
var car = "subaru";
var age = 20;
var numbers = [3, 6, 9, 12, 15];
//***string test***
//true test
console.log("Is car == `subaru`? I predict true.");
console.log(car == "subaru"); //true
//false test
console.log("Is car != `subaru`? I predict false.");
console.log(car != "subaru"); //false
//***lower case function test***
//true test
console.log("Is car.toLowerCase() == `subaru`? I predict true.");
console.log(car.toLowerCase() == "subaru"); //true
//false test
console.log("Is car.toLowerCase() == `toyota`? I predict false.");
console.log(car.toLowerCase() == "toyota"); //false
//***numerical test***
//equality n inequality
console.log("Is age == 20? I predict true.");
console.log(age == 20); //true
console.log("Is age != 25? I predict true.");
console.log(age != 25); //true
//***greater and less***
console.log("Is age > 18? I predict true.");
console.log(age > 18); //true
console.log("Is age < 18? I predict false.");
console.log(age < 18); //false
//***greater equal and less equal***
console.log("Is age >= 18? I predict true.");
console.log(age >= 18); //true
console.log("Is age <= 15? I predict false.");
console.log(age <= 15); //false
//***AND OR operators***
console.log("Is 10 < age < 25? I predict true.");
console.log(age < 25 && age > 10); //true
console.log("Is age > 5 or age < 15? I predict false.");
console.log(age > 20 || age < 15); //false
//***whether an item is an array***
console.log("Is `3` in numbers? I predict true.");
console.log(3 in numbers); //true
console.log("Is `7` in numbers? I predict false.");
console.log(7 in numbers); //false
