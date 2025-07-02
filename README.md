# Tom Nováček - Psychoterapeut Website

A modern, responsive website built with Vite, React, and Chakra UI for Tom Nováček's psychotherapy practice.

## Technologies

### Features
- Responsive design that works on all devices
- Modern UI with smooth animations
- Contact form for client inquiries
- Blog section for sharing insights
- Service descriptions and information
- About page with professional background
- Easy to maintain and update

### Core Technologies
- **Vite** - Next Generation Frontend Tooling
  - Fast development server with HMR
  - Optimized production builds
  - TypeScript support out of the box

- **React** - UI Library
  - Functional components with hooks
  - React Router for navigation
  - Context API for state management

- **Chakra UI** - Component Library
  - Accessible, composable components
  - Dark/Light mode support
  - Responsive design system
  - Custom theme configuration

### Additional Technologies
- **React Icons** - Icon library
- **React Router DOM** - Client-side routing
- **React Helmet** - Document head management
- **Sharp** - Image optimization


## 🖼️ Image Optimization Workflow

### Image Processing

1. **Source Images**
   - Place original images in `src/assets/img/`
   - Supported formats: JPG, PNG, WebP

2. **Optimization Process**
   - Images are automatically optimized during build
   - Multiple sizes generated for responsive design
   - WebP format used for modern browsers
   - Fallback formats for older browsers

3. **Usage in Components**
   ```jsx
   import OptimizedImage from '../components/OptimizedImage'
   
   <OptimizedImage
     src="image-name.jpg"
     alt="Description"
     width="800"
     height="600"
     priority={true} // For above-the-fold images
   />
   ```


## 📝 Blog Post Generation Workflow

### Blog Post Structure

1. **Content Creation**
   - Create new markdown files in `src/content/blog/`
   - Follow naming convention: `YYYY-MM-DD-title.md`
   - Include frontmatter with metadata

2. **Frontmatter Template**
   ```markdown
   ---
   title: "Post Title"
   date: "YYYY-MM-DD"
   author: "Tom Nováček"
   description: "Post description"
   tags: ["tag1", "tag2"]
   image: "image-name.jpg"
   ---
   ```

3. **Content Writing**
   - Write content in Markdown format
   - Support for:
     - Headers
     - Lists
     - Code blocks
     - Images
     - Links
     - Blockquotes

4. **Image Management**
   - Place blog post images in `src/assets/img/blog/`
   - Reference images in markdown using relative paths
   - Images are automatically optimized during build

## 🛠️ Development

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd [repository-name]

# Install dependencies
npm install
# or
yarn install
```

### Development Server
```bash
npm run dev
# or
yarn dev
```

### Production Build
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## Deployment 

### Workflow

1. Make changes locally
2. Test changes with `npm run dev`
3. Commit and push to GitHub
4. Netlify automatically builds and deploys
5. Verify deployment at your Netlify URL

### Deploying to Netlify via GitHub

1. **GitHub Repository Setup**
   ```bash
   # Initialize git if not already done
   git init
   
   # Add your files
   git add .
   
   # Commit your changes
   git commit -m "Initial commit"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/yourusername/your-repo-name.git
   
   # Push to GitHub
   git push -u origin main
   ```

2. **Netlify Setup**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository

3. **Build Configuration**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20 (or your preferred version)

4. **Environment Variables**
   Add these in Netlify's site settings → Environment variables:
   ```
   VITE_SITE_URL=https://your-site-name.netlify.app
   VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
   ```

5. **Custom Domain Setup** (Optional)
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Follow Netlify's DNS configuration instructions

6. **Continuous Deployment**
   - Netlify automatically deploys when you push to your main branch
   - Preview deployments are created for pull requests
   - Branch deployments can be configured in Netlify settings

### Troubleshooting Deployment

- Check Netlify's deployment logs for build errors
- Verify environment variables are set correctly
- Ensure all dependencies are in `package.json`
- Check for any build-time errors in the console


## Customization

- Update the content in the respective page components
- Modify the theme colors in the Chakra UI provider
- Add or remove services in the Services component
- Update blog posts in the Blog component

### Chakra UI Theme Configuration
The theme configuration is located in `src/theme.js`. Here's how to customize it:

```jsx
// src/theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e', // Primary brand color
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
  },
  fonts: {
    heading: 'var(--font-inter)',
    body: 'var(--font-inter)',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'full',
      },
    },
    Heading: {
      baseStyle: {
        color: 'gray.800',
      },
    },
  },
})

export default theme
```

To use the theme in your app, wrap your application with `ChakraProvider`:

```jsx
// src/main.jsx
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Your app components */}
    </ChakraProvider>
  )
}
```

### Available Theme Customizations
- **Colors**: Define your brand colors and color palette
- **Typography**: Customize fonts, sizes, and weights
- **Components**: Override default component styles
- **Spacing**: Adjust the spacing scale
- **Breakpoints**: Modify responsive breakpoints
- **Shadows**: Customize shadow styles
- **Border Radius**: Define border radius values

### Color Mode
The site supports both light and dark modes. Use `useColorModeValue` hook to define colors for both modes:

```jsx
import { useColorModeValue } from '@chakra-ui/react'

function MyComponent() {
  const textColor = useColorModeValue('gray.800', 'gray.200')
  const bgColor = useColorModeValue('white', 'gray.800')
  
  return (
    <Box bg={bgColor} color={textColor}>
      {/* Component content */}
    </Box>
  )
}
```


## Pictures used

safe-embrace
https://www.freepik.com/free-photo/father-daughter-together-fathers-day_4106136.htm#fromView=search&page=1&position=44&uuid=762c607b-cb24-4b3e-a032-b43069900183&query=warm+embrace+father

emotions
https://www.freepik.com/free-photo/smiling-psychologist-showing-happy-sad-emotion-faces-cards-girl-child_3717005.htm

sleep
https://www.freepik.com/free-photo/woman-sleeping_15181005.htm

depression
https://www.freepik.com/free-photo/close-up-woman-experiencing-anxiety_17637776.htm

inner critic
https://www.freepik.com/free-photo/front-view-woman-looking-camera-wet-glass_5090890.htm

attachment - trust - holding handsho
https://www.freepik.com/free-photo/back-view-couple-holding-hands_5126303.htm