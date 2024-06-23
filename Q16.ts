let guests : string[] = ["Albert","Newton","Charles"];
let notattenddinner: string = "Newton";

console.log("Invited Dinner Invitations:");

for(let i=0; i < guests.length; i++){
    console.log("Dear",guests[i],",","Join us for a dinner party at our home.");
}

console.log(`Due to some reason,${notattenddinner},can't attend dinner party.`);

let guest : string[] = ["Albert","Grace","Charles"];
console.log("Final Dinner Invitations:");

for(let i=0; i < guest.length; i++){
    console.log("Dear",guest[i],",","Join us for a dinner party at our home.");
}

console.log("Hurrah! We found a bigger table.");

//Beginning
guest.unshift("Bill Gates");

//middle
let middleIndex = Math.floor(guest.length/2);
guest.splice(middleIndex,0,"John");

const append = (item: string, guests: string[]) => {
    guest.push(item);
};
//Add in last
append("Alan Turing",guest);
guest.forEach((guest) => {
    console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
});  