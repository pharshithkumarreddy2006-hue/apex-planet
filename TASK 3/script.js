const quizData = [

  { 
    question: "Which language runs in a web browser?", 
    options: ["Java", "C", "Python", "JavaScript"], 
    answer: "JavaScript" 
  },

  { 
    question: "What does CSS stand for?", 
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"], 
    answer: "Cascading Style Sheets" 
  },

  { 
    question: "What does HTML stand for?", 
    options: ["HyperText Markup Language", "HyperText Markdown Language", "HyperTool Multi Language", "Hyper Transfer Markup Language"], 
    answer: "HyperText Markup Language" 
  },

  { 
    question: "What year was JavaScript launched?", 
    options: ["1996", "1995", "1994", "None of the above"], 
    answer: "1995" 
  },

  { 
    question: "Which company developed JavaScript?", 
    options: ["Microsoft", "Netscape", "Google", "Sun Microsystems"], 
    answer: "Netscape" 
  }

];

let currentIndex = 0;
let score = 0;
let attempted = 0;

const homeBox = document.getElementById("home-box");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const finalScoreEl = document.getElementById("finalScore");
const totalQuestionsEl = document.getElementById("totalQuestions");
const summaryEl = document.getElementById("summary");
const playAgainBtn = document.getElementById("play-again");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  homeBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuestion();
});

function loadQuestion() {
  if (currentIndex >= quizData.length) {
    showSummary();
    return;
  }

  const q = quizData[currentIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(opt, btn);
    optionsEl.appendChild(btn);
  });

  if (currentIndex === quizData.length - 1) {
    nextBtn.textContent = "Submit";
    nextBtn.disabled = true;
  } else {
    nextBtn.textContent = "Next";
    nextBtn.disabled = false;
  }
}

function checkAnswer(selected, btn) {
  attempted++;
  const q = quizData[currentIndex];

  if (selected === q.answer) {
    score++;
    btn.classList.add("correct");
  } else {
    btn.classList.add("wrong");
  }

  document.querySelectorAll(".option").forEach(opt => opt.style.pointerEvents = "none");

  if (currentIndex === quizData.length - 1) {
    nextBtn.disabled = false;
  }
}

function nextQuestion() {
  currentIndex++;
  loadQuestion();
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
  }
}

function showSummary() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  finalScoreEl.textContent = score;
  totalQuestionsEl.textContent = quizData.length;

  let message = `You attempted ${attempted} questions. Your score is ${score}/${quizData.length}. `;
  if (score < 3) {
    message += "Your score is low. Please retake the test.";
    playAgainBtn.style.display = "inline-block";
  } else {
    message += "Congratulations! 🎉";
    playAgainBtn.style.display = "none";
  }
  summaryEl.textContent = message;
}

playAgainBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  attempted = 0;
  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuestion();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < quizData.length - 1) {
    nextQuestion();
  } else {
    showSummary();
  }
});

prevBtn.addEventListener("click", prevQuestion);