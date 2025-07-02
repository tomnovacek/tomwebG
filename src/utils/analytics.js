// Google Analytics 4 implementation with performance optimization
class Analytics {
  constructor() {
    // Use Gatsby environment variables instead of Vite
    this.measurementId = process.env.GATSBY_GA_MEASUREMENT_ID
    
    // If no measurement ID is provided, disable analytics
    if (!this.measurementId) {
      console.warn('Google Analytics Measurement ID not found. Set GATSBY_GA_MEASUREMENT_ID in your environment variables to enable analytics.')
      this.disabled = true
      return
    }
    
    this.isLoaded = false
    this.isInitializing = false
    this.queue = []
    
    // Global flag to prevent duplicate loading
    if (typeof window !== 'undefined' && window.__GA4_INITIALIZED__) {
      this.isLoaded = true
      return
    }
  }

  // Initialize GA4 asynchronously with duplicate prevention
  init() {
    if (this.disabled) return
    if (!this.measurementId || this.isLoaded || this.isInitializing) return
    
    // Check if gtag is already loaded by another source
    if (window.gtag && typeof window.gtag === 'function') {
      console.log('GA4 already loaded by another source, using existing instance')
      this.isLoaded = true
      window.__GA4_INITIALIZED__ = true
      this.processQueue()
      return
    }

    this.isInitializing = true

    // Check if script is already being loaded
    const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)
    if (existingScript) {
      console.log('GA4 script already loading, waiting for completion')
      existingScript.addEventListener('load', () => {
        this.setupGA()
      })
      return
    }

    // Load GA4 script asynchronously
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`
    script.onload = () => {
      this.setupGA()
    }
    script.onerror = () => {
      console.error('Failed to load GA4 script')
      this.isInitializing = false
    }
    document.head.appendChild(script)
  }

  // Setup GA4 after script loads
  setupGA() {
    // Double-check if gtag is already defined
    if (typeof window.gtag === 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
    }

    // Initialize GA4 only if not already configured
    if (!window.dataLayer.some(item => item[0] === 'config' && item[1] === this.measurementId)) {
      window.gtag('js', new Date())
      window.gtag('config', this.measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false // We'll send page views manually for better control
      })
    }

    this.isLoaded = true
    this.isInitializing = false
    window.__GA4_INITIALIZED__ = true

    // Process queued events
    this.processQueue()
  }

  // Queue events if GA4 isn't loaded yet
  queueEvent(eventName, parameters = {}) {
    if (this.disabled) return
    if (this.isLoaded) {
      this.sendEvent(eventName, parameters)
    } else {
      this.queue.push({ eventName, parameters })
    }
  }

  // Process queued events
  processQueue() {
    while (this.queue.length > 0) {
      const { eventName, parameters } = this.queue.shift()
      this.sendEvent(eventName, parameters)
    }
  }

  // Send event to GA4
  sendEvent(eventName, parameters = {}) {
    if (this.disabled) return
    if (!this.isLoaded || !window.gtag) return

    window.gtag('event', eventName, {
      ...parameters,
      event_timeout: 2000 // 2 second timeout
    })
  }

  // Track page view
  trackPageView(path = window.location.pathname, title = document.title) {
    this.queueEvent('page_view', {
      page_title: title,
      page_location: window.location.origin + path,
      page_path: path
    })
  }

  // Track custom events
  trackEvent(eventName, parameters = {}) {
    this.queueEvent(eventName, parameters)
  }

  // Track button clicks
  trackButtonClick(buttonName, location = 'unknown') {
    this.trackEvent('button_click', {
      button_name: buttonName,
      location: location
    })
  }

  // Track form submissions
  trackFormSubmission(formName, success = true) {
    this.trackEvent('form_submit', {
      form_name: formName,
      success: success
    })
  }

  // Track external link clicks
  trackExternalLink(url, linkText) {
    this.trackEvent('external_link_click', {
      link_url: url,
      link_text: linkText
    })
  }

  // Track scroll depth
  trackScrollDepth(depth) {
    this.trackEvent('scroll_depth', {
      depth: depth
    })
  }

  // Track time on page
  trackTimeOnPage(timeSpent) {
    this.trackEvent('time_on_page', {
      time_spent: timeSpent
    })
  }
}

// Create singleton instance
const analytics = new Analytics()

export default analytics 