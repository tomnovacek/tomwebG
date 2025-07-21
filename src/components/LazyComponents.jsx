import React, { Suspense } from 'react'
import { Box, Spinner, Center } from '@chakra-ui/react'

// Lazy load heavy components
export const LazyBlogCard = React.lazy(() => import('./BlogCard'))
export const LazyAboutCard = React.lazy(() => import('./AboutCard'))
export const LazyMap = React.lazy(() => import('./Map'))
export const LazyCookieConsent = React.lazy(() => import('./CookieConsent'))

// Loading fallback component
const LoadingFallback = ({ height = "200px" }) => (
  <Center height={height}>
    <Spinner size="lg" color="green.400" />
  </Center>
)

// Wrapper component for lazy loading
export const LazyComponent = ({ component: Component, fallback, ...props }) => (
  <Suspense fallback={fallback || <LoadingFallback />}>
    <Component {...props} />
  </Suspense>
)

// Preload critical components
export const preloadCriticalComponents = () => {
  // Preload components that are likely to be needed soon
  const preloadComponent = (importFn) => {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = importFn.toString()
    document.head.appendChild(link)
  }

  // Preload critical components after page load
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloadComponent(() => import('./BlogCard'))
        preloadComponent(() => import('./AboutCard'))
      }, 1000)
    })
  }
} 