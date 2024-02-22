import iconSprite from "../../assets/images/sprite.svg";
import { Logout } from "../Logout/Logout";

interface AuthProps {
  openModal: (content: JSX.Element) => void;
}

export const UserMenu = ({ openModal }: AuthProps) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <button
        className="flex items-center gap-2 font-bold text-base leading-5 hover:scale-110 duration-300"
        type="button"
        onClick={() => openModal(<Logout />)}
      >
        <svg className="fill-darkYellow" width={20} height={20}>
          <use xlinkHref={`${iconSprite}#log-out`}></use>
        </svg>
        Log out
      </button>
      <p className="bg-darkYellow text-black text-base font-bold rounded-xl p-2">
        Hello
      </p>
    </div>
  );
};
