import React, { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { slicedArray } from "../../utils";
import CardSkeleton from "../CardSkeleton";

import CollectionList from "./CollectionList";

const Trending = ({
  endPoint,
  id,
  isHomePage,
  isTrending,
  search,
  title,
  type,
  category,
}) => {
  const { sendRequest, data, error, status } = useHttp(endPoint, true);

  let newData = [];
  let page = 1;

  useEffect(() => {
    sendRequest(type, id, search);
  }, [sendRequest, id, type, page, search]);

  if (status === "pending") {
    return <CardSkeleton isTrending={isTrending} />;
  }

  if (error) {
    return <p className="text-center text-white">{error}</p>;
  }

  if (status === "complete" && (!data || data.length < 0)) {
    return <p className="text-white">No loaded movies</p>;
  }

  //logic to transform data for trending section
  if (isTrending && isHomePage) {
    newData = slicedArray(data, 15);
  } else if (isHomePage) {
    newData = slicedArray(data, 4);
  } else {
    newData = data;
  }

  return (
    <CollectionList
      category={category}
      data={newData}
      isHomePage={isHomePage}
      isTrending={isTrending}
      title={title}
      type={type}
    />
  );
};

export default Trending;
