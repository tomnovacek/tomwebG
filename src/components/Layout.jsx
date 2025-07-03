import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'
import theme from '../theme'
import ErrorBoundary from './ErrorBoundary'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieConsent from './CookieConsent'
import { useScrollRestoration } from '../hooks/useScrollRestoration'
import { useAnalytics } from '../hooks/useAnalytics'
import ScrollTracker from './ScrollTracker'

const Layout = ({ children }) => {
  useScrollRestoration()
  useAnalytics()
  
  return (
    <ErrorBoundary>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CookiesProvider>
          <Box
            minH="100vh"
            bg={useColorModeValue('gray.50', 'gray.900')}
            overflow="visible"
            position="relative"
          >
            <Navbar />
            <Box as="main">
              {children}
            </Box>
            <Footer />
            <CookieConsent />
            <ScrollTracker />
          </Box>
        </CookiesProvider>
      </ChakraProvider>
    </ErrorBoundary>
  )
}

export default Layout 