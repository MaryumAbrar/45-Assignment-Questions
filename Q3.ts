let personName = "Maryum Abrar";

console.log("UpperCase:",personName.toUpperCase());
console.log("LowerCase:",personName.toLowerCase());
console.log("Titlecase:",personName.replace(/\b\w/g,(char) => char.toUpperCase()));