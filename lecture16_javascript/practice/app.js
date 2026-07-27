//qs.1

// let arr = [1, 2, 3, 4, 5, 6, 2, 3]
// let num = 2;

// for(let i=0; i<arr.length; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1)
        
//     }
// }
// console.log(arr);



// let num = 287152;
// let copy = num;
// let count = 0;
// while(copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

// let num = 287152;
// let copy = num;
// let sum = 0;
// while(copy > 0) {
//     sum += copy%10;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

// let n = prompt("Enter the num for factorial:");
// let factorial = 1;

// for(let i=1; i<=n; i++) {
//     factorial *= i
// }
// console.log(factorial);


let arr = [1, 2, 3, 9, 5, -7, 2, 3]
let largest = 0;

for(let i=0; i<arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);

