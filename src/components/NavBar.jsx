import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="bg-[#E8E6E7] flex justify-between items-center px-10 py-3 ">
        <div className="">logo</div>
        <div className="">
          <ul className="flex items-center space-x-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="bg-violet-600 px-8 py-3 rounded-md text-white text-xs">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
