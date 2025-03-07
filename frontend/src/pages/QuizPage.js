import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar";

function QuizPage() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    console.log("Fetching quiz with ID:", id); 
    axios.get(`http://localhost:5000/api/quiz/${id}`)
      .then((res) => {
        console.log("Fetched Quiz:", res.data); 
        setQuiz(res.data);
      })
      .catch((err) => {
        console.error("Error fetching quiz:", err);
        alert("Failed to load quiz. Check the console for errors.");
      });
  }, [id]);

  const handleAnswer = (optionText) => {
    setAnswers((prev) => [...prev, optionText]);

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      axios.post("http://localhost:5000/api/quiz/submit", { quizId: id, answers })
        .then((res) => {
          setScore(res.data.score);
          setFinished(true);
        })
        .catch((err) => console.error("Error submitting quiz:", err));
    }
  };

  if (!quiz) return <p>Loading...</p>;
  if (finished) return <div><h2>Quiz Completed! Your Score: {score}</h2></div>;

  return (
    <div>
      <ProgressBar current={currentQuestion + 1} total={quiz.questions.length} />
      <Question data={quiz.questions[currentQuestion]} onAnswer={handleAnswer} />
    </div>
  );
}

export default QuizPage;
