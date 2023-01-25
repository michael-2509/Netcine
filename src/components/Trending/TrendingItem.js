import movie from "../../assets/icon-category-movie.svg";
import tv from "../../assets/icon-category-tv.svg";

const Trending = ({ image, media_type, title, year, isTrending }) => {
  return (
    <>
      <section>
        <div>
          <img
            className={
              isTrending
                ? " h-[140px] w-60 max-w-none rounded-lg object-cover"
                : "h-[110px] w-[164px] max-w-none rounded-lg object-cover"
            }
            src={`${"https://image.tmdb.org/t/p/w500/"}${image}`}
            alt="images"
          />
          <article className={isTrending ? "relative bottom-16 left-2" : ""}>
            <div>
              <div className="flex items-center ">
                {" "}
                <p className="pr-4 text-xs font-light opacity-75">{year}</p>
                <div className=" flex items-center gap-4  before:content-['•']">
                  {media_type === "movie" ? (
                    <img src={movie} alt="movies" />
                  ) : (
                    <img src={tv} alt="tvShow " />
                  )}
                  <p className="text-xs font-light opacity-75">{media_type}</p>
                </div>
              </div>
              <p className="text-sm font-medium">{title}</p>
            </div>
            <div>
              <p></p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Trending;
