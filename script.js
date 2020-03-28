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
var counter = document.querySelector("#counter");
var count = localStorage.getItem("count");
count = 0;
counter.textContent = count;
localStorage.setItem("count", count);

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
      viewScores();
    }
  }
}
function viewScores(){
  alert("Your final score is : "  + count); 
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


//Score script below

// var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

// var todos = [];
// var scores = [];

// init();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

// function init() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   // Render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Stringify and set "todos" key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // When a element inside of the todoList is clicked...
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // If that element is a button...
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });



//answerBtn.addEventListener("click", checkAnswer);
startButton.addEventListener("click", startGame);
nextButtonEl.addEventListener("click", nextQuestionHandler);
scoresButtonEl.addEventListener("click",viewScores);
clearBtnEl.addEventListener("click",clearAll);
setTime();