import React from "react";
import useGlobalStore from "../../Data/globalStore";

const SearchBar = () => {
  const setUserInput = useGlobalStore((state) => state.setUserInput);
  const userInput = useGlobalStore((state) => state.userInput)

  return (
    <input
      className="border border-gray-600 rounded-[10px] px-5 py-2"
      type="text"
      placeholder="Search Username"
      onChange={(e) => {
        setUserInput(e.target.value)
        console.log(e.target.value)  
      }}
    />
  );
};

export default SearchBar;
