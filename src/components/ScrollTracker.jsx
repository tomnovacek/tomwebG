import { useEffect, useRef } from 'react'
import { useAnalytics } from '../hooks/useAnalytics'

const ScrollTracker = () => {
  const { trackScrollDepth } = useAnalytics()
  const trackedDepths = useRef(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)

      // Track scroll depth at 25%, 50%, 75%, and 100%
      const depths = [25, 50, 75, 100]
      
      depths.forEach(depth => {
        if (scrollPercentage >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth)
          trackScrollDepth(depth)
        }
      })
    }

    // Throttle scroll events for performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [trackScrollDepth])

  // Reset tracked depths on route change
  useEffect(() => {
    trackedDepths.current.clear()
  }, [])

  return null // This component doesn't render anything
}

export default ScrollTracker 