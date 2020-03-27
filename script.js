var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 60;
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var nextButtonEl = document.getElementById( "next-btn");
var shuffledQuestions, currentQuestionIndex = 0 ;
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");

var questions = [
  {
    question:"what is 4+4?",
    answers:[
      {text: "8", correct :true},
      {text: "22", correct  :false},
      {text: "10", correct :false},
      {text: "22", correct  :false},
    ]
  },
  {
    question:"what is 2+3?",
    answers:[
      {text: "5", correct :true},
      {text: "22", correct  :false},
      {text: "10", correct :false},
      {text: "22", correct  :false},
    ]
  },
  {
    question:"what is 2+10?",
    answers:[
      {text: "12", correct :true},
      {text: "22", correct  :false},
      {text: "10", correct :false},
      {text: "22", correct  :false},
    ]
  },
  {
    question:"what is 2+6?",
    answers:[
      {text: "8", correct :true},
      {text: "22", correct  :false},
      {text: "10", correct :false},
      {text: "22", correct  :false},
    ]
  }
]
startButton.addEventListener("click", startGame)
nextButtonEl.addEventListener("click", nextQuestionHandler);

function nextQuestionHandler(){
  if(currentQuestionIndex < questions.length){
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
  }
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time Left : " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();  
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
}

function startGame(){
  console.log("started");
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  nextButtonEl.classList.remove("hide");
  showQuestion(questions[currentQuestionIndex]); 
}

function showQuestion(question){
  questionEl.innerText = question.question;

  question.answers.forEach(element => {
    console.log(element);
    var answerBtn = document.createElement("button");
    answerBtn.innerHTML = element.text;
    answerButtonsEl.appendChild(answerBtn);
  
  });
}
setTime();
