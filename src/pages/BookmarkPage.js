import React from "react";
import NavBar from "../components/NavBar/NavBar";

const Bookmark = () => {
  return (
    <>
      <NavBar />
      <main className="flex h-screen items-center justify-center ">
        <h1 className=" mt-8  text-heading-md text-white">No Bookmark yet</h1>
      </main>
    </>
  );
};

export default Bookmark;
