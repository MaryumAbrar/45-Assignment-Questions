var defaultSize = "large";
var defaultMessage = "I Love Typescript";
var make_shirt = function (size, message) {
    if (size !== null) {
        if (size === "large" || size === "medium") {
            console.log("The ".concat(size, " size shirt, with message: \"").concat(defaultMessage, "\""));
        }
        else {
            console.log("The ".concat(size, " size shirt, with message: \"").concat(defaultMessage, "\""));
        }
    }
    else {
        console.log("The ".concat(defaultSize, " size shirt, with message: \"").concat(defaultMessage, "\""));
    }
};
make_shirt("large", "Believe There Is Good Something.");
