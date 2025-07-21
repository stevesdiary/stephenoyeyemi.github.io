import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">
                Let's work together
              </h3>
              
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400">stephenoyeyemi@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-400">+2348065976770</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400">Lagos, NG</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-white font-medium mb-4">Follow me on:</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/stevesdiary"
                    className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                  >
                    <Github className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/stephenoyeyemi"
                    className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://x.com/stevesdiary_"
                    className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;