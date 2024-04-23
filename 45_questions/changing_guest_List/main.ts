let guestList = ["Ahmer","haris","Hussain","Rohan"];
let wontCome = guestList[3];
console.log(wontCome, "can't make it to the dinner tommorow");
guestList.splice(3, 3, "Amir");
guestList.forEach(changed => console.log(`Hey Mr.${changed}, I would like to invite you for dinner tommorow`));