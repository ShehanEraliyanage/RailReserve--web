import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dasboard";
import AgentManagement from "../pages/AgentManagement";
import TrainManagement from "../pages/TrainManagement";
import TrainEdit from "../pages/TrainEdit";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/agent" element={<AgentManagement />} />
      <Route path="/train" element={<TrainManagement />} />
      <Route path="/train/edit/:id" element={<TrainEdit />} />
    </Routes>
  );
};

export default Routers;
