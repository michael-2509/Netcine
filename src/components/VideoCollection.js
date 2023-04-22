import useInfinityScroll from "../hooks/use-InfinityScroll";

import CardSkeleton from "./CardSkeleton";
import CollectionList from "./Collection/CollectionList";

const VideoCollection = ({ endPoint, title, type, isTrending }) => {
  const {
    uniqueData: data,
    status,
    error,
    page,
  } = useInfinityScroll(endPoint, type);

  if (page === 1 && status === "pending") {
    return <CardSkeleton isTrending={isTrending} />;
  }

  if (error) {
    return <p className="text-center text-white">{error}</p>;
  }

  if (status === "completed" && (!data || data.length === 0)) {
    return <p className="text-white">No loaded movies</p>;
  }

  return (
    <CollectionList
      data={data}
      isTrending={isTrending}
      title={title}
      type={type}
    />
  );
};

export default VideoCollection;
