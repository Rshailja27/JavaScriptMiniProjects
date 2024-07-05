
let favMovie = "sitaramam";
// let guess = prompt("Enter your favorite movie");

let btn = document.querySelector(".guess");
btn.addEventListener("click", guessMovie);

function guessMovie() {   
    var guess = document.querySelector("input").value;
    var h2 = document.querySelector("h2");
    
    if (guess === "") {
        h2.innerText = "Please Enter a Movie Name.";
    } else if (guess === "quit") {
        h2.innerText = "Loser.....";       
    } else if (guess === favMovie) {
        h2.innerHTML = `Congratulations!! Your guess <br>"${favMovie}" is correct.`;       
    } else {
        h2.innerText = "Wrong! Try again.. ";
        document.querySelector("input").value = ""; // Clearing the input field
    }
}