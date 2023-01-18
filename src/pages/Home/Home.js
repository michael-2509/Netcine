import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar.js/SearchBar";
import movie from "../../assets/icon-category-movie.svg";
import tv from "../../assets/icon-category-tv.svg";
import Trending from "../../components/Trending";
import useHttp from "../../hooks/use-http";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const { sendRequest } = useHttp();

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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
        const slicedResult = results.slice(0, 10);
        console.log(results);

        setTrending(slicedResult);
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
      {loading ? (
        <p>loading</p>
      ) : (
        <section className="px-4 text-white">
          <p className="text-xl font-light">Trending </p>
          <div className=" flex gap-4 overflow-x-scroll">
            {trending.map((data) => (
              <div
              // style={{
              //   backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
              //   backgroundSize: "cover",
              // }}
              >
                <img
                  className="h-[140px] w-60 max-w-none rounded-lg "
                  src={`${"https://image.tmdb.org/t/p/w500/"}${
                    data.backdrop_path
                  }`}
                  alt="images"
                />
                <article className="relative bottom-16 left-2">
                  <div>
                    <div className="flex items-center ">
                      {" "}
                      <p className="pr-4 text-xs font-light opacity-75">
                        {data.release_date || data.first_air_date}
                      </p>
                      <div className=" flex items-center gap-4  before:content-['•']">
                        {data.media_type === "movie" ? (
                          <img src={movie} alt="movies" />
                        ) : (
                          <img src={tv} alt="tvShow " />
                        )}
                        <p className="text-xs font-light opacity-75">
                          {data.media_type}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-medium">
                      {data.original_title || data.original_name}
                    </p>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>
      )}
      <Trending type={Trending} />
    </>
  );
};

export default Home;
