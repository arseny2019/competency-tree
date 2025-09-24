import { useEffect, useState } from 'react';
import CompetencyNode from './CompetencyNode.jsx';

export default function CompetencyRoadmap({ dataEn, dataRu }) {
  const [selectedCompetency, setSelectedCompetency] = useState(null);
  const [lang, setLang] = useState('en');
  const data = lang === 'ru' && Array.isArray(dataRu?.competencies) && dataRu.competencies.length > 0 ? dataRu : dataEn;
  const competencies = data.competencies ?? [];

  return (
    <div className="w-full h-full p-4 bg-gray-50">
      {/* <div className="flex items-center justify-between mb-6">
        <div />
        <div className="inline-flex rounded-md border border-gray-300 overflow-hidden">
          <button
            type="button"
            className={`px-3 py-1 text-sm ${lang === 'en' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >EN</button>
          <button
            type="button"
            className={`px-3 py-1 text-sm border-l border-gray-300 ${lang === 'ru' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setLang('ru')}
            aria-pressed={lang === 'ru'}
          >RU</button>
        </div>
      </div> */}
      <h1 className="text-2xl font-bold mb-4">Frontend Competency List</h1>
      <div className="flex flex-wrap gap-4 items-start">
        {competencies.map((competency) => (
          <CompetencyNode
            key={competency.name}
            competency={competency}
            onSelect={setSelectedCompetency}
          />
        ))}
      </div>

      {selectedCompetency && (
        <div className="fixed top-4 right-4 z-10 bg-white p-4 rounded-lg shadow-lg max-w-md max-h-[90vh] overflow-auto border">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-bold text-lg">{selectedCompetency.name}</h3>
            <button
              onClick={() => setSelectedCompetency(null)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="space-y-3">
            {selectedCompetency.topics.map((topic) => {
              const topicKey = `${selectedCompetency.name}::${topic.name}`;
              return (
              <div key={topicKey} className="border-l-2 border-blue-500 pl-3">
                <h4 className="font-semibold text-sm">{topic.name}</h4>
                <div className="space-y-1 mt-1">
                  {topic.concepts.map((concept) => {
                    const conceptKey = `${topicKey}::${concept.level}::${concept.name}`;
                    return (
                    <div key={conceptKey} className="text-xs text-gray-700">
                      <span
                        className={`px-2 py-0.5 rounded text-xs ${
                          concept.level === 'junior'
                            ? 'bg-green-100 text-green-800'
                            : concept.level === 'middle'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {concept.level}
                      </span>
                      <span className="ml-2">{concept.name}</span>
                    </div>
                    );
                  })}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
