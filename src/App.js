import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      {/* <Services /> */}
      <Work />
      <ContactMe />
    </>
  );
};

export default App;
