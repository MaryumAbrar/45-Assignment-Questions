let placeVisit : string[] = ["Turkey","Denmark","London","Finland","Europe"];
console.log("\n Original List:\n",placeVisit);

let sortedOrder = placeVisit.sort();
console.log("\n AlphabeticalOrder:\n",sortedOrder);
console.log(`Still in original order ${placeVisit}`);

let reverseOrder = placeVisit.sort().reverse();
console.log("\nReverse Alphabetical Order:\n",reverseOrder);
console.log(`Still in original order ${placeVisit}`);

placeVisit.reverse();
console.log("\nReversing Original:\n",placeVisit);

placeVisit.reverse();
console.log("\nReversing Again:\n",placeVisit);

placeVisit.sort();
console.log("\nReversing Original:\n",placeVisit);

placeVisit.reverse();
console.log("\nReversing Original:\n",placeVisit);