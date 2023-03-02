import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import searchIcon from "../../assets/icon-search.svg";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/all/${search}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-4 px-4 py-6"
      >
        <img src={searchIcon} alt="search icon" />
        <input
          value={search}
          onChange={searchChangeHandler}
          className=" text-base  w-full bg-dark-blue text-white opacity-50 outline-none focus:border-b-2 focus:border-gray-blue focus:opacity-100 md:text-heading-md"
          placeholder="search for movies or TV series"
        />
      </form>
    </>
  );
};

export default SearchBar;
