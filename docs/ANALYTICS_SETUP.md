# Google Analytics Setup Guide

This project includes a performance-optimized Google Analytics 4 implementation that loads asynchronously and doesn't impact page speed.

## Setup Instructions

### 1. Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use an existing one
3. Go to **Admin** → **Data Streams** → **Web**
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Add Environment Variable

Create a `.env` file in the root directory and add:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

**Note**: The `.env` file should be in your `.gitignore` to keep your Measurement ID private.

### 3. Deploy

The analytics will automatically start tracking once deployed with the environment variable.

## Features

### Automatic Tracking
- ✅ Page views on route changes
- ✅ Scroll depth (25%, 50%, 75%, 100%)
- ✅ Button clicks (when using `AnalyticsButton`)
- ✅ Form submissions
- ✅ External link clicks
- ✅ Time on page

### Performance Optimizations
- ✅ Asynchronous loading (doesn't block page render)
- ✅ Event queuing (events tracked even before GA loads)
- ✅ Throttled scroll tracking
- ✅ Preconnect hints for faster loading
- ✅ 2-second timeout for events
- ✅ Proper Router context integration

### Privacy Features
- ✅ Respects user privacy settings
- ✅ No tracking in development mode (optional)
- ✅ Configurable data collection

## Usage

### Track Button Clicks

```jsx
import AnalyticsButton from '../components/AnalyticsButton'

<AnalyticsButton
  buttonName="contact_button"
  location="homepage"
  onClick={handleClick}
>
  Contact Us
</AnalyticsButton>
```

### Track Custom Events

```jsx
import { useAnalytics } from '../hooks/useAnalytics'

const { trackEvent } = useAnalytics()

// Track a custom event
trackEvent('video_play', {
  video_title: 'Introduction Video',
  video_duration: 120
})
```

### Track Form Submissions

```jsx
const { trackFormSubmission } = useAnalytics()

const handleSubmit = (formData) => {
  // Submit form
  submitForm(formData)
  
  // Track the submission
  trackFormSubmission('contact_form', true)
}
```

## Events Tracked

### Page Views
- Automatically tracked on route changes
- Includes page title and URL

### Button Clicks
- Button name and location
- Use `AnalyticsButton` component for automatic tracking

### Scroll Depth
- 25%, 50%, 75%, 100% scroll milestones
- Throttled for performance

### Custom Events
- Any custom event with parameters
- Use `trackEvent()` function

## Performance Impact

- **Zero impact on initial page load** - GA loads asynchronously
- **Minimal impact on user interaction** - events are queued and sent in batches
- **Optimized scroll tracking** - uses `requestAnimationFrame` for smooth performance
- **Preconnect hints** - faster connection to GA servers
- **Proper Router integration** - analytics initialized inside Router context

## Testing

### Development Mode
Analytics will work in development, but you can disable it by not setting the environment variable.

### Production Testing
1. Deploy with the environment variable
2. Check Google Analytics Real-Time reports
3. Verify events are being received

## Troubleshooting

### Events Not Appearing
1. Check that `VITE_GA_MEASUREMENT_ID` is set correctly
2. Verify the Measurement ID in Google Analytics
3. Check browser console for errors
4. Ensure the domain is added to GA4 property settings

### Performance Issues
1. Analytics loads asynchronously, so it shouldn't impact performance
2. If you see performance issues, check the browser's Network tab
3. Ensure preconnect hints are working

### Router Context Errors
- Analytics components are now properly integrated inside the Router context
- The `useAnalytics` hook is called within the layout components
- No more "useLocation() may be used only in the context of a Router" errors

## Privacy Compliance

This implementation:
- Loads analytics asynchronously
- Respects user privacy settings
- Can be easily modified to respect GDPR/CCPA requirements
- Doesn't track personal information by default

For GDPR compliance, consider:
- Adding a cookie consent banner
- Implementing opt-out functionality
- Anonymizing IP addresses
- Adding privacy policy links 