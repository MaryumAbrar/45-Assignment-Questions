const storeCarInfo = (manufacturer: string, model: string, ...extras: 
    { [key: string]: any }[]): { manufacturer: string, model: string, extras: { [key: string]: any }[] } => {
    const carInfo = {
        manufacturer,
        model,
        extras: [...extras]
    };
    return carInfo;
};

const car = storeCarInfo("Honda", "Civic", { color: "black" }, { year: 2024 });

console.log(car);