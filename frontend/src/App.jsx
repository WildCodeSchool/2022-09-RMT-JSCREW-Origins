import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustmrSite from "@pages/Layout/CustmrSite";
import Home from "@pages/CustmrSite/Home";
import Login from "@pages/CustmrSite/Login";
import AllVideos from "@pages/CustmrSite/AllVideos";

import Dashboard from "./pages/Layout/Dashboard";
import Category from "./pages/Back-office/Category";
import Setting from "./pages/Back-office/Setting";
import Slider1 from "./pages/Back-office/Sliders/Slider_1";
import Slider2 from "./pages/Back-office/Sliders/Slider_2";
import Slider3 from "./pages/Back-office/Sliders/Slider_3";
import Grille from "./pages/Back-office/Sliders/Grille";
import Video from "./pages/Back-office/Video";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CustmrSite />}>
            <Route path="" element={<Home />} />
            <Route path="All-videos" element={<AllVideos />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Login" element={<Login />} />
          </Route>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="Category" element={<Category />} />
            <Route path="Setting/:id" element={<Setting />} />
            <Route path="Slider_1" element={<Slider1 />} />
            <Route path="Slider_2" element={<Slider2 />} />
            <Route path="Slider_3" element={<Slider3 />} />
            <Route path="Grille" element={<Grille />} />
            <Route path="Video" element={<Video />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
