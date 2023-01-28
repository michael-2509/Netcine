import { Link } from "react-router-dom";
import MediaTypeIcon from "../UI/MediaTypeIcon";

const Header = ({ title, type }) => {
  return (
    <section className=" text-white ">
      <div className="mb-5 flex justify-between ">
        {" "}
        <div className=" flex items-center gap-2">
          {" "}
          <h2 className=" text-xl font-light text-white">{title}</h2>
          <MediaTypeIcon type={type} />
        </div>
        <Link to="/" className="rounded-xl border-2 border-solid px-2">
          More
        </Link>
      </div>
    </section>
  );
};

export default Header;
