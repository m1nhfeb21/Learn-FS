import React from "react";
import { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Profile from "./Profile";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Trang chủ</NavLink>
        {"|"}
        <NavLink to="/schedule">Lịch học</NavLink>
        {"|"}
        <NavLink to="/profile">Hồ sơ</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
