"use client";

import { useState } from "react";
import api from "../../lib/axios";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    if (!username.trim() || !password.trim()) {
      return alert("All fields are required!");
    }

    try {
      await api.post("/auth/register", { username, password });
      window.location.href = "/login";
    } catch (err) {
      alert("User already exists or invalid input.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-xl border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          Register
        </h1>

        <input
          className="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-400 text-gray-900 rounded-md 
                     focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full px-4 py-3 mb-6 bg-gray-100 border border-gray-400 text-gray-900 rounded-md 
                     focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={registerUser}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 
                     transition font-semibold"
        >
          Create Account
        </button>

        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?
          <a
            href="/login"
            className="text-indigo-600 ml-1 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
