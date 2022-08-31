import { MainLayout } from "../MainLayout/MainLayout";
import { Navbar } from "../Navbar/Index";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Navbar />
      <MainLayout />
    </div>
  );
};

export default App;
