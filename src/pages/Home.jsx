import { Link } from 'react-router-dom';

export default function Home({ isDarkMode }) {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white text-center p-6 mt-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce">
        Hi, I'm Praveen 👋
      </h1>
      <p className="max-w-xl mb-6 text-lg">
        Building modern, responsive web applications with React & TailwindCSS & Vite.
      </p>
      <div className="space-x-4">
        <Link 
          to="/projects"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition transform hover:scale-105"
        >
          View My Work
        </Link>
        <Link 
          to="/contact"
          className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}