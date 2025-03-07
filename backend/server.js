require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();


connectDB();

app.use(cors());
app.use(express.json());


app.use("/api", require("./routes/quizRoutes"));
app.use("/api", require("./routes/userRoutes"));
app.get("/", (req, res) => {
  res.send("Quiz API is running...");
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
