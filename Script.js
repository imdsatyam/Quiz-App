const questions = [
    {
      id: 1,
      answer: 3,
      question: "Which was not one of Voldemort's Horcruxes?",
      options: ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"],
    },
    {
      id: 2,
      answer: 1,
      question: "Which of these are not one of Hagrid's many pets?",
      options: ["Grawp", "Fluffy", "Aragog", "Norberta"],
    },
    {
      id: 3,
      answer: 3,
      question: "Which class did Severus Snape always want to teach?",
      options: ["Potions", "Charms", "Defense Against Dark Arts", "Transfiguration"],
    },
    {
      id: 4,
      answer: 3,
      question: "Which Hogwarts house did Moaning Myrtle belong in?",
      options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
    },
    {
      id: 5,
      answer: 2,
      question: "What class did Neville end up teaching at Hogwarts?",
      options: ["Astronomy", "Herbology", "Charms", "Muggle Studies"],
    },
  ];
  
  let score = 0;
  
  const questionsContainer = document.querySelector(".questions-container");
  const scoreElement = document.getElementById("score");
  const submitButton = document.getElementById("submit-button");
  
  function loadQuestions() {
    questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question-div mb-4 p-4 text-yellow-500 rounded-lg shadow-md text-accent";
      questionDiv.innerHTML = `
        <p class="mt-0 mb-2">Q.${index + 1}: ${question.question}</p>
        <form class="options-form text-left"> <!-- Added text-left class to align options to the left -->
          ${question.options.map((option, optionIndex) => `
            <label class="block mb-2">
              <input type="radio" name="options-${index}" value="${optionIndex}" class="mr-2">
              ${option}
            </label>
          `).join('')}
        </form>
      `;
      questionsContainer.appendChild(questionDiv);
    });
  }
  
  
  function calculateScore() {
    score = 0;
  
    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="options-${index}"]:checked`);
      if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        if (selectedAnswer === question.answer) {
          score++;
        }
      }
    });
  
    scoreElement.textContent = `${score}/${questions.length}`;
  }
  
  submitButton.addEventListener("click", () => {
    calculateScore();
  });
  
  loadQuestions();
