import { createContext } from "react";

export type IsModalContextType = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const IsModalContext = createContext<IsModalContextType | null>(null);
