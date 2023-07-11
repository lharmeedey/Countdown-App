document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("start-button")
    .addEventListener("click", startCountdown);

  function startCountdown() {
    // document.querySelector(".para").style.color = 'green';
    // Get the countdown date and time from the input field
    const countdownInput = document.getElementById("countdown-input");
    const countDownDate = new Date(countdownInput.value).getTime();
    document.getElementById("start-button").classList.add("hidden");
    document.getElementById("span-1").classList.add("hidden");
    document.getElementById("span-2").classList.add("hidden");
    document.getElementById("span-3").classList.add("hidden");
    document.getElementById("colon-1").style.display = "block";
    document.getElementById("colon-2").style.display = "block";
    document.getElementById("colon-3").style.display = "block";

    // Update the countdown every second
    const countdown = setInterval(function () {
      // Get the current date and time
      const now = new Date().getTime();

      //Get the countdown title from the input field
      const captionInput = document.getElementById("caption-input");
      const captionMessaage = captionInput.value;

      // Get the success message from the input field
      const successInput = document.getElementById("success-input");
      const successMessage = successInput.value;
      // Hide the input boxes
      countdownInput.classList.add("hidden");
      successInput.classList.add("hidden");
      captionInput.classList.add("hidden");

      // // Clear the input fields
      // countdownInput.value = "";
      // successInput.value = "";

      // Find the time remaining between now and the countdown date
      const timeRemaining = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Display the countdown in the "timer" element
      // document.getElementById("timer").innerHTML = days + ":" + hours + ": " + minutes + ":" + seconds + ":";
      document.getElementById("title").innerHTML = captionMessaage;
      // document.getElementById("timer").innerHTML = (`${days} : ${hours} : ${minutes} : ${seconds} `);
      document.getElementById("dai").innerHTML = `${days}`;
      document.getElementById("hrs").innerHTML = `${hours}`;
      document.getElementById("min").innerHTML = `${minutes}`;
      document.getElementById("sec").innerHTML = `${seconds}`;

      // If the countdown is finished, display a success message
      if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById("dai").classList.add("hidden");
        document.getElementById("hrs").classList.add("hidden");
        document.getElementById("min").classList.add("hidden");
        document.getElementById("colon-1").classList.add("hidden");
        document.getElementById("colon-2").classList.add("hidden");
        document.getElementById("colon-3").classList.add("hidden");
        document.getElementById("colon-1").style.display = "none";
        document.getElementById("colon-2").style.display = "none";
        document.getElementById("colon-3").style.display = "none";
        document.getElementById("sec").innerHTML = successMessage;
      }
    }, 1000);
  }
});
