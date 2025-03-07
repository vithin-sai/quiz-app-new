import axios from "axios";

const API_URL = "http://localhost:5000/api";  

export const fetchQuizzes = async () => {
  return axios.get(`${API_URL}/quizzes`).then(res => res.data);
};

export const fetchQuizById = async (id) => {
  return axios.get(`${API_URL}/quiz/${id}`).then(res => res.data);
};

export const submitQuiz = async (data) => {
  return axios.post(`${API_URL}/quiz/submit`, data).then(res => res.data);
};

export const fetchLeaderboard = async () => {
  return axios.get(`${API_URL}/scores`).then(res => res.data);
};
