📝 Full-Stack Quiz Application
This is a Full-Stack Quiz Application built with React.js (frontend) and Node.js + Express + MongoDB (backend).
It allows users to take quizzes, track scores, and view a leaderboard.

🚀 Features
✅ User-friendly quiz-taking experience
✅ Score calculation after quiz submission
✅ Admin leaderboard view
✅ Light/Dark theme toggle
✅ Backend powered by Node.js, Express, and MongoDB
✅ API tested with Postman
✅ Styled with CSS

📂 Project Structure
php
Copy
Edit
quiz-app-new/
│── backend/                 # Backend (Node.js + Express + MongoDB)
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── config/              # Database connection
│   ├── middleware/          # Authentication middleware
│   ├── seeder.js            # Script to insert sample quizzes
│   ├── server.js            # Main server file
│   ├── .env                 # Environment variables
│── frontend/                # Frontend (React.js)
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Pages (Home, QuizPage, Admin)
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # Entry point
│   │   ├── App.css          # Styles
│   ├── public/
│   ├── package.json         # Frontend dependencies
│── README.md                # Project guide
⚙️ Installation & Setup Guide
Follow these steps to set up and run the project on your local machine.

1️⃣ Clone the Project
sh
Copy
Edit
git clone https://github.com/vithin-sai/quiz-app-new.git
cd quiz-app-new
2️⃣ Set Up the Backend
sh
Copy
Edit
cd backend
npm install   # Install dependencies
🔹 Create .env File
Inside the backend/ folder, create a .env file and add:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
🔹 Add Sample Quizzes to Database
sh
Copy
Edit
node seeder.js
🔹 Start the Backend Server
sh
Copy
Edit
node server.js
✅ Expected Output:

arduino
Copy
Edit
Server running on port 5000
MongoDB Connected
3️⃣ Set Up the Frontend
sh
Copy
Edit
cd ../frontend
npm install   # Install dependencies
npm start     # Start React app
This will open the project at http://localhost:3000/ in your browser.

📌 API Endpoints
Method	Endpoint	Description
GET	/api/quizzes	Get all quizzes
GET	/api/quiz/:id	Get a single quiz by ID
POST	/api/quiz/submit	Submit answers & get score
POST	/api/register	Register a new user
POST	/api/login	Login a user & get token
GET	/api/scores	Get leaderboard (Admin)
📌 Dependencies
🔹 Backend Dependencies
json
Copy
Edit
"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^6.10.1",
  "dotenv": "^16.0.3",
  "cors": "^2.8.5",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.0"
}
🔹 Frontend Dependencies
json
Copy
Edit
"dependencies": {
  "react": "^18.2.0",
  "react-router-dom": "^6.10.0",
  "axios": "^1.6.0"
}
🌍 Deploying to Production (Optional)
🔹 Deploy Backend on Render
Push your code to GitHub.
Go to Render → Click "New Web Service" → Select your repo.
Set Build Command: npm install
Set Start Command: node server.js
Add Environment Variables (MONGO_URI, JWT_SECRET, PORT)
Deploy and copy the live API URL.
🔹 Deploy Frontend on Netlify
Push your frontend code to GitHub.
Go to Netlify → Click "New Site" → Import from GitHub.
Set Build Command: npm run build
Set Publish Directory: frontend/build
Deploy and copy the live website URL.
🚀 Now Your App is Live!
🎉 Backend API → https://quiz-app-backend.onrender.com
🎉 Frontend Website → https://quiz-app.netlify.app

📌 Need Help?
If you have any issues, open an issue on GitHub or contact the developer.

🚀 Now Your README is Ready!
Copy-paste this into README.md, and your project is fully documented.

Let me know if you need any changes! 😊












Search

Reason
