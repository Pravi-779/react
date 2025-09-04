export default function ProjectCard({ project, isDarkMode }) {
  return (
    <div className={`p-6 rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
      <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <span className={`px-2 py-1 text-sm rounded ${
          project.status === 'Completed' ? 'bg-green-100 text-green-800' :
          project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {project.status}
        </span>
        <button className="text-blue-600 hover:text-blue-800 text-sm">
          View Details →
        </button>
      </div>
    </div>
  );
}