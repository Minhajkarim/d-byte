
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <Loader/>
      <Navbar/>
      <Home/>
      <Services/>
      <Projects/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
