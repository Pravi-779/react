// // import { useState, useEffect } from 'react';
// // import { Link, useLocation } from 'react-router-dom';

// // export default function Header({ isDarkMode, toggleTheme }) {
// //   const [currentTime, setCurrentTime] = useState(new Date());//
// //   const location = useLocation();

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentTime(new Date());
// //     }, 1000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const navItems = [
// //     { path: '/', name: 'Home' },
// //     { path: '/about', name: 'About' },
// //     { path: '/projects', name: 'Projects' },
// //     { path: '/contact', name: 'Contact' }
// //   ];

// //   return (
// //     <header className={`shadow fixed w-full top-0 z-50 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white`}>
// //       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
// //         <div className="flex items-center space-x-4">
// //           <Link to="/" className="text-2xl font-bold">
// //             Praveen's Portfolio
// //           </Link>
// //           <div className="text-sm text-gray-300">
// //             🕐 {currentTime.toLocaleTimeString()}
// //           </div>
// //         </div>
        
// //         <div className="flex items-center space-x-6">
// //           <nav className="space-x-6">
// //             {navItems.map(item => (
// //               <Link 
// //                 key={item.path}
// //                 to={item.path}
// //                 className={`transition ${location.pathname === item.path ? 'text-blue-400 font-bold' : 'hover:text-blue-400'}`}
// //               >
// //                 {item.name}
// //               </Link>
// //             ))}
// //           </nav>
          
// //           <button 
// //             onClick={toggleTheme}
// //             className="p-2 rounded-full hover:bg-gray-700 transition"
// //           >
// //             {isDarkMode ? '☀️' : '🌙'}
// //           </button>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

// export default function Header({ isDarkMode, toggleTheme }) {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const location = useLocation();
//   const { user } = useAuth(); // ✅ Add auth check

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const navItems = [
//     { path: '/', name: 'Home' },
//     { path: '/about', name: 'About' },
//     { path: '/projects', name: 'Projects' },
//     { path: '/contact', name: 'Contact' }
//   ];

//   // ✅ Add admin link if user is authenticated
//   if (user) {
//     navItems.push({ path: '/admin', name: 'Admin' });
//   }

//   return (
//     <header className={`shadow fixed w-full top-0 z-50 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white`}>
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//         <div className="flex items-center space-x-4">
//           <Link to="/" className="text-2xl font-bold">
//             Praveen's Portfolio
//           </Link>
//           <div className="text-sm text-gray-300">
//             🕐 {currentTime.toLocaleTimeString()}
//           </div>
//         </div>
        
//         <div className="flex items-center space-x-6">
//           <nav className="space-x-6">
//             {navItems.map(item => (
//               <Link 
//                 key={item.path}
//                 to={item.path}
//                 className={`transition ${location.pathname === item.path ? 'text-blue-400 font-bold' : 'hover:text-blue-400'}`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
          
//           <button 
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-700 transition"
//           >
//             {isDarkMode ? '☀️' : '🌙'}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }



import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header({ isDarkMode, toggleTheme }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // const navItems = [
  //   { path: '/', name: 'Home' },
  //   { path: '/about', name: 'About' },
  //   { path: '/projects', name: 'Projects' },
  //   { path: '/contact', name: 'Contact' }
  // ];

  
  // if (user) {
  //   navItems.push({ path: '/admin', name: 'Admin' });
  // }

  const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' },
  { path: '/admin', name: 'Admin' } // ✅ Always show Admin link
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
          
          {/* Auth Section */}
          {/* {user ? (
            <div className="flex items-center space-x-3">
              <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full" />
              <span className="hidden md:block text-sm">Hi, {user.displayName?.split(' ')[0]}</span>
              <button
                onClick={logout}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
          )} */}

          {/* Auth Section */}
{user ? (
  <div className="flex items-center space-x-3">
    <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full" />
    <span className="hidden md:block text-sm">Hi, {user.displayName?.split(' ')[0]}</span>
    <button
      onClick={logout}
      className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  </div>
) : (
  <div className="flex items-center space-x-3">
    <Link
      to="/login"
      className="px-4 py-2 text-white border border-white rounded hover:bg-white hover:text-gray-900 transition"
    >
      Login
    </Link>
    <Link
      to="/signup"
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      Sign Up
    </Link>
  </div>
)}

          
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

