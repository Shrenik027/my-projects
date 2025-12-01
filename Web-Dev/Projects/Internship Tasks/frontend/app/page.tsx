export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      <h1 className="text-5xl font-bold mb-6 drop-shadow-xl text-center">
        Internship Task App
      </h1>

      <p className="text-lg mb-8 text-center max-w-md opacity-95">
        A secure and modern authentication + task management system.
      </p>

      <div className="flex gap-4">
        <a
          href="/login"
          className="px-6 py-3 bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all font-semibold"
        >
          Login
        </a>

        <a
          href="/register"
          className="px-6 py-3 bg-black/30 backdrop-blur-md border border-white/40 text-white rounded-lg hover:bg-black/40 transition-all font-semibold"
        >
          Register
        </a>
      </div>
    </div>
  );
}
