import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { projects as initialProjects, skills } from '../utils/ProjectData';


export default function Admin({ isDarkMode }) {
  const { user, loading } = useAuth();
  const [projects, setProjects] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  
  // New project form state
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    tech: [],
    status: 'Planning',
    githubUrl: '',
    liveUrl: ''
  });

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Use initial projects from projectData.js
      setProjects(initialProjects);
    }
  }, []);

  // Save projects to localStorage whenever projects change
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('portfolioProjects', JSON.stringify(projects));
    }
  }, [projects]);

  const addProject = (e) => {
    e.preventDefault();
    
    const projectToAdd = {
      ...newProject,
      id: Date.now(), 
      tech: newProject.tech.filter(t => t.trim() !== ''), // Remove empty tech
    };

    setProjects([...projects, projectToAdd]);
    
    // Reset form
    setNewProject({
      title: '',
      description: '',
      tech: [],
      status: 'Planning',
      githubUrl: '',
      liveUrl: ''
    });
    
    setShowAddForm(false);
    alert('✅ Project added successfully!');
  };

  const deleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== projectId));
      alert('🗑️ Project deleted!');
    }
  };

  const editProject = (project) => {
    setEditingProject(project);
    setNewProject({
      title: project.title,
      description: project.description,
      tech: project.tech,
      status: project.status,
      githubUrl: project.githubUrl || '',
      liveUrl: project.liveUrl || ''
    });
    setShowAddForm(true);
  };

  const updateProject = (e) => {
    e.preventDefault();
    
    const updatedProjects = projects.map(p => 
      p.id === editingProject.id 
        ? { ...editingProject, ...newProject, tech: newProject.tech.filter(t => t.trim() !== '') }
        : p
    );
    
    setProjects(updatedProjects);
    setEditingProject(null);
    setShowAddForm(false);
    
    // Reset form
    setNewProject({
      title: '',
      description: '',
      tech: [],
      status: 'Planning',
      githubUrl: '',
      liveUrl: ''
    });
    
    alert('✅ Project updated successfully!');
  };

  const addTech = (techName) => {
    if (techName && !newProject.tech.includes(techName)) {
      setNewProject({
        ...newProject,
        tech: [...newProject.tech, techName]
      });
    }
  };

  const removeTech = (techToRemove) => {
    setNewProject({
      ...newProject,
      tech: newProject.tech.filter(t => t !== techToRemove)
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  // Not authenticated - require login
//   if (!user) {
//     return (
//       <div className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
//         <div className="max-w-2xl mx-auto px-4 text-center">
//           <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
//             <h2 className="text-3xl font-bold mb-4">🔒 Admin Access Only</h2>
//             <p className="text-gray-600 mb-6">Please sign in to access the admin panel.</p>
//             <a href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
//               Go to Contact Page to Sign In
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }

// Not authenticated - require login
// if (!user) {
//   return (
//     <div className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
//       <div className="max-w-2xl mx-auto px-4 text-center">
//         <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
//           <div className="mb-6">
//             <svg className="w-16 h-16 mx-auto text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//             </svg>
//             <h2 className="text-3xl font-bold mb-4">🔒 Admin Access Required</h2>
//             <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//               Please sign in to access the admin panel and manage your portfolio.
//             </p>
//           </div>

//           <Link
//             to="/login"
//             className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
//           >
//             Go to Login Page
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// Not authenticated - require login
if (!user) {
  return (
    <div className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="mb-6">
            {/* Admin Icon */}
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">🔒 Admin Panel</h2>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Welcome to the admin panel! Sign in to manage your portfolio.
            </p>
            
            {/* Benefits */}
            <div className={`p-4 rounded-xl mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
                🛠️ Admin Features:
              </h3>
              <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-blue-800'}`}>
                <li className="flex items-center space-x-2">
                  <span>➕</span>
                  <span>Add new projects to your portfolio</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>✏️</span>
                  <span>Edit existing project details</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📊</span>
                  <span>View portfolio statistics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>💾</span>
                  <span>Export and manage project data</span>
                </li>
              </ul>
            </div>
          </div>

          <Link
            to="/login"
            className="inline-flex items-center justify-center space-x-2 bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-lg text-lg font-semibold"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Sign In to Access Admin</span>
          </Link>

          <div className="mt-6">
            <Link 
              to="/" 
              className={`text-sm hover:underline ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              ← Back to Portfolio
            </Link>
          </div>
          
          <div className={`mt-4 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            <p>Admin access is restricted to portfolio owners only</p>
          </div>
        </div>
      </div>
    </div>
  );
}


  return (
    <div className={`min-h-screen pt-20 py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className={`p-6 rounded-lg mb-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">🛠️ Admin Panel</h1>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Manage your portfolio projects
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full" />
              <span>{user.displayName}</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
            <h3 className="text-lg font-semibold">📊 Total Projects</h3>
            <p className="text-2xl font-bold text-blue-500">{projects.length}</p>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
            <h3 className="text-lg font-semibold">✅ Completed</h3>
            <p className="text-2xl font-bold text-green-500">
              {projects.filter(p => p.status === 'Completed').length}
            </p>
          </div>
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
            <h3 className="text-lg font-semibold">🚧 In Progress</h3>
            <p className="text-2xl font-bold text-yellow-500">
              {projects.filter(p => p.status === 'In Progress').length}
            </p>
          </div>
        </div>

        {/* Add Project Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2"
          >
            <span>{showAddForm ? '❌ Cancel' : '➕ Add New Project'}</span>
          </button>
        </div>

        {/* Add/Edit Project Form */}
        {showAddForm && (
          <div className={`p-6 rounded-lg mb-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
            <h3 className="text-xl font-bold mb-4">
              {editingProject ? '✏️ Edit Project' : '➕ Add New Project'}
            </h3>
            
            <form onSubmit={editingProject ? updateProject : addProject} className="space-y-4">
              {/* Project Title */}
              <div>
                <label className="block font-semibold mb-2">Project Title</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  placeholder="e.g., E-commerce Website"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block font-semibold mb-2">Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  rows="3"
                  placeholder="Brief description of what this project does..."
                  required
                />
              </div>

              {/* Technologies */}
              <div>
                <label className="block font-semibold mb-2">Technologies</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {newProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center space-x-1"
                    >
                      <span>{tech}</span>
                      <button 
                        type="button"
                        onClick={() => removeTech(tech)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
                
                {/* Quick add buttons */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {['React', 'JavaScript', 'Tailwind', 'Node.js', 'MongoDB', 'Express', 'Vue', 'Python'].map(tech => (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => addTech(tech)}
                      className="px-2 py-1 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                      disabled={newProject.tech.includes(tech)}
                    >
                      + {tech}
                    </button>
                  ))}
                </div>
                
                {/* Custom tech input */}
                <input
                  type="text"
                  placeholder="Add custom technology and press Enter"
                  className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addTech(e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
              </div>

              {/* Status */}
              <div>
                <label className="block font-semibold mb-2">Status</label>
                <select
                  value={newProject.status}
                  onChange={(e) => setNewProject({...newProject, status: e.target.value})}
                  className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                >
                  <option value="Planning">📋 Planning</option>
                  <option value="In Progress">🚧 In Progress</option>
                  <option value="Completed">✅ Completed</option>
                  <option value="On Hold">⏸️ On Hold</option>
                </select>
              </div>

              {/* URLs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-2">GitHub URL (optional)</label>
                  <input
                    type="url"
                    value={newProject.githubUrl}
                    onChange={(e) => setNewProject({...newProject, githubUrl: e.target.value})}
                    className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    placeholder="https://github.com/username/project"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Live URL (optional)</label>
                  <input
                    type="url"
                    value={newProject.liveUrl}
                    onChange={(e) => setNewProject({...newProject, liveUrl: e.target.value})}
                    className={`w-full p-3 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    placeholder="https://myproject.com"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                >
                  {editingProject ? '💾 Update Project' : '➕ Add Project'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingProject(null);
                    setNewProject({
                      title: '', description: '', tech: [], status: 'Planning', githubUrl: '', liveUrl: ''
                    });
                  }}
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Projects List */}
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
          <h3 className="text-xl font-bold mb-4">📋 Current Projects ({projects.length})</h3>
          
          {projects.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No projects yet. Add your first project above!</p>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className={`p-4 rounded-lg border ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{project.title}</h4>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Status */}
                      <span className={`px-2 py-1 text-xs rounded ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        project.status === 'On Hold' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status}
                      </span>
                      
                      {/* URLs */}
                      <div className="mt-2 space-x-4">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                             className="text-blue-500 hover:underline text-sm">
                            🔗 GitHub
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                             className="text-blue-500 hover:underline text-sm">
                            🌐 Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => editProject(project)}
                        className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Data Management */}
        <div className={`p-6 rounded-lg mt-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow`}>
          <h3 className="text-xl font-bold mb-4">💾 Data Management</h3>
          <div className="flex space-x-4">
            <button
              onClick={() => {
                const dataStr = JSON.stringify(projects, null, 2);
                const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
                const exportFileDefaultName = 'portfolio-projects.json';
                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', dataUri);
                linkElement.setAttribute('download', exportFileDefaultName);
                linkElement.click();
              }}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              📥 Export Projects
            </button>
            <button
              onClick={() => {
                if (confirm('Reset to original projects? This will delete all your added projects!')) {
                  localStorage.removeItem('portfolioProjects');
                  setProjects(initialProjects);
                  alert('✅ Reset to original projects!');
                }
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              🔄 Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}