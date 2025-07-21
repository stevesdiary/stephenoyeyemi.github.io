// import React from 'react';
import { User, MapPin, Calendar, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl mb-8 max-w-sm mx-auto md:mx-0">
                <div className="bg-gray-800 rounded-2xl p-4">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Profile"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-gray-300">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Backend Developer & Problem Solver
              </h3>
              
              <p className="mb-6 text-lg leading-relaxed">
                With over 5 years of experience in backend development, I specialize in creating 
                robust, scalable server-side applications using Node.js and modern technologies. 
                I'm passionate about clean code, performance optimization, and building systems 
                that can handle millions of requests.
              </p>
              
              <p className="mb-8 text-lg leading-relaxed">
                My expertise spans across RESTful API development, database design, microservices 
                architecture, and cloud deployment. I believe in continuous learning and staying 
                updated with the latest industry trends and best practices.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-blue-400" />
                  <span>Stephen Oyeyemi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="h-5 w-5 text-orange-400" />
                  <span>Coffee Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;