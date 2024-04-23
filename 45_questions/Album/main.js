function makeAlbum(artits_name, album_title, tracks) {
    var album = {
        artist: artits_name,
        title: album_title,
    };
    if (tracks != undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album_1 = makeAlbum("Ahmer", "Album title 1");
var ablum_2 = makeAlbum("Usman", "Album title 2");
var ablum_3 = makeAlbum("Ali", "Album title 3", 10);
console.log(album_1);
console.log(ablum_2);
console.log(ablum_3);
