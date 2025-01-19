// DOM Elements
const landingPage = document.getElementById("landing-page");
const gameBoard = document.getElementById("game-board");
const topicsContainer = document.getElementById("topics-container");
const selectedTopicTitle = document.getElementById("selected-topic");
const categoriesContainer = document.getElementById("categories-container");
const questionModal = document.getElementById("question-modal");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const answerReveal = document.getElementById("answer-reveal");
const correctAnswer = document.getElementById("correct-answer");
const closeModalBtn = document.getElementById("close-modal");

let currentTopic = null;
let currentQuestion = null;
const revealedQuestions = new Set();

let timerInterval;
let remainingTime;

// Disable refresh and right-click on the page to prevent losing state during presentation
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "r") {
    e.preventDefault();
    return false;
  }
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  return false;
});

function initGame() {
  renderTopics();
}

function renderTopics() {
  topicsContainer.innerHTML = "";
  gameData.topics.forEach((topic) => {
    const button = document.createElement("button");
    button.className = "topic-button";
    button.textContent = topic.name;
    button.addEventListener("click", () => selectTopic(topic));
    topicsContainer.appendChild(button);
  });
}

function selectTopic(topic) {
  currentTopic = topic;
  landingPage.classList.add("hidden");
  gameBoard.classList.remove("hidden");
  selectedTopicTitle.textContent = topic.name;
  renderGameBoard();
}

function renderGameBoard() {
  categoriesContainer.innerHTML = "";
  currentTopic.categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";

    const categoryTitle = document.createElement("div");
    categoryTitle.className = "category-title";
    categoryTitle.textContent = category.name;
    categoryDiv.appendChild(categoryTitle);

    category.questions.forEach((question) => {
      if (question.question && question.options[0] && question.answer) {
        const questionCard = document.createElement("div");
        const questionId = `${category.name}-${question.points}`;
        questionCard.className = `question-card ${
          revealedQuestions.has(questionId) ? "revealed" : ""
        }`;
        questionCard.setAttribute("data-points", question.points);
        questionCard.textContent = revealedQuestions.has(questionId)
          ? ""
          : question.points;

        if (!revealedQuestions.has(questionId)) {
          questionCard.addEventListener("click", () =>
            showQuestion(category, question)
          );
        }

        categoryDiv.appendChild(questionCard);
      }
    });

    categoriesContainer.appendChild(categoryDiv);
  });
}

function createTimer(difficulty) {
  // create timer container
  const timerContainer = document.createElement('div');
  timerContainer.className = 'timer-container';
  
  const timerBar = document.createElement('div');
  timerBar.className = `timer-bar ${getDifficultyClass(difficulty)}`;
  
  timerContainer.appendChild(timerBar);
  
  // insert timer at top of modal
  const modalContent = document.querySelector('.modal-content');
  modalContent.insertBefore(timerContainer, modalContent.firstChild);
  
  // set timer duration based on difficulty
  const duration = getDuration(difficulty);
  remainingTime = duration;
  
  // start countdown
  startTimer(timerBar, duration);
  return timerBar; // return the timer for stopping later
}


function getDifficultyClass(points) {
  if (points === 1) return "easy";
  if (points === 3) return "medium";
  return "hard";
}

function getDuration(points) {
  if (points === 1) return 10;
  if (points === 3) return 15;
  return 20;
}

function startTimer(timerBar, duration) {
  // Initial setup
  timerBar.style.transition = `width ${duration}s linear`;
  timerBar.style.width = "100%";

  // Force a reflow to ensure the transition starts
  timerBar.offsetHeight;

  // Start the countdown
  timerBar.style.width = "0%";

  // Clear any existing interval
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {
    remainingTime--;
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function handleTimeout(questionId) {
  currentQuestion.timedOut = true;
  
  const modalContent = document.querySelector('.modal-content');
  modalContent.dataset.timedOut = 'true';
  modalContent.style.backgroundColor = '#ffebee';
}


function stopTimer(timerBar) {
  // stop transition
  const currentWidth = window.getComputedStyle(timerBar).width;
  timerBar.style.transition = 'none';
  timerBar.style.width = currentWidth;
  
  // clear the interval
  if (timerInterval) {
    clearInterval(timerInterval);
  }
}

function showQuestion(category, question) {
  currentQuestion = { category, question, timedOut: false };
  questionText.textContent = question.question;

  const pointsDisplay = document.createElement("div");
  pointsDisplay.className = "points-display";
  pointsDisplay.textContent = `${question.points} ${
    question.points === 1 ? "move" : "moves"
  }`;

  questionText.parentNode.insertBefore(pointsDisplay, optionsContainer);

  // reset modal content background color
  const modalContent = document.querySelector('.modal-content');
  modalContent.style.backgroundColor = 'white';
  delete modalContent.dataset.timedOut;

  renderOptions(question);
  questionModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  answerReveal.style.display = "none";
  
  const timerBar = createTimer(question.points);
  currentQuestion.timerBar = timerBar;
}

function renderOptions(question) {
  optionsContainer.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(option, question));
    optionsContainer.appendChild(button);
  });
}

function selectOption(selectedOption, question) {
  const options = optionsContainer.querySelectorAll(".option-button");
  options.forEach((button) => {
    button.disabled = true;
    if (button.textContent === selectedOption) {
      button.classList.add(
        button.textContent === question.answer ? "correct" : "incorrect"
      );
    } else if (button.textContent === question.answer) {
      button.classList.add("correct");
    }
  });

  // Stop timer when option selected
  if (currentQuestion.timerBar) {
    stopTimer(currentQuestion.timerBar);
  }

  const questionId = `${currentQuestion.category.name}-${currentQuestion.question.points}`;
  revealedQuestions.add(questionId);
}

closeModalBtn.addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  const timerContainer = document.querySelector('.timer-container');
  if (timerContainer) {
    timerContainer.remove();
  }
  
  // remove points display
  document.querySelector(".points-display").remove();
  questionModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  renderGameBoard();
});
initGame();
