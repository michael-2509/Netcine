import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import Trending from "../../components/Trending/Trending";
import {
  getTrending,
  getPopularMovies,
  getPopularTV,
  // getTopRatedMovies,
  // getTopRatedTv,
} from "../../lib/api";

const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Trending isTrending endPoint={getTrending} />
      <Trending
        isHomePage
        type="movie"
        category="popular"
        endPoint={getPopularMovies}
      />
      <Trending
        isHomePage
        type="tv"
        category="popular"
        endPoint={getPopularTV}
      />
    </>
  );
};

export default Home;
