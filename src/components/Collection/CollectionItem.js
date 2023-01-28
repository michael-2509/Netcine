import movie from "../../assets/icon-category-movie.svg";
import tv from "../../assets/icon-category-tv.svg";

const CollectionItem = ({ image, media_type, title, year, isTrending }) => {
  return (
    <>
      <article className="mb-5">
        <div>
          <img
            className={
              isTrending
                ? " h-[140px] w-60 max-w-none rounded-lg object-cover opacity-50 "
                : "h-[110px]  max-w-full rounded-lg object-cover"
            }
            src={`${"https://image.tmdb.org/t/p/w500/"}${image}`}
            alt="images"
          />
          <div className={isTrending ? "relative bottom-16 left-2" : ""}>
            <div>
              <div className="flex items-center ">
                {" "}
                <p className="pr-4 text-xs font-light opacity-75">
                  {year.slice(0, 4)}
                </p>
                <div className=" flex items-center gap-2  before:content-['•']">
                  {media_type === "movie" ? (
                    <div className="flex items-center gap-2">
                      <img src={movie} alt="movies" />
                      <p className="text-xs font-light opacity-75">Movies</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <img src={tv} alt="tvShow " />
                      <p className="text-xs font-light opacity-75">TV</p>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-sm font-medium">{title}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default CollectionItem;
