export default function SkillBar({ skill, index, isDarkMode }) {
  return (
    <div className="text-left">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{skill.name}</span>
        <span className="text-sm">{skill.level}%</span>
      </div>
      <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
          className={`h-2 rounded-full transition-all duration-1000 delay-${index * 200} ${skill.color}`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}