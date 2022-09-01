import { FC } from "react";
import { useLocalStorage } from "../../hooks/useStorage/useStorage";
import { StateProps } from "../isModal/IsModalState";
import { ProductContext } from "./productContext";

export type ProductTypes = {
  title: string;
  price: number;
  count: number;
  thumbnail: string;
};
//product data
const productData: ProductTypes = {
  title: "Fall Limited Edition Sneakers",
  price: 125.0,
  count: 0,
  thumbnail: "/src/assets/images/image-product-3-thumbnail.jpg",
};

export const ProductState: FC<StateProps> = ({ children }) => {
  const [product, setProduct] = useLocalStorage("product", productData);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
