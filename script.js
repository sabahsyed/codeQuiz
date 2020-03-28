var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 60;
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var nextButtonEl = document.getElementById( "next-btn");
var currentQuestionIndex = 0 ;
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var highscoresEl = document.getElementById("highscores");
var finishEl = document.getElementById("finish-btn");
window.localStorage.setItem("key" , highscoresEl);
//highscoresEl.textContent = 0;
var questions = [
  {
    question:"What is a constructor?",
    answers:[
      {text: "It is a variable", correct :false},
      {text: "It is a language", correct  :false},
      {text: "It is a way of initializing and using objects", correct :true},
      {text: "It is not used to convert objects into different datatypes", correct  :false},
    ]
  },
  {
    question:"What does boolean return?",
    answers:[
      {text: "True/False", correct :true},
      {text: "Number", correct  :false},
      {text: "String", correct :false},
      {text: "Array", correct  :false},
    ]
  },
  {
    question:"What does === mean?",
    answers:[
      {text: "Equal value only", correct :false},
      {text: "Compares length of 3 strings", correct  :false},
      {text: "Does nothing!", correct :false},
      {text: "Equal value and datatype", correct  :true},
    ]
  },
  {
    question:"JSON value CANNOT be....",
    answers:[
      {text: "String", correct :false},
      {text: "Object", correct  :false},
      {text: "Function/date", correct :true},
      {text: "Array", correct  :false},
    ]
  }
]


function nextQuestionHandler(){
  if(currentQuestionIndex < questions.length){
    questionEl.style.display = "none";
    clear();
    //answerButtonsEl.style.display = "none";
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion(questions[currentQuestionIndex]);
    }
  }
  else {
    if(currentQuestionIndex == questions.length){
      questionEl.style.display = "none";
      nextButtonEl.style.display = "none";
      finishEl.style.display = "block";
      clear();
    }
  }
}
function viewHighscores(){

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
  console.log("started");           //Check success
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  nextButtonEl.classList.remove("hide");
  showQuestion(questions[currentQuestionIndex]); //0
}
function clear(){
  answerButtonsEl.innerHTML = "";
}
function showQuestion(currentQuestion){
  questionEl.style.display = "block";
  clear();
  questionEl.innerText = currentQuestion.question;
  if(currentQuestionIndex == questions.length -1){
    nextButtonEl.style.display = "none";
    finishEl.style.display = "block";
  }
  currentQuestion.answers.forEach(element => {
    var answerBtn = document.createElement("button");
    answerBtn.innerHTML = element.text;
    answerButtonsEl.appendChild(answerBtn);
    answerBtn.addEventListener("click", checkAnswer);
  });
}
//nextQuestionHandler();

function checkAnswer(){
  var size = questions[currentQuestionIndex].answers.length;
  for(var i = 0; i< size; i++) {
    if(event.target.textContent == questions[currentQuestionIndex].answers[i].text) {
      alert(questions[currentQuestionIndex].answers[i].correct);
  }
}
nextQuestionHandler();
}
//answerBtn.addEventListener("click", checkAnswer);
startButton.addEventListener("click", startGame);
nextButtonEl.addEventListener("click", nextQuestionHandler);
highscoresEl.addEventListener("click", viewHighscores);
setTime();