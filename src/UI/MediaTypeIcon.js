import moviesIcon from "../assets/icon-nav-movies.svg";
import tvIcon from "../assets/icon-nav-tv-series.svg";

const MediaTypeIcon = ({ type }) => {
  return (
    <>
      {type === "movie" ? <img src={moviesIcon} alt="movies icon" /> : ""}
      {type === "tv" ? <img src={tvIcon} alt="tv icon" /> : ""}
      {type === "both" ? (
        <>
          <img src={moviesIcon} alt="movies icon" />{" "}
          <img src={tvIcon} alt="tv icon" />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MediaTypeIcon;
