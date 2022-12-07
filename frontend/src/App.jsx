import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./pages/Back-office/Category";
import Setting from "./pages/Back-office/Setting";
import Slider from "./pages/Back-office/Slider";
import Video from "./pages/Back-office/Video";
import Nav from "./components/Nav";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/Category" element={<Category />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Slider" element={<Slider />} />
          <Route path="/Video" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
}
