let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector("#reset");
let turn0=true;
let count=0;
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn0){ //player0
            box.innerText="0";
            turn0=false
        }
        else{  //playerX
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
}
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
}

const resetgame=()=>{
    turn0=true;
    count=0;
    enablebtn();
    msgcontainer.classList.add("hide");

}

const checkWinner=()=>{
    for(let pattern of winpattern){
        /* console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);*/
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                // console.log("Winner ",pos1);
                showwinner(pos1);
            }
        }

    }
}
newbtn.addEventListener("click",resetgame);
resbtn.addEventListener("click",resetgame);
