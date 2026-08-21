import React, { useEffect, useCallback } from 'react'

// Performance optimization utilities
export const usePerformanceOptimizations = () => {
  // Optimize scroll performance
  const optimizeScroll = useCallback(() => {
    if (typeof window === 'undefined') return

    // Use passive event listeners for better scroll performance
    const originalAddEventListener = EventTarget.prototype.addEventListener
    EventTarget.prototype.addEventListener = function(type, listener, options) {
      if (type === 'scroll' || type === 'touchstart' || type === 'touchmove') {
        options = { passive: true, ...options }
      }
      return originalAddEventListener.call(this, type, listener, options)
    }
  }, [])

  // Optimize image loading
  const optimizeImageLoading = useCallback(() => {
    if (typeof window === 'undefined') return

    // Preload critical images
    const criticalImages = [
      '/static/tom1.png',
      '/static/forrest.webp',
      '/static/navbar-icon-96x96.webp'
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, [])

  // Optimize font loading
  const optimizeFontLoading = useCallback(() => {
    if (typeof window === 'undefined') return

    // Preload system fonts
    const fonts = [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto'
    ]

    fonts.forEach(font => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.href = font
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })
  }, [])

  // Optimize resource hints
  const optimizeResourceHints = useCallback(() => {
    if (typeof window === 'undefined') return

    // Add DNS prefetch for external domains
    const externalDomains = [
      'https://www.google.com',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ]

    externalDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = domain
      document.head.appendChild(link)
    })
  }, [])

  useEffect(() => {
    optimizeScroll()
    optimizeImageLoading()
    optimizeFontLoading()
    optimizeResourceHints()
  }, [optimizeScroll, optimizeImageLoading, optimizeFontLoading, optimizeResourceHints])
}

// Performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value)
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    }
  }, [])
}

// Main performance optimizer component
const PerformanceOptimizer = () => {
  usePerformanceOptimizations()
  usePerformanceMonitoring()

  return null // This component doesn't render anything
}

export default PerformanceOptimizer 