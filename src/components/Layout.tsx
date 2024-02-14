import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const Layout = () => {
  return (
    <div className="px-16">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
