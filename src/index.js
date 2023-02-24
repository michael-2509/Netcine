import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import MoviesPage from "./pages/Movies/Movies";
import TvPage from "./pages/TvShow/TvShow";
import MovieGenre from "./pages/Movies/MovieGenre";
import TvGenre from "./pages/TvShow/TvGenre";
import PopularMovies from "./pages/Movies/PopularMovies";
import TopRatedMovies from "./pages/Movies/TopRatedMovies";
import UpcomingMovies from "./pages/Movies/UpcomingMovies";
import PopularTv from "./pages/TvShow/PopularTv";
import TopRatedTv from "./pages/TvShow/TopRatedTv";
import AiringTv from "./pages/TvShow/AiringTv";
import Info from "./components/Info/Info";
import SearchPage from "./pages/SearchPage";
import Trending from "./pages/Movies/Trending";
import Bookmark from "./pages/BookmarkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie",
    element: <MoviesPage />,
  },
  {
    path: "/both/trending",
    element: <Trending />,
  },
  {
    path: "/movie/popular",
    element: <PopularMovies />,
  },
  {
    path: "/movie/toprated",
    element: <TopRatedMovies />,
  },
  {
    path: "/movie/upcoming",
    element: <UpcomingMovies />,
  },
  {
    path: "/movie/genre/:id",
    element: <MovieGenre />,
  },
  { path: "/movie/:id", element: <Info /> },
  {
    path: "/tv",
    element: <TvPage />,
  },
  {
    path: "/tv/popular",
    element: <PopularTv />,
  },
  {
    path: "/tv/toprated",
    element: <TopRatedTv />,
  },
  {
    path: "/tv/airing",
    element: <AiringTv />,
  },
  {
    path: "/tv/genre/:id",
    element: <TvGenre />,
  },

  {
    path: "/bookmark",
    element: <Bookmark />,
  },
  {
    path: "/search/all/:title",
    element: <SearchPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
