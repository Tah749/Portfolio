'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, MapPin, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Project } from '../../../types/project';
import { getProjects } from '../../../utils/data';

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const projects = await getProjects();
        const foundProject = projects.find(p => p.id === params.id);
        if (foundProject) {
          setProject(foundProject);
        } else {
          router.push('/#projects');
        }
      } catch (error) {
        console.error('Error loading project:', error);
        router.push('/#projects');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      loadProject();
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h1>
          <button
            onClick={() => router.push('/#projects')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/#projects')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>
            
            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github size={16} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop';
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Project Info */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-4">
              {project.featured && (
                <span className="px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-semibold rounded-full">
                  Featured Project
                </span>
              )}
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
              
              {project.longDescription && (
                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </div>
              )}

              {/* Project Metadata */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Calendar size={20} />
                  <div>
                    <p className="font-medium">Completed</p>
                    <p>{new Date(project.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Tag size={20} />
                  <div>
                    <p className="font-medium">Category</p>
                    <p>{project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                  </div>
                </div>
              </div>
            </div>

                         {/* Technologies */}
             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
               <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Technologies Used</h2>
               <div className="flex flex-wrap gap-3">
                 {project.technologies.map((tech, index) => (
                   <span
                     key={index}
                     className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg border border-blue-200 dark:border-blue-800"
                   >
                     {tech}
                   </span>
                 ))}
               </div>
             </div>

             {/* Photo Gallery */}
             {project.photos && project.photos.length > 0 && (
               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Gallery</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {project.photos.map((photo, index) => (
                     <div
                       key={index}
                       className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                       onClick={() => setSelectedPhotoIndex(index)}
                     >
                       <div className="relative aspect-video overflow-hidden">
                         <img
                           src={photo.url}
                           alt={photo.alt || `Project screenshot ${index + 1}`}
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                           onError={(e) => {
                             e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop';
                           }}
                         />
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                             <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                             </svg>
                           </div>
                         </div>
                       </div>
                       {photo.caption && (
                         <div className="p-4">
                           <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">{photo.caption}</p>
                         </div>
                       )}
                     </div>
                   ))}
                 </div>
               </div>
             )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Project Links */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200 group"
                    >
                      <ExternalLink size={20} className="text-green-600 dark:text-green-400" />
                      <div>
                        <p className="text-green-700 dark:text-green-300 font-medium">View Live Demo</p>
                        <p className="text-green-600 dark:text-green-400 text-sm">Open in new tab</p>
                      </div>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                    >
                      <Github size={20} className="text-gray-600 dark:text-gray-300" />
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">View Source Code</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Open in new tab</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => router.push('/#projects')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Back to Projects
                  </button>
                  
                  <button
                    onClick={() => router.push('/#contact')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <MapPin size={16} />
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
                 </div>
       </div>

       {/* Photo Lightbox Modal */}
       {selectedPhotoIndex !== null && project?.photos && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
           <div className="relative w-full max-w-6xl max-h-[90vh]">
             {/* Close Button */}
             <button
               onClick={() => setSelectedPhotoIndex(null)}
               className="absolute top-4 right-4 z-10 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
             >
               <X size={24} className="text-gray-600 dark:text-gray-300" />
             </button>

             {/* Navigation Buttons */}
             {project.photos.length > 1 && (
               <>
                 <button
                   onClick={() => setSelectedPhotoIndex((selectedPhotoIndex - 1 + project.photos.length) % project.photos.length)}
                   className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                 >
                   <ChevronLeft size={24} className="text-gray-600 dark:text-gray-300" />
                 </button>
                 <button
                   onClick={() => setSelectedPhotoIndex((selectedPhotoIndex + 1) % project.photos.length)}
                   className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                 >
                   <ChevronRight size={24} className="text-gray-600 dark:text-gray-300" />
                 </button>
               </>
             )}

             {/* Photo */}
             <div className="relative">
               <img
                 src={project.photos[selectedPhotoIndex].url}
                 alt={project.photos[selectedPhotoIndex].alt || `Project screenshot ${selectedPhotoIndex + 1}`}
                 className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                 onError={(e) => {
                   e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop';
                 }}
               />
               
               {/* Caption */}
               {project.photos[selectedPhotoIndex].caption && (
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                   <p className="text-white text-lg font-medium">{project.photos[selectedPhotoIndex].caption}</p>
                 </div>
               )}
             </div>

             {/* Photo Counter */}
             {project.photos.length > 1 && (
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
                 <p className="text-white text-sm font-medium">
                   {selectedPhotoIndex + 1} of {project.photos.length}
                 </p>
               </div>
             )}
           </div>
         </div>
       )}
     </div>
   );
 } 