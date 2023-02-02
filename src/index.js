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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
    // children: [{ path: "/movies/genre", element: <MovieGenre /> }],
  },
  {
    path: "/movie/genre/:id",
    element: <MovieGenre />,
  },
  {
    path: "/tv",
    element: <TvPage />,
  },
  {
    path: "/tv/genre/:id",
    element: <TvGenre />,
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
