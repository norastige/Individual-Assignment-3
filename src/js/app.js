// Array containing questions and answers
const questions = [
  {
    question: "What is red?",
    options: ["Apple", "Pear", "Orange", "Banana"],
    correct: 0,
  },

  {
    question: "What does the cow say?",
    options: ["Mjau", "Bæ", "Moo", "Hello"],
    correct: 2,
  },

  {
    question: "What rimes with cow?",
    options: ["Hey", "Smile", "Now", "Drown"],
    correct: 2,
  },

  {
    question: "What is my name?",
    options: ["Nora", "Petter", "Ola", "Hanne"],
    correct: 0,
  },

  {
    question: "What is a dragon?",
    options: [
      "A human in disguise",
      "An animal",
      "A toy",
      "An extinct creature",
    ],
    correct: 3,
  },

  {
    question: "Is school fun?",
    options: ["No", "Yes", "Sometimes", "Never"],
    correct: 2,
  },

  {
    question: "What is our teacher´s name?",
    options: ["Reza", "Hussein", "Carl", "Heidi"],
    correct: 0,
  },

  {
    question: "What did I eat for lunch?",
    options: ["Hamburger", "Salad", "Tuna Salad", "Pizza"],
    correct: 3,
  },
];

// Create variables to store Question Index, Score and Users Answer
let currentQuestionIndex = 0;
let score = 0;
let userAnswer = []; // Lagres i en tom array - skal være flere variabler.

// Get Elements from HTML Structure
const startButton = document.querySelector(".start__button");
const questionsContainer = document.querySelector(".questions__container");
const questionText = document.querySelector(".question__text");
const answerOptions = document.querySelector(".question__answer--options");
const nextButton = document.querySelector(".next__question--button");
const resultContainer = document.querySelector(".results__container");
const scoreText = document.querySelector(".score__text");
const reviewButton = document.querySelector(".review__answers--button");
const reviewContainer = document.querySelector(".review__questions--page");
const reviewList = document.querySelector(".review__questions--list");
const restartButton = document.querySelectorAll(
  ".restart__quiz--button, .restart__button--review"
);

// Create Element for Progress Indicator (Made in css)
const progressIndicator = document.querySelector(".progress__indicator");

// Functionality

// Function to Start Quiz
function startQuiz() {
  document.querySelector(".start__container").classList.add("hidden");
  questionsContainer.classList.remove("hidden");
  showQuestion();
}

// Function Show Question
function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.textContent = question.question;
  progressIndicator.textContent = `Question ${currentQuestionIndex + 1} of ${
    questions.length
  }`;

  answerOptions.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => handleAnswer(index);
    answerOptions.appendChild(button);
  });

  nextButton.classList.add("hidden");
}

// Function handleAnswer
function handleAnswer(selectedIndex) {
  userAnswer[currentQuestionIndex] = selectedIndex;
  if (selectedIndex === questions[currentQuestionIndex].correct) {
    score++;
  }
  nextButton.classList.remove("hidden");
}

// Function nextQuestion
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// Function showResults
function showResults() {
  questionsContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreText.textContent = `You scored ${score} out of ${questions.length}!`;
}

// Function reviewAnswers
function reviewAnswers() {
  resultContainer.classList.add("hidden");
  reviewContainer.classList.remove("hidden");
}
reviewList.innerHTML = questions
  .map((q, index) => {
    const userSelected = q.options[userAnswer[index]] || "No Answer";
    const correctAnswer = q.options[q.correct];
    return `<p><strong>´${q.question}</strong><br>Your Answer: ${userSelected}<br>Correct Answer: ${correctAnswer}</p>`;
  })
  .join("");

// Function restartQuiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswer = [];
  reviewContainer.classList.add("hidden");
  resultContainer.classList.add("hidden");
  startQuiz();
}

// Adding Event Listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
reviewButton.addEventListener("click", reviewAnswers);
restartButton.forEach((button) =>
  button.addEventListener("click", restartQuiz)
);
