const questions = [
  {
    id: 1,
    question: "What is the correct way to create a functional component in React?",
    options: [
      "function MyComponent() {}",
      "let MyComponent = React.component()",
      "React.createComponent(MyComponent)",
      "component MyComponent()",
    ],
    answer: 0,
  },
  {
    id: 2,
    question: "What is the purpose of useState in React?",
    options: [
      "To fetch APIs",
      "To define routes",
      "To manage component state",
      "To create styles",
    ],
    answer: 2,
  },
  {
    id: 3,
    question: "Which hook is used to perform side effects in a functional component?",
    options: ["useState", "useEffect", "useRef", "useCallback"],
    answer: 1,
  },
  {
    id: 4,
    question: "What will the useState hook return?",
    options: [
      "An object with state and setter",
      "A function to update state only",
      "An array with state and a setter function",
      "A reducer function",
    ],
    answer: 2,
  },
  {
    id: 5,
    question: "Which of the following is used to conditionally render elements?",
    options: ["useState", "ReactDOM", "useEffect", "Ternary operator ( ? : )"],
    answer: 3,
  },
  {
    id: 6,
    question: "How do you lift state up in React?",
    options: [
      "By using Redux",
      "By passing state to children",
      "By moving state to a common parent",
      "By calling setState twice",
    ],
    answer: 2,
  },
  {
    id: 7,
    question: "What is JSX?",
    options: [
      "JavaScript Extension",
      "JavaScript XML-like syntax",
      "A new language",
      "Server-side script",
    ],
    answer: 1,
  },
  {
    id: 8,
    question: "Which method is used to update state in a class component?",
    options: ["updateState()", "useState()", "setState()", "changeState()"],
    answer: 2,
  },
  {
    id: 9,
    question: "Which hook is used to access the previous value of a prop or state?",
    options: ["usePrevious", "useEffect", "useRef", "useCallback"],
    answer: 2,
  },
  {
    id: 10,
    question: "What is the purpose of the useRef hook?",
    options: [
      "To manage form inputs",
      "To store a mutable value that doesn't trigger re-render",
      "To create state",
      "To define event handlers",
    ],
    answer: 1,
  },
  {
    id: 11,
    question: "React components must return:",
    options: ["A single JSX element", "Multiple functions", "Arrays only", "HTML files"],
    answer: 0,
  },
  {
    id: 12,
    question: "Which of the following is NOT a React hook?",
    options: ["useMemo", "useContext", "useReducer", "usePromise"],
    answer: 3,
  },
  {
    id: 13,
    question: "What does ReactDOM.render() do?",
    options: [
      "Updates the DOM manually",
      "Creates a new DOM",
      "Renders a React element into the DOM",
      "Creates a virtual DOM",
    ],
    answer: 2,
  },
  {
    id: 14,
    question: "What is the correct syntax to import useState from React?",
    options: [
      "import useState from 'react'",
      "import { useState } from 'react'",
      "require('useState')",
      "React.useState()",
    ],
    answer: 1,
  },
  {
    id: 15,
    question: "What is a key prop used for in React lists?",
    options: [
      "To style list elements",
      "To uniquely identify elements",
      "To bind click events",
      "To sort lists",
    ],
    answer: 1,
  },
  {
    id: 16,
    question: "What is the default port for a React development server?",
    options: ["5000", "8000", "3000", "8080"],
    answer: 2,
  },
  {
    id: 17,
    question: "React is mainly used for building:",
    options: ["APIs", "Databases", "User Interfaces", "Command Line Tools"],
    answer: 2,
  },
  {
    id: 18,
    question: "Which command is used to create a new React app?",
    options: [
      "npx react-app init",
      "npm new react-app",
      "npx create-react-app myApp",
      "react-cli start",
    ],
    answer: 2,
  },
  {
    id: 19,
    question: "Which one is used for routing in React?",
    options: [
      "react-router-dom",
      "react-path",
      "react-navigate",
      "router-react",
    ],
    answer: 0,
  },
  {
    id: 20,
    question: "What does the useMemo hook do?",
    options: [
      "Cleans up DOM",
      "Returns a memoized value",
      "Returns a promise",
      "Creates a component",
    ],
    answer: 1,
  },
  {
    id: 21,
    question: "How can you prevent unnecessary re-renders?",
    options: [
      "By using useCallback and React.memo",
      "By using useEffect",
      "By using useState only",
      "By calling preventRender()",
    ],
    answer: 0,
  },
  {
    id: 22,
    question: "Which hook is best for fetching data?",
    options: ["useEffect", "useRef", "useContext", "useMemo"],
    answer: 0,
  },
  {
    id: 23,
    question: "What is a controlled component in React?",
    options: [
      "Component controlled by Redux",
      "Component that manages its own state",
      "Form element controlled by React state",
      "Element controlled by browser",
    ],
    answer: 2,
  },
  {
    id: 24,
    question: "How do you handle form submissions in React?",
    options: [
      "Using fetch only",
      "Using event.preventDefault() and onSubmit",
      "Using form.submit()",
      "Using input.submit()",
    ],
    answer: 1,
  },
  {
    id: 25,
    question: "Which tool helps debug React apps?",
    options: [
      "React Debugger",
      "React Inspector",
      "React DevTools",
      "Redux Tools",
    ],
    answer: 2,
  },
  {
  id: 26,
  question: "What does the virtual DOM do in React?",
  options: [
    "Directly updates the real DOM",
    "Improves performance by batching updates",
    "Slows down rendering",
    "Adds animations to the UI",
  ],
  answer: 1,
},
  {
    id: 27,
    question: "What is the virtual DOM?",
    options: [
      "A real copy of the browser DOM",
      "A server-side copy of DOM",
      "An in-memory representation of the real DOM",
      "An API for DOM creation",
    ],
    answer: 2,
  },
  {
    id: 28,
    question: "Which lifecycle method runs once after initial render (Class component)?",
    options: [
      "componentWillMount",
      "componentDidMount",
      "shouldComponentUpdate",
      "componentWillUpdate",
    ],
    answer: 1,
  },
  {
  id: 29,
  question: "How can you apply inline styles in JSX?",
  options: [
    "style='color:red;'",
    "style={{color: 'red'}}",
    "style=(color: red)",
    "css={color: red}",
  ],
  answer: 1,
},
  {
    id: 30,
    question: "How do you handle errors in React components?",
    options: [
      "Using useError() hook",
      "Using componentDidCatch or Error Boundaries",
      "Using try/catch in JSX",
      "React automatically handles errors",
    ],
    answer: 1,
  }
];


    let score = 0;
    const scoreElement = document.getElementById("score");
    const submitButton = document.getElementById("submit-button");
    const container = document.getElementById("questions-container");

    function loadQuestions() {
      questions.forEach((q, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "bg-gray-50 p-6 rounded-lg shadow question-divider";
        wrapper.innerHTML = `
          <p class="text-lg font-semibold mb-4">Q${index + 1}: ${q.question}</p>
          <form class="space-y-2">
            ${q.options.map((opt, i) => `
              <label class="block">
                <input type="radio" name="question-${index}" value="${i}" class="mr-2">
                ${opt}
              </label>
            `).join("")}
          </form>
        `;
        container.appendChild(wrapper);
      });
    }

    function calculateScore() {
      score = 0;
      questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) score++;
      });
      scoreElement.textContent = `${score}/${questions.length}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    submitButton.addEventListener("click", calculateScore);
    loadQuestions();