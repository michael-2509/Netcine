import React from "react";
import { Rating } from "react-simple-star-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

import { slicedArray, timeConversion } from "../../utils/index";

const InfoList = ({ data }) => {
  const {
    title,
    release_date,
    runtime,
    backdrop_path,
    overview,
    genres,
    credits,
    vote_average,
    recommendations,
  } = data;

  const year = slicedArray(release_date, 4);
  const time = timeConversion(runtime);
  const { cast, crew } = credits;
  const newCast = slicedArray(cast, 10);
  const director = crew.find((item) => item.job === "Director");
  const writer = crew.find((item) => item.job === "Writer");
  const newRating = (vote_average / 2).toFixed(1);
  const { results } = recommendations;
  console.log(newRating);

  // use map object to iterate over genres
  //   const genreList = new Map(genres);
  console.log(data);
  return (
    <>
      <section className="bg-semi-dark-blue">
        <section className=" border-white bg-dark-blue py-4 pl-4 ">
          <h1 className="text-heading-lg font-thin text-white">{title}</h1>
          <div className="flex gap-4 opacity-50">
            {" "}
            <p className=" font-thin text-white">{year}</p>
            <p className=" text-body-md font-thin  text-white">{time}</p>
          </div>
        </section>
        <section className="mb-4  bg-dark-blue">
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
            className="bg-background w-full"
          />
          <div className="border-b  border-gray-blue py-4 px-4">
            <div className="flex gap-2 pb-4 ">
              {genres.map(({ name }) => {
                return (
                  <p className="flex border border-gray-blue py-1 px-2 text-body-md font-thin text-white">
                    {name}
                  </p>
                );
              })}
            </div>
            <p className="font-thin text-white md:text-heading-xs">{`${overview}`}</p>
          </div>
          <div className="py-4 text-center">
            <p className="text-white">{newRating}</p>{" "}
            <Rating
              className="empty-icons filled-icons"
              emptyStyle={{ display: "flex" }}
              fillStyle={{ display: "-webkit-inline-box" }}
              size={50}
              iconsCount={5}
              initialValue={newRating}
              allowFraction
              emptyIcon={<FaRegStar />}
              fillIcon={<FaStar />}
              readonly
            />
          </div>
        </section>
        <section className="mb-4 bg-dark-blue py-4 px-4">
          <p className="mb-4 border-l-4  border-red pl-4 text-white">CAST</p>
          <div className="hide-scrollbar flex gap-4 overflow-x-scroll">
            {" "}
            {newCast.map(({ name, profile_path: image, character }) => {
              return (
                <article className="rounded-lg bg-semi-dark-blue">
                  {" "}
                  <img
                    className="h-60 w-40 max-w-none object-cover"
                    src={`https://image.tmdb.org/t/p/w500/${image}`}
                    alt={name}
                  />
                  <p className="px-4 pt-2 text-white">{name}</p>
                  <p className="px-4 text-body-sm font-thin text-white opacity-50">
                    {character}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="pt-4">
            <h1 className="text-white">Director</h1>
            <p className="text-body-md font-thin text-white opacity-50">
              {" "}
              {director.name}
            </p>
          </div>
          {writer && (
            <div className="pt-4">
              && <h1 className="text-white">Writer</h1>
              <p className="text-body-md font-thin text-white opacity-50">
                {" "}
                {writer.name}
              </p>
            </div>
          )}
        </section>
        {results && (
          <section className="mb-4 bg-dark-blue px-4 py-4">
            <p className="mb-4 border-l-4 border-red pl-4 text-heading-lg text-white">
              Similar
            </p>
            <div className=" hide-scrollbar flex gap-4 overflow-x-scroll">
              {" "}
              {results.map(({ title, backdrop_path: image, poster_path }) => {
                return (
                  <article className=" bg-semi-dark-blue">
                    {" "}
                    <img
                      className="h-60 w-40 max-w-none object-cover"
                      src={
                        `https://image.tmdb.org/t/p/w500/${image}` ||
                        `https://image.tmdb.org/t/p/w500/${poster_path}}`
                      }
                      alt={title}
                    />
                    <p className="px-4 pt-2 text-body-md text-white">{title}</p>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        <section className="bg-dark-blue py-10">
          <p className=" px-4 text-center  text-white">Powered by TMDB </p>
        </section>
      </section>
    </>
  );
};

export default InfoList;
