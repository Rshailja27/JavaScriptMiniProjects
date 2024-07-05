
const startButton = document.querySelector('.start-btn');
const h2 = document.querySelector('h2');

// Add event listener to start button
startButton.addEventListener('click', toggleTimer);
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
  document.querySelector('.start-btn').innerText="Stop";
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval); // Stop the interval
  isTimerRunning = false;
  document.querySelector('.start-btn').innerText="Start";
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
    h2.textContent = formattedTime;
}

// Function to pad single digits with leading zeros
function padNumber(num) {
return num < 10 ? "0" + num : num;
}


