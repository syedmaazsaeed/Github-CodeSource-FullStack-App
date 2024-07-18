<h1 align="center">Github CodeSource App 🚀</h1>
<p align="center">
  <img src="https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App/raw/main/frontend/dist/logo.png" alt="Github CodeSource App Logo" width="200">
</p>

<p align="center">
 Github CodeSource App is a cutting-edge web application designed to revolutionize your GitHub experience. With its intuitive and user-friendly interface, users can effortlessly explore and discover trending repositories based on programming languages. Dive deep into detailed user profiles and repository information, all within a streamlined and efficient platform.
</p>

<h1 align="center">🌟 Features 🤖</h1>

Explore Popular Repositories 📊: Instantly discover the most popular repositories by language, sorted by stars, forks, and more.

User Profile Management 🧑‍💻: Access in-depth user profiles, complete with repository details, commit history, and activity metrics.

Profile Liking and Management ❤️: Like your favorite profiles and manage them seamlessly, creating a personalized list of top developers.

Advanced Search & Filter 🔍: Utilize advanced search and filtering options to find exactly what you need, whether it's a specific repository or a developer with a particular skill set.

Real-Time Updates 🔄: Stay up-to-date with real-time updates on repository stats and user activities.

Interactive Visualizations 📈: Enjoy interactive visualizations of user contributions and repository statistics for deeper insights.


<h1 align="center">🛠️ Technologies Used 🕵🏻</h1>

### <h1> <b>MERN Stack 🌐</b> </h1>

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


<h1 align="center">🖼️ Screenshots 📸</h1>

<div align="center">
  <img src="https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App/blob/main/frontend/src/Images/Github-Main-Section.png" alt="Github CodeSource Main Page" style="max-width: 100%; margin-bottom: 20px;">
  
  <img src="https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App/blob/main/frontend/src/Images/Github-Login-section.png" alt="Github CodeSource LoginPage" style="max-width: 100%; margin-bottom: 20px;">
  <br>
  <img src="[path/to/screenshot3.png](https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App/blob/main/frontend/src/Images/Github-SignUp-section.png)" alt="Github CodeSource SignUp Page" style="max-width: 100%; margin-bottom: 20px;">
  <img src="[path/to/screenshot4.png](https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App/blob/main/frontend/src/Images/Github-Explore.png)" alt="Github CodeSource Explore Page" style="max-width: 100%;">
<br>
  <img src="https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App/blob/main/frontend/src/Images/Github-Likes.png" alt="Github CodeSource Likes Page" style="max-width: 100%; margin-bottom: 20px;">
</div>


<h1 align="center">Installation 🌐 </h1>

<h1>Clone the repository:♨️ </h1>

git clone https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App.git

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
