let guestList = ["Ahmer","haris","Hussain","Rohan"];

let wontCome = guestList[3];

console.log(wontCome, "can't make it to the dinner tommorow");

guestList.splice(3, 3, "Amir");

console.log("Good news! we have found a bigger dinner table. So now more space is available")

guestList.unshift("Ali");

guestList.push("Hammad");

let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex , 0 , "Osama");

console.log("updated list of our guest!");

guestList.forEach(changed => console.log(`Hey Mr.${changed}, I would like to invite you for dinner tommorow`));