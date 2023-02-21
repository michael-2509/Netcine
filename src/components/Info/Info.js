import React, { useEffect } from "react";

import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar.js/SearchBar";
import useHttp from "../../hooks/use-http";
import { getDetails } from "../../lib/api";

import InfoList from "./InfoList";

const Info = () => {
  const { sendRequest, status, data, error } = useHttp(getDetails, true);
  const movie = "movie";
  const id = 640146;

  useEffect(() => {
    sendRequest(movie, id);
  }, [sendRequest, movie, id]);

  console.log(status);
  console.log(error);
  console.log(data);

  return (
    <>
      <NavBar />
      <SearchBar />
      <InfoList />
    </>
  );
};

export default Info;
