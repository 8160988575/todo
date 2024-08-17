import logo from './logo.svg';
import { About } from './components/About';
import { Header } from './components/Header';
import { Header2 } from './components/Header2';
import { Footer } from './components/Footer';
import {
  BrowserRouter as Router,  
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
            <Header/>
                 <Routes>
                      <Route exact path = "/about" element = {<About />} />
                    
                 </Routes>
            
            <Footer/>
    </Router>
    </>
  );
}

export default App;
