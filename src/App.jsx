import Companies from "./components/Companies/Companies";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
    <div>
      <div className="white gredient"/>
    <Header/>
    <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    </div>

  );
}

export default App;

