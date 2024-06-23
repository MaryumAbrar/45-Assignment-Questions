var magicians = ["Maryum", "Ayesha", "Mobina", "Armeen", "Nageen"];
var make_great = function (magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
};
magicians = make_great(magicians);
var show_magician = function (magic) {
    magicians.forEach(function (name) {
        console.log(name);
    });
};
show_magician(magicians);
