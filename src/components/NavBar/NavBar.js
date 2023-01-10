import React from "react";

import logo from "../../assets/logo.svg";
import home from "../../assets/icon-nav-home.svg";
import movies from "../../assets/icon-nav-movies.svg";
import tvseries from "../../assets/icon-nav-tv-series.svg";
import bookmark from "../../assets/icon-nav-bookmark.svg";
import avatar from "../../assets/image-avatar.png";

const NavBar = () => {
  return (
    <>
      <section className="flex justify-between bg-semi-dark-blue py-5 px-4">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="flex  gap-5">
          <div>
            <img src={home} alt="home" />
          </div>
          <div>
            <img src={movies} alt="movies" />
          </div>
          <div>
            <img src={tvseries} alt="tvseries" />
          </div>
          <div>
            <img src={bookmark} alt="bookmark" />
          </div>
        </div>

        <div>
          <img className="w-6" src={avatar} alt="" />
        </div>
      </section>
    </>
  );
};

export default NavBar;
