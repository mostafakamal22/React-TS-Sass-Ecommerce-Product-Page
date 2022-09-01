import { useState } from "react";
import { IsModalContext } from "./isModalContext";

export const IsModalState = ({ children }: any) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <IsModalContext.Provider value={{ isModal, setIsModal }}>
      {children}
    </IsModalContext.Provider>
  );
};
