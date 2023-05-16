import 'react-tooltip/dist/react-tooltip.css'
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Proyects from "./components/Projects";
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Proyects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
