//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guestList: string[] = ["sana", "iman", "hamna"];
console.log("Great news we found a bigger table");
//add something in array beginning
//unshift(

let guestLists: string[] = ["sana", "iman", "hamna"];
guestList.unshift("hadia");

//SPLICE
guestList.splice(Math.floor(guestList.length / 2), 0, "sadia");
//push
guestList.push("fara");
//for each
guestList.forEach((guest) => {
  console.log(`Dear${guest}, you all  are cordially invited to dinner`);
});
