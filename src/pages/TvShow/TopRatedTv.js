import VideoCollection from "../../components/VideoCollection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getTopRatedMovies } from "../../lib/api";

const TopRatedTv = () => {
  return (
    <>
      <NavBar />
      <main className="lg:ml-24">
        {" "}
        <SearchBar />
        <VideoCollection
          endPoint={getTopRatedMovies}
          title="Top Rated TV"
          type="tv"
        />
      </main>
    </>
  );
};

export default TopRatedTv;
