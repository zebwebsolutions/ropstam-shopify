document.addEventListener('DOMContentLoaded', function () {
  var timerDateAttribute = document.getElementById('countdown-timer').dataset.timerDate;
  
  // Use moment.js to parse the date and set the timezone to UTC
  var endDate = moment(timerDateAttribute).utc();

  // Now, try to check if the countdown works with the parsed date
  function updateCountdown(endDate) {
    var now = moment();
    var timeRemaining = endDate.diff(now);

    // Check if the time is up
    if (timeRemaining <= 0) {
      // Hide the section when the time is up
      document.querySelector('.discounted-product-section').style.display = 'none';
      return;
    }

    var duration = moment.duration(timeRemaining);

    var hours = Math.floor(duration.asHours());
    var minutes = Math.floor(duration.asMinutes()) % 60;
    var seconds = Math.floor(duration.asSeconds()) % 60;

    var countdownTimer = document.getElementById('countdown-timer');
    countdownTimer.innerHTML =
        '<div class="dp-container">' +
            '<div class="dp-label">HR</div>' +
            '<div class="dp-hours">' + ('0' + hours).slice(-3) + '</div>' +
        '</div>' +
        '<div class="dp-container">' +
            '<div class="dp-label">MIN</div>' +
            '<div class="dp-minutes">' + ('0' + minutes).slice(-2) + '</div>' +
        '</div>' +
        '<div class="dp-container">' +
            '<div class="dp-label">SECS</div>' +
            '<div class="dp-seconds">' + ('0' + seconds).slice(-2) + '</div>' +
        '</div>';

    setTimeout(function () {
      updateCountdown(endDate);
    }, 1000);
  }

  // Start the countdown
  updateCountdown(endDate);
});
