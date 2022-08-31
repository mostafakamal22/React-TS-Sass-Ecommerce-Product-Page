import { Footer } from "../Footer/Footer";
import { MainLayout } from "../MainLayout/MainLayout";
import { Navbar } from "../Navbar/Navbar";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Navbar />
      <MainLayout />
      <Footer />
    </div>
  );
};

export default App;
