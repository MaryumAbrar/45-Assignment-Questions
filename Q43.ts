let magicians:string[] = ["Maryum","Ayesha","Mobina","Armeen","Nageen"];


const make_great = (magicians: string[]): string[] => {
    return magicians.map(magician => `the Great ${magician}`);
};

let copyMagicians:string[] = [...magicians];

copyMagicians = make_great(copyMagicians);

const show_magician = (magic:string[]) =>
{
    magic.forEach(name =>{
        console.log(name);
    })
}

//Changed Copy Magicians
show_magician(copyMagicians);

//UnChanged Original Magicians
console.log('\n');
show_magician(magicians);