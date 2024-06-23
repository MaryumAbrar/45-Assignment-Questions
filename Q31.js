var usernames = ["Maryum Abrar", "Mobina", "admin", "Armeen"];
//Checking if the user array is not empty
if (usernames.length > 0) {
    usernames.forEach(function (name) {
        if (name === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(name, ", thank you for logging in again."));
        }
    });
}
else {
    console.log("We need to find some users!");
}
//Removing Users
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
