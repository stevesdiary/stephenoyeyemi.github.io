import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express.js', level: 90 },
        { name: 'NestJS', level: 85 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 88 },
        { name: 'AWS', level: 82 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 85 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Jest', level: 85 },
        { name: 'Microservices', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            My <span className="text-blue-400">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;