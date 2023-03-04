import { useLocation, useParams } from "react-router-dom";
import Collection from "../../components/Collection/Collection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getDiscovery } from "../../lib/api";

const MovieGenre = () => {
  //returns the id of dynamic param for the movie genre from the url
  const { id } = useParams();

  //returns the name of querry string for the movie genre from the url
  const location = useLocation();
  const querryParam = new URLSearchParams(location.search);
  const title = querryParam.get("name");

  //approach 2 to get querry string
  //   let [searchParams, setSearchParams] = useSearchParams();
  //   const title = searchParams.get("name");

  return (
    <>
      <NavBar />
      <main className="lg:ml-24">
        {" "}
        <SearchBar />
        <Collection
          isGenre
          endPoint={getDiscovery}
          id={id}
          title={title}
          type="movie"
        />
      </main>
    </>
  );
};

export default MovieGenre;
