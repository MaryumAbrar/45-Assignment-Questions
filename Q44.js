var makeSandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (item) { return console.log(item); });
};
makeSandwich("Chicken", "Cheese", "Tomato");
makeSandwich("Onion", "Kabab", "Ketchup");
makeSandwich("butter", "Jam");
