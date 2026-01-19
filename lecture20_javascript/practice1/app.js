// let arr = [90, 20, 30, 40, 50];

// const object =  {...arr};

// let res = arr.every((el) => {
//     el % 10 == 0

// });

// console.log(res);

// let min = arr.reduce((min, el) => {
//     if(el < min) {
//         return el;
//     } else {
//         return min;
//     } 
// })

// console.log(min);

// function sum(a=2, b) {
//     return a + b;
// }

// sum(1, 2)

// const data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };

// const dataCopy = { ...data, id: 123, country: "india"};

// function min() {
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }

// function sum(...args) {
//     return args.reduce((sum, el) => sum+el);
// }

function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}