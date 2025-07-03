# Favicon Setup

This project uses a comprehensive favicon setup that works across all devices and browsers.

## Current Setup

### Favicon Source
- **Primary icon**: `src/assets/img/navbar-icon-96x96.webp`
- **Format**: WebP (modern, efficient format)
- **Size**: 96x96 pixels (perfect for favicon use)

### Implementation

#### HTML Head Tags
```html
<!-- Standard favicon -->
<link rel="icon" type="image/webp" href="/src/assets/img/navbar-icon-96x96.webp" />
<link rel="icon" type="image/png" href="/src/assets/img/navbar-icon-96x96.webp" />
<link rel="shortcut icon" href="/src/assets/img/navbar-icon-96x96.webp" />

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/src/assets/img/navbar-icon-96x96.webp" />
<link rel="apple-touch-icon" sizes="180x180" href="/src/assets/img/navbar-icon-96x96.webp" />

<!-- Android Chrome Icons -->
<link rel="icon" type="image/webp" sizes="192x192" href="/src/assets/img/navbar-icon-96x96.webp" />
<link rel="icon" type="image/webp" sizes="512x512" href="/src/assets/img/navbar-icon-96x96.webp" />

<!-- Microsoft Tiles -->
<meta name="msapplication-TileImage" content="/src/assets/img/navbar-icon-96x96.webp" />
<meta name="msapplication-TileColor" content="#22c55e" />
<meta name="theme-color" content="#22c55e" />
```

#### Web App Manifest
- **File**: `public/manifest.json`
- **Purpose**: PWA support, mobile app-like experience
- **Theme color**: `#22c55e` (brand green)

## Browser Support

### ✅ Fully Supported
- **Chrome/Edge**: WebP favicon + manifest
- **Firefox**: WebP favicon + manifest
- **Safari**: Apple touch icon + manifest
- **Mobile browsers**: All icon sizes supported

### 📱 Mobile Experience
- **iOS**: Apple touch icon for home screen
- **Android**: Chrome icons for app-like experience
- **PWA**: Full progressive web app support

## Benefits

1. **Performance**: WebP format is smaller and loads faster
2. **Consistency**: Same icon across all platforms
3. **Modern**: Supports latest web standards
4. **Accessibility**: Proper contrast and sizing
5. **SEO**: Proper favicon implementation

## Customization

### Change the Icon
1. Replace `src/assets/img/navbar-icon-96x96.webp` with your new icon
2. Ensure it's 96x96 pixels or larger
3. WebP format recommended for best performance

### Change Colors
1. Update `theme-color` in `index.html`
2. Update `theme_color` in `public/manifest.json`
3. Update `msapplication-TileColor` in `index.html`

### Add More Sizes
If you need additional icon sizes, add them to:
- `index.html` favicon links
- `public/manifest.json` icons array

## Testing

### Browser Testing
1. **Chrome**: Check favicon in tab and bookmarks
2. **Firefox**: Verify favicon displays correctly
3. **Safari**: Test Apple touch icon on mobile
4. **Edge**: Check Microsoft tile support

### Mobile Testing
1. **iOS**: Add to home screen, check icon
2. **Android**: Install as PWA, verify icon
3. **Different devices**: Test on various screen sizes

## Troubleshooting

### Favicon Not Showing
1. Clear browser cache
2. Check file path is correct
3. Verify file format is supported
4. Check browser developer tools for errors

### Mobile Icon Issues
1. Ensure Apple touch icon is properly sized
2. Check manifest.json is accessible
3. Verify theme colors are set correctly

### PWA Issues
1. Check manifest.json syntax
2. Verify all required fields are present
3. Test with Lighthouse PWA audit 