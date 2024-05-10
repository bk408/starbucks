
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar.js";
import Box from './components/Box.js';

function App() {
  return (
    <BrowserRouter>
      <div>
      {/*  <Navbar />*/ }

        <Box />
      </div>
    </BrowserRouter>
  );
}

export default App;
