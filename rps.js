let choices =document.querySelectorAll(".choice");
let userScorePara=document.querySelector("#you1");
let compScorePara=document.querySelector("#comp1");
let msgBox=document.querySelector("#msg");

userScore=0;
compScore=0;

let genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let idx= Math.floor(Math.random()*3);
    let compChoice=options[idx];
     return compChoice;
};


 let drawGame=()=>{
         console.log("the game was draw");
         msgBox.innerText="The game was draw";
         msgBox.style.backgroundColor="blue";
    };

     let gameResult=(userWin, userChoice, compChoice)=>{
       if(userWin ==true){
           userScore++;
           userScorePara.innerText=userScore;
         console.log("you win");
         msgBox.innerText=`You won. Your ${userChoice} beats computer's ${compChoice}`;
         msgBox.style.backgroundColor="green";
       }else{
         compScore++;
         compScorePara.innerText=compScore;
         console.log("you lose");
         msgBox.innerText=`You lost. Computer's ${compChoice} beats your ${userChoice}`;
         msgBox.style.backgroundColor="red";
         compScore++;
       }
    }; 


let playGame=(userChoice,compChoice)=>{
compChoice=genCompChoice();
console.log("comp choice :",compChoice);
console.log("your choice :",userChoice);

if(userChoice===compChoice){
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){//paper,scissor
        userWin=compChoice==="paper"? false:true;
    }else if(userChoice==="paper"){//scissor,rock
        userWin=compChoice==="scissor"?false:true;
    }else{//userChoice=scissor....rock,paper
        userWin=compChoice==="rock"?false:true;
    }
    gameResult(userWin, userChoice, compChoice);
};
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
    });
});