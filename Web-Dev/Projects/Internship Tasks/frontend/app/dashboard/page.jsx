"use client";

import { useEffect, useState } from "react";
import api from "../../lib/axios";

export default function Dashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    api
      .get("/tasks")
      .then(() => setUsername("Logged In User"))
      .catch(() => (window.location.href = "/login"));
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-700">Dashboard</h1>
      <p className="mt-4 text-lg text-gray-800">Welcome back, {username} 👋</p>

      <div className="mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900">Quick Overview</h2>
        <p className="text-gray-700 mt-2">
          You can manage tasks from the Tasks tab.
        </p>
      </div>
    </div>
  );
}
