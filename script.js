var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 60;
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var nextButtonEl = document.getElementById( "next-btn");
var currentQuestionIndex = 0 ;
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var finishEl = document.getElementById("finish-btn");
var scoresButtonEl = document.getElementById("scoresBtn");
var scoresEl = document.getElementById("scores");
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var clearBtnEl = document.getElementById("container");
var formEl= document.getElementById("form");
var formScoreValue = document.getElementById("form-score");
var userNameEl = document.getElementById("userName");
var counter = document.querySelector("#counter");
var submitBtnEl = document.getElementById("submit");
var count = 0;
counter.textContent = count;
//var count = localStorage.getItem("count");
// localStorage.setItem("count", count);
// localStorage.setItem("userName", name);
// var userName = localStorage.getItem("userName");


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
function submitFunction(){
  // localStorage.removeItem("players");
  // localStorage.removeItem("scores");
  var players = JSON.parse(localStorage.getItem("players"));
  if (players == null) {
    players = [];
    players[0] = userNameEl.value;
  } else {
    var size = players.length;
    players[size] = userNameEl.value;
  }
  var scores = JSON.parse(localStorage.getItem("scores"));
  if (scores == null) {
    scores = [];
    scores[0] = count;
  } else {
    var size = scores.length;
    scores[size] = count;
  }
  localStorage.setItem("players", JSON.stringify(players));
  localStorage.setItem("scores",JSON.stringify(scores));
  var results = "";
  var size = players.length;
  for(var i = 0 ; i < size; i++) {
    results = results + "Name: " + players[i] + " Score: " + scores[i] + "\n";
  }
  alert(results);
  
}
function nextQuestionHandler(){
  if(currentQuestionIndex < questions.length){
    questionEl.style.display = "none";
    clear();
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion(questions[currentQuestionIndex]);
    }
  }
  else {
    if(currentQuestionIndex == questions.length){
      questionEl.style.display = "none";
      nextButtonEl.style.display = "none";
      viewScores();
    }
  }
}
finishEl.onclick = function(){
  questionEl.style.display = "none";
  clear();
  finishEl.style.display = "none";
  document.getElementById("form").style.display = "block";
  document.getElementById("form-score").value = count;1

}

// submitBtnEl.onclick = function(){
//   document.getElementById("userName").value = name.value;
//   console.log(name.value);
// }
scoresButtonEl.onclick = function(){
  alert("Your score is : " + count);
}
function value(){ 
  return count;
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
  setTime();
  showQuestion(questions[currentQuestionIndex]); //0
}
function clear(){
  answerButtonsEl.innerHTML = "";
}
function clearAll(){
  document.getElementById("container").style.display = "none"; 
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
      if(questions[currentQuestionIndex].answers[i].correct ==  true){
        count++;
        counter.textContent = count;
      }
    }
}
nextQuestionHandler();
}


//answerBtn.addEventListener("click", checkAnswer);
startButton.addEventListener("click", startGame);
nextButtonEl.addEventListener("click", nextQuestionHandler);
//clearBtnEl.addEventListener("click",clearAll);
submitBtnEl.addEventListener("click",submitFunction);