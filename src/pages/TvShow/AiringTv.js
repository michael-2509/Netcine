import Collection from "../../components/Collection/Collection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getOntheAir } from "../../lib/api";

const AiringTv = () => {
  console.log("on the air");
  return (
    <>
      <NavBar />
      <SearchBar />
      <Collection endPoint={getOntheAir} title="On the Air" type="tv" />
    </>
  );
};

export default AiringTv;
