import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/ProjectData';

export default function Projects({ isDarkMode }) {
  const [selectedTech, setSelectedTech] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const allTechs = ['all', ...new Set(projects.flatMap(project => project.tech))];

  useEffect(() => {
    if (selectedTech === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.tech.includes(selectedTech)
      ));
    }
  }, [selectedTech]);

  return (
    <section className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        
        {/* Technology Filter */}
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {allTechs.map(tech => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedTech === tech 
                  ? 'bg-blue-500 text-white' 
                  : isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tech === 'all' ? 'All Projects' : tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isDarkMode={isDarkMode} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}