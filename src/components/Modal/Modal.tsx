import { createPortal } from "react-dom";
import iconSprite from "../../assets/images/sprite.svg";

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  const modalRoot = document.getElementById("modal") as HTMLElement;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-100 bg-lightBlack overflow-auto">
      <div className="relative bg-white rounded-3xl p-16 max-w-xl w-full">
        <button className="absolute top-4 right-4" onClick={closeModal}>
          <svg className="stroke-black" width={32} height={32}>
            <use xlinkHref={`${iconSprite}#close`}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
