export default function CompetencyNode({ competency, onSelect }) {
  
  const getLevelColor = (level) => {
    switch (level) {
      case 'junior': return 'bg-green-500';
      case 'middle': return 'bg-yellow-500';
      case 'senior': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };
  
  const getLevelCounts = () => {
    const counts = { junior: 0, middle: 0, senior: 0 };
    competency.topics.forEach(topic => {
      topic.concepts.forEach(concept => {
        counts[concept.level]++;
      });
    });
    return counts;
  };
  
  const levelCounts = getLevelCounts();
  
  return (
    <button 
      type="button"
      className="text-left bg-white rounded-lg shadow border border-gray-200 p-4 min-w-[260px] max-w-[640px] w-auto shrink-0 hover:shadow-md transition-shadow"
      onClick={() => onSelect(competency)}
    >
      <h3 className="font-bold text-lg mb-2 text-gray-800 break-words" key={`${competency.name}::title`}>{competency.name}</h3>
      
      <div className="space-y-2">
        <div className="text-sm text-gray-600">
          <span key={`${competency.name}::topics-count`}>{competency.topics.length} topics</span>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {levelCounts.junior > 0 && (
            <div className="flex items-center space-x-1" key={`${competency.name}::level::junior`}>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">{levelCounts.junior}</span>
            </div>
          )}
          {levelCounts.middle > 0 && (
            <div className="flex items-center space-x-1" key={`${competency.name}::level::middle`}>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-xs text-gray-600">{levelCounts.middle}</span>
            </div>
          )}
          {levelCounts.senior > 0 && (
            <div className="flex items-center space-x-1" key={`${competency.name}::level::senior`}>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-xs text-gray-600">{levelCounts.senior}</span>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
