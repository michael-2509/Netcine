import Collection from "../../components/Collection/Collection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getUpcomingMovies } from "../../lib/api";

const UpcomingMovies = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Collection
        endPoint={getUpcomingMovies}
        title="Up Coming Movies"
        type="movie"
      />
    </>
  );
};

export default UpcomingMovies;
