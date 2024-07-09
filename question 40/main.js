function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three dictionaries representing different albums
var album1 = make_album('Taylor Swift', 'Fearless');
var album2 = make_album('Adele', '21', 12); // Example with tracks
var album3 = make_album('Ed Sheeran', '÷', 16); // Example with tracks
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
