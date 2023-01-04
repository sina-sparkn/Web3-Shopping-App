import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 pt-80 px-5 items-center justify-center">
      <div>404 page not found</div>
      <div className="flex gap-10">
        <Link to="/">
          <button className="hover:underline">Return to Home</button>
        </Link>
        <Link to="/Shop">
          <button className="hover:underline">Return to Shop</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
