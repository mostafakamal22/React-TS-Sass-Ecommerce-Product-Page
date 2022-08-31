import { Carousel } from "../Carousel/Carousel";

export const MainLayout = (): JSX.Element => {
  return (
    <main>
      <Carousel />
      <div>Product Details</div>
    </main>
  );
};
