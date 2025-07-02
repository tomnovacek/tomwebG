// Map size to suffix
const sizeSuffixMap = {
  'xs': '-xs',
  'sm': '-sm',
  'md': '-md',
  'lg': '-lg',
  'xl': '-xl',
  '2xl': '-2xl'
}

export async function getOptimizedImage(source, size = 'md') {
  if (!source) {
    console.warn('No image source provided')
    return null
  }

  try {
    // Handle Promise input
    const resolvedSource = await Promise.resolve(source)
    if (!resolvedSource) return null

    // If the path is already optimized, return it as is
    if (resolvedSource.startsWith('/optimized-images/')) {
      return resolvedSource
    }

    // Clean the source path
    const cleanPath = resolvedSource
      .replace(/^\/assets\/img\//, '') // Remove /assets/img/ prefix
      .replace(/^\/src\/assets\/img\//, '') // Remove /src/assets/img/ prefix
      .replace(/^\/+/, '') // Remove leading slashes
    
    // Extract the base filename without extension and any existing size suffix
    const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
      .replace(/-(xs|sm|md|lg|xl|2xl)$/, '') // Remove only size suffixes

    // Get the size suffix
    const sizeSuffix = sizeSuffixMap[size] || '-md'

    // Try to detect the correct extension from the source
    const extensionMatch = cleanPath.match(/\.(webp|jpg|jpeg|png)$/i)
    const originalExtension = extensionMatch ? extensionMatch[1].toLowerCase() : 'webp'
    
    // Return the original extension without normalization
    const normalizedExtension = originalExtension

    // Return the optimized image path with the correct extension
    return `/optimized-images/${baseFilename}${sizeSuffix}.${normalizedExtension}`
  } catch (error) {
    console.error('Error in getOptimizedImage:', error)
    return null
  }
}

export async function getOptimizedImagePath(source, size = 'md') {
  if (!source) return null

  // If the path is already optimized, return it as is
  if (source.startsWith('/optimized-images/')) {
    return source
  }

  // Clean the source path
  const cleanPath = source
    .replace(/^\/assets\/img\//, '') // Remove /assets/img/ prefix
    .replace(/^\/src\/assets\/img\//, '') // Remove /src/assets/img/ prefix
    .replace(/^\/+/, '') // Remove leading slashes
  
  // Extract the base filename without extension and any existing size suffix
  const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
    .replace(/-(xs|sm|md|lg|xl|2xl)$/, '') // Remove only size suffixes

  // Get the size suffix
  const sizeSuffix = sizeSuffixMap[size] || '-md'

  // Try to detect the correct extension from the source
  const extensionMatch = cleanPath.match(/\.(webp|jpg|jpeg|png)$/i)
  const originalExtension = extensionMatch ? extensionMatch[1].toLowerCase() : 'webp'
  
  // Return the original extension without normalization
  const normalizedExtension = originalExtension

  // Return the optimized image path with the correct extension
  return `/optimized-images/${baseFilename}${sizeSuffix}.${normalizedExtension}`
} 