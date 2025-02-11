import { useState } from "react";
import "./App.css";
import TopHeader from "./Components/Header/TopHeader";
import BodyAll from "./Components/BodyAll/BodyAll";
import Post from "./Components/BodyAll/Post";
import Footer from "./Components/Footer/Footer";
import Carayutyuner from "./Components/Page/Carayutyuner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Page/Home";
import Login from "./Components/Page/Login";
import DisCount from "./Components/Page/DisCount";
import About from "./Components/Page/About";
import Grancum from "./Components/Page/Grancum";

function App() {
  const [key, setKey] = useState(localStorage.getItem("key"));
  return (
    <Router>
      <TopHeader />
      <Routes>
        <Route path="/" element={key ? <Home /> : <Login />} />
        <Route path="/services" element={<Carayutyuner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/discount" element={<DisCount />} />
        <Route path="/about" element={<About />} />
        <Route path="/grancum" element={<Grancum />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
