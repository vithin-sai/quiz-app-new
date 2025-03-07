import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/scores").then((res) => setScores(res.data));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {scores.map((user, index) => (
          <li key={index}>{user.name}: {user.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
