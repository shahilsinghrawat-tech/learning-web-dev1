const arr = [1, 2, 3, 4, 5];

// const squared = [];
// arr.forEach(num => {
//     squared.push(num*num);
// });

// console.log(squared)

// const sum = squared.reduce((acc, el) => acc + el, 0);

// console.log(sum);

// const avg = (sum, length) => {
//     return (sum / length);
// };

// console.log(avg(sum , squared.length));

// let plusFive = arr.map( (el) => el+5);
// console.log(plusFive);

// let fruits = ["apple", "mango", "grpes", "guaVA", "orange"];


// fruits.forEach(word => {
//     console.log(word.toUpperCase());
// }
// );

// const doubleAndReturnArgs = (arr, ...args) => {
//     const doub = args.map(num => num *2);
//     return [...arr, ...doub];
// }
// console.log(doubleAndReturnArgs(arr, 4, 5));


// Example 1: A simple object with properties
const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};

// Example 2: An object with methods
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  start: function() {
    console.log("Engine started");
  },
  drive: function() {
    console.log("Car is driving");
  }
};

const mergeObjects = (car, person) => {
    const newObject = {...car, ...person};
    console.log(newObject);
}

mergeObjects(car, person);

