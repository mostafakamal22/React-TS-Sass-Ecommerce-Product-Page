import { Footer } from "../Footer/Footer";
import { MainLayout } from "../MainLayout/MainLayout";
import { Navbar } from "../Navbar/Navbar";
import { CarouselModal } from "../CarouselModal/CarouselModal";
import { ProductState } from "../../context/product/ProductState";
import { IsModalState } from "../../context/isModal/IsModalState";

const App = (): JSX.Element => {
  return (
    <ProductState>
      <IsModalState>
        <div className="container">
          <Navbar />
          <MainLayout />
          <Footer />
          <CarouselModal />
        </div>
      </IsModalState>
    </ProductState>
  );
};

export default App;
