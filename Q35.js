var animals = ['dog', 'cat', 'rabbit'];
console.log("Names of the animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// statement for animal
console.log("\nStatements for animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case 'dog':
            console.log("A dog would make a great pet.");
            break;
        case 'cat':
            console.log("A cat can be a playful pet.");
            break;
        case 'rabbit':
            console.log("A rabbit is a cute pet.");
            break;
        default:
            console.log("See for yourself");
    }
}
console.log("\nThese animal are similar in sense that we can have them as pets in our home. Any of these animals would make a great pet.");
