import Collection from "../../components/Collection/Collection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getTopRatedMovies } from "../../lib/api";

const TopRatedTv = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Collection
        endPoint={getTopRatedMovies}
        title="Popular Movies"
        type="tv"
      />
    </>
  );
};

export default TopRatedTv;
