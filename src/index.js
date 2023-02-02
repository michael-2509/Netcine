import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import MoviesPage from "./pages/Movies/Movies";
import TVshow from "./pages/TvSeries/TvSeries";
import MovieGenre from "./pages/Movies/MovieGenre";

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
    path: "/movies/genre/:id",
    element: <MovieGenre />,
  },
  {
    path: "/tv",
    element: <TVshow />,
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
