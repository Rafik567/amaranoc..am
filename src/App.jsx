import { useState } from "react";
import "./App.css";
import TopHeader from "./Components/Header/TopHeader";
import BodyAll from "./Components/BodyAll/BodyAll";
import Post from "./Components/BodyAll/Post";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <TopHeader />
      <BodyAll />
      <Post />
      <Footer />
    </>
  );
}

export default App;
