import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dasboard";
import AgentManagement from "../pages/AgentManagement";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/agent" element={<AgentManagement />} />
    </Routes>
  );
};

export default Routers;
