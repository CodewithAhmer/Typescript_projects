var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countries_to_visit = ["China", "Denmark", "Brazil", "Argentina"];
//Orignal order!
console.log("Orignal", countries_to_visit);
//Alphabetical order!
console.log("alphabetical ordder", __spreadArray([], countries_to_visit, true).sort());
//Still in orignal order!
console.log("Still in orignal order", countries_to_visit);
//Reverse alphabetical order!
console.log("Reverse alphabetical order", __spreadArray([], countries_to_visit, true).reverse());
//Still in orignal order!
console.log("Still in orignal order", countries_to_visit);
//Reversing the orignal order!
console.log("Orignal array reversed!", countries_to_visit.reverse());
//Back to orignal order!
console.log("Back to orignal order", countries_to_visit.reverse());
//Alphabetical order sorting the orignal!
console.log("alphabetical ordder", countries_to_visit.sort());
//Reverse alphabetical order sorting the orignal!
console.log("Reverse alphabetical order", countries_to_visit.reverse());
