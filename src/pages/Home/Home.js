import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import Collection from "../../components/Collection/Collection";
import {
  getTrending,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getOntheAir,
} from "../../lib/api";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="lg:ml-32">
        <SearchBar />
        <Collection
          isTrending
          isHomePage
          category="trending"
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
          endPoint={getPopularMovies}
          title="Popular"
          type="tv"
        />
        <Collection
          isHomePage
          category="toprated"
          endPoint={getTopRatedMovies}
          title="Top Rated"
          type="movie"
        />
        <Collection
          isHomePage
          category="toprated"
          endPoint={getTopRatedMovies}
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
          category="airing"
          endPoint={getOntheAir}
          title="On the Air"
          type="tv"
        />
      </main>
    </>
  );
};

export default Home;
