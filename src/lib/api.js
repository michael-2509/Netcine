import { slicedArray } from "../utils";

const TMDB_DOMAIN = "https://api.themoviedb.org/3";
const API_KEY = "e771c8f2e777b71534e7f5feb2c49c8a";

//trending videos
export const getTrending = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/trending/all/day?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("No trending movies");
  }

  const data = await response.json();
  const { results } = data;

  return results;
};

//popular movies
export const getPopularMovies = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error("No popular Movies");
  }

  const data = await response.json();
  const { results } = data;
  const newResults = slicedArray(results);
  return newResults;
};

//popular TV
export const getPopularTV = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error("No popular Movies");
  }

  const data = await response.json();
  const { results } = data;
  const newResults = slicedArray(results);
  return newResults;
};

//top rated movies
export const getTopRatedMovies = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error("No top rated movies");
  }

  const data = await response.json();

  const { results } = data;
  const newResults = slicedArray(results);
  return newResults;
};

//top rated shows
export const getTopRatedTv = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error("No top rated tv shows");
  }

  const data = await response.json();
  const { results } = data;
  const newResults = slicedArray(results);
  return newResults;
};

//upcoming movies
export const getUpcomingMovies = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error("No upcoming yet");
  }
  const data = await response.json();
  const { results } = data;
  const newResults = slicedArray(results);
  return newResults;
};

//on the air TV shows
export const getOntheAir = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error("No upcoming yet");
  }
  const data = await response.json();
  const { results } = data;
  const newResults = slicedArray(results);
  return newResults;
};

//Genre
export const getGenre = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error("No genre");
  }
  const data = await response.json();
  const { genres } = data;
  console.log(data);
  return genres;
};

const TmdbApi = {
  getTrending,
  getPopularMovies,
  getPopularTV,
  getTopRatedMovies,
  getTopRatedTv,
};

export default TmdbApi;
