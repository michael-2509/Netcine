import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrend = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/all/day?api_key=e771c8f2e777b71534e7f5feb2c49c8a"
        );

        if (!response.ok) {
          throw new Error("No trending movies");
        }

        const data = await response.json();
        const { results } = data;
        console.log(results);

        setTrending(results);
        setLoading(false);
      } catch {
        console.log("error");
      }
    };
    getTrend();
  }, []);

  return (
    <>
      <NavBar />
      <SearchBar />
      {Array.isArray(trending) ? (
        <section className="px-4 text-white">
          <p>Trending </p>
          {trending.map((data) => (
            <div>
              <img
                src={`${"https://image.tmdb.org/t/p/w500/"}${
                  data.backdrop_path
                }`}
                alt="images"
              />
              <p>{data.release_date}</p>
              <p>{data.media_type}</p>
              <p>{data.original_title}</p>
            </div>
          ))}
        </section>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default Home;
