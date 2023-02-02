import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import CardSkeleton from "../CardSkeleton";

import CollectionList from "./CollectionList";

const Trending = ({ endPoint, isHomePage, isTrending, title, type, id }) => {
  const { sendRequest, data, error, status } = useHttp(endPoint, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

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
      isHomePage={isHomePage}
      isTrending={isTrending}
      title={title}
      type={type}
    />
  );
};

export default Trending;
