'use client';
import { Code, Database, Smartphone, Palette, Server, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'React/Next.js', icon: Code, color: 'from-blue-500 to-blue-600' },
    { name: 'Node.js/Express', icon: Server, color: 'from-green-500 to-green-600' },
    { name: 'TypeScript', icon: Code, color: 'from-blue-600 to-blue-700' },
    { name: 'Java', icon: Code, color: 'from-orange-500 to-orange-600' },
    { name: 'Python', icon: Code, color: 'from-yellow-500 to-yellow-600' },
    { name: 'MongoDB/PostgreSQL', icon: Database, color: 'from-purple-500 to-purple-600' },
    { name: 'Mobile Development', icon: Smartphone, color: 'from-pink-500 to-pink-600' },
    { name: 'UI/UX Design', icon: Palette, color: 'from-indigo-500 to-indigo-600' },
  ];

  const experiences = [
    {
      year: '2024 - Present',
      title: 'Full Stack Developer',
      company: 'Personal Projects & Freelance',
      description: 'Building modern web applications and mobile apps using React, Next.js, TypeScript, and Flutter. Focused on creating intuitive user experiences and scalable solutions.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Flutter']
    },
    {
      year: '2023 - 2024',
      title: 'Student Developer',
      company: 'Newcastle University',
      description: 'Developed projects for coursework and personal learning, including fantasy football platforms, data visualization tools, and mobile applications.',
      technologies: ['JavaScript', 'Python', 'React', 'Node.js']
    },
    {
      year: '2022 - 2023',
      title: 'Open Source Contributor',
      company: 'GitHub Community',
      description: 'Contributed to various open-source projects, built personal projects, and collaborated with other developers in the community.',
      technologies: ['JavaScript', 'Python', 'Git', 'GitHub']
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
                I&apos;ve been passionate about coding since 2018, starting with simple HTML and CSS projects. Over the past 6 years, 
                I&apos;ve evolved from building basic websites to creating full-stack applications, mobile apps, and data visualization tools. 
                My journey has taken me through various technologies - from JavaScript and Python to React, Next.js, and Flutter.
              </p>
                             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                 Currently studying at Newcastle University, I&apos;ve had the opportunity to work on diverse projects like fantasy football platforms, 
                 Discord bots, and AI-powered applications. Each project has taught me something new about clean code, user experience, 
                 and scalable architecture. When I&apos;m not coding, you&apos;ll find me exploring new technologies and contributing to open-source projects.
               </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="group p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg shadow-lg`}>
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
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
                Development Journey
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