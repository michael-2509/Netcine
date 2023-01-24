import { Link } from "react-router-dom";
import TrendingItem from "./TrendingItem";

const TrendingList = ({ data, title }) => {
  return (
    <>
      <section className="px-4 text-white">
        <div className="flex justify-between">
          {" "}
          <h2 className="text-xl font-light text-white">{title}</h2>
          <Link to="/">See More</Link>
        </div>

        <div className=" flex gap-4 overflow-x-scroll">
          {data.map((item) => (
            <TrendingItem
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
