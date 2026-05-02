import React from "react";
import SearchBar from "../atoms/SearchBar";
import SearchButton from "../atoms/SearchButton";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 bg-white  py-3">
      <h2>Github User Explorer</h2>
      <div className="flex gap-2">
        <SearchBar />
        <SearchButton />
      </div>
    </div>
  );
};

export default Navbar;
