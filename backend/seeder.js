require("dotenv").config();
const mongoose = require("mongoose");
const Quiz = require("./models/Quiz");
const connectDB = require("./config/db");

connectDB();

const sampleQuizzes = [
  {
    title: "General Knowledge Quiz",
    questions: [
      {
        question: "What is the capital of France?",
        options: [
          { text: "Berlin", correct: false },
          { text: "Madrid", correct: false },
          { text: "Paris", correct: true },
          { text: "Rome", correct: false }
        ]
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: [
          { text: "Charles Dickens", correct: false },
          { text: "William Shakespeare", correct: true },
          { text: "Mark Twain", correct: false },
          { text: "Leo Tolstoy", correct: false }
        ]
      },
      {
        question: "What is the largest ocean on Earth?",
        options: [
          { text: "Atlantic Ocean", correct: false },
          { text: "Pacific Ocean", correct: true },
          { text: "Indian Ocean", correct: false },
          { text: "Arctic Ocean", correct: false }
        ]
      },
      {
        question: "Which planet is known as the Morning Star?",
        options: [
          { text: "Mars", correct: false },
          { text: "Venus", correct: true },
          { text: "Jupiter", correct: false },
          { text: "Saturn", correct: false }
        ]
      },
      {
        question: "Who discovered gravity?",
        options: [
          { text: "Albert Einstein", correct: false },
          { text: "Isaac Newton", correct: true },
          { text: "Galileo Galilei", correct: false },
          { text: "Nikola Tesla", correct: false }
        ]
      }
    ]
  },
  {
    title: "Science Quiz",
    questions: [
      {
        question: "What is the chemical symbol for water?",
        options: [
          { text: "H2O", correct: true },
          { text: "O2", correct: false },
          { text: "CO2", correct: false },
          { text: "NaCl", correct: false }
        ]
      },
      {
        question: "What planet is known as the Red Planet?",
        options: [
          { text: "Earth", correct: false },
          { text: "Venus", correct: false },
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false }
        ]
      },
      {
        question: "Which gas do plants use for photosynthesis?",
        options: [
          { text: "Oxygen", correct: false },
          { text: "Carbon Dioxide", correct: true },
          { text: "Nitrogen", correct: false },
          { text: "Hydrogen", correct: false }
        ]
      },
      {
        question: "What part of the cell contains DNA?",
        options: [
          { text: "Nucleus", correct: true },
          { text: "Ribosome", correct: false },
          { text: "Cytoplasm", correct: false },
          { text: "Mitochondria", correct: false }
        ]
      },
      {
        question: "Which metal is liquid at room temperature?",
        options: [
          { text: "Mercury", correct: true },
          { text: "Gold", correct: false },
          { text: "Silver", correct: false },
          { text: "Lead", correct: false }
        ]
      }
    ]
  }
];

const importData = async () => {
  try {
    await Quiz.deleteMany(); 
    await Quiz.insertMany(sampleQuizzes); 
    console.log("New sample quizzes added!");
    process.exit();
  } catch (error) {
    console.error("Error inserting quizzes:", error);
    process.exit(1);
  }
};

importData();
