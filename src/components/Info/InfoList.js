import React from "react";
import { slicedArray } from "../../utils/index";

const InfoList = ({ data }) => {
  const {
    title,
    release_date,
    runtime,
    backdrop_path,
    overview,
    genres,
    credits,
  } = data;

  const { cast, crew } = credits;
  console.log(crew);

  // use map object to iterate over genres
  //   const genreList = new Map(genres);
  //   console.log(genreList);
  return (
    <>
      <section className="border-b-2 border-white">
        <h1 className="text-4xl text-center text-white">{`${title}`}</h1>
        <p className="text-4xl text-center text-white">{`${release_date}`}</p>
        <p className="text-4xl text-center text-white">{`${runtime}`}</p>
      </section>
      <section className="border-b-2 border-white">
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={`${title}`}
        />
        <p className="text-white">{`${genres.map(({ name }) => {
          return name;
        })}`}</p>
        <p className="text-white">{`${overview}`}</p>
      </section>
      <section className="border-b-2 border-white">
        <p>CAST</p>
        <p className="text-white">
          {cast.map(({ name }) => {
            return name;
          })}
        </p>
        <p className="text-white">Director</p>
        <p className="text-white">
          {" "}
          {crew.map(({ name }) => {
            return name;
          })}
        </p>
      </section>
    </>
  );
};

export default InfoList;
