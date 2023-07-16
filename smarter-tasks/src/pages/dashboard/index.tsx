import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/signin");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className=" w-2/3 px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dashboard
        </h1>
        <div className="flex  justify-between">
          <p className="text-black text-xl font-semibold">{userData.name}</p>
          <button
            id="logout-link"
            className="text-white text-center bg-green-500 focus:outline-none px-4 py-2 rounded-md"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
        <p className="text-gray-500 text-lg">{userData.email}</p>
      </div>
    </div>
  );
};

export default Dashboard;
