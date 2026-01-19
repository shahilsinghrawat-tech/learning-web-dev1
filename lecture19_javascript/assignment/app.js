// const square = n => {
//   return n * n;
// };

// console.log(square(123456));


let id = setInterval( () => {
    console.log("Hello world")
}, 2000)

setTimeout( () => {
    clearInterval(id);
}, 10000)