//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
// Array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call make_great to modify the array
var greatMagicians = make_great(magicians);
// Call show_magicians to verify the modification
show_magicians(greatMagicians);
