let uScore=0;
let cScore=0;

const choices=document.querySelectorAll(".choice");
let disMsg=document.querySelector("#msg");
let yourScore=document.querySelector("#your");
let compScore=document.querySelector("#comp");
let msgContainer=document.querySelector(".msg-container");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("Choice was clicked",userChoice);
        playgame(userChoice);
        compChoice();
    });
});
const playgame=(userChoice)=>{
    console.log("User choice= ",userChoice);
    const computerChoice=compChoice();
    console.log("Computer choice= ",computerChoice);
    if(computerChoice==userChoice){
        disMsg.innerText="Draw, play again.";
        disMsg.style.backgroundColor ="#081b31";
    }
    else if((userChoice=="rock" && computerChoice=="scissor") || (userChoice=="paper" && computerChoice=="rock") || (userChoice=="scissor" && computerChoice=="paper")){
        disMsg.innerText="You Win!";
        uScore+=1;
        disMsg.style.backgroundColor = "green";
    }
    else{
        disMsg.innerText="Computer Wins.";
        cScore+=1;
        disMsg.style.backgroundColor = "red";
    }
    yourScore.innerText=uScore;
    compScore.innerText=cScore;
};
const compChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};