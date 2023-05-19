import { About } from "./components/About/About";
import { Team } from "./components/Team/Team";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Team />
      <Portfolio />
      <Carousel />
    </Layout>
  );
}

export default App;
