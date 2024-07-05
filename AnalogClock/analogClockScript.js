
let btn = document.querySelector("button"); 
btn.addEventListener("click",toggleTimer);

function updateClock() {
  const time = new Date();
  const day = String(time.getDate()).padStart(2, '0');
  const month = String(time.getMonth() + 1).padStart(2, '0'); // January is 0!
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  // Adjust hours for a 12-hour clock
  hours = hours % 12 || 12;
  // Each hour is 30 degrees, each minute is 0.5 degrees. Adding 180 to make it start from 12 o'clock position.
  const hourAngle = ((hours * 30) + (minutes * 0.5) + 180) % 360; 
  // Each minute is 6 degrees, each second is 0.1 degrees. Adding 180 to make it start from 12 o'clock position.
  const minuteAngle = ((minutes * 6) + (seconds * 0.1) + 180) % 360; 
 // Each second is 6 degrees. Adding 180 to make it start from 12 o'clock position.
  const secondAngle = ((seconds * 6) + 30) % 360; 
 // Apply rotation to clock hands
  document.getElementById('hour-hand').style.transform = `rotate(${hourAngle}deg)`;
  document.getElementById('minute-hand').style.transform = `rotate(${minuteAngle}deg)`;
  document.getElementById('second-hand').style.transform = `rotate(${secondAngle}deg)`;
  document.querySelector('.date').innerHTML = day + "<b> / </b>" + month;

}

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
  timerInterval = setInterval(updateClock, 1000); // Update timer every second
  isTimerRunning = true;
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval); // Stop the interval
  isTimerRunning = false;
 }
  