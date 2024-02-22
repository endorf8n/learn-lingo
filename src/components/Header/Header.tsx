import iconSprite from "../../assets/images/sprite.svg";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

import { Auth } from "../Auth/Auth";
import { UserMenu } from "../UserMenu/UserMenu";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const openModal = (content: JSX.Element) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <HeaderNavigation />
      <Auth openModal={openModal} />
      <UserMenu openModal={openModal} />
      {isModalOpen && <Modal closeModal={closeModal}>{modalContent}</Modal>}
    </header>
  );
};
