import { useContext } from "react";
import {
  IsModalContext,
  IsModalContextType,
} from "../../context/isModal/isModalContext";
import { Carousel } from "../Carousel/Carousel";
import { motion } from "framer-motion";

export const CarouselModal = (): JSX.Element => {
  const { setIsModal, isModal } = useContext(
    IsModalContext
  ) as IsModalContextType;

  //animations
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <motion.div
      layout
      animate={isModal ? "open" : "close"}
      variants={variants}
      style={{ display: isModal ? "flex" : "none" }}
      className="modal"
    >
      <button className="btn btn-close-modal" onClick={() => setIsModal(false)}>
        <img
          src="/ecommerce-product-page/images/icon-close.svg"
          alt="close modal"
        />
      </button>
      <Carousel />
    </motion.div>
  );
};
