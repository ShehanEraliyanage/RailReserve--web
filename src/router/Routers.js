import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dasboard";
import AgentRegistrationModal from "../pages/AgentRegistrationModal";
import TrainManagement from "../pages/TrainManagement";
import TrainEdit from "../pages/TrainEdit";
import ScheduleManagement from "../pages/ScheduleManagement";
import ReservationManagement from "../pages/ReservationManagement";
import TravellerManagement from "../pages/TravellerManagement";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/agent" element={<AgentRegistrationModal />} />
      <Route path="/train" element={<TrainManagement />} />
      <Route path="/train/edit/:id" element={<TrainEdit />} />
      <Route path="/schedule" element={<ScheduleManagement />} />
      <Route path="/reservation" element={<ReservationManagement />} />
      <Route path="/travel-list" element={<TravellerManagement />} />
    </Routes>
  );
};

export default Routers;
