// for(let i = 2; i <= 10; i=i+2) {
//     console.log(i);
// }

// console.log("backwards");

// for (let i=10; i>=2; i-i-2) {
//     console.log(i);
// }


// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// fruits.push("pineapple");

// for (let i = 1; i < fruits.length; i=i+1) {
//     console.log(i, fruits[i]);
// }

// for (let i = fruits.length-1; i >= 0; i=i-1) {
//     console.log(i, fruits[i]);
// }

// let heroes = [
//     ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]
// ];

// for (let i=0; i < heroes.length; i++) {
//     console.log(i, heroes[i]);
//     for(let j = 0; j < heroes[i].length; j++) {
//        console.log(`j=${j}, ${heroes[i][j]}`)     
//     }
// }

// let student = [ ["aman", 95], ["shradha", 94.4], ["karan", 100]];

// for(let i = 0; i<student.length; i++){
//     console.log(`student info #${i+1}`)
//     for (let j =0; j <student[i].length; j++) {
//         console.log(student[i][j]);
//     }
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(fruit of fruits) {
//     console.log(fruit);
// }

// for(char of "apnacollege") {
//     console.log(char);
// }

let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
];

for(list of heroes) {
    for(hero of list) {
        console.log(hero);
    }
}




