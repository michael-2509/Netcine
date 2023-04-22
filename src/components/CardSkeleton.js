import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const cardSkeleton = ({ isTrending }) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <section className="mb-5 px-4">
        <div className="mb-5 flex justify-between ">
          {" "}
          <div className=" flex items-center gap-2">
            {" "}
            <h2 className=" text-xl font-light text-white">
              <Skeleton width={150} height={25} />
            </h2>
          </div>
          <Skeleton width={60} height={20} />
        </div>

        <div
          className={
            isTrending
              ? " flex gap-4 "
              : "grid grid-cols-2 gap-x-4 lg:grid-cols-4"
          }
        >
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <div key={index}>
                <Skeleton
                  width={`100%`}
                  height={110}
                  className={isTrending ? "lg:w-[470px]" : ""}
                />
                <div className={isTrending ? " opacity-0" : ""}>
                  <p>
                    <Skeleton width={100} height={10} />
                  </p>
                  <p>
                    <Skeleton width={150} alt={40} />
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </SkeletonTheme>
  );
};

export default cardSkeleton;
