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
  useToast,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SecureEmail from '../components/SecureEmail'
import SecureEmailButton from '../components/SecureEmailButton'

const CalendarPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [retryCount, setRetryCount] = useState(0)
  const toast = useToast()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setRetryCount(prev => prev + 1)
        if (retryCount >= 2) {
          toast({
            title: "Problém s načítáním kalendáře",
            description: "Zkuste to prosím znovu nebo nás kontaktujte emailem.",
            status: "error",
            duration: 5000,
            isClosable: true,
          })
        }
      }
    }, 10000) // 10 seconds timeout

    return () => clearTimeout(timer)
  }, [isLoading, retryCount, toast])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <Layout>
      <SEO
        title="Rezervace termínu"
        description="Rezervujte si termín terapeutického sezení online. Vyberte si čas, který vám vyhovuje, přímo v kalendáři."
        keywords="rezervace, termín, terapie, online rezervace, kalendář, sezení"
        url="https://tomnovacek.com/calendar"
      />

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
                  onLoad={handleIframeLoad}
                  title="Rezervační kalendář"
                  loading="lazy"
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