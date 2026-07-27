let max_Num = prompt("enter the maximum number:");
console.log(max_Num)

random_Number = Math.floor(Math.random() * max_Num) + 1;

let guess = prompt("enter the guess number:");
while(guess != random_Number) {


    if (guess === "quit") {
        console.log("you quit!");
        break;
    }

    if (guess == random_Number) {
        console.log("congrats!");
        break;
    } else {
        guess = prompt("your guess is wrong. please try again.");
    }

    
    
}