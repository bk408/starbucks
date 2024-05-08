
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
