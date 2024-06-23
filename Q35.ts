let animals: string[] = ['dog', 'cat', 'rabbit'];


console.log("Names of the animals:");
for (let animal of animals) {
    console.log(animal);
}


// statement for animal
console.log("\nStatements for animal:");

for (let animal of animals) {
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
