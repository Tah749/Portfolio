'use client';
import { Code, Database, Smartphone, Palette, Server, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'React/Next.js', level: 90, icon: Code, color: 'from-blue-500 to-blue-600' },
    { name: 'Node.js/Express', level: 85, icon: Server, color: 'from-green-500 to-green-600' },
    { name: 'TypeScript', level: 88, icon: Code, color: 'from-blue-600 to-blue-700' },
    { name: 'MongoDB/PostgreSQL', level: 80, icon: Database, color: 'from-purple-500 to-purple-600' },
    { name: 'Mobile Development', level: 75, icon: Smartphone, color: 'from-orange-500 to-orange-600' },
    { name: 'UI/UX Design', level: 70, icon: Palette, color: 'from-pink-500 to-pink-600' },
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker']
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      description: 'Built and maintained multiple web applications, focusing on user experience and performance.',
      technologies: ['React', 'Express', 'MongoDB', 'Redis']
    },
    {
      year: '2020 - 2021',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Developed responsive websites and web applications for various clients.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-orange-400/10 to-red-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            About Me
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Turning Ideas Into <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Reality</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate full-stack developer with a love for creating innovative solutions. 
            With expertise in modern web technologies, I bring ideas to life through clean code and exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I started my journey in web development over 3 years ago, and since then, I&apos;ve had the privilege 
                of working on diverse projects that have shaped my expertise. From small business websites to 
                complex enterprise applications, I&apos;ve learned that great software is built on a foundation of 
                clean code, user-centered design, and scalable architecture.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in continuous learning and staying 
                up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg shadow-lg`}>
                            <IconComponent size={20} className="text-white" />
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.title} className="relative group">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Content */}
                  <div className="ml-12 p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                        {experience.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {experience.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {experience.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-lg">
            <Zap className="w-8 h-8 text-blue-600" />
            <div className="text-left">
              <h4 className="font-bold text-gray-900 dark:text-white">Ready to work together?</h4>
              <p className="text-gray-600 dark:text-gray-300">Let&apos;s discuss your next project</p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 