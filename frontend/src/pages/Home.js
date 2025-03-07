import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/quizzes")
      .then((res) => {
        console.log("Fetched Quizzes:", res.data);  
        setQuizzes(res.data);
      })
      .catch((err) => {
        console.error("Error fetching quizzes:", err);
        alert("Failed to load quizzes. Check the console for errors.");
      });
  }, []);

  return (
    <div>
      <h2>QuizApp</h2>
      <h3>Available Quizzes</h3>
      {quizzes.length === 0 && <p>No quizzes found.</p>}
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id}>
            <Link to={`/quiz/${quiz._id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
