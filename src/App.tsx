import React from 'react';
import { Github, Twitter, Linkedin, Mail, Menu, Minus, X, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8 flex items-center justify-center"
         style={{
           backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}>
      {/* Main Window Container */}
      <div className="w-full max-w-4xl backdrop-blur-xl bg-white/10 rounded-xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/20 border-b border-white/10">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-white/80 text-sm">about.jsx</div>
          <div className="w-8"></div>
        </div>

        {/* Content Area */}
        <div className="p-8 text-white">
          <div className="grid md:grid-cols-[300px,1fr] gap-8">
            {/* Profile Section */}
            <div className="text-center md:text-left">
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white/20 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <p className="text-white/80 mb-4">Senior Software Engineer</p>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4 mb-6">
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">About Me</h2>
                <p className="text-white/80 leading-relaxed">
                  I'm a passionate software engineer with over 5 years of experience in building web applications.
                  I specialize in React, TypeScript, and modern web technologies. When I'm not coding,
                  you can find me exploring new technologies, contributing to open-source projects,
                  or writing technical blog posts.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'Next.js', 'PostgreSQL', 'AWS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Current Project</h2>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Project Name</h3>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <p className="text-white/70 text-sm">
                    A modern web application built with React and TypeScript, featuring real-time data
                    synchronization and a beautiful user interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;