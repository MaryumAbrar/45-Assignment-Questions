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