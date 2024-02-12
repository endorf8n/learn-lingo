import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header className="flex justify-center items-center space-x-12">
        <p className="text-ms ">LearnLingo</p>
        <ul className="flex gap-x-8">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/teachers">Teachers</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
        <button
          className="bg-black text-white text-base font-bold rounded-xl py-[14px] px-[39px]"
          type="button"
        >
          Registration
        </button>
      </header>
      <Outlet />
    </div>
  );
};
