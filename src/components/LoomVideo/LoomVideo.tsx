'use client';
import { Play } from 'lucide-react';

interface LoomVideoProps {
  videoUrl: string;
  title?: string;
  className?: string;
}

export default function LoomVideo({ videoUrl, title, className = '' }: LoomVideoProps) {
  // Extract video ID from Loom URL
  const getVideoId = (url: string) => {
    const match = url.match(/loom\.com\/embed\/([a-zA-Z0-9-]+)/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);
  
  if (!videoId) {
    return (
      <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-600 dark:text-gray-400">Invalid Loom video URL</p>
      </div>
    );
  }

  const embedUrl = `https://www.loom.com/embed/${videoId}`;

  return (
    <div className={`relative ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <Play className="w-5 h-5 mr-2 text-blue-600" />
          {title}
        </h3>
      )}
      
      <div className="relative w-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div className="relative pb-[56.25%] h-0">
          <iframe
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            title={title || "Project Demo Video"}
          />
        </div>
      </div>
      
      <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center">
        Click to play • Powered by Loom
      </div>
    </div>
  );
} 