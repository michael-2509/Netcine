import VideoCollection from "../../components/VideoCollection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getTopRatedMovies } from "../../lib/api";

const TopRatedMovies = () => {
  return (
    <>
      <NavBar />
      <main className="lg:ml-32">
        {" "}
        <SearchBar />
        <VideoCollection
          endPoint={getTopRatedMovies}
          title="Top Rated Movies"
          type="movie"
        />
      </main>
    </>
  );
};

export default TopRatedMovies;
