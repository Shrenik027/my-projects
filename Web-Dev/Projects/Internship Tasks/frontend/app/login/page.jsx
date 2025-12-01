"use client";

import { useState } from "react";
import api from "../../lib/axios";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      await api.post("/auth/login", { username, password });
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-xl border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          Login
        </h1>

        {/* USERNAME INPUT */}
        <input
          className="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-500 text-black rounded-md 
                     focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* PASSWORD INPUT */}
        <input
          className="w-full px-4 py-3 mb-6 bg-gray-100 border border-gray-500 text-black rounded-md 
                     focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={loginUser}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 
                     transition font-semibold"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-700">
          Don’t have an account?
          <a
            href="/register"
            className="text-indigo-600 ml-1 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
