import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({
  title = '',
  description = '',
  keywords = '',
  url = '',
  image = '',
  article = false,
  children
}) => {
  const siteTitle = 'Tomáš Nováček - Psycholog a terapeut | Brno'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const defaultDescription = 'Psycholog a terapeut Tomáš Nováček nabízí psychoterapii v centru Brna. Pomáhám lidem překonávat životní výzvy a dosahovat osobního růstu.'
  const defaultImage = '/img/forrest.webp'

  // Ensure all values are strings
  const safeTitle = String(fullTitle)
  const safeDescription = String(description || defaultDescription)
  const safeKeywords = keywords ? String(keywords) : 'psychoterapie, psycholog, terapeut, Brno, duševní zdraví, terapie'
  const safeUrl = String(url || 'https://tomnovacek.com/')
  const safeImage = image ? String(image) : defaultImage

  // Convert relative image paths to absolute URLs for Open Graph
  const getAbsoluteImageUrl = (imagePath) => {
    if (imagePath.startsWith('http')) {
      return imagePath
    }
    return `https://tomnovacek.com${imagePath}`
  }

  return (
    <Helmet>
      {/* Language and charset */}
      <html lang="cs" />
      <meta charSet="utf-8" />
      
      {/* Basic meta tags */}
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />
      <meta name="keywords" content={safeKeywords} />
      <link rel="canonical" href={safeUrl} />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Author and robots */}
      <meta name="author" content="Tomáš Nováček" />
      <meta name="robots" content="index, follow" />
      
      {/* Favicon meta tags */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:url" content={safeUrl} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:image" content={getAbsoluteImageUrl(safeImage)} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="Tomáš Nováček - Psycholog a terapeut" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={getAbsoluteImageUrl(safeImage)} />
      <meta name="twitter:creator" content="@tomnovacek" />

      {/* Additional meta tags for better SEO */}
      <meta name="theme-color" content="#38a169" />
      <meta name="msapplication-TileColor" content="#38a169" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Tomáš Nováček" />
      
      {/* Resource hints for better performance */}
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Additional meta tags */}
      {children}
    </Helmet>
  )
}

export default SEO 