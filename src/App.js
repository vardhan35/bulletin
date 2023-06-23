import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import SeeAll from "./components/SeeAll/SeeAll";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/see-all" element={<SeeAll />} />
      </Routes>
    </Router>
  );
}

export default App;
