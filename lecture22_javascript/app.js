// let btns = document.querySelectorAll("button");
// // console.dir(btn);

// for (btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function () {
//     //     console.log("you entered a button.");
//     // }

//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function () {
//         console.log("button was double clicked.")
//     })
// }

// // btn.onclick = function () {
// //     console.log("button was clicked");
// // }

// function sayHello() {
//     alert("Hello");
// }

// function sayName() {
//     alert("apna college");
// }

// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//     console.log("para was clicked")
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//     console.log("mouse inside box");
// })

let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");


// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

btn.addEventListener("click", function (event) {
    console.log(event);
    console.log("button clicked");
});
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log(event.code);
    if(event.code == "ArrowUp") {
        console.log("character moves forward.");
    } else if(event.code == "ArrowDown") {
        console.log("character moves backward.");
    }else if(event.code == "ArrowLeft") {
        console.log("character moves left.");
    }else if(event.code == "ArrowRight") {
        console.log("character moves right.");
    }else {
        console.log("invcalid")
    }
});


