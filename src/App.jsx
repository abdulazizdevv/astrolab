import { About } from "./components/About/About";
import { Team } from "./components/Team/Team";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Home />
      <Header />
      <About />
      <Team />
      <Portfolio />
      <Contact />
      {/* <Form /> */}
    </>
  );
}

export default App;
