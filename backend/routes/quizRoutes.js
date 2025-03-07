const express = require("express");
const Quiz = require("../models/Quiz");
const router = express.Router();

router.get("/quizzes", async (req, res) => {
  try {
    const quizzes = await Quiz.find({}, "title");
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/quiz/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/quiz/submit", async (req, res) => {
    try {
      const { quizId, answers } = req.body;
      const quiz = await Quiz.findById(quizId);
      if (!quiz) return res.status(404).json({ message: "Quiz not found" });
  
      let score = 0;
      
      quiz.questions.forEach((q, index) => {
        const correctAnswer = q.options.find(opt => opt.correct === true).text;
        if (answers[index] === correctAnswer) {
          score++;
        }
      });
  
      res.json({ score, totalQuestions: quiz.questions.length });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
