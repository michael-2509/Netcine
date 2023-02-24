import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const InfoSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <section className="py-4 pl-4 ">
        <h1 className="text-heading-lg font-thin text-white">
          <Skeleton width="80%" height={20} />
        </h1>
        <div className="flex gap-4 ">
          {" "}
          <p>
            <Skeleton width={100} height={10} />
          </p>
          <p>
            {" "}
            <Skeleton width={100} height={10} />
          </p>
        </div>
      </section>
      <section className="mb-4 ">
        <Skeleton width={500} height={300} />
        <div className="border-b  border-gray-blue py-4 px-4">
          <div className="flex gap-2 pb-4 ">
            {Array(4)
              .fill(0)
              .map(() => (
                <Skeleton width={100} height={30} />
              ))}
          </div>
          <p>
            <Skeleton width="99%" height={15} count={10} />
          </p>
        </div>
        <div className="py-4  text-center">
          <p>
            <Skeleton width={30} height={20} />
          </p>{" "}
          <Skeleton width={120} height={20} />
        </div>
      </section>
    </SkeletonTheme>
  );
};

export default InfoSkeleton;
