// script.js
let countdown = 5; // Replace with your desired time in seconds
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  countdown--;
  countdownElement.textContent = countdown;

  if (countdown === 0) {
    clearInterval(intervalId);
    window.location.href = "https://www.your-home-page.com"; // Replace with your redirect URL
  }
}

const intervalId = setInterval(updateCountdown, 1000); // Update every second
