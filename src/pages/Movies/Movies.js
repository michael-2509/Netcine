import Genre from "../../components/Genre/Genre";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getGenre } from "../../lib/api";

const MoviesPage = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Genre endpoint={getGenre} />
    </>
  );
};

export default MoviesPage;
