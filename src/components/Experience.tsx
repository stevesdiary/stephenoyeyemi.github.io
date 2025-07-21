import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Backend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading backend development for high-traffic applications serving 10M+ users. Architected microservices infrastructure and improved system performance by 40%.',
      achievements: [
        'Built scalable APIs handling 1M+ requests/day',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and led code review processes',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed RESTful APIs and database architectures for a fast-growing fintech startup. Collaborated with frontend teams to deliver seamless user experiences.',
      achievements: [
        'Designed database schemas for financial data processing',
        'Integrated third-party payment gateways and APIs',
        'Optimized database queries improving response time by 35%',
      ],
    },
    {
      title: 'Junior Full Stack Developer',
      company: 'WebSolutions Ltd.',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Started career developing full-stack web applications with focus on backend technologies. Gained experience in Node.js, Express, and database management.',
      achievements: [
        'Built and deployed 15+ web applications',
        'Learned modern development practices and tools',
        'Contributed to open-source projects',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  
                  <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-400 mb-2">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-blue-400 font-medium">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-400 flex items-start space-x-2">
                            <span className="text-blue-400 mt-1.5 w-2 h-2 rounded-full bg-current flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;