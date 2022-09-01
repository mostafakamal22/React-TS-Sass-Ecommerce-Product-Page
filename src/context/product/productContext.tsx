import { createContext } from "react";
import { ProductTypes } from "./ProductState";

export type ProductContextTypes = {
  product: ProductTypes;
  setProduct: any;
};

export const ProductContext = createContext<ProductContextTypes | null>(null);
