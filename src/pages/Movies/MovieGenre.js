import Collection from "../../components/Collection/Collection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getDiscovery } from "../../lib/api";

const MovieGenre = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Collection isGenre endPoint={getDiscovery} />
    </>
  );
};

export default MovieGenre;
