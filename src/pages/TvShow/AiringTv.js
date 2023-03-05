import VideoCollection from "../../components/VideoCollection";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getOntheAir } from "../../lib/api";

const AiringTv = () => {
  return (
    <>
      <NavBar />
      <main className="lg:ml-32">
        <SearchBar />
        <VideoCollection endPoint={getOntheAir} title="On the Air" type="tv" />
      </main>
    </>
  );
};

export default AiringTv;
