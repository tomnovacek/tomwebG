export async function getOptimizedImagePath(originalPath, size = 'md') {
  // Map size to suffix
  const sizeSuffixMap = {
    'xs': '-xs',
    'sm': '-sm',
    'md': '-md',
    'lg': '-lg',
    'xl': '-xl',
    '2xl': '-2xl'
  }

  // Clean the path
  const cleanPath = originalPath
    .replace(/^\/assets\/img\//, '') // Remove /assets/img/ prefix
    .replace(/^\/src\/assets\/img\//, '') // Remove /src/assets/img/ prefix
    .replace(/^\/+/, '') // Remove leading slashes
  
  // Extract the base filename without extension and any existing size suffix
  const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
    .replace(/-(xs|sm|md|lg|xl|2xl)$/, '') // Remove only size suffixes

  // Get the size suffix
  const sizeSuffix = sizeSuffixMap[size] || '-md'

  // Return the optimized image path
  return `/optimized-images/${baseFilename}${sizeSuffix}.webp`
}

export async function getResponsiveImageProps(originalPath) {
  // Clean the path - remove any leading slashes and assets/img prefix
  const cleanPath = originalPath.replace(/^\/+/, '').replace(/^assets\/img\//, '');
  
  // For now, return a simple structure without manifest
  return {
    src: `/assets/img/${cleanPath}`,
    srcSet: '',
    sizes: '',
    width: 380,
    height: 254
  };
} 