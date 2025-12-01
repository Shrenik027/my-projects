"use client";

export default function Navbar() {
  const handleLogout = async () => {
    await fetch("http://localhost:5000/api/v1/logout", {
      method: "GET",
      credentials: "include",
    });
    window.location.href = "/login";
  };

  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50 border-b border-gray-300">
      <h1 className="text-xl font-bold text-indigo-700">TaskApp</h1>

      <div className="flex gap-6 items-center text-gray-800">
        <a href="/dashboard" className="hover:text-indigo-600 transition">
          Dashboard
        </a>
        <a href="/tasks" className="hover:text-indigo-600 transition">
          Tasks
        </a>
        <a href="/admin" className="hover:text-indigo-600 transition">
          Admin
        </a>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
