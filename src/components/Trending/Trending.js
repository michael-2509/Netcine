import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
// import TmdbApi from "../../lib/api";

import TrendingList from "./TrendingList";

const Trending = ({ endPoint, title, isTrending }) => {
  const {
    sendRequest,
    data: trendingData,
    error,
    status,
  } = useHttp(endPoint, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-white">{error}</p>;
  }

  if (status === "complete" && (!trendingData || trendingData.length < 0)) {
    return <p className="text-white">No loaded movies</p>;
  }

  return (
    <TrendingList data={trendingData} title={title} isTrending={isTrending} />
  );
};

export default Trending;
