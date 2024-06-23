var usernames = ["Maryum Abrar", "Mobina", "admin", "Armeen"];
usernames.forEach(function (name) {
    if (name === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(name, ", thank you for logging in again."));
    }
});
