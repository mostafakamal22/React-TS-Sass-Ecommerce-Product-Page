import { useContext } from "react";
import { IsModalContext } from "../../context/isModal/isModalContext";
import { Carousel } from "../Carousel/Carousel";

export const CarouselModal = (): JSX.Element => {
  const { setIsModal, isModal } = useContext(IsModalContext);

  return (
    <div style={{ display: isModal ? "flex" : "none" }} className="modal">
      <button className="btn btn-close-modal" onClick={() => setIsModal(false)}>
        <img src="/src/assets/images/icon-close.svg" alt="close modal" />
      </button>
      <Carousel />
    </div>
  );
};
