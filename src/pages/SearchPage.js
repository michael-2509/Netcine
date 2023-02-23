import React from "react";
import { useParams } from "react-router-dom";

import Collection from "../components/Collection/Collection";
import { getSearch } from "../lib/api";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar.js/SearchBar";

const SearchPage = () => {
  const { title } = useParams();

  return (
    <>
      <NavBar />
      <SearchBar />
      <h1 className="text-heading-sm text-white">
        {" "}
        Found 20 results found for "{title}"
      </h1>
      <Collection endPoint={getSearch} search={title} />
    </>
  );
};

export default SearchPage;
