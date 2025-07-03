import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  Link,
  SimpleGrid,
} from '@chakra-ui/react'
import {
  FaHome,
  FaArrowLeft,
  FaSearch,
  FaEnvelope,
} from 'react-icons/fa'
import { Link as GatsbyLink } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SecureEmail from '../components/SecureEmail'

const NotFoundPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const headingColor = useColorModeValue('green.600', 'green.400')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Layout>
      <SEO
        title="Stránka nenalezena | 404"
        description="Požadovaná stránka nebyla nalezena. Vraťte se na hlavní stránku nebo kontaktujte Tomáše Nováčka."
        keywords="404, stránka nenalezena, chyba, psychoterapie, Brno"
        url="https://tomnovacek.com/404"
        noindex={true}
      />

      <Box bg={bgColor} minH="calc(100vh - 64px)" display="flex" alignItems="center">
        <Container maxW="container.md" py={10}>
          <VStack spacing={8} textAlign="center">
            {/* 404 Number */}
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: '8xl', md: '9xl' }}
                fontWeight="bold"
                color={headingColor}
                lineHeight="0.8"
                opacity="0.1"
                position="relative"
              >
                404
              </Heading>
              <Text
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="semibold"
                color={headingColor}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                whiteSpace="nowrap"
              >
                Stránka nenalezena
              </Text>
            </Box>

            {/* Main Message */}
            <VStack spacing={4} maxW="2xl">
              <Heading as="h2" size="xl" color={headingColor}>
                Omlouváme se, ale požadovaná stránka nebyla nalezena
              </Heading>
              <Text fontSize="lg" color={textColor}>
                Stránka, kterou hledáte, možná byla přesunuta, smazána nebo jste zadali nesprávnou adresu.
              </Text>
            </VStack>

            {/* Action Buttons */}
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as={GatsbyLink}
                to="/"
                leftIcon={<FaHome />}
                colorScheme="green"
                size="lg"
                rounded="full"
                px={8}
              >
                Domů
              </Button>
              <Button
                onClick={() => window.history.back()}
                leftIcon={<FaArrowLeft />}
                colorScheme="green"
                variant="outline"
                size="lg"
                rounded="full"
                px={8}
              >
                Zpět
              </Button>
            </HStack>

            {/* Helpful Links */}
            <Box
              bg={cardBg}
              p={8}
              borderRadius="xl"
              border="1px"
              borderColor={borderColor}
              w="full"
              maxW="2xl"
            >
              <VStack spacing={6}>
                <Heading as="h3" size="md" color={headingColor}>
                  Možná hledáte:
                </Heading>
                
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                  <Link
                    as={GatsbyLink}
                    to="/services"
                    p={4}
                    borderRadius="lg"
                    border="1px"
                    borderColor={borderColor}
                    _hover={{
                      bg: useColorModeValue('gray.50', 'gray.700'),
                      borderColor: 'green.400',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.2s"
                    textAlign="center"
                  >
                    <VStack spacing={2}>
                      <Icon as={FaSearch} color="green.400" boxSize={6} />
                      <Text fontWeight="semibold">Moje služby</Text>
                      <Text fontSize="sm" color={textColor}>
                        Psychoterapie a poradenství
                      </Text>
                    </VStack>
                  </Link>

                  <Link
                    as={GatsbyLink}
                    to="/about"
                    p={4}
                    borderRadius="lg"
                    border="1px"
                    borderColor={borderColor}
                    _hover={{
                      bg: useColorModeValue('gray.50', 'gray.700'),
                      borderColor: 'green.400',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.2s"
                    textAlign="center"
                  >
                    <VStack spacing={2}>
                      <Icon as={FaHome} color="green.400" boxSize={6} />
                      <Text fontWeight="semibold">O mně</Text>
                      <Text fontSize="sm" color={textColor}>
                        Informace o terapeutovi
                      </Text>
                    </VStack>
                  </Link>

                  <Link
                    as={GatsbyLink}
                    to="/calendar"
                    p={4}
                    borderRadius="lg"
                    border="1px"
                    borderColor={borderColor}
                    _hover={{
                      bg: useColorModeValue('gray.50', 'gray.700'),
                      borderColor: 'green.400',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.2s"
                    textAlign="center"
                  >
                    <VStack spacing={2}>
                      <Icon as={FaSearch} color="green.400" boxSize={6} />
                      <Text fontWeight="semibold">Rezervace</Text>
                      <Text fontSize="sm" color={textColor}>
                        Online kalendář
                      </Text>
                    </VStack>
                  </Link>

                  <Box
                    p={4}
                    borderRadius="lg"
                    border="1px"
                    borderColor={borderColor}
                    textAlign="center"
                  >
                    <VStack spacing={2}>
                      <Icon as={FaEnvelope} color="green.400" boxSize={6} />
                      <Text fontWeight="semibold">Kontakt</Text>
                      <Box fontSize="sm" color={textColor}>
                        <SecureEmail email="terapie@tomnovacek.com" />
                      </Box>
                    </VStack>
                  </Box>
                </SimpleGrid>
              </VStack>
            </Box>

            {/* Additional Help */}
            <Text fontSize="sm" color={textColor} maxW="md">
              Pokud si myslíte, že se jedná o chybu, neváhejte nás kontaktovat a pomůžeme vám najít to, co hledáte.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Layout>
  )
}

export default NotFoundPage 