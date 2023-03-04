import VideoCollection from "../../components/VideoCollection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getTrending } from "../../lib/api";

const Trending = () => {
  return (
    <>
      <NavBar />

      <main className="lg:ml-24">
        <SearchBar />
        <VideoCollection endPoint={getTrending} title="Trending" type="movie" />
      </main>
    </>
  );
};

export default Trending;
