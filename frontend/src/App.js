import "./App.css";  
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Admin from "./pages/Admin";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="container">
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
