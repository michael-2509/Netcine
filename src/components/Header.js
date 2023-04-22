import { Link } from "react-router-dom";
import MediaTypeIcon from "../UI/MediaTypeIcon";

const Header = ({ category, title, type, isHomePage }) => {
  return (
    <section className=" text-white ">
      <div className="mb-5 flex items-center justify-between ">
        {" "}
        <div className=" flex items-baseline gap-2">
          {" "}
          <h2 className=" text-heading-md font-light text-white md:text-heading-lg">
            {title}
          </h2>
          <MediaTypeIcon type={type} />
        </div>
        <Link
          to={`/${type}/${category}`}
          className={`${
            isHomePage
              ? "rounded-xl border-2 border-solid px-2 md:text-heading-xs"
              : "invisible"
          }`}
        >
          More
        </Link>
      </div>
    </section>
  );
};

export default Header;
