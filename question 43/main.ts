//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push(`${magician} the Great`);
  }
  return greatMagicians;
}

// Original array of magician's names
let magicians: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];

// Create a copy of the array using slice()
let magiciansCopy: string[] = magicians.slice();

// Call make_great with the copy to modify it
let greatMagicians = make_great(magiciansCopy);

// Call show_magicians with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
