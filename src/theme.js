import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
  },
  fonts: {
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.50',
        color: 'gray.800',
        minHeight: '100vh',
        overflowX: 'hidden',
      },
      '*': {
        boxSizing: 'border-box',
      },
      // Prevent layout shifts from font loading
      'h1, h2, h3, h4, h5, h6, p, span, a, button': {
        textRendering: 'optimizeLegibility',
        fontDisplay: 'swap',
      },
      // AboutImage styling for StaticImage components
      '.about-image': {
        height: '100%',
        width: '100%',
        filter: 'brightness(1.2)',
        objectFit: 'cover',
        placeholder: 'blurred',
        layout: 'fullWidth',
        formats: ['auto', 'webp', 'avif'],
        quality: 80,
        breakpoints: [320, 480, 768, 1024],
        sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
        transformOptions: {
          fit: 'cover',
          cropFocus: 'center',
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
        height: '40px', // Fixed height to prevent CLS
        minHeight: '40px',
      },
      variants: {
        solid: {
          bg: 'green.400',
          color: 'white',
          rounded: 'full',
          px: 8,
          colorScheme: 'green',
          _hover: {
            bg: 'green.500',
            color: 'white',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'green.400',
          color: 'green.400',
          rounded: 'full',
          px: 8,
          colorScheme: 'green',
          _hover: {
            bg: 'green.400',
            color: 'white',
          },
        },
        cta: {
          bg: 'green.400',
          color: 'white',
          rounded: 'full',
          px: 8,
          size: 'lg',
          fontWeight: 'normal',
          colorScheme: 'green',
          _hover: {
            bg: 'green.600',
            color: 'white',
          },
        },
        ctaOutline: {
          border: '2px solid',
          borderColor: 'green.400',
          color: 'green.400',
          rounded: 'full',
          px: 8,
          size: 'lg',
          fontWeight: 'normal',
          colorScheme: 'green',
          _hover: {
            bg: 'green.500',
            color: 'white',
          },
        },
        link: {
          color: 'gray.800',
          _hover: {
            textDecoration: 'none',
            color: 'green.500',
          },
        },
        card: {
          w: 'full',
          bg: 'green.400',
          color: 'white',
          rounded: 'full',
          px: 8,
          colorScheme: 'green',
          _hover: {
            bg: 'green.600',
            color: 'white', 
          },
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: '1680px',
        px: { base: 4, md: 8 },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'bold',
        color: 'gray.900',
        _dark: {
          color: 'white',
        },
      },
      variants: {
        hero: {
          fontSize: { base: '36px', sm: '48px', lg: '60px' },
          lineHeight: '1.1',
          fontWeight: 600,
          mb: 6,
          '& .hero-underline': {
            position: 'relative',
            color: 'whiteAlpha.900',
            _after: {
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'green.400',
              zIndex: -1,
            },
          },
          '& .hero-accent': {
            color: 'green.400',
          },
        },
        section: {
          fontSize: { base: '3xl', md: '4xl' },
          lineHeight: '1.2',
          color: 'green.500',
          letterSpacing: '-0.01em',
          fontWeight: 'bold',
          mb: 8,
        },
        blogPost: {
          fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: 'bold',
          mb: 6,
          color: 'gray.900',
          _dark: {
            color: 'white',
          },
        },
      },
    },
  },
})

export default theme 