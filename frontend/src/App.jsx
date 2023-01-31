import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustmrSite from "@pages/Layout/CustmrSite";
import Home from "@pages/CustmrSite/Home";
import Login from "@pages/CustmrSite/Login";
import AllVideos from "@pages/CustmrSite/AllVideos";
import OneVideo from "@pages/CustmrSite/OneVideo";
import Favorites from "@pages/CustmrSite/Favorites";
import Profil from "@pages/CustmrSite/Profil";

import Dashboard from "./pages/Layout/Dashboard";
import Category from "./pages/Back-office/Category";
import Users from "./pages/Back-office/Users";
import HomeAdmin from "./pages/Back-office/HomeAdmin";
import Setting from "./pages/Back-office/Setting";
import SliderByVideo1 from "./pages/Back-office/Sliders/SliderByVideo_1";
import SliderByVideo2 from "./pages/Back-office/Sliders/SliderByVideo_2";
import SliderByCategory from "./pages/Back-office/Sliders/SliderByCategory";
import Grid from "./pages/Back-office/Sliders/Grid";
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
            <Route path="Videos/:id" element={<OneVideo />} />
            <Route path="Profil" element={<Profil />} />
            <Route path="Login" element={<Login />} />
            <Route path="Favorites" element={<Favorites />} />
          </Route>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="Categories" element={<Category />} />
            <Route path="Users" element={<Users />} />
            <Route path="HomeAdmin" element={<HomeAdmin />} />
            <Route path="Settings" element={<Setting />} />
            <Route path="Slider_1" element={<SliderByVideo1 />} />
            <Route path="Slider_2" element={<SliderByVideo2 />} />
            <Route path="Slider_3" element={<SliderByCategory />} />
            <Route path="Grid" element={<Grid />} />
            <Route path="Videos" element={<Video />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
