//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//define array of guest
let guestList = ["sana", "sobia", "iman"];
//invite each guest for dinner
guestList.forEach(guest => {
    console.log(`Dear${guest},you are cordially invited to dinner`);
});
export {};
