import React from "react";
import { Routes, Route, useLocation, Navigate, Form } from "react-router-dom";

import NotFound from "./NotFound";
import Signup from "./pages/signup";
import Signin from "./pages/singin";

function App() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
      {/* <Form /> */}
      {/* {location.pathname === "/" ||
      location.pathname === "/tasks" ||
      location.pathname === "/tasks/:id" ? (
        <Header />
      ) : (
        ""
      )}

      <Routes>
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route
          path="/tasks"
          element={<ProtectedRoute element={<TaskApp />} />}
        />
        <Route
          path="/tasks/:id"
          element={<ProtectedRoute element={<TaskDetailsPage />} />}
        />
        <Route path="/signin" element={<Form />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes> */}
    </div>
  );
}

export default App;
