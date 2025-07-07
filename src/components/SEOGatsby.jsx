import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEOGatsby = ({ title, description, pathname, children, image, article }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    twitterUsername,
    language,
    locale,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="language" content={language} />
      <meta name="locale" content={locale} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? `article` : `website`} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={seo.title} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Tomáš Nováček" />
      <meta name="theme-color" content="#38a169" />
      <meta name="msapplication-TileColor" content="#38a169" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Tomáš Nováček" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {children}
    </>
  )
}

export default SEOGatsby 