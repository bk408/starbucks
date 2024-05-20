
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar.js";
import Body from './components/Body.js';

function App() {
  return (
    <BrowserRouter>
      
        <Navbar />
        <Body />
     
    </BrowserRouter>
  );
}

export default App;
