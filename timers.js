function formatTime(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

function countdownTimer(seconds) {
  let remainingSeconds = seconds;

  function updateTimer() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    const formattedTime = `${formatTime(minutes)}:${formatTime(seconds)}`;
    console.log(formattedTime);

    remainingSeconds--;

    if (remainingSeconds < 0) {
      clearInterval(interval);
      console.log("Countdown is over!");
    }
  }

  updateTimer();
  const interval = setInterval(updateTimer, 1000);
}

// Start the countdown from 5 minutes (300 seconds)
countdownTimer(300);

////////////////////////////////////////////////////////////////////////////

function formatTime(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

function updateClock() {
  var now = new Date();
  var hours = formatTime(now.getHours());
  var minutes = formatTime(now.getMinutes());
  var seconds = formatTime(now.getSeconds());

  var currentTime = `${hours}:${minutes}:${seconds}`;
  console.log(currentTime);
}

// Update the clock every second
setInterval(updateClock, 1000);
