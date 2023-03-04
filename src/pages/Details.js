import React from "react";
import Info from "../components/Info/Info";
import NavBar from "../components/NavBar/NavBar";
import { getDetails } from "../lib/api";

const Details = () => {
  return (
    <>
      <NavBar />
      <main className="lg:ml-24">
        <Info endpoint={getDetails} />
      </main>
    </>
  );
};

export default Details;
