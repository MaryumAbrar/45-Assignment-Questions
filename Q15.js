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
