var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    console.log(secondsLeft);
    timeEl.textContent = "Timer  :" + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  },1000);
}

function sendMessage() {
  timeEl.textContent = " ";
}
setTime();


