import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/Constants";
const Header = () => {
  return (
    //header-container
    <div className="flex justify-between shadow-lg border border-solid">
      <div>
        <img className="w-20" src={HEADER_LOGO} />
      </div>

      <div className="m-1 p-1">
        <ul className="flex list-none">
          <li className="m-2 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="about">About Us</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="m-2 p-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
