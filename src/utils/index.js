/*utils folder is a folder for writting 
some little code snippets like a function 
that can achieve something in app*/

//sliced Array
export const slicedArray = (arr, value) => {
  return arr.slice(0, value);
};

//convert minute to seconds

export const timeConversion = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};

//filter
export const filterData = (data) => {
  return data.filter(
    (item) =>
      (item.backdrop_path !== null || item.poster_path !== null) &&
      item.media_type !== "person"
  );
};
