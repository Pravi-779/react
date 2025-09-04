export default function Footer({ isDarkMode }) {
  return (
    <footer className={`py-6 text-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
      <p>© 2024 Praveen's Portfolio. All rights reserved. 🚀</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-blue-400">GitHub</a>
        <a href="#" className="hover:text-blue-400">LinkedIn</a>
        <a href="#" className="hover:text-blue-400">Twitter</a>
      </div>
    </footer>
  );
}