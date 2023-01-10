import React from "react";

import searchIcon from "../../assets/icon-search.svg";

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center gap-4 px-4 py-6">
        <img src={searchIcon} alt="search icon" />
        <input
          className=" w-full  bg-dark-blue text-base text-white opacity-50 outline-none focus:border-b-2 focus:border-gray-blue focus:opacity-100"
          placeholder="search for movies or TV series"
        />
      </div>
    </>
  );
};

export default SearchBar;
