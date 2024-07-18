<h1 align="center">Github CodeSource App 🚀</h1>
<p align="center">
  <img src="link/to/your/logo.png" alt="Github CodeSource App Logo" width="200">
</p>
<p align="center">
  Explore GitHub repositories and manage user profiles effortlessly!
</p>

<h1 align="center">🌟 Features 🤖</h1>

Explore Popular Repositories 📊
Discover trending repositories based on programming languages.
User Profile Management 🧑‍💻
View detailed user profiles and their repositories.
Like and manage liked profiles seamlessly.


<h1 align="center">🛠️ Technologies Used 🕵🏻</h1>

<h1>Frontend 🌈 </h1>

React - A powerful JavaScript library for building user interfaces.

Redux (optional) - State management for React applications.

HTML5, CSS3, JavaScript - Frontend essentials for structure, style, and interactivity.

<h1>Backend 💻 🚀</h1>

Node.js - A runtime environment for executing JavaScript on the server side.

Express.js - Fast, unopinionated, minimalist web framework for Node.js.

MongoDB - A NoSQL database for storing application data.

Passport.js - Authentication middleware for Node.js, integrating with GitHub OAuth.

GitHub API - Integration for fetching repository and user data.

<h1 align="center">🚀 Getting Started 🧑‍💻</h1>

<h1> Prerequisites </h1>

Node.js and npm are installed on your system.

MongoDB database connection string.

GitHub OAuth credentials (Client ID, Client Secret, API Key).

<h1 align="center">Installation 🌐 </h1>

<h1>Clone the repository:♨️ </h1>

git clone https://github.com/syedmaazsaeed/github-codesource-app.git

cd github-codesource-app

<h1>Install dependencies: ⚛</h1>

npm install

<h1>Set up environment variables: </h1>

Create a .env file in the root directory.

<h1>Add the following environment variables: </h1>

PORT=5000
CLIENT_BASE_URL=http://localhost:3000   # frontend URL
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_API_KEY=your_github_api_key
MONGO_URI=your_mongodb_connection_string

<h1> Start the server: </h1>

npm run dev

<h1>Start the frontend (if separate): </h1>

Navigate to your frontend directory.

Start the frontend server.

<h2>Access the application: </h2>

Open http://localhost:3000 in your favorite browser.

<h1>📡 API Endpoints </h1>

<h1>Explore Repositories: </h1>

GET /api/explore/repos/:language

<h1>User Profiles: </h1>

GET /api/users/profile/:username
POST /api/users/like/:username
GET /api/users/likes

<h1 align="center">🤝 Contributing 👨🏿‍💻 </h1>

Contributions are welcome! Fork the repository and submit a pull request with your enhancements.
