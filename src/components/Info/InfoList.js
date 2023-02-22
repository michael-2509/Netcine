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
  } = data;

  const year = slicedArray(release_date, 4);
  const time = timeConversion(runtime);
  const { cast, crew } = credits;
  const newCast = slicedArray(cast, 6);
  const director = crew.find((item) => item.job === "Director");
  const newRating = (vote_average / 2).toFixed(1);
  console.log(newRating);

  // use map object to iterate over genres
  //   const genreList = new Map(genres);
  //   console.log(genreList);
  return (
    <>
      {" "}
      <section className=" border-white py-4 pl-4">
        <h1 className="text-heading-lg font-thin text-white">{title}</h1>
        <div className="flex gap-4 opacity-50">
          {" "}
          <p className=" font-thin text-white">{year}</p>
          <p className=" text-body-md font-thin  text-white">{time}</p>
        </div>
      </section>
      <section className="border-b border-white">
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={title}
        />
        <div className="border-b-2 border-gray-blue py-4 px-4">
          <div className="flex gap-2 pb-4 ">
            {genres.map(({ name }) => {
              return (
                <p className="flex border border-gray-blue py-1 px-2 text-body-md font-thin text-white">
                  {name}
                </p>
              );
            })}
          </div>
          <p className="font-thin text-white">{`${overview}`}</p>
        </div>
        <div className="py-4 text-center">
          <p className="text-white">{newRating}</p>{" "}
          <Rating
            className="empty-icons filled-icons"
            fillClassName="-weblit-inline-box"
            emptyClassName="flex"
            SVGclassName="inline-block"
            SVGstyle={{ display: "inline-block" }}
            size={50}
            iconsCount={5}
            initialValue={2}
            allowFraction
            emptyIcon={<FaRegStar />}
            fillIcon={<FaStar />}
            readonly
          />
        </div>
      </section>
      <section className="border-b-2 border-white">
        <p>CAST</p>
        <p className="text-white">
          {newCast.map(({ name }) => {
            return name;
          })}
        </p>
        <h1 className="text-white">Director</h1>
        <p className="text-white"> {director.name}</p>
      </section>
    </>
  );
};

export default InfoList;
