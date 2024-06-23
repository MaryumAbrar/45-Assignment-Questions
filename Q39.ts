const city_country =(city:string, country:string)=>
{
    return `${city}, ${country}`;
}
    
const pr1 = city_country("Lahore", "Pakistan");
const pr2 = city_country("Tokyo", "Japan");
const pr3 = city_country("Paris", "France");    
    
console.log(pr1);
console.log(pr2);
console.log(pr3);