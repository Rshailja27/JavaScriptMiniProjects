let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let p = document.querySelector("p");
    let colors = generateRandomColor();
    p.innerText = colors;
    let div = document.querySelector("div");
    div.style.backgroundColor = colors;
    console.log("div colors updated");
}) ;
function generateRandomColor() {
    let randonRed = Math.floor(Math.random()*256);
    let randonGreen = Math.floor(Math.random()*256);
    let randonBlue = Math.floor(Math.random()*256);
    let rgbColors = `rgb(${randonRed},${randonGreen},${randonBlue})`;
    return rgbColors;
}
