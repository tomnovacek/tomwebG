import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
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
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <CookiesProvider>
            <Box
              minH="100vh"
              minW="100vw"
              width="100vw"
              display="flex"
              flexDirection="column"
              alignItems="stretch"
              bg={useColorModeValue('gray.50', 'gray.900')}
            >
              <Navbar />
              <Box flex="1" width="100%" minH="calc(100vh - 64px)">
                {children}
              </Box>
              <Footer />
              <CookieConsent />
              <ScrollTracker />
            </Box>
          </CookiesProvider>
        </ChakraProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default Layout 