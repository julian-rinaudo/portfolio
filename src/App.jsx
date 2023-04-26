import 'react-tooltip/dist/react-tooltip.css'
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
