'use client';
import { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';
import { Project } from '../../types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = 'unset';
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl transition-all duration-200 transform ${
        isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
      } overflow-hidden`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <X size={20} className="text-gray-600 dark:text-gray-300" />
        </button>

        {/* Project Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop';
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              {project.featured && (
                <span className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-semibold rounded-full">
                  Featured
                </span>
              )}
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg text-gray-200 max-w-2xl">{project.description}</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-320px)]">
          
          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Left Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h3>
              
              {project.longDescription && (
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              )}

              {/* Project Metadata */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Calendar size={16} />
                  <span>Completed: {new Date(project.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Tag size={16} />
                  <span>Category: {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg border border-blue-200 dark:border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Links</h3>
                
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200 group"
                  >
                    <ExternalLink size={18} className="text-green-600 dark:text-green-400" />
                    <span className="text-green-700 dark:text-green-300 font-medium">View Live Demo</span>
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                  >
                    <Github size={18} className="text-gray-600 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">View Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              Close
            </button>
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-center"
              >
                Visit Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 