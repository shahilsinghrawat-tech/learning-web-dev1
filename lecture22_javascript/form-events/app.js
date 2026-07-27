// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });
    

let inp = document.querySelector("#text");
let p =  document.querySelector("p");
// let user = this.elements[0];
// let pass = document.querySelector("#pass");
// let pass = this.elements[1];

// user.addEventListener("change", function () {
//     console.log("input changed");
//     console.log("final value =", this.value);
// })

    
inp.addEventListener("input", function () {
    console.log(this.value);
    p.innerText = inp.value;
    
})

