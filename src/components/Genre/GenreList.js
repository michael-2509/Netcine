import { Link } from "react-router-dom";
import GenreItem from "./GenreItem";

const GenreList = ({ data, media_type }) => {
  return (
    <section className="px-4 ">
      <h2 className="heading-sm m-auto w-[90%] pb-4 text-white">Genres</h2>
      <section className=" m-auto grid w-[90%] grid-cols-2 md:grid-cols-3">
        {" "}
        {data.map((item, index) => (
          <Link to={`/${media_type}/genre/${item.id}?name=${item.name}`}>
            <GenreItem key={index} name={item.name} />
          </Link>
        ))}
      </section>
    </section>
  );
};

export default GenreList;
