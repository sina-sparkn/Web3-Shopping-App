import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>404 page not found</div>
      <button>
        <Link to="/">
          <div>return home</div>
        </Link>
      </button>
    </>
  );
};

export default NotFound;
