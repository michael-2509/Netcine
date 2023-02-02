import Header from "../Header";
import CollectionItem from "./CollectionItem";

const CollectionList = ({ data, isHomePage, isTrending, title, type }) => {
  return (
    <>
      <section className="mb-5 px-4 text-white ">
        <Header type={type} title={title} isHomePage={isHomePage} />

        <section
          className={
            isTrending
              ? "h-scroll flex gap-4 overflow-x-scroll"
              : "grid grid-cols-2 gap-x-4"
          }
        >
          {data.map((item, i) => (
            <>
              <CollectionItem
                key={item.id}
                isTrending={isTrending}
                image={item.backdrop_path || item.poster_path}
                media_type={item.media_type}
                title={item.original_title || item.original_name}
                year={item.release_date || item.first_air_date}
                type={type}
              />
            </>
          ))}
        </section>
      </section>
    </>
  );
};

export default CollectionList;
