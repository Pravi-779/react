import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ isDarkMode, toggleTheme }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <header className={`shadow fixed w-full top-0 z-50 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">
            Praveen's Portfolio
          </Link>
          <div className="text-sm text-gray-300">
            🕐 {currentTime.toLocaleTimeString()}
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="space-x-6">
            {navItems.map(item => (
              <Link 
                key={item.path}
                to={item.path}
                className={`transition ${location.pathname === item.path ? 'text-blue-400 font-bold' : 'hover:text-blue-400'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 transition"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}