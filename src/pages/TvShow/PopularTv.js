import VideoCollection from "../../components/VideoCollection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getPopularMovies } from "../../lib/api";

const PopularTv = () => {
  return (
    <>
      <NavBar />
      <main className="lg:ml-32">
        <SearchBar />
        <VideoCollection
          endPoint={getPopularMovies}
          title="Popular TV"
          type="tv"
        />
      </main>
    </>
  );
};

export default PopularTv;
