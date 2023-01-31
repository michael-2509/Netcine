import GenreItem from "./GenreItem";

const GenreList = ({ data }) => {
  return (
    <section className="px-4 ">
      <h2 className="heading-sm pb-4 text-white">Genres</h2>
      <section className="grid grid-cols-2">
        {" "}
        {data.map((item, i) => (
          <GenreItem key={i} name={item.name} />
        ))}
      </section>
    </section>
  );
};

export default GenreList;
