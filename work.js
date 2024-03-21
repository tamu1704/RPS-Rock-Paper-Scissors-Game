let users=0;
let comps=0;

const choices=document.querySelectorAll(".but");
const message=document.querySelector("#msg");
const userscore=document.querySelector("#yours");
const compscore=document.querySelector("#comps");

const makecompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randomidx= Math.floor(Math.random()*3);
    return options[randomidx];
};
const drawgame=()=>{
    // console.log("Draw !!");
    message.innerText="Opps... It's a Draw !!";
    message.style.boxShadow="0px 2px 22px 5px orange";
};
const showinner=(userwin, userchoice, compchoice)=>{
    if(userwin){
        users++;
        userscore.innerText=users;
        // console.log("You win !!");
        message.innerText=`You Win !! ${userchoice} beats ${compchoice}`;
        message.style.boxShadow="0px 2px 22px 5px green";
    }
    else if(userwin==false){
        comps++;
        compscore.innerText=comps;
        // console.log("You lose...");
        message.innerText=`You Lose... ${compchoice} beats ${userchoice}`;
        message.style.boxShadow="0px 2px 22px 5px red";
    }
};

const playgame=(userchoice)=>{
    console.log("user choosed = ",userchoice);
    const compchoice=makecompchoice();
    console.log("comp choosed = ",compchoice);

    if(userchoice==compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin = compchoice === "paper" ? false:true;
        }
        else if(userchoice==="paper"){
            userwin = compchoice==="scissor" ? false:true;
        }
        else{
            userwin = compchoice==="rock" ? false:true;
        }
        
        
        // if(userchoice==="rock" && compchoice==="paper"){
        //     return userwin=false;
        // }
        // else if(userchoice==="paper" &&        compchoice==="scissor"){
        //     return userwin=false;
        // }
        // else if(userchoice==="scissor" && compchoice==="rock"){
        //     return userwin=false;
        // }
        showinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=> {
        const userchoice=choice.getAttribute("id");
        // console.log("Choice was clicked", userchoice);
        playgame(userchoice);
    });
});