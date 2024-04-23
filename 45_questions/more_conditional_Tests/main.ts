let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["mango","banana","apple"];

// Test for equality and inequality.
console.log("apple is equal to apple?");
console.log(apple == "apple");

console.log("apple is not equal to apple?");
console.log(apple != "apple");


// Test using the lowercase function.
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
console.log("ten is equal to twenty?");
console.log(ten == twenty);

console.log("ten is not equal to twenty?");
console.log(ten != twenty);

console.log("ten is greater than 0?");
console.log(ten > 0);

console.log("twenty is less than ten");
console.log(twenty < ten);

console.log("ten is greater than and equal to 5?");
console.log(ten >= 5);

console.log("twenty is less than or equal to ten?");
console.log(twenty <= ten);

// Tests using "and" and "or" operators.
console.log("twenty is no equal to ten and twenty is greater than ten?");
console.log(twenty != ten && twenty > ten);

console.log("twenty is no equal to ten and twenty is greater than 30?");
console.log(twenty != ten && twenty > 30);

console.log("twenty is greater than 50 OR twenty is equal to twenty?");
console.log(twenty > 50 || twenty == 20);

console.log("twenty is greater than 50 OR twenty is not equal to twenty?");
console.log(twenty > 50 || twenty != 20);

// Test whether an item is in a array.

console.log("is mango include in my fruits array?");
console.log(fruits.includes("mango"));

// Test whether an item is not in a array.
console.log("is watermelon include in my fruits array?");
console.log(fruits.includes("watermelon"));
