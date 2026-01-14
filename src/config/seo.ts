// SEO Configuration
// TODO: Replace 'https://your-domain.com' with your actual domain before deployment
export const SEO_CONFIG = {
  siteUrl: 'https://your-domain.com', // Replace with your actual domain
  siteName: '繆勝翔 (Cuzo) - Resume',
  defaultImage: '/assets/avatar.png',
  twitterHandle: '@cuzo989874', // Optional: Add your Twitter handle if you have one
  author: '繆勝翔 (Cuzo)',
};

// Helper function to get full URL
export function getFullUrl(path: string = ''): string {
  const baseUrl = SEO_CONFIG.siteUrl.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

// Helper function to get image URL
export function getImageUrl(imagePath: string = SEO_CONFIG.defaultImage): string {
  return getFullUrl(imagePath);
}
