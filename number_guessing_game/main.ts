import inquirer from "inquirer";

console.log("Welcome to CodewithAhmer,s CLI Number Guessing Game!");

const randomNumber = Math.floor(Math.random() * 5 + 1);
const ans = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "Guess a number between 1 and 5"
    }
]);

if (ans.userguessedNumber === randomNumber) {
    console.log("You guessed the right number!");
} else {
    console.log("You guessed the wrong number!");
    console.log("The correct number was " + randomNumber);
};