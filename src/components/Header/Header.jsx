import { Link, NavLink } from "react-router-dom";
import icons from "../../assets/icons";

import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <h1>AZNG</h1>
        </Link>
      </div>
      <div className="navigation">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink to={"/popular"}>Popular</NavLink>
        <NavLink to={"/tv_shows"}>TV Shows</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for movies" />
        <button>
          <img src={icons.search_icon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Header;
