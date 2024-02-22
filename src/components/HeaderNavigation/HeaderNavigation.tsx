import { NavLink } from "react-router-dom";

export const HeaderNavigation = () => {
  return (
    <nav className="flex gap-x-7 text-base">
      <NavLink className="relative group hover:scale-105 duration-300" to="/">
        Home
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-darkYellow group-hover:w-full transition-all duration-300"></span>
      </NavLink>
      <NavLink
        className="relative group hover:scale-105 duration-300"
        to="/teachers"
      >
        Teachers
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-darkYellow group-hover:w-full transition-all duration-300"></span>
      </NavLink>
      <NavLink
        className="relative group hover:scale-105 duration-300"
        to="/favorites"
      >
        Favorites
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-darkYellow group-hover:w-full transition-all duration-300"></span>
      </NavLink>
    </nav>
  );
};
