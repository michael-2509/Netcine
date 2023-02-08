import useInfinityScroll from "../hooks/use-InfinityScroll";
import { slicedArray } from "../utils";
import CardSkeleton from "./CardSkeleton";

import CollectionList from "./Collection/CollectionList";

const Trending = ({
  endPoint,
  type,
  id,
  isHomePage,
  isTrending,
  title,

  category,
}) => {
  const {
    updateData: data,
    status,
    error,
    page,
  } = useInfinityScroll(endPoint, type);

  let newData = [];

  if (page === 1 && data === null) {
    return <CardSkeleton isTrending={isTrending} />;
  }

  if (error) {
    return <p className="text-center text-white">{error}</p>;
  }

  if (status === "complete" && (!data || data.length < 0)) {
    return <p className="text-white">No loaded movies</p>;
  }

  if (isHomePage) {
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
