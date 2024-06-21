import { useState } from "react"; // Importing useState hook from React
import Spinner from "../components/Spinner"; // Importing Spinner component
import Repos from "../components/Repos"; // Importing Repos component
import { toast } from "react-hot-toast"; // Importing toast for notifications

const ExplorePage = () => {
  const [loading, setLoading] = useState(false); // State for loading status
  const [repos, setRepos] = useState([]); // State for storing fetched repositories
  const [selectedLanguage, setSelectedLanguage] = useState(""); // State for selected language

  // Function to fetch repositories based on the selected language
  const exploreRepos = async (language) => {
    setLoading(true); // Set loading to true when fetching starts
    setRepos([]); // Clear previous repositories

    try {
      // Fetching repositories from GitHub API(Application Programming Interface)
      const res = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
        {
          headers: {
            authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`, // Adding authorization token
          },
        }
      );
      const data = await res.json(); // Parsing response to JSON
      setRepos(data.items); // Setting fetched repositories to state
      setSelectedLanguage(language); // Setting the selected language
    } catch (error) {
      toast.error(error.message); // Display error message using toast
    } finally {
      setLoading(false); // Set loading to false when fetching completes
    }
  };

  return (
    <div className="px-4"> {/* Container padding */}
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4"> {/* Glass effect background container */}
        <h1 className="text-xl font-bold text-center">
          Explore Well-Known Repositories {/* Page title */}
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center"> {/* Container for language icons */}
          <img
            src="/html.svg"
            alt="html logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("html")} // Fetch HTML repositories on click
          />
          <img
            src="/css.svg"
            alt="css logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("css")} // Fetch CSS repositories on click
          />
          <img
            src="/javascript.svg"
            alt="JavaScript logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("javascript")} // Fetch JavaScript repositories on click
          />
          <img
            src="/typescript.svg"
            alt="TypeScript logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("typescript")} // Fetch TypeScript repositories on click
          />
          {/* <img
            src="/c++.svg"
            alt="C++ logo"
            className="h-11 sm:h-20 cursor-pointer"
          /> */}
          <img
            src="/python.svg"
            alt="Python logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("python")} // Fetch Python repositories on click
          />
          <img
            src="/java.svg"
            alt="Java logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("java")} // Fetch Java repositories on click
          />
          <img
            src="/flutter.svg"
            alt="flutter logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("dart")} // Fetch Dart (Flutter) repositories on click
          />
        </div>
        {repos.length > 0 && (
          <h2 className="text-lg font-semibold text-center my-4">
            <span className="bg-purple-100 text-purple-800 font-medium me-2 px-2.5 py-0.5 rounded-full ">
              {selectedLanguage.toUpperCase()} {/* Display selected language */}
            </span>
            Repositories {/* Subtitle */}
          </h2>
        )}
        {!loading && repos.length > 0 && (
          <Repos repos={repos} alwaysFullWidth /> // Display repositories when not loading
        )}
        {loading && <Spinner />} {/* Display spinner when loading */}
      </div>
    </div>
  );
};

export default ExplorePage; // Exporting ExplorePage component
