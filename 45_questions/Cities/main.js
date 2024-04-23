function describe_city(City, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(City, " is in ").concat(country));
}
describe_city("karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
