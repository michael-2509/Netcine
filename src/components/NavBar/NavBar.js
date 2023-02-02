import React from "react";

import logo from "../../assets/logo.svg";
import home from "../../assets/icon-nav-home.svg";
import movies from "../../assets/icon-nav-movies.svg";
import tvseries from "../../assets/icon-nav-tv-series.svg";
import bookmark from "../../assets/icon-nav-bookmark.svg";
import avatar from "../../assets/image-avatar.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <section className="flex justify-between bg-semi-dark-blue py-5 px-4">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="flex  gap-5">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeClass" : undefined)}
          >
            <img src={home} alt="home" className="" />
          </NavLink>
          <NavLink to="/movies">
            {" "}
            className={({ isActive }) => (isActive ? "activeClass" : undefined)}
            <img fill="red" src={movies} alt="movies" />
          </NavLink>
          <NavLink to="/tv"
           className={({ isActive }) => (isActive ? "activeClass" : undefined)}>
            <img src={tvseries} alt="tvseries" />
          </NavLink>
          <NavLink to="/bookmark"
           className={({ isActive }) => (isActive ? "activeClass" : undefined)}>
            <img src={bookmark} alt="bookmark" />
          </NavLink>
        </div>

        <div>
          <img className="w-6" src={avatar} alt="" />
        </div>
      </section>
    </>
  );
};

export default NavBar;

const isActive = (isActiveClass) => {
  return (isActiveClass) => (isActive ? "activeClassName" : undefined);
};
