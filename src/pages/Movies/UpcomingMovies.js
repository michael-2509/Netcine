import VideoCollection from "../../components/VideoCollection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getUpcomingMovies } from "../../lib/api";

const UpcomingMovies = () => {
  return (
    <>
      <NavBar />
      <main className="lg:ml-32">
        {" "}
        <SearchBar />
        <VideoCollection
          endPoint={getUpcomingMovies}
          title="Up Coming Movies"
          type="movie"
        />
      </main>
    </>
  );
};

export default UpcomingMovies;
