import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar.js/SearchBar";
import useHttp from "../../hooks/use-http";
import { getDetails } from "../../lib/api";

import InfoList from "./InfoList";

const Info = () => {
  const params = useParams();
  const { sendRequest, status, data, error } = useHttp(getDetails, true);
  const movie = "movie";
  const { id } = params;

  console.log(data);

  useEffect(() => {
    sendRequest(movie, id);
  }, [sendRequest, movie, id]);

  if (status === "pending") {
    return <p className="text-white">E dey Load, calm down</p>;
  }

  if (error) {
    return <p className="text-white">{error} </p>;
  }

  if (status === "complete" && data === null) {
    return <p>No data avaialable now</p>;
  }
  return (
    <>
      <NavBar />
      {/* <SearchBar /> */}
      <InfoList data={data} />
    </>
  );
};

export default Info;
