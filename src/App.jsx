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

function App() {
  return (
    <Router>
      <TopHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Carayutyuner />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
