var guestList = ["Ahmer", "haris", "Hussain", "Rohan"];
var wontCome = guestList[3];
console.log(wontCome, "can't make it to the dinner tommorow");
guestList.splice(3, 3, "Amir");
guestList.forEach(function (changed) { return console.log("Hey Mr.".concat(changed, ", I would like to invite you for dinner tommorow")); });
