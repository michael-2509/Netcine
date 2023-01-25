import { Link } from "react-router-dom";
import TrendingItem from "./TrendingItem";

const TrendingList = ({ data, title, isTrending, isHomePage }) => {
  const slicedData = data.slice(0, 10);

  return (
    <>
      <section className="px-4 text-white">
        <div className="flex justify-between">
          {" "}
          <h2 className="text-xl font-light text-white">{title}</h2>
          <Link to="/">See More</Link>
        </div>

        <div
          className={
            isTrending ? "flex gap-4 overflow-x-scroll" : "grid grid-cols-2 "
          }
        >
          {slicedData.map((item) => (
            <TrendingItem
              isTrending={isTrending}
              key={item.id}
              image={item.backdrop_path}
              media_type={item.media_type}
              title={item.original_title || item.original_name}
              year={item.realease_year || item.air_on_first}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TrendingList;
