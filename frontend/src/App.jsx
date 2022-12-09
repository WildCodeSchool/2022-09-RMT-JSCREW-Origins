import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Layout/Dashboard";
import Category from "./pages/Back-office/Category";
import Setting from "./pages/Back-office/Setting";
import Slider from "./pages/Back-office/Slider";
import Video from "./pages/Back-office/Video";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="Category" element={<Category />} />
            <Route path="Setting" element={<Setting />} />
            <Route path="Slider" element={<Slider />} />
            <Route path="Video" element={<Video />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
