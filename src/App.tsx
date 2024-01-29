import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Teachers from "../src/pages/Teachers";
import Favorites from "../src/pages/Favorites";

export const App = () => {
  return (
    <div>
      <h1>Welcome to awesome app</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
