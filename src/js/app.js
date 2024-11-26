// Array containing questions and answers
const questions = [
  {
    question: "What is Ross´s second wife´s name?",
    options: ["Emily", "Susan", "Carol", "Rachel"],
    correct: 0,
    image: "./assets/images/emily.jpeg",
  },

  {
    question: "Which charachter was known for saying 'How you doin´'?",
    options: ["Chandler", "Ross", "Joey", "Richard"],
    correct: 2,
    image: "./assets/images/how_you_doin.jpg.webp",
  },

  {
    question: "What is Monica´s biggest pet peeve",
    options: [
      "People chewing loudly",
      "People not using coasters",
      "Animals dressed as humans",
      "People being late",
    ],
    correct: 2,
    image: "./assets/images/monica.jpeg",
  },

  {
    question: "What is the name of Pheobe´s most famous song?",
    options: [
      "Smelly Cat",
      "The Lion Sleeps Tonight",
      "New York City",
      "Grandma´s Hands",
    ],
    correct: 0,
    image: "./assets/images/smelly-cat.jpeg",
  },

  {
    question: "Which charachter was a paleontologist?",
    options: ["Chandler", "Joey", "Monica", "Ross"],
    correct: 3,
    image: "./assets/images/friends.jpg",
  },

  {
    question:
      "Who was the last person to find out about Monica and Chandler´s relationship?",
    options: ["Rachel", "Pheobe", "Ross", "Joey"],
    correct: 2,
    image: "./assets/images/monica-chandler.jpeg",
  },

  {
    question: "What is the name of Joey´s stuffed penguin?",
    options: ["Waddle", "Hugsy", "Pingu", "Snowball"],
    correct: 1,
    image: "./assets/images/hugsy.jpg",
  },

  {
    question: "What is the name of Ross and Monica´s parents?",
    options: [
      "Jack and Judy",
      "Sam and Lisa",
      "Michael and Carol",
      "Edward and Helen",
    ],
    correct: 0,
    image: "./assets/images/jack-judy.jpg",
  },

  {
    question: "Which charachters got married in Las Vegas while drunk?",
    options: [
      "Chandler and Monica",
      "Pheobe and Mike",
      "Joey and Pheobe",
      "Ross and Rachel",
    ],
    correct: 3,
    image: "./assets/images/weddings.jpg",
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
  document.querySelector(".start__container--picture").classList.add("hidden");
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

  // Prøver meg frem med bilde for hvert spørsmål her. ???
  const questionImage = document.getElementById("question-image");
  questionImage.src = question.image;

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
  userAnswer[currentQuestionIndex] = selectedIndex; // Lagre brukerens svar
  console.log(
    // Logge for å sjekke at den henter riktig informasjon
    `Question ${currentQuestionIndex} answered with option ${selectedIndex}`
  );
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

  reviewList.innerHTML = questions
    .map((q, index) => {
      const userSelectedIndex = userAnswer[index]; // Brukerens valgte indeks
      const userSelected =
        userSelectedIndex !== undefined &&
        q.options[userSelectedIndex] !== undefined
          ? q.options[userSelectedIndex]
          : "No Answer"; // Sjekk at svaret er gyldig
      const correctAnswer = q.options[q.correct];
      return `<p><strong>${q.question}</strong><br>Your Answer: ${userSelected}<br>Correct Answer: ${correctAnswer}</p>`;
    })
    .join("");
}

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
