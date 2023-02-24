import React from "react";
import Info from "../components/Info/Info";
import NavBar from "../components/NavBar/NavBar";
import { getDetails } from "../lib/api";

const Details = () => {
  return (
    <>
      <NavBar />
      <Info endpoint={getDetails} />
    </>
  );
};

export default Details;
