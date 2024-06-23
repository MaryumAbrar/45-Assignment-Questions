var defaultcity = "Karachi";
var defaultCountry = "Pakistan";
var describe_city = function (city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
};
describe_city("Washington", "United States");
describe_city("Paris", "France");
describe_city("London");
