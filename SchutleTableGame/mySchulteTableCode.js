
function getUniqueNumbers(count){
    
    const uniqueValues = [];
    while (uniqueValues.length < count) {
        let randomNumber = Math.floor(Math.random()*25)+1;
        if(!uniqueValues.includes(randomNumber)){
            uniqueValues.push(randomNumber);
        }
        
    }
    return uniqueValues;
} 

function schulteTable(event) {
    var uniqueNumber = document.getElementById('findNum').innerText;
    var clickedNumber = event.innerText;
    if(uniqueNumber > 25){
        console.log(`Game Over`);
        return;
    }
    if(uniqueNumber == clickedNumber){
        let getList = getUniqueNumbers(25);
        for(let i=0; i < getList.length; i++){
            let divR = document.querySelector(".c"+(i+1));
            divR.innerHTML = getList[i];
            // Apply random text color
            // divR.style.color = getRandomHexColor();
        }
        let finalNumber = parseInt(uniqueNumber)+1;
        if(finalNumber>25){
            document.getElementById('findNum').innerHTML = `Superb..<img src="clap.png" style="height:1.5rem;width:1.5rem">`;
            document.getElementsByTagName('h5')[0].style.visibility = "hidden";
            stopTimer();
        }
        else
        {
            document.getElementById("findNum").innerText = finalNumber;
        }
    }
}
const startButton = document.getElementById('start-button');
const timerElement = document.getElementById('timer');
let startTime;
let timerInterval;
let isTimerRunning = false;

// Function to start or stop the timer based on its current state
function toggleTimer() {
  if (!isTimerRunning) {
    startTimer();
  } else {
    stopTimer();
  }
}

// Function to start the timer
function startTimer() {
  startTime = new Date().getTime(); // Get current time in milliseconds
  timerInterval = setInterval(updateTimer, 1000); // Update timer every second
  isTimerRunning = true;
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval); // Stop the interval
  isTimerRunning = false;
 }
   // Function to update the timer display
function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    
    // Convert elapsed time to hours, minutes, and seconds
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    // Format the timer display
    const formattedTime = padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
    timerElement.textContent = formattedTime;
}

// Function to pad single digits with leading zeros
function padNumber(num) {
return num < 10 ? "0" + num : num;
}

function getRandomHexColor() {
  // Generate random values for red, green, and blue components
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Convert decimal to hexadecimal
  var rHex = r.toString(16);
  var gHex = g.toString(16);
  var bHex = b.toString(16);
  console.log(rHex);
  console.log(gHex);
  console.log(bHex);
  // Make sure single-digit values are prepended with a '0'
  rHex = rHex.length == 1 ? "0" + rHex : rHex;
  gHex = gHex.length == 1 ? "0" + gHex : gHex;
  bHex = bHex.length == 1 ? "0" + bHex : bHex;

  // Concatenate the hexadecimal values
  var hexColor = "#" + rHex + gHex + bHex;
  return hexColor;
}

function ClickHandler() {
  document.getElementsByClassName('container')[0].style.visibility="visible";
  document.getElementsByTagName('h2')[0].style.visibility="visible";
  document.getElementsByTagName('h5')[0].style.visibility="visible";
  document.getElementsByClassName('start-button')[0].style.visibility = "hidden";
  document.getElementsByClassName('start-game')[0].style.visibility = "hidden";
  toggleTimer()
}
