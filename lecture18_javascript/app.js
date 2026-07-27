// function hello() {
//     console.log("hello");
// }

// hello();
// hello();
// hello();
// hello();
// hello();
// hello();

// function printPoem() {
//     console.log("Twinkle, twinkle, little star How I wonder what you are! Up above the world so high, Like a diamond in the sky.Twinkle, twinkle, little star, How I wonder what you are! ");
// }

// printPoem();

// function rollDice() {
//     roll = Math.floor(Math.random() * 6) +1;
//     console.log(roll);
// }

// rollDice();

// function printName(name, age) {
//     console.log(`${name}'s age is ${age}.`);
// }

// printName("aman", 23);
// printName("shradha", 24);
// printName("shradha");

// function sum(a, b) {
//     return(a+b);
// }

// let s = sum(sum(1, 2), 3);
// console.log(s);

// function average(a, b, c) {
//     console.log((a+b+c)/3);
// }

// average(4, 5, 6);

// function table(num) {
//     for(let i = 1; i<=10; i++){
//         console.log(i*num);
//     }

// }

// table(17);


// function isAdult(age) {
//     if (age >= 18) {
//         return "adult";
//     } else {
//         return "Not adult"
//     }
//     console.log("bye bye");
// }

// function sum_N(n) {
//     let sum = 0
//     for(let i = 0; i <= n; i++){
//         sum += i;
//     }
//     return sum;

// }

// res = sum_N(10);
// console.log(res);

// let arr= ["apple", "mango", "banana"];
// function concat_N(arr) {
//     let concat = "";
//     for(let i = 0; i < arr.length; i++){
//         concat += arr[i];
//     }
//     return concat;

// }

// res = concat_N(arr);
// console.log(res);

// let hello = function() {
//     console.log("hello");
// }

// function multipleGreet(func, count) {
//     for (let i=1; i<=count; i++) {
//         func();
//     }
// }

// let greet = function() {
//    console.log("hello");
// }

// multipleGreet(greet, 100);

// multipleGreet(function() {console.log("namaste")}, 1000);


// let odd = function (n) {
//     console.log(!(n % 2 == 0));
// }

// let even = function (n) {
//     console.log(n % 2 == 0);
// }

// function oddOrEvenFactory(request) {
//     if (request == "odd") {
//         return function (n) {
//             console.log(!(n % 2 == 0));
//         }
        

//     } else if (request == "even") {
//         return function (n) {
//             console.log(n % 2 == 0);
//         }
        
//     } else {
//         console.log("wrong request");
//     }
// }

// let request = "odd";


const calculator = {
    num: 55,
    add: function(a, b) {
        return a+b;
    },
    sub: function(a, b) {
        return a-b;
    },
    mul: function(a, b) {
        return a*b;
    },
    
};
