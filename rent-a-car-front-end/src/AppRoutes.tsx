import Login from 'pages/Login';
import { FC } from 'react';
import { Route, Routes } from "react-router-dom"

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes;