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
  const newResultS = slicedArray(results);
  return newResultS;
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
  const newResultS = slicedArray(results);
  return newResultS;
};

//top rated
export const getTopRatedMovies = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error("No top rated movies");
  }

  const data = await response.json();

  const { results } = data;
  const newResultS = slicedArray(results);
  return newResultS;
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
  const newResultS = slicedArray(results);
  return newResultS;
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
  const newResultS = slicedArray(results);
  return newResultS;
};

//on the air
export const getOntheAir = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error("No upcoming yet");
  }
  const data = await response.json();
  const { results } = data;
  const newResultS = slicedArray(results);
  return newResultS;
};

const TmdbApi = {
  getTrending,
  getPopularMovies,
  getPopularTV,
  getTopRatedMovies,
  getTopRatedTv,
};

export default TmdbApi;
