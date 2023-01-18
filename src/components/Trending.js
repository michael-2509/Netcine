import movie from "../assets/icon-category-movie.svg";
import tv from "../assets/icon-category-tv.svg";

const Trending = ({
  backdrop_path,
  release_date,
  first_air_date,
  media_type,
  original_name,
  original_title,
}) => {
  return (
    <>
      <section className="px-4 text-white">
        <p className="text-xl font-light">Trending </p>
        <div className=" flex gap-4 overflow-x-scroll">
          <div>
            <img
              className="h-[140px] w-60 max-w-none rounded-lg "
              src={`${"https://image.tmdb.org/t/p/w500/"}${backdrop_path}`}
              alt="images"
            />
            <article className="relative bottom-16 left-2">
              <div>
                <div className="flex items-center ">
                  {" "}
                  <p className="pr-4 text-xs font-light opacity-75">
                    {release_date || first_air_date}
                  </p>
                  <div className=" flex items-center gap-4  before:content-['•']">
                    {media_type === "movie" ? (
                      <img src={movie} alt="movies" />
                    ) : (
                      <img src={tv} alt="tvShow " />
                    )}
                    <p className="text-xs font-light opacity-75">
                      {media_type}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium">
                  {original_title || original_name}
                </p>
              </div>
              <div>
                <p></p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;
