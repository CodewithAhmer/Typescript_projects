function show_Magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["Ahmer", "Haris", "Usman"];
var copy_magician_names = magicians_name.slice();
var copy_great_magicians = make_great(copy_magician_names);
show_Magicians(magicians_name);
show_Magicians(copy_great_magicians);
