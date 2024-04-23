function makeAlbum(artits_name:string , album_title:string, tracks?:number){
    let album: {
        artist:string , title:string , tracks?:number
    }={
        artist: artits_name,
        title: album_title,
    };
    if(tracks != undefined){
        album.tracks = tracks;
    }
    return album;
}


// Calling function!

let album_1 = makeAlbum("Ahmer" , "Album title 1");
let ablum_2 = makeAlbum("Usman" , "Album title 2");
let ablum_3 = makeAlbum("Ali" , "Album title 3" , 10);


// Printing function!

console.log(album_1);
console.log(ablum_2);
console.log(ablum_3);