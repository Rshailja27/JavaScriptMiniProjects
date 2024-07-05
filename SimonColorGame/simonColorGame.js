let gameSeq = [];
let userSeq = [];
let level = 0;
let h3 = document.querySelector("h3");

let highestScore = 0 ;
let colorsBoxs = ["red","yellow","green","purple"];
let startGame = false;

document.addEventListener("keypress",function () {
    if(startGame == false){
        startGame = true;
        console.log("game started");
        levelUp();
    }
   
});

function boxFlash(box) {
    box.classList.add("flash");
    setTimeout(() => {
        box.classList.remove("flash");
    }, 110);
}
function userFlash(box) {
    box.classList.add("userFlash");
    setTimeout(() => {
        box.classList.remove("userFlash");
    }, 80);
}
function levelUp() {
    userSeq =[];
    level++;
    h3.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = colorsBoxs[randomIdx];
    let randomBox = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor)
    console.log(gameSeq);
    // console.log(randomColor);
    // console.log(randomBox);
    boxFlash(randomBox);
    
}
function ansCheck(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
       
     } 
     else{
            h3.innerHTML = `Game over!.. Press any key to restart the game`;
            reset();            
        }
         
    } 
    
function boxPressed() {
    let box = this;
    // console.log(box);
    userFlash(box);
    userColor = box.getAttribute("id");
    userSeq.push(userColor);
    ansCheck(userSeq.length-1);
}
let allBoxes = document.querySelectorAll(".box");
for (box of allBoxes){
    box.addEventListener("click",boxPressed);
}
    let p = document.createElement("p");
    p.classList.add("score");
    document.querySelector("body").append(p);
 function yourHighestScore() {
    
    if (level > highestScore) {
        highestScore = level; // Update the highest level if the current level is higher
        p.textContent = `Your highest Score is Level ${highestScore}`;
    }
    else{
       // p.textContent = `Your highest Score was at Level ${level}`;
        console.log(p.textContent);    
    }
       
 }
 
function reset() {
    yourHighestScore();
    startGame = false;
    level = 0;
    userSeq =[];
    gameSeq = [];

}