import VideoCollection from "../../components/VideoCollection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getPopularMovies } from "../../lib/api";

const PopularMovies = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <VideoCollection
        endPoint={getPopularMovies}
        title="Popular Movies"
        type="movie"
      />
    </>
  );
};

export default PopularMovies;
