let magicians:string[] = ["Maryum","Ayesha","Mobina","Armeen","Nageen"];


const make_great = (magicians: string[]): string[] => {
    return magicians.map(magician => `the Great ${magician}`);
};

magicians = make_great(magicians);

const show_magician = (magic:string[]) =>
{
    magicians.forEach(name =>{
        console.log(name);
    })
}

show_magician(magicians);