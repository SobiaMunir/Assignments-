//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestList: string[] = ["sana", "sobia", "iman"];
//print the name who cant make dinner
let unableAttend: string = guestList.splice(1, 1)[0];
console.log(`${unableAttend} cant make dinner`);
//push
guestList.push("hamna");
console.log(guestList);
//print a message
guestList.forEach((guest) => {
  console.log(`Dear${guest}, you are cordially invited`);
});
