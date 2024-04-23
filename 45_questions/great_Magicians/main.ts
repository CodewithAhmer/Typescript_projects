function show_Magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`); 
}

let magicians_name = ["Ahmer","Haris","Usman"]

let great_magicians = make_great(magicians_name);
show_Magicians(great_magicians);