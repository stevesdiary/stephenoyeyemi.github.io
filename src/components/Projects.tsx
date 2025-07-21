import React from 'react';
import { ExternalLink, Github, Server, Database, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce API',
      description: 'A scalable RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB. Features include user authentication, product management, order processing, and payment integration.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API'],
      icon: <Server className="h-8 w-8" />,
      github: '',
      live: '#',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Real-time Chat System',
      description: 'A real-time messaging application backend using Socket.io, Redis for session management, and PostgreSQL for message persistence. Supports group chats, file sharing, and message encryption.',
      technologies: ['Node.js', 'Socket.io', 'Redis', 'PostgreSQL', 'JWT'],
      icon: <Database className="h-8 w-8" />,
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Microservices Architecture',
      description: 'A complete microservices setup with API Gateway, user service, product service, and notification service. Deployed using Docker containers and Kubernetes orchestration.',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'NGINX', 'RabbitMQ'],
      icon: <Cloud className="h-8 w-8" />,
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-blue-400">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;