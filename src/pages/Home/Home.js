import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import Collection from "../../components/Collection/Collection";
import {
  getTrending,
  getPopularMovies,
  getPopularTV,
  getTopRatedMovies,
  getTopRatedTv,
  getUpcomingMovies,
  getOntheAir,
} from "../../lib/api";
import { SkeletonTheme } from "react-loading-skeleton";

const Home = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <NavBar />
      <SearchBar />
      <Collection
        isTrending
        isHomePage
        endPoint={getTrending}
        title="Trending"
        type="both"
      />
      <Collection
        isHomePage
        category="popular"
        endPoint={getPopularMovies}
        title="Popular"
        type="movie"
      />
      <Collection
        isHomePage
        category="popular"
        endPoint={getPopularTV}
        title="Popular"
        type="tv"
      />
      <Collection
        isHomePage
        category="top rated"
        endPoint={getTopRatedMovies}
        title="Top Rated"
        type="movie"
      />
      <Collection
        isHomePage
        category="top rated"
        endPoint={getTopRatedTv}
        title="Top Rated"
        type="tv"
      />
      <Collection
        isHomePage
        category="upcoming"
        endPoint={getUpcomingMovies}
        title="Upcoming"
        type="movie"
      />
      <Collection
        isHomePage
        category="On the Air"
        endPoint={getOntheAir}
        title="On the Air"
        type="tv"
      />
    </SkeletonTheme>
  );
};

export default Home;
