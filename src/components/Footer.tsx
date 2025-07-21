import React from 'react';
import { Code, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">DevPortfolio</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Passionate Node.js backend developer creating scalable solutions 
                and robust server-side applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">API Development</li>
                <li className="text-gray-400">Database Design</li>
                <li className="text-gray-400">Cloud Deployment</li>
                <li className="text-gray-400">Performance Optimization</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 John Doe. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;