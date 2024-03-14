const questions = [
    {
        question: "What is the process of bringing goods into a country from abroad called?",
        options: [ "Importing", "Outsourcing", "Offshoring", "Procurement"],
        answer: "Importing"
    },
    {
        question: "What is the process of converting raw materials into finished products called?",
        options: ["Manufacturing", "Distribution", "Procurement", "Procurement"],
        answer: "Manufacturing"
    },
    { 
        question: "What is the term for the amount of money remaining after all expenses have been deducted from revenue?",
        options: ["Revenue", "Gross profit", "Net income","Procurement"],
        answer: "Net income"
    },
    {
        question: "Your performance ___________ our expectations. Good job!",
        options: ["exceeded", "excelled", "exceedeed", "Procurement"],
        answer: "exceeded"
    },
    {
        question: "As a teacher, my primary concern is the ____________ of my students.",
        options: ["good", "welfare" ,"well-off", "Procurement"],
        answer: "welfare"
    }
];

  
  let currentQuestion = 0;
  let score = 0;
  let timer =0;
  
  const questionElem = document.getElementById("question");
  const optionsElem = document.querySelectorAll(".option");
  const feedbackElem = document.getElementById("feedback");
  const timerElem = document.getElementById("time-left");
  const nextBtn = document.getElementById("next-btn");
  const scoreElem = document.getElementById("score-value");
  
  function loadQuestion() {
    clearInterval(timer);
    const currentQ = questions[currentQuestion];
    questionElem.textContent = currentQ.question;
    optionsElem.forEach((option, index) => {
      option.textContent = currentQ.options[index];
      option.onclick = () => checkAnswer(option.textContent);
    });
    feedbackElem.textContent = "";
    startTimer();
    nextBtn.style.display = "none";
  }
  
  function checkAnswer(selectedOption) {
    clearInterval(timer);
    const currentQ = questions[currentQuestion];
    if (selectedOption === currentQ.answer) {
      score++;
      feedbackElem.textContent = "Congratulations! That's correct!";
      optionsElem.forEach(option => {
        if (option.textContent === currentQ.answer) {
          option.style.backgroundColor = "#28a745";
        }
      });
    } else {
      feedbackElem.textContent = "Oops! That's incorrect. Try again!";
      optionsElem.forEach(option => {
        if (option.textContent === currentQ.answer) {
          option.style.backgroundColor = "#28a745";
        } else if (option.textContent === selectedOption) {
          option.style.backgroundColor = "#dc3545";
        }
      });
      setTimeout(() => {
        optionsElem.forEach(option => {
          option.style.backgroundColor = "#007bff";
        });
      }, 1000);
    }
    scoreElem.textContent = score;
    nextBtn.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      clearInterval(timer);
      feedbackElem.textContent = `Quiz completed! Your score is ${score}/${questions.length}`;
      nextBtn.style.display = "none";
    }
  }
  
  function startTimer() {
    let time = 30;
    timerElem.textContent = time;
    timer = setInterval(() => {
      time--;
      timerElem.textContent = time;
      if (time <= 0) {
        clearInterval(timer);
        checkAnswer("");
      }
    }, 1000);
  }
  
  loadQuestion();
  
