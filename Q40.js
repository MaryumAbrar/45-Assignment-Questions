var make_album = function (artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
};
var album1 = make_album("Maryum", "Album1");
var album2 = make_album("Armeen", "Album2");
var album3 = make_album("Mobina", "Album3", 12);
console.log(album1);
console.log(album2);
console.log(album3);
