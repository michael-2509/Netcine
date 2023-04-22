import { useLocation, useParams } from "react-router-dom";
import Collection from "../../components/Collection/Collection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getDiscovery } from "../../lib/api";

const TvGenre = () => {
  //returns the id of dynamic param for the tv show genre from the url
  const { id } = useParams();

  //returns the name of querry string for the tv show genre from the url
  const location = useLocation();
  const querryParam = new URLSearchParams(location.search);
  const title = querryParam.get("name");

  return (
    <>
      <NavBar />
      <main className="lg:ml-24">
        <SearchBar />
        <Collection
          isGenre
          endPoint={getDiscovery}
          id={id}
          type="tv"
          title={title}
        />
      </main>
    </>
  );
};

export default TvGenre;
