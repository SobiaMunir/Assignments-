//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
// Original array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Create a copy of the array using slice()
var magiciansCopy = magicians.slice();
// Call make_great with the copy to modify it
var greatMagicians = make_great(magiciansCopy);
// Call show_magicians with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
