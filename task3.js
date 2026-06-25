const quizData = [

{
question:"Which HTML tag is used to create a hyperlink?",
options:["<link>","<a>","<href>","<url>"],
answer:"<a>"
},

{
question:"Which CSS property changes text color?",
options:["font-color","text-color","color","background-color"],
answer:"color"
},

{
question:"Which symbol is used for id selector in CSS?",
options:[".","#","*","@"],
answer:"#"
},

{
question:"Which JavaScript keyword declares a variable?",
options:["var","int","string","define"],
answer:"var"
},

{
question:"Which HTML tag inserts an image?",
options:["picture","img","image","src"],
answer:"img"
}

];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progress-bar");

loadQuestion();

function loadQuestion(){

let q = quizData[currentQuestion];

questionEl.textContent = q.question;

options.forEach((btn,index)=>{

btn.textContent = q.options[index];

btn.onclick = function(){

if(q.options[index] === q.answer){

result.textContent = "Correct!";
result.style.color = "green";
score++;

}else{

result.textContent = "Wrong!";
result.style.color = "red";
}
};
});

progressBar.style.width =
((currentQuestion)/quizData.length)*100 + "%";
}

nextBtn.onclick = function(){

currentQuestion++;

if(currentQuestion < quizData.length){

result.textContent = "";
loadQuestion();

}else{

document.querySelector(".quiz-container").innerHTML =
`<h2>Quiz Completed</h2>
<h3>Your Score: ${score}/${quizData.length}</h3>`;
}
};

function getJoke(){

fetch("https://official-joke-api.appspot.com/random_joke")

.then(response=>response.json())

.then(data=>{

document.getElementById("joke").innerHTML =
data.setup + "<br><br>" + data.punchline;

})

.catch(()=>{

document.getElementById("joke").innerHTML =
"Unable to load joke";

});
}s