var timeEl = document.querySelector(".time");
var nextEl = document.getElementById("next");
var resetEl = document.getElementById("reset");
var element = document.getElementById("element");
var highscores = document.getElementById("highscores");
var secondsLeft = 60;
var score = localStorage.getItem("highscores");
highscores.textContent = score;
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var counter = document.getElementById("counter");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreContainer = document.getElementById("scoreContainer");
var currentIndex = 0;

 var questions = [
  {
    question : "Which one of these is not a language?",
    choiceA:"C",
    choiceB:"JAVA",
    choiceC: "Python",
    choiceD:"Amazon",
    correct: "D"
  },
  {
    question : "Which one of these is not a language?",
    choiceA:"C",
    choiceB:"JAVA",
    choiceC: "Python",
    choiceD:"Amazon",
    correct: "D"
  },
  {
    question : "Which one of these is not a language?",
    choiceA:"C",
    choiceB:"JAVA",
    choiceC: "Python",
    choiceD:"Amazon",
    correct: "D"
  },
  {
    question : "Which one of these is not a language?",
    choiceA:"C",
    choiceB:"JAVA",
    choiceC: "Python",
    choiceD:"Amazon",
    correct: "D"
  },
 ]
 var lastQuestion = questions.length -1;
 function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
}


function startQuiz(){
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderCounter();
}

 function renderQuestion(){
   var q = questions[currentIndex];
   question.innerHTML = q.question;
   choiceA.innerHTML = q.choiceA;
   choiceB.innerHTML = q.choiceB;
   choiceC.innerHTML = q.choiceC;
   choiceD.innerHTML = q.choiceD;
 }
function counterRender(){
  if(currentIndex < lastQuestionIndex){
    currentIndex++;
    renderQuestion();
  }else{
    clearInterval(timeEl);
    scoreRender();
  }
}

function checkAnswer(answer){
  if(questions[currentIndex].correct == answer){
    score++;
  }else if(currentIndex  < lastQuestionIndex){
   currentIndex++;
   renderQuestion();
  }else{
    clearInterval(timeEl);
    scoreRender();
  }
}
start.addEventListener("click" , startQuiz(){
  // start.style.display = "none";
  // renderQuestion();
  // quiz.style.display = "block";

});
start.addEventListener("click",startQuiz);
renderQuestion();
setTime();
nextEl.addEventListener("click", displayElement);
displayElement();
