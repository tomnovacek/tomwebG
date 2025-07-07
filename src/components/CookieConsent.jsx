import React, { Suspense, useEffect, useState } from 'react';

const CookieConsent = () => {
  const [isClient, setIsClient] = useState(false);
  const LazyCookieConsentClient = React.lazy(() => {
    console.log('Dynamically importing CookieConsentClient...');
    return import('./CookieConsentClient').then(mod => {
      console.log('Imported module:', mod);
      return mod;
    });
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Suspense fallback={null}>
      <LazyCookieConsentClient />
    </Suspense>
  );
};

export default CookieConsent; 