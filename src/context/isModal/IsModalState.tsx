import React, { useState } from "react";
import { IsModalContext } from "./isModalContext";

export type StateProps = {
  children: React.ReactNode;
};

export const IsModalState: React.FC<StateProps> = ({ children }) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <IsModalContext.Provider value={{ isModal, setIsModal }}>
      {children}
    </IsModalContext.Provider>
  );
};
