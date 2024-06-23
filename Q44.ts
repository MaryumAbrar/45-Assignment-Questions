const makeSandwich = (...items: string[]): void => {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log(item));
};


makeSandwich("Chicken", "Cheese", "Tomato");
makeSandwich("Onion", "Kabab", "Ketchup");
makeSandwich("butter", "Jam");