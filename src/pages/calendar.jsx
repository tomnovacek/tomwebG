import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Spinner,
  Button,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'
import Layout from '../components/Layout'
import SEOGatsby from '../components/SEOGatsby'
import SecureEmail from '../components/SecureEmail'
import SecureEmailButton from '../components/SecureEmailButton'

const CalendarPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [retryCount, setRetryCount] = useState(0)
  const [showError, setShowError] = useState(false)
  const [isSafariMobile, setIsSafariMobile] = useState(false)
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  useEffect(() => {
    // Detect Safari mobile
    const userAgent = navigator.userAgent
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent)
    const isMobile = /iPhone|iPad|iPod/.test(userAgent)
    setIsSafariMobile(isSafari && isMobile)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setRetryCount(prev => prev + 1)
        if (retryCount >= 2) {
          setShowError(true)
        }
      }
    }, 8000) // Reduced from 10 to 8 seconds for better mobile experience

    return () => clearTimeout(timer)
  }, [isLoading, retryCount])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setShowError(true)
  }

  return (
    <Layout>
      <Box bg={bgColor}>
        <Box py={20}>
          <Container maxW={'7xl'}>
            <Stack spacing={4} maxW={'3xl'} textAlign={'center'} mb={10} mx="auto">
              <Heading as="h1" variant="section">
                  Domluvte si sezení
              </Heading>
              <Text color={textColor} fontSize={'xl'}>
                Rezervujte si termín, který vám vyhovuje přímo v kalendáři. <br /> 
                Pokud nenajdete vyhovující termín, nebo preferujete osobní kontakt emailem, napiště na <SecureEmail email="terapie@tomnovacek.com" color="green.400" />.
              </Text>
            </Stack>

            <Box
              bg={cardBg}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="2xl"
              position="relative"
              minH="600px"
            >
              {/* Loading State */}
              {isLoading && (
                <Flex
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="whiteAlpha.900"
                  zIndex={2}
                  direction="column"
                  align="center"
                  justify="center"
                  gap={4}
                >
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="green.400"
                    size="xl"
                  />
                  <Text color={textColor}>Načítání kalendáře...</Text>
                  {showError && (
                    <Box textAlign="center" p={4} bg="red.50" borderRadius="md" border="1px solid" borderColor="red.200">
                      <Text color="red.600" fontWeight="bold">
                        {isSafariMobile ? 'Problém s načítáním kalendáře v Safari' : 'Problém s načítáním kalendáře'}
                      </Text>
                      <Text color="red.500" fontSize="sm">
                        {isSafariMobile 
                          ? 'Safari na mobilních zařízeních má omezení. Prosím použijte odkaz níže nebo nás kontaktujte emailem.'
                          : 'Zkuste to prosím znovu nebo nás kontaktujte emailem.'
                        }
                      </Text>
                      {isSafariMobile && (
                        <Button
                          as="a"
                          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00ICmDJd6LyX3TG07oRvH7ni-wewoDDs0x0UXJMlWhkKUk1OBWw9wqj-TyqJgYdLOscITBiFtF?gv=true&color=%234CAF50"
                          target="_blank"
                          rel="noopener noreferrer"
                          colorScheme="green"
                          size="sm"
                          mt={2}
                        >
                          Otevřít kalendář v novém okně
                        </Button>
                      )}
                    </Box>
                  )}
                </Flex>
              )}

              {/* Calendar iframe */}
              <Box
                className="calendar-container"
                sx={{
                  '& iframe': {
                    filter: 'hue-rotate(240deg) saturate(1.2)',
                  }
                }}
              >
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00ICmDJd6LyX3TG07oRvH7ni-wewoDDs0x0UXJMlWhkKUk1OBWw9wqj-TyqJgYdLOscITBiFtF?gv=true&color=%234CAF50"
                  style={{
                    border: 0,
                    width: '100%',
                    height: '700px',
                    visibility: isLoading ? 'hidden' : 'visible',
                  }}
                  allowFullScreen
                  allow="fullscreen"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  title="Rezervační kalendář"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Box>

            {/* Alternative Contact Options */}
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              mt={8}
              justify="center"
            >
              <SecureEmailButton
                email="terapie@tomnovacek.com"
                leftIcon={<FaEnvelope />}
                colorScheme="green"
                variant="outline"
                size="lg"
                rounded={'full'}
                px={8}
                _hover={{
                  bg: 'green.400',
                  color: 'white',
                }}
              >
                Kontaktujte mě emailem
              </SecureEmailButton>
              <Button
                as={GatsbyLink}
                to="/services"
                rightIcon={<FaArrowRight />}
                colorScheme="green"
                variant="outline"
                size="lg"
                rounded={'full'}
                px={8}
                _hover={{
                  bg: 'green.400',
                  color: 'white',
                }}
              >
                Moje služby
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}

export default CalendarPage

export const Head = () => (
  <SEOGatsby 
    title="Kalendář - Objednat konzultaci"
    description="Objednejte si konzultaci s psychoterapeutem Tomášem Nováčkem v centru Brna."
    pathname="/calendar"
  />
) 