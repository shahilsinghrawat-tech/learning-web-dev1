// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let k = 5;

// function greater(arr, num) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] > k) {
//             console.log(arr[i])
//         }
//     }
// }

// greater(arr, k);

// let str = "abcdabcdefgggh";


// function extractUnique(str) {
//     let ans = "";
//     for(let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1) {
//             ans += currChar;
//         }
//     }
//     return ans;
// }

// result = extractUnique(str);
// console.log(result);

// let country=["Australia","Germany","UnitedStatesofAmerica"]

// function extractLargest(country) {
//     let maxIdx = 0;
//     for(let i = 0; i < country.length; i++) {
        
//         if(country[i].length > country[maxIdx].length) {
//             maxIdx = i;
//         }
//     }
//     return country[maxIdx];
// }

// result = extractLargest(country);
// console.log(result);


// let str = "apnacollege";

// function countVowels(str) {
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if (str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u") {
//             count++;
//         }
//     }
//     return count;
// }

// result = countVowels(str);
// console.log(result);

let start = 100;
let end = 200;

function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random()*diff)+ start;
        
    
}

result = generateRandom(start, end);
console.log(result);

