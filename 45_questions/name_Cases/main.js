var personName = "Mohammad ahmer";
//Lowercase:
console.log(personName.toLowerCase());
//Uppercase:
console.log(personName.toUpperCase());
//Titlecase:
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
