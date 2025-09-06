// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import Admin from './pages/Admin'; // ✅ New import

// export default function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <Router>
//       <div className={`font-sans transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
//         <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
//         <main>
//           <Routes>
//             <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
//             <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
//             <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
//             <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
//             <Route path="/admin" element={<Admin isDarkMode={isDarkMode} />} /> {/* ✅ New route */}
//           </Routes>
//         </main>
        
//         <Footer isDarkMode={isDarkMode} />
//       </div>
//     </Router>
//   );
// }

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login'; 
import Signup from './pages/Signup'; 

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className={`font-sans transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
            <Route path="/admin" element={<Admin isDarkMode={isDarkMode} />} />
            <Route path="/login" element={<Login isDarkMode={isDarkMode} />} /> 
             <Route path="/signup" element={<Signup isDarkMode={isDarkMode} />} />
          </Routes>
        </main>
        
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}