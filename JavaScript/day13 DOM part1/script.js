// // console.log("Hello");
// // alert("Hello");
// // window.console.log("Hello2");

// // let heading=document.getElementById("heading");
// // console.dir(heading);

// let div=document.querySelector("div");
// console.dir(div);

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText=h2.innerText+" from Madiha Aziz";

let div=document.querySelectorAll("div");
console.dir(div);
let idx=1;
for(let divs of div){
    divs.innerText=`new unique value ${idx}`;
    idx+=1;
}
