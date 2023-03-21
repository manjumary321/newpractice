import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Accurateerp } from "./pages/Accurateerp";
import { Softwarecar } from "./pages/Softwarecar";
import {Networking } from "./pages/Networking";
import {Linux} from "./pages/Linux";
import { Contact } from "./pages/Contact";
import { Customlogin } from "./pages/Customlogin";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pagess">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accurateerp" element={<Accurateerp />} />
            <Route path="/softwarecar" element={<Softwarecar />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/linux" element={<Linux />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Customlogin" element={<Customlogin />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
