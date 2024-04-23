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



console.log("unfortunately, new dinner table wont arrive in time for the dinner, and I have space for only two guests.");

while(guestList.length > 2) {
    let removedGuests = guestList.pop()
    console.log(`Sorry, ${removedGuests} i cant invite you for the dinner tommorow`)
}

console.log("invitation to the last two guest!");

guestList.forEach(lastTwo => console.log(`Luckily mr.${lastTwo} you are still invited to the dinner tommorow!`));
guestList.pop();
guestList.pop();

console.log("Empty!", guestList);
