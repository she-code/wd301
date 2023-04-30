import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import TaskApp from "./TaskApp";
import HomePage from "./HomePage";
import TaskDetailsPage from "./TaskDetailsPage";
import Header from "./Header";
import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ||
      location.pathname === "/tasks" ||
      location.pathname === "/tasks/:id" ? (
        <Header />
      ) : (
        ""
      )}
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route path="/tasks" element={<TaskApp />} />
        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </div>
  );
}

export default App;
