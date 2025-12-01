"use client";

import { useEffect, useState } from "react";
import api from "../../lib/axios";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      window.location.href = "/login";
    }
  };

  const createTask = async () => {
    if (!title.trim()) return alert("Task title required!");
    await api.post("/tasks", { title, description: desc });
    setTitle("");
    setDesc("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-indigo-100 to-purple-100">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8">
        Task Manager 📝
      </h1>

      {/* Add Task */}
      <div className="bg-white p-6 rounded-xl shadow-lg border mb-10 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Add New Task
        </h2>

        <input
          className="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-400 text-gray-900 rounded-md focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-400 text-gray-900 rounded-md focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Task Description (optional)"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          onClick={createTask}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
        >
          Add Task
        </button>
      </div>

      {/* Task Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-gray-900">{task.title}</h3>
            <p className="text-gray-700 mt-2">{task.description}</p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => deleteTask(task._id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
