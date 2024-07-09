//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow any other optional properties
}

function create_car(
  manufacturer: string,
  model: string,
  options: { [key: string]: any }
): Car {
  let car: Car = {
    manufacturer: manufacturer,
    model: model,
    ...options, // Spread operator to include any additional properties
  };

  return car;
}

// Call the function with required information and additional options
let myCar: Car = create_car("Toyota", "Camry", { color: "blue", year: 2023 });

// Print the returned object to verify all information was stored correctly
console.log(myCar);
