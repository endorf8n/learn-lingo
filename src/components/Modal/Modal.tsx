import { createPortal } from "react-dom";
import iconSprite from "../../assets/images/sprite.svg";
import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  const modalRoot = document.getElementById("modal") as HTMLElement;

  const handleBackdropModalClose = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscKeyModalClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscKeyModalClose);

    return () => {
      document.removeEventListener("keydown", handleEscKeyModalClose);
    };
  }, [closeModal]);

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center z-100 bg-lightBlack overflow-auto"
      onClick={handleBackdropModalClose}
    >
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
