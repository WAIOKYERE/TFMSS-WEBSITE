// Set the date for the event
const eventDate = new Date('2024-03-05T09:00:00').getTime();

// Update the countdown every second
const countdownElement = document.getElementById('countdown');
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message and clear the interval
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = 'The event is happening now!';
  }
}
