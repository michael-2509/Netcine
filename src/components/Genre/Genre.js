// import { useState } from "react";

import useHttp from "../../hooks/use-http";
import { useEffect } from "react";
import GenreList from "./GenreList";

const Genre = ({ endpoint, media_type }) => {
  const { sendRequest, data, error, status } = useHttp(endpoint, true);
  //   const [data, setData] = useState([]);
  useEffect(() => {
    sendRequest(media_type);
  }, [sendRequest, media_type]);

  if (status === "pending") {
    return <p className="text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-white">{error}</p>;
  }

  if (status === "complete" && (!data || data.length < 0)) {
    return <p className="text-white">No loaded movies</p>;
  }

  return <GenreList data={data} />;
};

export default Genre;
