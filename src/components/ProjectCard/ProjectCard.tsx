'use client';
import { useRouter } from 'next/navigation';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Image from 'next/image';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  const openProjectDetails = () => {
    console.log('Opening project details for:', project.title);
    router.push(`/projects/${project.id}`);
  };

  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer"
      onClick={openProjectDetails}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop';
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     {project.liveUrl && (
             <a
               href={project.liveUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
               onClick={(e) => e.stopPropagation()}
             >
               <ExternalLink size={20} className="text-gray-800" />
             </a>
           )}
           {project.githubUrl && (
             <a
               href={project.githubUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
               onClick={(e) => e.stopPropagation()}
             >
               <Github size={20} className="text-gray-800" />
             </a>
           )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-semibold rounded-full shadow-lg">
              Featured
            </span>
          </div>
        )}

        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-4 right-4">
            {project.status === 'in-development' && (
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                In Development
              </span>
            )}
            {project.status === 'deprecated' && (
              <span className="px-3 py-1 bg-gradient-to-r from-red-400 to-red-600 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Deprecated
              </span>
            )}
            {project.status === 'completed' && (
              <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Completed
              </span>
            )}
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 relative z-10">
        {/* Category */}
        <div className="mb-3">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

                 {/* Date */}
         <div className="flex items-center justify-between mb-4">
           <span className="text-xs text-gray-500 dark:text-gray-400">
             {new Date(project.date).toLocaleDateString('en-US', { 
               year: 'numeric', 
               month: 'short' 
             })}
           </span>
         </div>
         
                   {/* View Details Button - Full Width */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Button clicked!');
              openProjectDetails();
            }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group relative z-20 px-4 py-3 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
            type="button"
          >
            <Eye size={16} className="group-hover:scale-110 transition-transform duration-200" />
            View Details
          </button>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-orange-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-orange-600/20 transition-all duration-500 pointer-events-none z-0"></div>
    </div>
  );
} 