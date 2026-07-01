import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from '../pages/Landing/Landing'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import Dashboard from '../pages/Dashboard/Dashboard'
import Interview from '../pages/Interview/Interview'
import History from '../pages/History/History'
import Profile from '../pages/Profile/Profile'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/history" element={<History />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes