//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest_list: string[] = [`usman`, `hina`, `sana`];
//for (let i = 0; i < guest_list.length; i++) {
// console.log(`Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow.`);
//}
let notcoming: string = `usman`;
let newguest: string = `saad`;
guest_list[0] = newguest;
//for (let i = 0; i < guest_list.length; i++) {
//  console.log( `Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow.`);
//}
//console.log(`Mr ${notcoming}, is not coming for dinner tomorrow.`);

guest_list.unshift(`raniya`);
guest_list.splice(guest_list.length / 2, 2, `haniya`);
guest_list.push(`babar`);
//for (let i = 0; i < guest_list.length; i++) {
// console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow`);
//}
//console.log(`we have found a bigger dinner table so we invited more guests`);
console.log(
  `\n\nUnfortunnately we are out of space, so have space for two guests only.\n\n`
);
while (guest_list.length > 2) {
  let removed_guest = guest_list.pop();
  console.log(
    `Sorry,Dear ${removed_guest}, You are not invited for a dinner tomorrow`
  );
}
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `Dear ${guest_list[i]}\n\nYou all are still invited for a dinner tomorrow\n\n`
  );
}
guest_list.splice(0, 2);
console.log(guest_list);
