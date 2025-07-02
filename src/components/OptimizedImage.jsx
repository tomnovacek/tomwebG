import { Box, Image, Skeleton } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { getOptimizedImage } from '../utils/getOptimizedImage'

export default function OptimizedImage({ src, alt, priority, ...props }) {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true)
        setError(false)
        
        // For priority images, try to use optimized path immediately
        if (priority) {
          // Try to construct optimized path directly for LCP images
          const cleanPath = src
            .replace(/^\/assets\/img\//, '')
            .replace(/^\/src\/assets\/img\//, '')
            .replace(/^\/+/, '')
          
          const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
          const extensionMatch = cleanPath.match(/\.(webp|jpg|jpeg|png)$/i)
          const originalExtension = extensionMatch ? extensionMatch[1].toLowerCase() : 'webp'
          
          const optimizedPath = `/optimized-images/${baseFilename}-lg.${originalExtension}`
          
          // Check if optimized image exists
          try {
            const response = await fetch(optimizedPath, { method: 'HEAD' })
            if (response.ok) {
              setImageSrc(optimizedPath)
              setIsLoading(false)
              return
            }
          } catch (e) {
            // Fall back to async loading
          }
        }
        
        // If the path is already optimized, use it directly
        if (src.startsWith('/assets/optimized-images/')) {
          setImageSrc(src)
          setIsLoading(false)
          return
        }
        
        // Always use optimized images, regardless of environment
        const optimizedSrc = await getOptimizedImage(src)
        
        if (!optimizedSrc) {
          throw new Error('Failed to get optimized image path')
        }

        // Try to load the optimized image, with fallback to original size
        try {
          const response = await fetch(optimizedSrc, { method: 'HEAD' })
          if (response.ok) {
            setImageSrc(optimizedSrc)
          } else {
            // Fallback: try to load the original image without size suffix
            const cleanPath = src
              .replace(/^\/assets\/img\//, '')
              .replace(/^\/src\/assets\/img\//, '')
              .replace(/^\/+/, '')
            
            const baseFilename = cleanPath.replace(/\.(webp|jpg|jpeg|png)$/, '')
            const extensionMatch = cleanPath.match(/\.(webp|jpg|jpeg|png)$/i)
            const originalExtension = extensionMatch ? extensionMatch[1].toLowerCase() : 'webp'
            
            const fallbackPath = `/optimized-images/${baseFilename}.${originalExtension}`
            setImageSrc(fallbackPath)
          }
        } catch (fetchError) {
          // If fetch fails, use the optimized path anyway
          setImageSrc(optimizedSrc)
        }

        setIsLoading(false)
      } catch (err) {
        console.error('Error loading image:', err)
        setError(true)
        setIsLoading(false)
      }
    }

    loadImage()
  }, [src, priority])

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
    <Box position="relative" {...props}>
      {isLoading && (
        <Skeleton
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={1}
        />
      )}
      <Image
        src={imageSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        onError={() => {
          console.error('Failed to load image:', imageSrc)
          setError(true)
          setIsLoading(false)
        }}
        onLoad={() => {
          setIsLoading(false)
        }}
        {...props}
        style={{
          ...props.style,
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </Box>
  )
} 