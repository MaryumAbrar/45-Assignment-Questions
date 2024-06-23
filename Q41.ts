let magicians:string[] = ["Maryum","Ayesha","Mobina","Armeen","Nageen"];

const show_magician = (magic:string[]) =>
{
    magicians.forEach(name =>{
        console.log(name);
    })
}

show_magician(magicians);