// Utility functions for fetching GitHub repository data

export interface GitHubReadme {
  content: string;
  encoding: string;
  download_url: string;
}

// Simple cache to avoid repeated API calls
const readmeCache = new Map<string, string>();

export async function fetchGitHubReadme(repoUrl: string): Promise<string | null> {
  // Check cache first
  if (readmeCache.has(repoUrl)) {
    console.log('Using cached content for:', repoUrl);
    return readmeCache.get(repoUrl) || null;
  }

  try {
    // Extract owner and repo from GitHub URL
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) {
      console.warn('Invalid GitHub URL:', repoUrl);
      return null;
    }

    const [, owner, repo] = match;
    console.log(`Fetching content for ${owner}/${repo}`);
    
    // Try to fetch PORTFOLIO files first, then fall back to README
    const fileVariants = ['PORTFOLIO.md', 'PORTFOLIO', 'portfolio.md', 'portfolio', 'README.md', 'README', 'readme.md'];
    
    for (const filename of fileVariants) {
      try {
        console.log(`Trying to fetch ${filename} for ${owner}/${repo}`);
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contents/${filename}`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'User-Agent': 'Portfolio-App'
            }
          }
        );

        if (response.ok) {
          console.log(`Successfully found ${filename} for ${owner}/${repo}`);
          const data: GitHubReadme = await response.json();
          
          // Decode base64 content
          if (data.encoding === 'base64') {
            const decodedContent = atob(data.content);
            console.log(`Content length: ${decodedContent.length} characters`);
            // Cache the result
            readmeCache.set(repoUrl, decodedContent);
            return decodedContent;
          }
        } else {
          console.log(`File ${filename} not found for ${owner}/${repo} (${response.status})`);
        }
      } catch (error) {
        console.warn(`Failed to fetch ${filename} for ${owner}/${repo}:`, error);
        continue;
      }
    }
    
    console.warn(`No PORTFOLIO or README found for ${owner}/${repo}`);
    return null;
  } catch (error) {
    console.error('Error fetching GitHub content:', error);
    return null;
  }
}

export function cleanReadmeContent(content: string): string {
  if (!content) return '';
  
  // Remove markdown formatting that might not render well in HTML
  const cleaned = content
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // Remove headers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove images
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    // Remove horizontal rules
    .replace(/^---$/gm, '')
    // Remove list markers
    .replace(/^[\s]*[-*+]\s+/gm, '• ')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
  
  return cleaned;
}

export function formatDescriptionForDisplay(content: string): string {
  if (!content) return '';
  
  // Convert newlines to HTML line breaks for proper display
  return content
    .replace(/\n/g, '<br>')
    .replace(/<br><br><br>/g, '<br><br>') // Clean up multiple consecutive line breaks
    .trim();
}

export async function getProjectDescription(githubUrl: string, fallbackDescription: string): Promise<string> {
  if (!githubUrl) {
    console.log('No GitHub URL provided, using fallback description');
    return fallbackDescription;
  }

  console.log('Getting project description for:', githubUrl);
  try {
    const readmeContent = await fetchGitHubReadme(githubUrl);
    if (readmeContent) {
      console.log('Found content, cleaning and processing...');
      const cleanedContent = cleanReadmeContent(readmeContent);
      console.log('Cleaned content length:', cleanedContent.length);
      // Limit to reasonable length for portfolio display
      const maxLength = 1000;
      if (cleanedContent.length > maxLength) {
        console.log('Content truncated to', maxLength, 'characters');
        return cleanedContent.substring(0, maxLength) + '...';
      }
      console.log('Returning cleaned content');
      return cleanedContent;
    } else {
      console.log('No content found, using fallback description');
    }
  } catch (error) {
    console.error('Error getting project description:', error);
  }

  console.log('Using fallback description');
  return fallbackDescription;
} 