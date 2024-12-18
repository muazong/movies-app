import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>AZNG</h1>
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
      </div>
    </div>
  );
}

export default Header;
