import React from "react";
import useGlobalStore from "../../Data/globalStore";
import fetchUserData from "../../utils/fetchGithubData";
import fetchRepoData from "../../utils/fetchRepoData";

const SearchButton = () => {
  const userInput = useGlobalStore((state) => state.userInput);
  const setUserInfo = useGlobalStore((state) => state.setUserInfo);
  const setUserRepoInfo = useGlobalStore((state) => state.setUserRepoInfo);
  const userInfo = useGlobalStore((state) => state.userInfo);

  const handleClick = async () => {
    // Fetch UserData using the input
    const userData = await fetchUserData(userInput);
    setUserInfo(userData);
    console.log(userData);
    const userRepoData = await fetchRepoData(userInput);
    setUserRepoInfo(userRepoData);
    console.log(userRepoData);

    // set User Data fetched
  };

  return (
    <button
      className="bg-blue-400 rounded-[10px] px-2 py-1 text-xl text-white hover: cursor-pointer"
      onClick={handleClick}
    >
      Search
    </button>
  );
};

export default SearchButton;
