
let randomNumber = Math.floor(Math.random()*100) +1;
console.log(randomNumber);

let btn = document.querySelector(".guess");
btn.addEventListener("click", guessTheNumber);

function guessTheNumber() {   
    var guess = document.querySelector("input").value;
    var h2 = document.querySelector("h2");
    
    if (guess === "") {
        h2.innerText = "Please Enter any Number.";
    } else if (guess === "quit") {
        h2.innerText = "Loser.....";       
    } else if (guess == randomNumber) {
        h2.innerHTML = `Congratulations!! Your guess <br><i style="color:blue;">${randomNumber}</i> is correct.`;       
    } else if (guess > randomNumber) {
        h2.innerHTML = "Your guess is larger<br> than the number..Try again..";  
        document.querySelector("input").value = "";     
    } else if (guess < randomNumber) {
        h2.innerHTML = `Your guess is smaller<br> than the number...Try again..`;  
        document.querySelector("input").value = "";     
    } else {
        h2.innerText = "Wrong! Try again.. ";
        document.querySelector("input").value = ""; // Clearing the input field
    }
}