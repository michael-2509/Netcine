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
      <nav
        className="flex justify-between rounded-2xl bg-semi-dark-blue
       py-5 px-4 lg:fixed lg:left-8 lg:mt-[5%] lg:h-[90%]
       lg:w-24 lg:flex-col lg:items-center"
      >
        <NavLink to="/">
          <img src={logo} alt="logo" className="lg:pt-8" />
        </NavLink>

        <div className="flex gap-5 lg:absolute lg:top-36 lg:flex-col lg:gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "activeClass " : "hover:hoverState"
            }
          >
            <img src={home} alt="home" />
          </NavLink>
          <NavLink
            to="/movie"
            className={({ isActive }) =>
              isActive ? "activeClass" : "hover:hoverState"
            }
          >
            {" "}
            <img fill="red" src={movies} alt="movies" />
          </NavLink>
          <NavLink
            to="/tv"
            className={({ isActive }) =>
              isActive ? "activeClass" : "hover:hoverState"
            }
          >
            <img src={tvseries} alt="tvseries" />
          </NavLink>
          <NavLink
            to="/bookmark"
            className={({ isActive }) =>
              isActive ? "activeClass" : "hover:hoverState"
            }
          >
            <img src={bookmark} alt="bookmark" />
          </NavLink>
        </div>

        <div>
          <img className="w-6" src={avatar} alt="" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;

// const isActive = (isActive) => {
//   return (isActive) => (isActive ? "activeClassName" : undefined);
// };
