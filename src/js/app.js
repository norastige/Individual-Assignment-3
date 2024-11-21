// Array containing questions and answers
const questions = [
  {
    question: "What is red?",
    options: ["Apple", "Pear", "Orange", "Banana"],
    correct: 1,
  },

  {
    question: "What does the cow say?",
    options: ["Mjau", "Bæ", "Moo", "Hello"],
    correct: 3,
  },

  {
    question: "What rimes with cow?",
    options: ["Hey", "Smile", "Now", "Drown"],
    correct: 3,
  },

  {
    question: "What is my name?",
    options: ["Nora", "Petter", "Ola", "Hanne"],
    correct: 1,
  },

  {
    question: "What is a dragon?",
    options: [
      "A human in disguise",
      "An animal",
      "A toy",
      "An extinct creature",
    ],
    correct: 4,
  },

  {
    question: "Is school fun?",
    options: ["No", "Yes", "Sometimes", "Never"],
    correct: 3,
  },

  {
    question: "What is our teacher´s name?",
    options: ["Reza", "Hussein", "Carl", "Heidi"],
    correct: 1,
  },

  {
    question: "What did I eat for lunch?",
    options: ["Hamburger", "Salad", "Tuna Salad", "Pizza"],
    correct: 4,
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
const reviewButtin = document.querySelector(".review__answers--button");
const reviewContainer = document.querySelector(".review__questions--page");
const reviewList = document.querySelector(".review__questions--list");
const restartButton = document.querySelector(".restart__button--review");

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

console.log(showQuestion);
console.log(startQuiz);
