/*let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);
let name=div.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
console.log(para.setAttribute("class","new class"));

let div=document.querySelector("div");
div.style.backgroundColor="purple";
div.innerText="Hello!";

let newButton=document.createElement("button");
newButton.innerText="New Element";
let div=document.querySelector("div");
div.after(newButton);

let para=document.querySelector("p");
para.remove();*/
//Practice 1
let btn=document.createElement("button");
btn.innerText="Click Me!";
btn.style.backgroundColor="red";
btn.style.color="white";

document.querySelector("body").append(btn);
//Practice 2
let para=document.querySelector("p");
para.classList.add("newClass");

