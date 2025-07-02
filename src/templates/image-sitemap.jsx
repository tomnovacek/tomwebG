import React from 'react'

const ImageSitemap = ({ pageContext }) => {
  const { images } = pageContext
  const siteUrl = 'https://tomnovacek.com'

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images.map(image => `
  <url>
    <loc>${siteUrl}${image.url}</loc>
    <image:image>
      <image:loc>${siteUrl}${image.url}</image:loc>
      <image:title>${image.name}</image:title>
      <image:caption>${image.name}</image:caption>
    </image:image>
  </url>`).join('')}
</urlset>`

  return (
    <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
      {sitemap}
    </pre>
  )
}

export default ImageSitemap 