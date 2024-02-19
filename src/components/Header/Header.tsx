import { NavLink } from "react-router-dom";
import iconSprite from "../../assets/images/sprite.svg";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Register } from "../Auth/Register";

export const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);

  return (
    <header className="flex items-center p-5 justify-around">
      <a
        className="flex gap-2 items-center font-medium text-ms hover:scale-105 duration-300"
        href="/"
      >
        <svg width={28} height={28}>
          <use xlinkHref={`${iconSprite}#ukraine`}></use>
        </svg>
        <p>LearnLingo</p>
      </a>

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
      <div className="flex flex-row gap-4 items-center">
        <button
          className="flex items-center gap-2 font-bold text-base leading-5 hover:text-darkYellow duration-300"
          type="button"
          onClick={() => setIsLoginOpen(true)}
        >
          <svg className="fill-darkYellow" width={20} height={20}>
            <use xlinkHref={`${iconSprite}#login`}></use>
          </svg>
          Log in
        </button>
        <button
          className="bg-black hover:bg-darkYellow text-white hover:text-black text-base font-bold rounded-xl py-[14px] px-[39px] hover:shadow-3xl duration-300"
          type="button"
          onClick={() => setIsRegisterOpen(true)}
        >
          Registration
        </button>
      </div>
      {isLoginOpen && (
        <Modal closeModal={() => setIsLoginOpen(false)}>Login page</Modal>
      )}
      {isRegisterOpen && (
        <Modal closeModal={() => setIsRegisterOpen(false)}>
          <Register />
        </Modal>
      )}
    </header>
  );
};
