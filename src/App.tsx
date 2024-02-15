// import { Route, Routes } from "react-router-dom";
// import Home from "../src/pages/Home";
// import Teachers from "../src/pages/Teachers";
// import Favorites from "../src/pages/Favorites";
// import { Layout } from "./components/Layout";
import { RegisterForm } from "./components/Auth/RegisterForm";

export const App = () => {
  return (
    <RegisterForm />
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="teachers" element={<Teachers />} />
    //     <Route path="favorites" element={<Favorites />} />
    //   </Route>
    //   <Route path="*" element={<Home />} />
    // </Routes>
  );
};
