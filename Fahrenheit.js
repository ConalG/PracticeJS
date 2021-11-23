// Creating variable for Kelvin
const kelvin = 293;
// Creating variable for Celsius
let celsius = kelvin - 273;
// Creating variable for fahrenheit
let fahrenheit = celsius *(9/5) + 32;
// rounding number down
fahrenheit = Math.floor(fahrenheit);
// String interpolation to log temperature
console.log(`The temperature is ${fahrenheit} degress Fahrenheit.`);
