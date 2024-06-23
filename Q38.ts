let defaultcity: string = "Karachi";
let defaultCountry: string = "Pakistan";

const describe_city = (city = "Karachi", country = "Pakistan") => {
  console.log(`${city} is in ${country}`);
};

describe_city("Washington", "United States");
describe_city("Paris", "France");
describe_city("London");