export const COOKIE_CONSENT_KEY = 'cookieConsent';

export const getCookieConsent = () => {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  return consent ? JSON.parse(consent) : null;
};

export const setCookieConsent = (preferences) => {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
};

export const hasConsent = (type) => {
  const consent = getCookieConsent();
  return consent ? consent[type] : false;
};

export const initializeGoogleAnalytics = () => {
  const consent = getCookieConsent();
  if (consent && consent.analytics) {
    // Enable Google Analytics
    window['ga-disable-UA-XXXXX-Y'] = false;
  } else {
    // Disable Google Analytics
    window['ga-disable-UA-XXXXX-Y'] = true;
  }
}; 