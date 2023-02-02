import Collection from "../../components/Collection/Collection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getPopularMovies } from "../../lib/api";

const PopularTv = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Collection
        endPoint={getPopularMovies}
        title="Popular Movies"
        type="tv"
      />
    </>
  );
};

export default PopularTv;
