import { useState } from "react";
import "./App.css";
import TopHeader from "./Components/Header/TopHeader";
import BodyAll from "./Components/BodyAll/BodyAll";
import Post from "./Components/BodyAll/Post";
import Footer from "./Components/Footer/Footer";
import Carayutyuner from "./Components/Page/Carayutyuner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopHeader /> 
      <Routes>
        <Route path="/services" element={<Carayutyuner />} />

      </Routes>
      <BodyAll />
      <Post />
      <Footer />
    </Router>
  );
}

export default App;
