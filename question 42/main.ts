//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

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

// Array of magician's names
let magicians: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];

// Call make_great to modify the array
let greatMagicians = make_great(magicians);

// Call show_magicians to verify the modification
show_magicians(greatMagicians);
