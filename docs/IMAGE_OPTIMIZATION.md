# Image Optimization Guide

This document outlines the image optimization strategy implemented in this Gatsby site for optimal performance and SEO.

## Overview

Our image optimization strategy includes:
- **Automatic format conversion** (WebP, AVIF)
- **Responsive images** with multiple breakpoints
- **Lazy loading** for non-critical images
- **Priority loading** for above-the-fold images
- **Proper caching** and compression
- **SEO optimization** with structured data

## Current Implementation Status

### ✅ **Fully Optimized Pages:**

#### 1. Homepage (`src/pages/Home.jsx`)
- **Hero background image**: `StaticImage` with priority loading
- **Portrait image**: `StaticImage` with high quality (90%)
- **About cards**: `StaticImage` with responsive breakpoints
- **Settings**: Priority loading, WebP/AVIF formats, proper sizing

#### 2. About Page (`src/pages/about.jsx`)
- **Hero background**: `StaticImage` with priority loading
- **Portrait image**: `StaticImage` with high quality
- **Settings**: Priority loading, WebP/AVIF formats, proper sizing

#### 3. Services Page (`src/pages/ServicesContent.jsx`)
- **Hero background**: `StaticImage` with priority loading
- **Portrait image**: `StaticImage` with high quality
- **Service grid images**: `StaticImage` with responsive breakpoints
- **Settings**: Priority loading, WebP/AVIF formats, proper sizing

### ✅ **Enhanced Optimization:**

#### 4. Blog System
- **Blog cards** (`src/components/BlogCard.jsx`): Uses `OptimizedImage` component
- **Blog post template** (`src/templates/blog-post.jsx`): Enhanced with optimized image handling
- **MDX content images**: Custom optimized image component
- **Settings**: Responsive sizing, WebP/AVIF formats, lazy loading

#### 5. Components
- **AboutCard** (`src/components/AboutCard.jsx`): `StaticImage` with optimization
- **ServicesGrid** (`src/components/ServicesGrid.jsx`): `StaticImage` with optimization
- **OptimizedImage** (`src/components/OptimizedImage.jsx`): Enhanced wrapper component

## Image Optimization Settings

### Quality Settings
- **Hero images**: 85% quality (good balance of quality vs size)
- **Portrait images**: 90% quality (higher quality for faces)
- **Content images**: 85% quality
- **Blog thumbnails**: 85% quality
- **Service images**: 85% quality

### Format Priority
1. **AVIF** - Best compression, modern browsers
2. **WebP** - Good compression, wide support
3. **Auto** - Fallback to original format

### Responsive Breakpoints
- **Mobile**: 400px
- **Tablet**: 768px
- **Desktop**: 1200px
- **Large Desktop**: 1920px

## Performance Optimizations

### 1. Priority Loading
```jsx
// For above-the-fold images
priority={true}
loading="eager"
```

### 2. Lazy Loading
```jsx
// For below-the-fold images
loading="lazy"
```

### 3. Proper Sizing
```jsx
// Blog cards
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

// Blog post images
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"

// Service images
sizes="(max-width: 768px) 100vw, 50vw"
```

### 4. Caching Headers
```toml
# netlify.toml
[[headers]]
  for = "/*.webp"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    Content-Type = "image/webp"
```

## SEO Optimization

### 1. Alt Text Best Practices
- **Descriptive**: "Lesní cesta - klidné prostředí pro psychoterapii"
- **Contextual**: Include location and purpose
- **Accessible**: Meaningful for screen readers

### 2. Structured Data
```jsx
// JSON-LD for images
{
  "@type": "ImageObject",
  "url": "https://tomnovacek.com/static/forrest-1200x630.webp",
  "width": 1200,
  "height": 630,
  "alt": "Lesní cesta - klidné prostředí pro psychoterapii"
}
```

### 3. Sitemap Integration
- Images included in sitemap.xml
- Proper changefreq and priority settings
- Image-specific sitemap entries

## Component-Specific Optimizations

### BlogCard Component
```jsx
<OptimizedImage
  src={image}
  alt={title}
  width={400}
  height={200}
  layout="constrained"
  objectFit="cover"
  quality={85}
  placeholder="blurred"
  formats={['auto', 'webp', 'avif']}
  breakpoints={[400, 768, 1200]}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  transformOptions={{
    fit: 'cover',
    cropFocus: 'center',
  }}
/>
```

### Blog Post MDX Images
```jsx
img: (props) => (
  <Box my={6} textAlign="center">
    <OptimizedImage
      src={props.src}
      alt={props.alt || 'Blog post image'}
      layout="constrained"
      width={800}
      height={600}
      quality={85}
      placeholder="blurred"
      formats={['auto', 'webp', 'avif']}
      breakpoints={[400, 768, 1200]}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
      transformOptions={{
        fit: 'inside',
        cropFocus: 'center',
      }}
    />
  </Box>
)
```

### Hero Images
```jsx
<StaticImage
  src="../assets/img/forrest.webp"
  alt="Lesní cesta - klidné prostředí pro psychoterapii"
  placeholder="blurred"
  layout="fullWidth"
  objectFit="cover"
  formats={['auto', 'webp', 'avif']}
  quality={85}
  priority={true}
  loading="eager"
  breakpoints={[400, 768, 1200, 1920]}
  sizes="100vw"
  transformOptions={{
    fit: 'cover',
    cropFocus: 'center',
  }}
/>
```

## Image Optimization Script

Run the optimization script to create responsive versions:

```bash
npm run optimize-images
```

This creates:
- WebP versions for all breakpoints
- AVIF versions for all breakpoints
- Optimized original format versions

## Best Practices

### 1. Image Selection
- **Hero images**: High-quality, relevant to content
- **Portrait images**: Professional, well-lit
- **Content images**: Illustrative, meaningful
- **Blog images**: Relevant to content, optimized for web

### 2. File Formats
- **Photographs**: JPEG/WebP/AVIF
- **Graphics with transparency**: PNG/WebP/AVIF
- **Icons**: SVG (vector) or optimized PNG

### 3. File Naming
- **Descriptive**: `forrest-path-psychotherapy.webp`
- **Consistent**: Use kebab-case
- **SEO-friendly**: Include relevant keywords

### 4. Image Dimensions
- **Hero images**: 1920x1080 or larger
- **Portrait images**: 600x800 (3:4 ratio)
- **Content images**: 1200x630 (2:1 ratio)
- **Blog thumbnails**: 400x200 (2:1 ratio)

## Monitoring and Maintenance

### 1. Performance Monitoring
- Use Lighthouse for Core Web Vitals
- Monitor LCP (Largest Contentful Paint)
- Check image loading performance

### 2. Regular Optimization
- Run optimization script monthly
- Update images when content changes
- Monitor file sizes and loading times

### 3. Browser Support
- AVIF: ~85% of users
- WebP: ~95% of users
- Fallback: Original format

## Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths and formats
2. **Poor quality**: Adjust quality settings
3. **Large file sizes**: Use appropriate breakpoints
4. **Slow loading**: Implement lazy loading

### Debug Commands
```bash
# Clear Gatsby cache
npm run clean

# Rebuild with verbose output
npm run build --verbose

# Check image optimization
npm run optimize-images
```

## Future Improvements

1. **Automatic optimization pipeline**
2. **Dynamic image generation**
3. **CDN integration**
4. **Advanced compression algorithms**
5. **AI-powered image optimization**

## Resources

- [Gatsby Image Plugin Documentation](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/)
- [WebP Compression Guide](https://developers.google.com/speed/webp)
- [AVIF Image Format](https://aomediacodec.github.io/av1-avif/)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images) 