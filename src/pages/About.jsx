import SkillBar from '../components/SkillBar';
import { skills } from '../utils/ProjectData';

export default function About({ isDarkMode }) {
  return (
    <section className={`min-h-screen pt-20 py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Me & Skills</h2>
        <div className="mb-12">
          <p className="text-lg mb-4">
            I am a passionate Frontend Developer learning React and Tailwind CSS to create beautiful and functional UI designs.
          </p>
          <p className="text-lg">
            My goal is to become a full-stack developer and contribute to impactful projects that make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar 
              key={skill.name} 
              skill={skill} 
              index={index} 
              isDarkMode={isDarkMode} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}