import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import Trending from "../../components/Trending/Trending";
import {
  getTrending,
  getPopularMovies,
  getPopularTV,
  getTopRatedMovies,
  getTopRatedTv,
  getUpcomingMovies,
  getOntheAir,
} from "../../lib/api";

const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Trending isTrending endPoint={getTrending} title="Trending" />
      <Trending
        isHomePage
        category="popular"
        endPoint={getPopularMovies}
        title="Popular"
        type="movie"
      />
      <Trending
        isHomePage
        category="popular"
        endPoint={getPopularTV}
        title="Popular"
        type="tv"
      />
      <Trending
        isHomePage
        category="top rated"
        endPoint={getTopRatedMovies}
        title="Top Rated"
        type="movie"
      />
      <Trending
        isHomePage
        category="top rated"
        endPoint={getTopRatedTv}
        title="Top Rated"
        type="tv"
      />
      <Trending
        isHomePage
        category="upcoming"
        endPoint={getUpcomingMovies}
        title="Upcoming"
        type="movie"
      />
      <Trending
        isHomePage
        category="On the Air"
        endPoint={getOntheAir}
        title="On the Air"
        type="tv"
      />
    </>
  );
};

export default Home;
