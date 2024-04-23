function show_Magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`); 
}

let magicians_name = ["Ahmer","Haris","Usman"]

let copy_magician_names =magicians_name.slice()

let copy_great_magicians = make_great(copy_magician_names);

show_Magicians(magicians_name);
show_Magicians(copy_great_magicians);