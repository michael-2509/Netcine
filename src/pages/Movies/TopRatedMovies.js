import Collection from "../../components/Collection/Collection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getTopRatedMovies } from "../../lib/api";

const TopRatedMovies = () => {
  console.log("top rated");

  return (
    <>
      <NavBar />
      <SearchBar />
      <Collection
        endPoint={getTopRatedMovies}
        title="Top Rated Movies"
        type="movie"
      />
    </>
  );
};

export default TopRatedMovies;
