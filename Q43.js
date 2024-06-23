var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Maryum", "Ayesha", "Mobina", "Armeen", "Nageen"];
var make_great = function (magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
};
var copyMagicians = __spreadArray([], magicians, true);
copyMagicians = make_great(copyMagicians);
var show_magician = function (magic) {
    magic.forEach(function (name) {
        console.log(name);
    });
};
//Changed Copy Magicians
show_magician(copyMagicians);
//UnChanged Original Magicians
console.log('\n');
show_magician(magicians);
