import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";

const TVshow = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <p className="text-white">No movies to watch</p>
    </>
  );
};

export default TVshow;
