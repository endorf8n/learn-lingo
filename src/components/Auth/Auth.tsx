import iconSprite from "../../assets/images/sprite.svg";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";

interface AuthProps {
  openModal: (content: JSX.Element) => void;
}

export const Auth = ({ openModal }: AuthProps) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <button
        className="flex items-center gap-2 font-bold text-base leading-5 hover:text-darkYellow duration-300"
        type="button"
        onClick={() => openModal(<Login />)}
      >
        <svg className="fill-darkYellow" width={20} height={20}>
          <use xlinkHref={`${iconSprite}#login`}></use>
        </svg>
        Log in
      </button>
      <button
        className="bg-black hover:bg-darkYellow text-white hover:text-black text-base font-bold rounded-xl py-[14px] px-[39px] hover:shadow-3xl duration-300"
        type="button"
        onClick={() => openModal(<Register />)}
      >
        Registration
      </button>
    </div>
  );
};
