import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Hybrid from './components/hybrid/Hybrid';
import Navbar from './components/navbar/Navbar';
import Sectioncloud from './components/section3/Sectioncloud';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Sectioncloud/>
    <Hybrid/>
    </div>
  );
}

export default App;
