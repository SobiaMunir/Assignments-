var guest_list = ["usman", "hina", "sana"];
//for (let i = 0; i < guest_list.length; i++) {
// console.log(`Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow.`);
//}
var notcoming = "usman";
var newguest = "saad";
guest_list[0] = newguest;
//for (let i = 0; i < guest_list.length; i++) {
//  console.log( `Dear` + guest_list[i] + `\n\nYou are invited for a dinner tomorrow.`);
//}
//console.log(`Mr ${notcoming}, is not coming for dinner tomorrow.`);
guest_list.unshift("raniya");
guest_list.splice(guest_list.length / 2, 2, "haniya");
guest_list.push("babar");
//for (let i = 0; i < guest_list.length; i++) {
// console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow`);
//}
//console.log(`we have found a bigger dinner table so we invited more guests`);
console.log("\n\nUnfortunnately we are out of space, so have space for two guests only.\n\n");
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry,Dear ".concat(removed_guest, ", You are not invited for a dinner tomorrow"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou all are still invited for a dinner tomorrow\n\n"));
}
guest_list.splice(0, 2);
console.log(guest_list);
