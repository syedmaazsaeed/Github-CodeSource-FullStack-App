<h1 align="center">Github CodeSource App 🚀</h1>
<p align="center">
  <img src="link/to/your/logo.png" alt="Github CodeSource App Logo" width="200">
</p>
<p align="center">
  Explore GitHub repositories and manage user profiles effortlessly!
</p>

🌟 Features
Explore Popular Repositories 📊
Discover trending repositories based on programming languages.
User Profile Management 🧑‍💻
View detailed user profiles and their repositories.
Like and manage liked profiles seamlessly.

🛠️ **Technologies Used**

**Frontend**

React - A powerful JavaScript library for building user interfaces.

Redux (optional) - State management for React applications.

HTML5, CSS3, JavaScript - Frontend essentials for structure, style, and interactivity.

**Backend**

Node.js - A runtime environment for executing JavaScript on the server side.
Express.js - Fast, unopinionated, minimalist web framework for Node.js.
MongoDB - A NoSQL database for storing application data.
Passport.js - Authentication middleware for Node.js, integrating with GitHub OAuth.
GitHub API - Integration for fetching repository and user data.


🚀 **Getting Started**

**Prerequisites**
Node.js and npm installed on your machine.
MongoDB database connection string.
GitHub OAuth credentials (Client ID, Client Secret, API Key).

**Installation**

**Clone the repository:**

git clone https://github.com/syedmaazsaeed/github-codesource-app.git
cd github-codesource-app

**Install dependencies:**

npm install

**Set up environment variables:**

Create a .env file in the root directory.

**Add the following environment variables:**

PORT=5000
CLIENT_BASE_URL=http://localhost:3000   # frontend URL
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_API_KEY=your_github_api_key
MONGO_URI=your_mongodb_connection_string


**Start the server:**

npm run dev

**Start the frontend (if separate):**

Navigate to your frontend directory.
Start the frontend server.

**Access the application:**

Open http://localhost:3000 in your favorite browser.

📡 **API Endpoints**

**Explore Repositories:**

GET /api/explore/repos/:language

**User Profiles:**

GET /api/users/profile/:username
POST /api/users/like/:username
GET /api/users/likes

🤝 **Contributing**
Contributions are welcome! Fork the repository and submit a pull request with your enhancements.



