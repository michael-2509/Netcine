import Genre from "../../components/Genre/Genre";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import { getGenre } from "../../lib/api";

const TVshow = () => {
  return (
    <>
      <NavBar />
      <main className="lg:ml-24">
        <SearchBar />
        <Genre endpoint={getGenre} media_type="tv" />
      </main>
    </>
  );
};

export default TVshow;
