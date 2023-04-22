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
      <main className="lg:ml-32">
        {" "}
        <SearchBar />
        <h1 className="px-4 text-heading-sm font-light text-white">
          {" "}
          Found results found for &quot;{title}&quot;
        </h1>
        <Collection endPoint={getSearch} search={title} />
      </main>
    </>
  );
};

export default SearchPage;
