import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (!cookies.cookieConsent) {
      setShowBanner(true);
    }
  }, [cookies.cookieConsent]);

  const acceptAll = () => {
    setCookie('cookieConsent', {
      necessary: true,
      analytics: true
    }, { path: '/', maxAge: 365 * 24 * 60 * 60 }); // 1 year
    setShowBanner(false);
    // Enable Google Analytics
    window['ga-disable-UA-XXXXX-Y'] = false;
  };

  const savePreferences = (preferences) => {
    setCookie('cookieConsent', preferences, { path: '/', maxAge: 365 * 24 * 60 * 60 });
    setShowSettings(false);
    setShowBanner(false);
    // Handle Google Analytics based on preferences
    window['ga-disable-UA-XXXXX-Y'] = !preferences.analytics;
  };

  // Lišta je vždy v DOM, ale může být skrytá

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50"
      style={{
        visibility: showBanner ? 'visible' : 'hidden',
        pointerEvents: showBanner ? 'auto' : 'none',
        minHeight: 64,
      }}
    >
      {!showSettings ? (
        <div className="max-w-7xl mx-auto flex items-center gap-4 whitespace-nowrap">
          <span className="text-sm text-gray-600">
            Tato stránka používá cookies pro zlepšení služeb. &nbsp;
          </span>
          <button
            onClick={() => setShowSettings(true)}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 whitespace-nowrap"
          >
            Nastavení
          </button>&nbsp;
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 whitespace-nowrap"
          >
            Přijmout vše
          </button>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Nastavení cookies</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Nezbytné cookies</h4>
                <p className="text-sm text-gray-600">Vždy povoleno, nelze vypnout</p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
                className="h-4 w-4 text-blue-600"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Analytické cookies</h4>
                <p className="text-sm text-gray-600">Pomáhají nám zlepšovat naše služby</p>
              </div>
              <input
                type="checkbox"
                defaultChecked={true}
                className="h-4 w-4 text-blue-600"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <button
              onClick={() => setShowSettings(false)}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              Zpět
            </button>
            <button
              onClick={() => savePreferences({ necessary: true, analytics: true })}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Uložit nastavení
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent; 