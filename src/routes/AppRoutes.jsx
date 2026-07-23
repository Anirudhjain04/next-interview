import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Interview from "../pages/Interview/Interview";
import History from "../pages/History/History";
import Profile from "../pages/Profile/Profile";

import GenerateInterview from "../pages/Interview/GenerateInterview";
import InterviewDetails from "../pages/Interview/InterviewDetails";

import ProtectedRoute from "../pages/Auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interview"
        element={
          <ProtectedRoute>
            <Interview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interview/generate"
        element={<GenerateInterview />}
      />
      <Route
        path="/interview/:id"
        element={<InterviewDetails />}
      />
      <Route
      path="/interview/:id/start"
      element={<Interview />}
      />
    </Routes>
    
  );
};

export default AppRoutes;
