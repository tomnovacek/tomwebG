import { useEffect } from 'react'

export default function StructuredData({ type }) {
  useEffect(() => {
    const getStructuredData = () => {
      switch (type) {
        case 'MedicalBusiness':
          return {
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Tomáš Nováček - Psycholog a terapeut | Brno',
            description: 'Soukromá psychoterapeutická praxe v centru Brna se zaměřením na individuální terapii dospělých.',
            url: 'https://tomnovacek.cz',
            telephone: '+420 603 773 440',
            // Email constructed from parts to avoid simple harvesting
            email: ['info', '@', 'tomnovacek', '.', 'cz'].join(''),
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Sukova 4',
              addressLocality: 'Brno',
              postalCode: '602 00',
              addressCountry: 'CZ'
            },
            priceRange: '$$',
            openingHours: 'Po-Pá 08:00-19:00'
          }
        case 'Person':
          return {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Tomáš Nováček',
            jobTitle: 'Certifikovaný psychoterapeut',
            worksFor: {
              '@type': 'Organization',
              name: 'Tomáš Nováček - Soukromá psychoterapeutická praxe v centru Brna.'
            },
            description: 'Certifikovaný psychoterapeut se soukromou praxí v centru Brno. Specializuje se na individuální terapii dospělých.',
            url: 'https://tomnovacek.cz',
            sameAs: [
              'https://www.linkedin.com/in/tomnovacek',
              'https://www.facebook.com/tomnovacek'
            ]
          }
        default:
          return null
      }
    }

    const structuredData = getStructuredData()
    if (!structuredData) return

    // Remove any existing JSON-LD script
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and append new JSON-LD script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [type])

  return null
} 