import { Link } from "react-router-dom";
import GenreItem from "./GenreItem";

const GenreList = ({ data, media_type }) => {
  return (
    <section className="px-4 ">
      <h2 className="heading-sm pb-4 text-white">Genres</h2>
      <section className="grid grid-cols-2">
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
