import React from 'react'

// Static hero image component optimized for LCP
export default function HeroImage({ 
  src, 
  alt, 
  className = "", 
  style = {},
  sizes = "(max-width: 480px) 100vw, (max-width: 768px) 100vw, 100vw",
  priority = true,
  fallbackSrc,
  ...props 
}) {
  // Extract base filename for responsive images
  const getBaseFilename = (imagePath) => {
    const cleanPath = imagePath
      .replace(/^\/assets\/img\//, '')
      .replace(/^\/src\/assets\/img\//, '')
      .replace(/^\/+/, '')
    return cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
  }

  // Detect the correct file extension
  const getFileExtension = (imagePath) => {
    const cleanPath = imagePath
      .replace(/^\/assets\/img\//, '')
      .replace(/^\/src\/assets\/img\//, '')
      .replace(/^\/+/, '')
    
    const extensionMatch = cleanPath.match(/\.(webp|jpg|jpeg|png)$/i)
    const originalExtension = extensionMatch ? extensionMatch[1].toLowerCase() : 'webp'
    
    // Return the original extension without normalization
    return originalExtension
  }

  const baseFilename = getBaseFilename(src)
  const fileExtension = getFileExtension(src)
  
  // Generate responsive srcset for different viewport sizes
  const srcSet = [
    `/optimized-images/${baseFilename}-xs.${fileExtension} 150w`,
    `/optimized-images/${baseFilename}-sm.${fileExtension} 300w`,
    `/optimized-images/${baseFilename}-md.${fileExtension} 400w`,
    `/optimized-images/${baseFilename}-lg.${fileExtension} 800w`,
    `/optimized-images/${baseFilename}-xl.${fileExtension} 1200w`,
    `/optimized-images/${baseFilename}-2xl.${fileExtension} 1600w`
  ].join(', ')

  // Use sm size as default for fastest loading (was md)
  const defaultSrc = `/optimized-images/${baseFilename}-sm.${fileExtension}`

  const handleError = (e) => {
    console.warn('Hero image failed to load:', defaultSrc)
    if (fallbackSrc && e.target.src !== fallbackSrc) {
      e.target.src = fallbackSrc
    }
  }

  return (
    <img
      src={defaultSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchpriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={`hero-image ${className}`}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style
      }}
      onError={handleError}
      {...props}
    />
  )
} 