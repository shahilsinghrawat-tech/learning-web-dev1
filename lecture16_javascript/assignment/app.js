const favMovie = "avatar";

let guess = prompt("enter my favourite movie:");

while (guess != favMovie) {
    if(guess == "quit") {
        console.log("you quit");
        break;
    }
        
    guess = prompt("wrong guess. please try again");
}

if(guess == favMovie) {
    console.log("congrats");
}
