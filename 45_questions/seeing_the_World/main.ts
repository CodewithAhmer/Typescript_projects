let countries_to_visit:string[] = ["China","Denmark","Brazil","Argentina"];
//Orignal order!
console.log("Orignal" , countries_to_visit);

//Alphabetical order!
console.log("alphabetical ordder" , [...countries_to_visit].sort());

//Still in orignal order!
console.log("Still in orignal order" , countries_to_visit);

//Reverse alphabetical order!
console.log("Reverse alphabetical order" , [...countries_to_visit].reverse());

//Still in orignal order!
console.log("Still in orignal order" , countries_to_visit);

//Reversing the orignal order!
console.log("Orignal array reversed!", countries_to_visit.reverse());

//Back to orignal order!
console.log("Back to orignal order", countries_to_visit.reverse());

//Alphabetical order sorting the orignal!
console.log("alphabetical ordder" , countries_to_visit.sort());

//Reverse alphabetical order sorting the orignal!
console.log("Reverse alphabetical order" , countries_to_visit.reverse());