import React, { useState, useEffect } from 'react'
import { Box, Image, Skeleton } from '@chakra-ui/react'

// Critical image component optimized for LCP
export default function CriticalImage({ src, alt, fallbackSrc, size = 'md', ...props }) {
  const [currentSrc, setCurrentSrc] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    // For critical images, construct the optimized path immediately
    const loadCriticalImage = () => {
      try {
        // Clean the source path
        const cleanPath = src
          .replace(/^\/assets\/img\//, '')
          .replace(/^\/src\/assets\/img\//, '')
          .replace(/^\/+/, '')
        
        // Extract the base filename without extension
        const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
        
        // Construct the optimized path immediately
        const optimizedPath = `/optimized-images/${baseFilename}-${size}.webp`
        
        // Set the optimized path immediately for critical images
        setCurrentSrc(optimizedPath)
      } catch (err) {
        console.error('Error constructing critical image path:', err)
        // Fallback to original source
        setCurrentSrc(src.startsWith('/') ? src : `/src/assets/img/${src}`)
      }
    }

    // Load immediately for critical images
    loadCriticalImage()
  }, [src, size])

  // Handle image load error
  const handleError = () => {
    console.warn('Critical image failed to load:', currentSrc)
    
    // Try fallback if available and different from current
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    } else {
      // Try original source as last resort
      const originalSrc = src.startsWith('/') ? src : `/src/assets/img/${src}`
      if (currentSrc !== originalSrc) {
        setCurrentSrc(originalSrc)
      } else {
        setError(true)
      }
    }
  }

  if (error) {
    return (
      <Box
        bg="gray.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        <Box textAlign="center" p={4}>
          <Box color="gray.500">Image not found</Box>
          <Box fontSize="sm" color="gray.400">{alt}</Box>
        </Box>
      </Box>
    )
  }

  return (
    <Image
      src={currentSrc || `/src/assets/img/${src}`}
      alt={alt}
      loading="eager"
      fetchpriority="high"
      decoding="sync"
      onError={handleError}
      {...props}
    />
  )
} 