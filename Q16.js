var guests = ["Albert", "Newton", "Charles"];
var notattenddinner = "Newton";
console.log("Invited Dinner Invitations:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear", guests[i], ",", "Join us for a dinner party at our home.");
}
console.log("Due to some reason,".concat(notattenddinner, ",can't attend dinner party."));
var guest = ["Albert", "Grace", "Charles"];
console.log("Final Dinner Invitations:");
for (var i = 0; i < guest.length; i++) {
    console.log("Dear", guest[i], ",", "Join us for a dinner party at our home.");
}
console.log("Hurrah! We found a bigger table.");
//Beginning
guest.unshift("Bill Gates");
//middle
var middleIndex = Math.floor(guest.length / 2);
guest.splice(middleIndex, 0, "John");
var append = function (item, guests) {
    guest.push(item);
};
//Add in last
append("Alan Turing", guest);
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner. It would be an honor to have you join us."));
});
