import { Footer } from "../Footer/Footer";
import { MainLayout } from "../MainLayout/MainLayout";
import { Navbar } from "../Navbar/Navbar";
import { useLocalStorage } from "../../hooks/useStorage/useStorage";
import { createContext } from "react";

type ProductTypes = {
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

export const ProductContext = createContext<any | null>(null);

const App = (): JSX.Element => {
  const [product, setProduct] = useLocalStorage("product", productData);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      <div className="container">
        <Navbar />
        <MainLayout />
        <Footer />
      </div>
    </ProductContext.Provider>
  );
};

export default App;
