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
    // Add MDX-specific components
    MDX: {
      baseStyle: {
        h1: {
          color: 'green.600',
          fontSize: '2xl',
          fontWeight: 'bold',
          mb: 4,
        },
        h2: {
          color: 'green.600',
          fontSize: 'xl',
          fontWeight: 'bold',
          mb: 3,
          mt: 8,
        },
        h3: {
          color: 'green.600',
          fontSize: 'xl',
          fontWeight: 'bold',
          mb: 2,
          mt: 6,
        },
        p: {
          color: 'gray.700',
          mb: 4,
          lineHeight: 'tall',
        },
        a: {
          color: 'green.500',
        },
        li: {
          color: 'gray.700',
          pl: 2,
          mb: 2,
          ml: 4,
        },
        blockquote: {
          pl: 4,
          borderLeft: '4px solid',
          borderColor: 'green.500',
          fontStyle: 'italic',
          mb: 4,
          color: 'gray.700',
        },
      },
      variants: {
        dark: {
          h1: { color: 'gray.200' },
          h2: { color: 'gray.200' },
          h3: { color: 'gray.200' },
          p: { color: 'gray.300' },
          li: { color: 'gray.300' },
          blockquote: { color: 'gray.300' },
        },
      },
    },
  },
})

export default theme 