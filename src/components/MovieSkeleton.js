import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MovieSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <h2 className="m-auto w-[90%] pb-4 ">
        <Skeleton width={100} height={20} />
      </h2>
      <section className=" m-auto grid w-[90%] grid-cols-2 md:grid-cols-3">
        {Array(13)
          .fill(0)
          .map((item) => (
            <div className=" gap-2 py-2 pl-2">
              <p className="text-white">
                <Skeleton width={160} height={40} />
              </p>
            </div>
          ))}
      </section>
    </SkeletonTheme>
  );
};

export default MovieSkeleton;
