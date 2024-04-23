function show_Magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["Ahmer", "Haris", "Usman"];
var great_magicians = make_great(magicians_name);
show_Magicians(great_magicians);
