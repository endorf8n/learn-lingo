import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Teachers from "../src/pages/Teachers";
import Favorites from "../src/pages/Favorites";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <div className="px-16">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
