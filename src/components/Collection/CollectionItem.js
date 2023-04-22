import { Link } from "react-router-dom";
import movie from "../../assets/icon-category-movie.svg";
import tv from "../../assets/icon-category-tv.svg";

const CollectionItem = ({
  id,
  image,
  media_type,
  title,
  type,
  year,
  isTrending,
}) => {
  return (
    <>
      <article className="relative mb-4">
        <div>
          <Link to={`/${media_type || type}/${id}`}>
            <img
              className={
                isTrending
                  ? " h-[140px] w-60 max-w-none rounded-lg object-cover opacity-50 md:h-[230px] md:w-[470px]"
                  : "h-[110px] w-full max-w-full rounded-lg object-cover md:h-[140px]  lg:h-[200px] lg:w-[400px] "
              }
              src={`${"https://image.tmdb.org/t/p/w500/"}${image}`}
              alt="images"
            />
          </Link>
          <div className={isTrending ? "absolute bottom-4 left-2" : ""}>
            <div>
              <div className="flex items-center ">
                {" "}
                {year && (
                  <p className="text-xs pr-4 font-light opacity-75">
                    {year.slice(0, 4)}
                  </p>
                )}
                <div className=" flex items-center gap-2  before:content-['•']">
                  {(media_type || type) === "movie" ? (
                    <div className="flex items-center gap-2">
                      <img src={movie} alt="movies" />
                      <p className="text-xs font-light opacity-75">Movie</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <img src={tv} alt="tvShow " />
                      <p className="text-xs font-light opacity-75">TV</p>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-body-md font-medium md:text-heading-xs">
                {title}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default CollectionItem;
