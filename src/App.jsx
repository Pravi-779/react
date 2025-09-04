// import { useState, useEffect } from 'react';

// export default function App() {
//   // ✅ Dynamic States
//   const [activeSection, setActiveSection] = useState('home');
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [selectedTech, setSelectedTech] = useState('all');
//   const [typedText, setTypedText] = useState('');
//   const [contactForm, setContactForm] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   // ✅ Projects Data (Dynamic)
//   const [projects] = useState([
//     {
//       id: 1,
//       title: "Portfolio Website",
//       description: "A personal portfolio built with React & Tailwind CSS.",
//       tech: ["React", "Tailwind", "Vite"],
//       status: "Completed",
//       expanded: false
//     },
//     {
//       id: 2,
//       title: "To-Do App",
//       description: "A simple task management app with local storage.",
//       tech: ["React", "JavaScript", "CSS"],
//       status: "In Progress",
//       expanded: false
//     },
//     {
//       id: 3,
//       title: "Weather App",
//       description: "Weather forecast using OpenWeather API.",
//       tech: ["React", "API", "Tailwind"],
//       status: "Planning",
//       expanded: false
//     }
//   ]);

//   const [filteredProjects, setFilteredProjects] = useState(projects);

//   // ✅ Skills Data (Dynamic)
//   const [skills] = useState([
//     { name: 'React', level: 70, color: 'bg-blue-500' },
//     { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
//     { name: 'Tailwind CSS', level: 80, color: 'bg-cyan-500' },
//     { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
//     { name: 'Vite', level: 75, color: 'bg-purple-500' }
//   ]);

//   // ✅ Typing Animation Effect
//   useEffect(() => {
//     const text = "Building modern, responsive web applications with React & TailwindCSS & Vite.";
//     let index = 0;
//     const timer = setInterval(() => {
//       if (index <= text.length) {
//         setTypedText(text.slice(0, index));
//         index++;
//       } else {
//         clearInterval(timer);
//       }
//     }, 50);
//     return () => clearInterval(timer);
//   }, []);

//   // ✅ Real-time Clock
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // ✅ Filter Projects by Technology
//   useEffect(() => {
//     if (selectedTech === 'all') {
//       setFilteredProjects(projects);
//     } else {
//       setFilteredProjects(projects.filter(project => 
//         project.tech.includes(selectedTech)
//       ));
//     }
//   }, [selectedTech, projects]);

//   // ✅ Handle Contact Form
//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you ${contactForm.name}! I'll get back to you soon. 📧`);
//     setContactForm({ name: '', email: '', message: '' });
//   };

//   // ✅ Theme Toggle
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const themeClasses = isDarkMode ? 'dark' : '';

//   return (
//     <div className={`font-sans transition-all duration-300 ${themeClasses} ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
//       {/* ✅ Dynamic Header with Theme Toggle */}
//       <header className={`shadow fixed w-full top-0 z-50 transition-colors ${isDarkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white`}>
//         <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//           <div className="flex items-center space-x-4">
//             <h1 className="text-2xl font-bold">Praveen's Portfolio</h1>
//             <div className="text-sm text-gray-300">
//               🕐 {currentTime.toLocaleTimeString()}
//             </div>
//           </div>
          
//           <div className="flex items-center space-x-6">
//             <nav className="space-x-6">
//               {['home', 'about', 'projects', 'contact'].map(section => (
//                 <a 
//                   key={section}
//                   href={`#${section}`} 
//                   className={`capitalize transition ${activeSection === section ? 'text-blue-400 font-bold' : 'hover:text-blue-400'}`}
//                   onClick={() => setActiveSection(section)}
//                 >
//                   {section}
//                 </a>
//               ))}
//             </nav>
            
//             {/* Theme Toggle Button */}
//             <button 
//               onClick={toggleTheme}
//               className="p-2 rounded-full hover:bg-gray-700 transition"
//             >
//               {isDarkMode ? '☀️' : '🌙'}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ✅ Dynamic Hero with Typing Effect */}
//       <section id="home" className="h-[80vh] bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white text-center p-6 mt-16">
//         <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce">
//           Hi, I'm Praveen 👋
//         </h2>
//         <div className="max-w-xl mb-6 text-lg h-16 flex items-center">
//           <span>{typedText}</span>
//           <span className="animate-pulse">|</span>
//         </div>
//         <div className="space-x-4">
//           <a 
//             href="#projects" 
//             className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition transform hover:scale-105"
//           >
//             View My Work
//           </a>
//           <a 
//             href="#contact" 
//             className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
//           >
//             Contact Me
//           </a>
//         </div>
//       </section>

//       {/* ✅ About with Skills Progress Bars */}
//       <section id="about" className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-3xl font-bold mb-8">About Me & Skills</h3>
//           <p className="text-lg mb-8">
//             I am learning React and Tailwind CSS to create beautiful and functional UI designs.
//           </p>
          
//           {/* Dynamic Skills with Progress Bars */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {skills.map((skill, index) => (
//               <div key={skill.name} className="text-left">
//                 <div className="flex justify-between mb-2">
//                   <span className="font-semibold">{skill.name}</span>
//                   <span className="text-sm">{skill.level}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div 
//                     className={`h-2 rounded-full transition-all duration-1000 delay-${index * 200} ${skill.color}`}
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ✅ Dynamic Projects with Filter */}
//       <section id="projects" className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
//         <div className="max-w-6xl mx-auto px-4">
//           <h3 className="text-3xl font-bold text-center mb-8">Projects</h3>
          
//           {/* Technology Filter */}
//           <div className="flex justify-center mb-8 space-x-4">
//             {['all', 'React', 'Tailwind', 'JavaScript', 'API'].map(tech => (
//               <button
//                 key={tech}
//                 onClick={() => setSelectedTech(tech)}
//                 className={`px-4 py-2 rounded-lg transition ${
//                   selectedTech === tech 
//                     ? 'bg-blue-500 text-white' 
//                     : isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {tech === 'all' ? 'All Projects' : tech}
//               </button>
//             ))}
//           </div>

//           {/* Filtered Projects */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {filteredProjects.map((project) => (
//               <div 
//                 key={project.id}
//                 className={`p-6 rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
//               >
//                 <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
//                 <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                   {project.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, index) => (
//                     <span 
//                       key={index}
//                       className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <span className={`px-2 py-1 text-sm rounded ${
//                   project.status === 'Completed' ? 'bg-green-100 text-green-800' :
//                   project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
//                   'bg-gray-100 text-gray-800'
//                 }`}>
//                   {project.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ✅ Dynamic Contact Form */}
//       <section id="contact" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
//         <div className="max-w-2xl mx-auto px-4">
//           <h3 className="text-3xl font-bold text-center mb-8">Get In Touch</h3>
          
//           <form onSubmit={handleContactSubmit} className="space-y-6">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={contactForm.name}
//                 onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
//                 className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 value={contactForm.email}
//                 onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
//                 className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
//                 required
//               />
//             </div>
//             <div>
//               <textarea
//                 placeholder="Your Message"
//                 rows="5"
//                 value={contactForm.message}
//                 onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
//                 className={`w-full p-3 rounded-lg border transition ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
//             >
//               Send Message 📧
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* ✅ Footer */}
//       <footer className={`py-6 text-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
//         <p>© 2024 Praveen's Portfolio. All rights reserved. 🚀</p>
//       </footer>
//     </div>
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

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
          </Routes>
        </main>
        
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}