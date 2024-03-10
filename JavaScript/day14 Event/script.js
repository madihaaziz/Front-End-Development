/*let btn1=document.querySelector("#btn1");
btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
    console.log('Button 1 was clicked.');
    let a=25;
    a++;
    console.log(a);
}
btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked-Handler1");

});
btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked-Handler2");

});

const handler3=()=>{
    console.log("Button 1 was clicked-Handler3");
};
btn1.addEventListener("click",handler3);
btn1.addEventListener("click",()=>{
    console.log("Button 1 was clicked-Handler4");

});

btn1.removeEventListener("click",handler3);

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("It's a DIV tag.");
}*/

//Practice 1

let currmode='Light';
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    if(currmode=='light'){
        currmode='dark';
        document.querySelector("body").classList.add("dark");
    
    }
    else{
        currmode='light';
        document.querySelector("body").classList.add("light");
    }
    console.log(currmode);
});
