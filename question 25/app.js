//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_variable = "green";
// passing version
//if (alien_variable === `green`){
//    console.log("player just earnned 5 points");
//}
//else{
//console.log("no point earned");
//}
//falling version
alien_variable = "red";
if (alien_variable === "green") {
    console.log("player just earnned 5 points");
}
else {
    console.log("{}");
}
