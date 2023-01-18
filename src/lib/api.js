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
    `${TMDB_DOMAIN}3/movie/popular??api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error("No popular Movies");
  }

  const data = await response.json();
  const { results } = data;
  return results;
};

//popular TV
export const getPopularTV = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error("No popular Movies");
  }

  const data = await response.json();
  const { results } = data;
  return results;
};

//top rated
export const topRatedMovies = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  if (!response.ok) {
    throw new Error("No top rated movies");
  }

  const data = await response.json();

  const { results } = data;
  return results;
};

//top rated shows
export const topRatedTv = async () => {
  const response = await fetch(
    `${TMDB_DOMAIN}/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error("No top rated tv shows");
  }

  const data = await response.json();
  const { results } = data;
  return results;
};
