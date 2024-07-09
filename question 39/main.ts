//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Call the function with at least three city-country pairs and print the returned values
let cityCountry1 = city_country("Lahore", "Pakistan");
let cityCountry2 = city_country("New York", "USA");
let cityCountry3 = city_country("Tokyo", "Japan");

console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);
