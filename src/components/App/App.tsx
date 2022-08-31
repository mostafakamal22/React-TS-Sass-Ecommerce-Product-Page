import { MainLayout } from "../MainLayout/MainLayout";
import { Navbar } from "../Navbar/Navbar";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Navbar />
      <MainLayout />
    </div>
  );
};

export default App;
