import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Body from "./components/Body.js";
import Shop from "./components/Shop.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Body />
      <Shop />
    </BrowserRouter>
  );
}

export default App;
