// let arr = [10, 20, 30, 40];

// const arrayAverage = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum/arr.length);
// }

// let n = 71;

// const isEven = (n) => {
//     if(n%2 == 0){
//         console.log("Even");
//     } else {
//         console.log("not");
//     }
// }


// const object = {
//     message: 'Hello, World!',

//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout( () => object.logMessage(), 3000);


let length = 4;
function callback() {
    console.log(this.length);
}

const object = {
    length: 5, 
    method(callback) {
        callback();
    },
};

object.method(callback, 1, 2);