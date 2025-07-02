import { useEffect, useCallback } from 'react'
import { useLocation } from '@gatsbyjs/reach-router'
import analytics from '../utils/analytics'

export const useAnalytics = () => {
  const location = useLocation()

  // Initialize analytics on mount
  useEffect(() => {
    analytics.init()
  }, [])

  // Track page views on route changes
  useEffect(() => {
    if (analytics.isLoaded) {
      analytics.trackPageView(location.pathname, document.title)
    }
  }, [location.pathname])

  // Track button clicks
  const trackButtonClick = useCallback((buttonName, location = 'unknown') => {
    analytics.trackButtonClick(buttonName, location)
  }, [])

  // Track form submissions
  const trackFormSubmission = useCallback((formName, success = true) => {
    analytics.trackFormSubmission(formName, success)
  }, [])

  // Track external link clicks
  const trackExternalLink = useCallback((url, linkText) => {
    analytics.trackExternalLink(url, linkText)
  }, [])

  // Track custom events
  const trackEvent = useCallback((eventName, parameters = {}) => {
    analytics.trackEvent(eventName, parameters)
  }, [])

  // Track scroll depth
  const trackScrollDepth = useCallback((depth) => {
    analytics.trackScrollDepth(depth)
  }, [])

  // Track time on page
  const trackTimeOnPage = useCallback((timeSpent) => {
    analytics.trackTimeOnPage(timeSpent)
  }, [])

  return {
    trackButtonClick,
    trackFormSubmission,
    trackExternalLink,
    trackEvent,
    trackScrollDepth,
    trackTimeOnPage
  }
} 