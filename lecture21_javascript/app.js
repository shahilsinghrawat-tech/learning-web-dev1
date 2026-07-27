// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }


// console.dir(document.querySelector("p"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelectorAll("div a"))

// practice


// let para = document.createElement('p');
// para.innerText = "Hey I'm red!";

// document.querySelector("body").prepend(para);

// para.classList.add("red");


// let heading = document.createElement('h3');
// heading.innerText = "Hey I'm a blue h3!";

// document.querySelector("body").prepend(heading);

// heading.classList.add("blue");


// let div = document.createElement("div");
// document.querySelector("body").prepend(div);

// div.classList.add("properties");

// let h1 = document.createElement("h1");
// h1.innerText ="I'm in a div";

// document.querySelector("div").prepend(h1)



// let para1 = document.createElement("p");
// para1.innerText ="ME TOO!";

// document.querySelector("div").prepend(para1);


// assignment

let input = document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click me";
input.type = "text";
input.placeholder = "username";


btn.setAttribute("id", "btn");

document.querySelector("body").append(input);
document.querySelector("body").append(btn);

let btnn = document.querySelector("#btn");
btnn.classList.add("btn-prop");


let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.body.append(h1);

h1.classList.add("h1-prop");

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.body.append(para);


const link = document.createElement("a");
link.href = "#";

const text1 = document.createTextNode("ApnaCollege");
const boldText = document.createElement("b");
boldText.innerText = "Delta";
const text2 = document.createTextNode("Pracice");

link.appendChild(text1);
link.appendChild(boldText);
link.appendChild(text2);

document.body.appendChild(link);

