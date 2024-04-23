var guestList = ["Ahmer", "haris", "Hussain", "Rohan"];
var wontCome = guestList[3];
console.log(wontCome, "can't make it to the dinner tommorow");
guestList.splice(3, 3, "Amir");
console.log("Good news! we have found a bigger dinner table. So now more space is available");
guestList.unshift("Ali");
guestList.push("Hammad");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Osama");
console.log("updated list of our guest!");
guestList.forEach(function (changed) { return console.log("Hey Mr.".concat(changed, ", I would like to invite you for dinner tommorow")); });
console.log("unfortunately, new dinner table wont arrive in time for the dinner, and I have space for only two guests.");
while (guestList.length > 2) {
    var removedGuests = guestList.pop();
    console.log("Sorry, ".concat(removedGuests, " i cant invite you for the dinner tommorow"));
}
console.log("invitation to the last two guest!");
guestList.forEach(function (lastTwo) { return console.log("Luckily mr.".concat(lastTwo, " you are still invited to the dinner tommorow!")); });
guestList.pop();
guestList.pop();
console.log("Empty!", guestList);
