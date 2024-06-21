import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepos = useCallback(
    async (username = "syedmaazsaeed") => {
      setLoading(true);
      try {
        // You can only 60 requests per hour
        const userRes = await fetch(
          `https://api.github.com/users/${username}`,
          {
            header: {
              authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
            },
          }
        );
        const userProfile = await userRes.json();

        setUserProfile(userProfile);

        const repoRes = await fetch(userProfile.repos_url);
        const repos = await repoRes.json();
        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // descending recent first

        setRepos(repos);
        // console.log("userProfile:", userProfile);
        // console.log("repos:", repos);
        return { userProfile, repos };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    e.preventDefault();

    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, repos } = await getUserProfileAndRepos(username);

    // console.log("repos from onSearch", repos );

    setUserProfile(userProfile);
    setRepos(repos);

    setLoading(false);
    setSortType("recent");
  };
  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // descending order, recent first
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count); // descending most stars first
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count); // descending most forks first
    }
    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />};
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {/* {repos.length > 0 && !loading && <Repos repos={repos} />} */}
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
