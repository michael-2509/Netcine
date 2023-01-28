import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import CardSkeleton from "../CardSkeleton";

import CollectionList from "./CollectionList";

const Trending = ({ endPoint, title, isTrending, type }) => {
  const { sendRequest, data, error, status } = useHttp(endPoint, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <CardSkeleton isTrending={isTrending} />;
  }

  if (error) {
    return <p className="text-center text-white">{error}</p>;
  }

  if (status === "complete" && (!data || data.length < 0)) {
    return <p className="text-white">No loaded movies</p>;
  }

  return (
    <CollectionList
      data={data}
      title={title}
      isTrending={isTrending}
      type={type}
    />
  );
};

export default Trending;
