"use client";

import { useEffect, useState } from "react";
import api from "../../lib/axios";

export default function AdminPage() {
  const [allowed, setAllowed] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("/admin")
      .then((res) => {
        setAllowed(true);
        setMessage(res.data.message);
      })
      .catch(() => {
        setAllowed(false);
        setMessage("Access denied");
      });
  }, []);

  if (!allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <div className="bg-white p-10 rounded-xl shadow-lg border text-center">
          <h1 className="text-3xl font-bold text-red-700">🚫 Access Denied</h1>
          <p className="mt-4 text-gray-700">
            You do not have permission to view this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-amber-100 to-yellow-200">
      <h1 className="text-4xl font-bold text-amber-700 mb-6">Admin Panel 👑</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-gray-900">
            System Status
          </h2>
          <p className="mt-2 text-gray-700">
            All services are running smoothly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-gray-900">User Access</h2>
          <p className="mt-2 text-gray-700">Admin privileges verified.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-gray-900">{message}</h2>
          <p className="mt-2 text-gray-700">
            This message is fetched securely from admin-only API.
          </p>
        </div>
      </div>
    </div>
  );
}
