import { Carousel } from "../Carousel/Carousel";
import { ProductDetails } from "../ProductDetails/ProductDetails";

export const MainLayout = (): JSX.Element => {
  return (
    <main>
      <Carousel />
      <ProductDetails />
    </main>
  );
};
